"""Teacher solution for Bug Hunt 1.4 (chances divided by the wrong total)."""
import math

from code_under_test import count_pairs, split_into_words, load_story, next_word_chances


def test_chances_add_up_to_one_for_every_word():
    counts = count_pairs(split_into_words(load_story()))
    for word in counts:
        total = sum(next_word_chances(counts, word).values())
        assert math.isclose(total, 1), (word, total)


def test_cat_after_the_is_5_out_of_19():
    counts = count_pairs(split_into_words(load_story()))
    assert math.isclose(next_word_chances(counts, "the")["cat"], 5 / 19)
