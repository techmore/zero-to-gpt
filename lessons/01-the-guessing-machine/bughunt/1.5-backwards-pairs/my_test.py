"""Bug Hunt 1.5: Write a test that is NOT lazy

Run me:   python3 -m bughunt test 1.5
See the challenge:   python3 -m bughunt show 1.5

How tests work:
  * Every function whose name starts with test_ is a test.
  * Inside, write   assert <something that should be true>
  * A GOOD test passes on correct code and FAILS on buggy code.
"""

from code_under_test import count_pairs, split_into_words, load_story


def test_example_the_is_in_there():
    # A free example. Also kind of lazy: it passes on Buddy's code too.
    counts = count_pairs(split_into_words(load_story()))
    assert "the" in counts


# ✏️ Write a test that checks an EXACT answer you worked out by hand.
