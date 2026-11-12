"""Teacher solution for Bug Hunt 1.3 (off-by-one in count_pairs)."""
from code_under_test import count_pairs, split_into_words, load_story


def test_tiny_list_by_hand():
    # 3 words -> 2 pairs: a->b and b->c
    assert count_pairs(["a", "b", "c"]) == {"a": {"b": 1}, "b": {"c": 1}}


def test_story_has_n_minus_1_pairs():
    words = split_into_words(load_story())
    counts = count_pairs(words)
    total = sum(sum(followers.values()) for followers in counts.values())
    assert len(words) == 67
    assert total == len(words) - 1  # 66
