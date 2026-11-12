"""Teacher solution for Bug Hunt 1.5 (pairs stored backwards)."""
from code_under_test import count_pairs, split_into_words, load_story


def test_two_words_exactly():
    assert count_pairs(["the", "cat"]) == {"the": {"cat": 1}}


def test_story_the_cat_is_5():
    counts = count_pairs(split_into_words(load_story()))
    assert counts["the"]["cat"] == 5
    assert counts["on"] == {"the": 3}
