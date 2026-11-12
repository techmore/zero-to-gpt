"""Buddy's version of the Guessing Machine (Bug Hunt 1.4).

Buddy says: "Look, the chances are nice small decimals. Legit!"
"""

import random
from pathlib import Path

# Buddy's file lives in a Bug Hunt folder, so it points back at the lab's story.
STORY = Path(__file__).resolve().parents[2] / "lab" / "data" / "tiny_story.txt"


def load_story(path=STORY):
    """Read a text file and return it as one string."""
    return Path(path).read_text()


def split_into_words(text):
    """Turn text into a list of lowercase words. Periods count as words.

    'The cat sat.'  ->  ['the', 'cat', 'sat', '.']
    """
    return text.lower().replace(".", " .").split()


def count_pairs(words):
    """Count which word comes right after which.

    ['the', 'cat', 'the', 'dog']  ->  {'the': {'cat': 1, 'dog': 1}, 'cat': {'the': 1}}

    A list of N words has N - 1 neighbor pairs.
    """
    counts = {}
    for i in range(len(words) - 1):
        current, following = words[i], words[i + 1]
        if current not in counts:
            counts[current] = {}
        counts[current][following] = counts[current].get(following, 0) + 1
    return counts


def next_word_chances(counts, word):
    """Turn counts into chances (probabilities) that add up to 1.

    If 'the' was followed by 'cat' 3 times and 'dog' 1 time:
        {'cat': 3/4, 'dog': 1/4}
    """
    followers = counts.get(word, {})
    total = sum(sum(f.values()) for f in counts.values())
    return {w: n / total for w, n in followers.items()}


def generate(counts, start, length, rng=random):
    """Let the machine talk: roll weighted dice to pick each next word.

    Different runs give different sentences. That is on purpose!
    Stops early if it reaches a word that was never followed by anything.
    """
    words = [start]
    while len(words) < length:
        chances = next_word_chances(counts, words[-1])
        if not chances:
            break
        options = list(chances)
        weights = list(chances.values())
        words.append(rng.choices(options, weights=weights)[0])
    return words


if __name__ == "__main__":
    counts = count_pairs(split_into_words(load_story()))
    print("After 'the' come:", counts["the"])
    for _ in range(3):
        print(" ".join(generate(counts, "the", 12)))
