"""Bug Hunt 1.3: Does count_pairs count EVERY pair?

Run me:   python3 -m bughunt test 1.3
See the challenge:   python3 -m bughunt show 1.3

How tests work:
  * Every function whose name starts with test_ is a test.
  * Inside, write   assert <something that should be true>
  * A GOOD test passes on correct code and FAILS on buggy code.
"""

from code_under_test import count_pairs, split_into_words, load_story


def test_example_the_cat():
    # A free example. It passes on Buddy's code AND on correct code,
    # so it can't catch the bug. Your job: add a test that CAN.
    counts = count_pairs(split_into_words(load_story()))
    assert counts["the"]["cat"] == 5


# ✏️ Write your own test below. Its name must start with test_
# def test_my_idea():
#     counts = count_pairs([...])
#     assert ...
