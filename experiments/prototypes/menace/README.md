# MENACE prototype: matchboxes that learn tic-tac-toe

This is a stdlib-only Python recreation of Donald Michie's **Matchbox Educable Noughts And Crosses Engine** from 1961. It proves that the unplugged matchbox activity works at kid scale and shows what the class will see.

```bash
python3 menace.py                       # 2000 games vs a random opponent (~0.2 s)
python3 menace.py --opponent careful    # opponent wins/blocks when it can
python3 menace.py --games 500 --seed 7  # change the length and the dice
```

It needs Python 3.12 or newer and no other packages. Each run takes well under a second.

## How it follows Michie

Each fact below comes from Michie (1963), "Experiments on the mechanization of game-learning, Part I", *The Computer Journal* 6(3), pp. 232–236 ([scan](https://gwern.net/doc/reinforcement-learning/model-free/1963-michie.pdf)).

| Michie's matchbox machine | This prototype |
|---|---|
| "Every one of the 287 *essentially distinct* positions which the opening player can encounter … is represented by a separate box" | One box per position, with rotations and reflections merged. The script counts **304** boxes for MENACE's moves 1–4, which matches the figure modern rebuilders use. Michie's 287 is smaller. We couldn't find a source that explains the gap; Rodney Brooks notes the same mismatch ([Brooks](https://rodneybrooks.com/forai-machine-learning-explained/)). See EXPERIMENTS.md, MENACE. |
| Beads per move by stage of play: 4, 3, 2, 1 (Table 2) | `START_BEADS` |
| When it "has done badly, it is 'punished' by confiscation of the selected bead" | Loss: −1 bead |
| "a draw was reckoned a good result, and received a unit bonus. A win … was rewarded by three extra beads" | Draw +1, win +3 |
| "Considerations of symmetry … reduce these to four" moves | `distinct_moves()` keeps one move per symmetry class |
| The machine was "equipped to function as the opening player" | MENACE plays X and moves first |

**Where we differ:**
- Michie's opponent was a human. This one is a script (random or "careful").
- When a box runs out of beads, we refill it with one bead per move. We didn't find what Michie did in that case on these pages.

## Sample output (seed 1961)

```
Boxes needed for MENACE's moves 1-4: 304 (1 + 12 + 108 + 183), plus 34 one-choice boxes for move 5.
MENACE (X, plays first) vs random opponent (O), 2000 games, seed 1961

      games |   win  draw  loss | bar (#=win  .=draw)
    1-200   |   64%   13%   24% | #########################.....
  201-400   |   74%    7%   20% | #############################...
  401-600   |   70%   11%   18% | ############################....
  601-800   |   76%    8%   16% | ###############################...
  801-1000  |   83%    8%    8% | #################################...
 1001-1200  |   77%   11%   12% | ###############################....
 1201-1400  |   79%    8%   14% | ################################...
 1401-1600  |   82%    8%   10% | #################################...
 1601-1800  |   81%    9%   10% | ################################....
 1801-2000  |   88%    6%    7% | ###################################..

Boxes opened so far: 330
Opening box beads: corner=873, edge=1664, centre=2011
```

Against the **careful** opponent (`--opponent careful --games 3000 --block 300`), losses drop from 19% to about 0% after the first 300 games. Wins then climb from 5% to 44% as MENACE finds traps the opponent can't see. By the end, nearly all the beads in the opening box are on the centre square (`centre=4591`).

We also ran five other seeds against the random opponent (1–5). Every one improved: wins in games 1–1000 ranged from 69% to 82%, and wins in games 1001–2000 from 80% to 87%.

## Classroom notes

- **Unplugged first.** A full MENACE needs over 300 boxes, which is too many for 12 kids in one period. Build only the boxes for the **first two MENACE moves** (1 + 12 = 13 boxes). Shrinking the game to 3×3 *Hexapawn* also works. Kids play against the boxes and do the bead bookkeeping by hand. Then run this script to see what 2000 games look like.
- **Bug Hunt hook (L3 "runs but wrong").** Buddy "simplifies" the code by giving +3 beads for a loss. The program still runs, but the win rate collapses. Students spot the bug from the bar chart.
- **Bug Hunt hook (L4 "lazy test").** A test that only checks "the program finishes 100 games without crashing" would pass even with the reward signs flipped.
- **Then vs now.** Michie's machine fit on a tabletop and learned from about 220 games played by hand. (That count comes from a [secondary source, the mscroggs blog](https://mscroggs.co.uk/blog/19); the paper's Fig. 4 axis shows roughly the same number.) AlphaZero (2017) used the same core idea, "play yourself and strengthen what won", but replaced the beads with a deep neural network and a search. It went from "tabula rasa" to superhuman chess, shogi and Go [within 24 hours of training](https://arxiv.org/abs/1712.01815v1) on Google's specialised hardware.
