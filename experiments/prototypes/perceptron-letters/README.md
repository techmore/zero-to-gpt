# Perceptron prototype: X vs E on a 5×5 retina, then XOR

This is a stdlib-only Python recreation of the kind of test Frank Rosenblatt ran on the **Mark I Perceptron**. The Mark I had a 20×20 photocell "retina". Wikipedia's [Mark I Perceptron article](https://en.wikipedia.org/wiki/Mark_I_Perceptron) cites Rosenblatt, "Perceptron Simulation Experiments", *Proc. IRE* 48(3), 1960, for this result: the letter X vs the letter E, with 100% accuracy "when trained with only 20 images (10 images of each letter)". Our retina is 5×5. We also use 10 smudged examples of each letter.

```bash
python3 perceptron.py              # default: 3 smudged pixels per letter
python3 perceptron.py --noise 5    # messier handwriting
```

It needs Python 3.12 or newer and no other packages. It runs in under 0.1 seconds.

## The three acts

1. **Rules (programmed).** A hand-written rule says "a full left edge means E". It's easy to understand but brittle: one smudged pixel on the left edge fools it.
2. **Learning.** Rosenblatt's error-correction rule: when the guess is wrong, nudge each weight toward the right answer. It learns from 20 examples and is tested on 1000 *new* ones.
3. **Limits.** The same rule tries to learn XOR and loops forever. Minsky and Papert analysed limits like this in *Perceptrons* (1969). Two layers of hand-wired McCulloch–Pitts threshold units *can* do XOR. The hard part, which had to wait for Lesson 06, is *training* that hidden layer.

## Sample output (seed 1958)

```
ACT 1 - RULES (programmed): 'full left edge means E'
   accuracy on 1000 smudged letters: 74.6%

ACT 2 - LEARNING: perceptron rule on 20 smudged examples
   pass  1:  2 mistakes
   pass  2:  0 mistakes
   accuracy on 1000 NEW smudged letters: 100.0%
   learned weight map (+ votes X, - votes E):
      0---+      (X #...#  E #####)
      -+0++      (X .#.#.  E #....)
      -00-+      (X ..#..  E ####.)
      -00+0      (X .#.#.  E #....)
      0---+      (X #...#  E #####)

ACT 3 - LIMITS: can one perceptron learn XOR?
   pass    1: 2 mistakes  weights=[-1, 0] bias=0
   pass    2: 3 mistakes  weights=[-1, 0] bias=1
   pass    3: 4 mistakes  weights=[-1, 0] bias=1
   pass    4: 4 mistakes  weights=[-1, 0] bias=1
   pass 1000: 4 mistakes  weights=[-1, 0] bias=1
   after 1000 passes it still makes 4 mistakes per pass.
   Its corrections cancel out, so it loops forever. No straight line
   puts (0,1),(1,0) on one side and (0,0),(1,1) on the other.
   Two layers of hand-wired threshold neurons (OR, NAND -> AND):
   00->0  01->1  10->1  11->0
   ...but in 1969 nobody had a good way to TRAIN the hidden layer.
   That is the cliffhanger for Lesson 06: blame flows backward.
```

We also tried other noise levels (pixels flipped per letter):

| Noise | Rule accuracy | Perceptron accuracy |
|---|---|---|
| 2 | 80.3% | 100.0% |
| 4 | 70.8% | 94.7% |
| 5 | 64.0% | 99.8% |
| 6 | 60.8% | 99.2% |

XOR never converged at any noise level.

## Classroom notes

- **Unplugged version.** Use a 5×5 grid of sticky notes on the whiteboard as the "retina". Each student is one pixel's weight and holds a number card. The teacher shows a letter, the class adds up the weights of the dark squares, and the answer is X if the total is above 0. When the class is wrong, each "dark pixel" student moves their card one step toward the right answer. This is Rosenblatt's rule done with bodies.
- **Read the weight map.** The middle of the top and bottom rows came out `---`. Ask why: those pixels are dark in E but not in X.
- **Bug Hunt (L3 "runs but wrong").** Buddy's version updates the weights on *every* example, not only the mistakes. It still runs and still learns a bit, but it's no longer Rosenblatt's rule. The pass-by-pass mistake counts look wrong.
- **Bug Hunt (L2 "confident fib").** "The first perceptron was built to tell men from women." See "History Myth Busters" in [`EXPERIMENTS.md`](../../../EXPERIMENTS.md).
- **Then vs now.** Rosenblatt's retina had 400 photocells, and his weights were physical hardware in a room-sized machine. (Sources describe the weight hardware differently, so check a primary source before telling students the details.) Ours has 25 numbers in a Python list. A modern image model has billions of weights.
