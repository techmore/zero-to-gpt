"""Bug Hunt 1.4: Do the chances add up to 1?

Run me:   python3 -m bughunt test 1.4
See the challenge:   python3 -m bughunt show 1.4

How tests work:
  * Every function whose name starts with test_ is a test.
  * Inside, write   assert <something that should be true>
  * A GOOD test passes on correct code and FAILS on buggy code.
"""

import math

from code_under_test import count_pairs, split_into_words, load_story, next_word_chances


def test_example_cat_can_follow_the():
    # A free example. It passes on Buddy's code AND on correct code.
    counts = count_pairs(split_into_words(load_story()))
    chances = next_word_chances(counts, "the")
    assert "cat" in chances


# ✏️ Write your own test below. Tip: math.isclose(a, b) is True when a and b
# are equal except for teeny rounding crumbs.
