"""MENACE: a matchbox-and-bead learner for tic-tac-toe.

A kid-scale recreation of Donald Michie's 1961 Matchbox Educable Noughts And
Crosses Engine. Every box is a board position. Every bead colour is a move.
To play, MENACE shakes the box for the current position and plays whatever
bead falls out. After the game:

    win   -> add 3 beads of each colour it played   (Michie 1963, p.233)
    draw  -> add 1 bead                             (Michie 1963, p.233)
    loss  -> confiscate the bead it played          (Michie 1963, p.233)

Starting beads per move: 4 / 3 / 2 / 1 for MENACE's 1st / 2nd / 3rd / 4th
move (Michie 1963, Table 2). Positions that are rotations or reflections of
each other share one box, as in Michie's design.

Stdlib only. Runs in a second or two:

    python3 menace.py                      # 2000 games vs a random opponent
    python3 menace.py --opponent careful   # opponent that wins/blocks when it can
    python3 menace.py --games 500 --seed 7
"""

import argparse
import random

LINES = [(0, 1, 2), (3, 4, 5), (6, 7, 8),
         (0, 3, 6), (1, 4, 7), (2, 5, 8),
         (0, 4, 8), (2, 4, 6)]

# The 8 symmetries of the square, as permutations: new[i] = old[p[i]].
_ROT = (6, 3, 0, 7, 4, 1, 8, 5, 2)
_FLIP = (2, 1, 0, 5, 4, 3, 8, 7, 6)


def _compose(p, q):
    """Apply q first, then p."""
    return tuple(q[p[i]] for i in range(9))


SYMMETRIES = []
_p = tuple(range(9))
for _ in range(4):
    SYMMETRIES.append(_p)
    SYMMETRIES.append(_compose(_FLIP, _p))
    _p = _compose(_ROT, _p)

START_BEADS = {0: 4, 1: 3, 2: 2, 3: 1, 4: 1}  # by MENACE's move number (0-based)
REWARD = {"win": 3, "draw": 1, "loss": -1}


def winner(board):
    for a, b, c in LINES:
        if board[a] != " " and board[a] == board[b] == board[c]:
            return board[a]
    if " " not in board:
        return "draw"
    return None


def canonical(board):
    """Return (canonical_board, perm) with canonical[i] == board[perm[i]]."""
    best = None
    for p in SYMMETRIES:
        cand = "".join(board[p[i]] for i in range(9))
        if best is None or cand < best[0]:
            best = (cand, p)
    return best


def distinct_moves(cboard):
    """Legal moves in a canonical board, keeping one move per symmetry class
    (Michie: 'considerations of symmetry reduce these to four')."""
    stabilizers = [p for p in SYMMETRIES
                   if "".join(cboard[p[i]] for i in range(9)) == cboard]
    seen, moves = set(), []
    for m in range(9):
        if cboard[m] != " " or m in seen:
            continue
        moves.append(m)
        for p in stabilizers:
            # cell m in the canonical board looks like cell p.index(m) after p
            seen.add(p.index(m))
    return moves


class Menace:
    def __init__(self, rng):
        self.rng = rng
        self.boxes = {}  # canonical board -> {move: beads}

    def choose(self, board, move_number):
        cboard, perm = canonical(board)
        box = self.boxes.get(cboard)
        if box is None:
            n = START_BEADS[move_number]
            box = self.boxes[cboard] = {m: n for m in distinct_moves(cboard)}
        if sum(box.values()) == 0:
            # Empty box. Michie's paper does not say what to do here; we refill
            # it with one bead per move (a common choice in modern rebuilds).
            for m in box:
                box[m] = 1
        beads = [m for m, n in box.items() for _ in range(n)]
        cmove = self.rng.choice(beads)          # "shake the box"
        return cmove, perm[cmove], cboard

    def learn(self, history, result):
        for cboard, cmove in history:
            box = self.boxes[cboard]
            box[cmove] = max(0, box[cmove] + REWARD[result])


def random_opponent(board, rng):
    return rng.choice([i for i in range(9) if board[i] == " "])


def careful_opponent(board, rng, me="O", them="X"):
    """Wins if it can, blocks if it must, otherwise plays randomly."""
    empty = [i for i in range(9) if board[i] == " "]
    for who in (me, them):
        for m in empty:
            trial = board[:m] + who + board[m + 1:]
            if winner(trial) == who:
                return m
    return rng.choice(empty)


def play_game(menace, opponent, rng):
    board, history, turn = " " * 9, [], 0
    while True:
        cmove, move, cboard = menace.choose(board, turn)
        history.append((cboard, cmove))
        board = board[:move] + "X" + board[move + 1:]
        w = winner(board)
        if w:
            break
        m = opponent(board, rng)
        board = board[:m] + "O" + board[m + 1:]
        w = winner(board)
        if w:
            break
        turn += 1
    result = {"X": "win", "O": "loss", "draw": "draw"}[w]
    menace.learn(history, result)
    return result


def count_all_boxes():
    """How many boxes would a full MENACE need? (positions where it is X's
    turn, game not over, up to symmetry), split by MENACE's move number."""
    levels = [{" " * 9}]
    for _ in range(4):
        nxt = set()
        for b in levels[-1]:
            for x in range(9):
                if b[x] != " ":
                    continue
                b2 = b[:x] + "X" + b[x + 1:]
                if winner(b2):
                    continue
                for o in range(9):
                    if b2[o] != " ":
                        continue
                    b3 = b2[:o] + "O" + b2[o + 1:]
                    if not winner(b3):
                        nxt.add(canonical(b3)[0])
        levels.append(nxt)
    return [len({canonical(b)[0] for b in lvl}) for lvl in levels]


def main():
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--games", type=int, default=2000)
    ap.add_argument("--block", type=int, default=200)
    ap.add_argument("--opponent", choices=["random", "careful"], default="random")
    ap.add_argument("--seed", type=int, default=1961)
    args = ap.parse_args()

    rng = random.Random(args.seed)
    menace = Menace(rng)
    opp = random_opponent if args.opponent == "random" else careful_opponent

    per_level = count_all_boxes()
    print(f"Boxes needed for MENACE's moves 1-4: {sum(per_level[:4])} "
          f"({' + '.join(map(str, per_level[:4]))}), plus {per_level[4]} "
          f"one-choice boxes for move 5.")
    print(f"MENACE (X, plays first) vs {args.opponent} opponent (O), "
          f"{args.games} games, seed {args.seed}\n")
    print(f"{'games':>11} | {'win':>5} {'draw':>5} {'loss':>5} | bar (#=win  .=draw)")
    tally = {"win": 0, "draw": 0, "loss": 0}
    for g in range(1, args.games + 1):
        tally[play_game(menace, opp, rng)] += 1
        if g % args.block == 0:
            n = args.block
            w, d, l = (tally[k] / n for k in ("win", "draw", "loss"))
            bar = "#" * round(w * 40) + "." * round(d * 40)
            print(f"{g - n + 1:>5}-{g:<5} | {w:5.0%} {d:5.0%} {l:5.0%} | {bar}")
            tally = {"win": 0, "draw": 0, "loss": 0}

    opening = menace.boxes[" " * 9]
    names = {0: "corner", 1: "edge", 4: "centre"}
    print(f"\nBoxes opened so far: {len(menace.boxes)}")
    print("Opening box beads:",
          ", ".join(f"{names.get(m, m)}={n}" for m, n in opening.items()))


if __name__ == "__main__":
    main()
