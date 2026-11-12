"""A perceptron learns two letters on a 5x5 grid, then fails at XOR.

Kid-scale echo of Rosenblatt's Mark I Perceptron (photocell "retina" of
20x20 = 400 cells). One of its reported tests was telling the letter X from
the letter E (Rosenblatt, Proc. IRE 1960). Here the retina is 5x5 = 25 cells.

Three acts:
  1. RULES: a hand-written rule ("E has a full left edge") vs. noisy letters.
  2. LEARNING: the perceptron learning rule finds its own weights.
  3. LIMITS: the same rule can never learn XOR (Minsky & Papert, 1969),
     but two layers of hand-wired McCulloch-Pitts neurons can.

Stdlib only:  python3 perceptron.py   (optional: --seed N --noise K)
"""

import argparse
import random

X = ["#...#",
     ".#.#.",
     "..#..",
     ".#.#.",
     "#...#"]
E = ["#####",
     "#....",
     "####.",
     "#....",
     "#####"]


def to_pixels(rows):
    return [1 if ch == "#" else 0 for row in rows for ch in row]


def show(pixels):
    return ["".join("#" if pixels[r * 5 + c] else "." for c in range(5))
            for r in range(5)]


def noisy(pixels, flips, rng):
    """Copy of a letter with `flips` random pixels flipped (smudges)."""
    out = pixels[:]
    for i in rng.sample(range(25), flips):
        out[i] = 1 - out[i]
    return out


def make_set(n_each, flips, rng):
    data = [(noisy(to_pixels(X), flips, rng), +1) for _ in range(n_each)]
    data += [(noisy(to_pixels(E), flips, rng), -1) for _ in range(n_each)]
    rng.shuffle(data)
    return data


# ---------- Act 1: a programmed rule --------------------------------------
def rule_based(pixels):
    """Human-written rule: if the whole left column is dark, it's an E."""
    left = [pixels[r * 5] for r in range(5)]
    return -1 if all(left) else +1


# ---------- Act 2: the perceptron learning rule ---------------------------
def predict(w, b, x):
    return +1 if sum(wi * xi for wi, xi in zip(w, x)) + b > 0 else -1


def train(data, epochs=50):
    """Rosenblatt's rule: when wrong, nudge each weight toward the answer."""
    w, b = [0] * len(data[0][0]), 0
    for epoch in range(1, epochs + 1):
        mistakes = 0
        for x, y in data:
            if predict(w, b, x) != y:
                mistakes += 1
                w = [wi + y * xi for wi, xi in zip(w, x)]
                b += y
        yield epoch, mistakes, w, b
        if mistakes == 0:
            return


def accuracy(classify, data):
    return sum(classify(x) == y for x, y in data) / len(data)


def weight_map(w):
    """Show which pixels vote 'X' (+) and which vote 'E' (-)."""
    sym = lambda v: "+" if v > 0 else ("-" if v < 0 else "0")
    return ["".join(sym(w[r * 5 + c]) for c in range(5)) for r in range(5)]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--seed", type=int, default=1958)
    ap.add_argument("--noise", type=int, default=3,
                    help="pixels flipped per letter (smudges)")
    args = ap.parse_args()
    rng = random.Random(args.seed)

    train_set = make_set(10, args.noise, rng)   # 10 of each, like Rosenblatt's 20
    test_set = make_set(500, args.noise, rng)

    print("The two letters on a 5x5 'retina':")
    for a, b in zip(X, E):
        print(f"   {a}    {b}")
    ex = noisy(to_pixels(E), args.noise, rng)
    print(f"\nA smudged E ({args.noise} pixels flipped):")
    print("\n".join("   " + r for r in show(ex)))

    print("\nACT 1 - RULES (programmed): 'full left edge means E'")
    print(f"   accuracy on 1000 smudged letters: {accuracy(rule_based, test_set):.1%}")

    print("\nACT 2 - LEARNING: perceptron rule on 20 smudged examples")
    for epoch, mistakes, w, b in train(train_set):
        print(f"   pass {epoch:2d}: {mistakes:2d} mistakes")
    acc = accuracy(lambda x: predict(w, b, x), test_set)
    print(f"   accuracy on 1000 NEW smudged letters: {acc:.1%}")
    print("   learned weight map (+ votes X, - votes E):")
    for wr, xr, er in zip(weight_map(w), X, E):
        print(f"      {wr}      (X {xr}  E {er})")

    print("\nACT 3 - LIMITS: can one perceptron learn XOR?")
    xor = [([0, 0], -1), ([0, 1], +1), ([1, 0], +1), ([1, 1], -1)]
    last = None
    for epoch, mistakes, w2, b2 in train(xor, epochs=1000):
        if epoch <= 4 or epoch == 1000:
            print(f"   pass {epoch:4d}: {mistakes} mistakes  weights={w2} bias={b2}")
        last = (epoch, mistakes)
    print(f"   after {last[0]} passes it still makes {last[1]} mistakes per pass."
          "\n   Its corrections cancel out, so it loops forever. No straight line"
          "\n   puts (0,1),(1,0) on one side and (0,0),(1,1) on the other.")

    # Two layers of fixed McCulloch-Pitts threshold units solve it.
    step = lambda s: 1 if s > 0 else 0
    def two_layer(a, b):
        h_or = step(a + b - 0.5)        # OR
        h_nand = step(-a - b + 1.5)     # NAND
        return step(h_or + h_nand - 1.5)  # AND
    print("   Two layers of hand-wired threshold neurons (OR, NAND -> AND):")
    print("   " + "  ".join(f"{a}{b}->{two_layer(a, b)}" for (a, b), _ in xor))
    print("   ...but in 1969 nobody had a good way to TRAIN the hidden layer."
          "\n   That is the cliffhanger for Lesson 06: blame flows backward.")


if __name__ == "__main__":
    main()
