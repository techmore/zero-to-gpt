"""Buddy's test for count_pairs. It passes! But is it a GOOD test?

Run it:  python3 -m bughunt test 1.5 buddy_test.py
"""
from code_under_test import count_pairs, split_into_words, load_story


def test_count_pairs_works():
    counts = count_pairs(split_into_words(load_story()))
    assert counts is not None
    assert len(counts) > 0
