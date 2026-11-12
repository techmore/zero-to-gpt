"""Bug Hunt 1.6: Is random generate() broken, or right?

Run me:   python3 -m bughunt test 1.6
See the challenge:   python3 -m bughunt show 1.6

How tests work:
  * Every function whose name starts with test_ is a test.
  * Inside, write   assert <something that should be true>
  * A GOOD test passes on correct code and FAILS on buggy code.
"""

import random

from code_under_test import count_pairs, split_into_words, load_story, generate


def test_example_gives_a_list():
    # A free example. It passes on Buddy's code AND on correct code.
    counts = count_pairs(split_into_words(load_story()))
    words = generate(counts, "the", 8)
    assert isinstance(words, list)


# ✏️ Test the RULES that every generated sentence must follow.
# Use a for loop to try it lots of times.
