"""Teacher solution for Bug Hunt 1.6 (Buddy is RIGHT: prove it)."""
import random

from code_under_test import count_pairs, split_into_words, load_story, generate

COUNTS = count_pairs(split_into_words(load_story()))


def test_rules_hold_every_time():
    for seed in range(300):
        words = generate(COUNTS, "the", 12, rng=random.Random(seed))
        assert words[0] == "the"
        assert 1 <= len(words) <= 12
        for a, b in zip(words, words[1:]):
            assert b in COUNTS[a], (a, b)


def test_same_seed_same_sentence():
    one = generate(COUNTS, "the", 12, rng=random.Random(7))
    two = generate(COUNTS, "the", 12, rng=random.Random(7))
    assert one == two


def test_different_seeds_can_differ():
    sentences = {tuple(generate(COUNTS, "the", 12, rng=random.Random(s))) for s in range(50)}
    assert len(sentences) > 1


def test_stops_at_a_dead_end():
    assert generate({"a": {"b": 1}}, "a", 10) == ["a", "b"]
