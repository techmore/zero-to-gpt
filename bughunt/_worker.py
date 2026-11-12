"""Runs ONE test file against ONE implementation, in its own process.

Usage (the engine calls this; you don't need to):
    python3 _worker.py IMPLEMENTATION.py TEST_FILE.py RESULT.json

Loads IMPLEMENTATION as the module `code_under_test`, runs the test file
fresh, calls every function whose name starts with `test`, and writes the
results as JSON. Runs in a separate process so a stuck test can be timed out
and nothing leaks from one run into the next.
"""

import importlib.util
import io
import json
import sys
import traceback
from contextlib import redirect_stdout
from pathlib import Path


def short_error(exc: BaseException, test_path: Path) -> str:
    """One friendly line, pointing at the student's test file if possible."""
    line = ""
    for frame in traceback.extract_tb(exc.__traceback__):
        if Path(frame.filename).resolve() == test_path:
            line = f" (line {frame.lineno}: {frame.line.strip() if frame.line else ''})"
    message = str(exc) or ""
    if isinstance(exc, AssertionError):
        return f"assert failed{line}" + (f": {message}" if message else "")
    return f"{type(exc).__name__}: {message}{line}"


def main(impl: str, test_file: str, out: str) -> None:
    impl_path = Path(impl).resolve()
    test_path = Path(test_file).resolve()
    result = {"load_error": None, "tests": [], "printed": ""}

    # Let tests import helper files sitting next to them.
    sys.path.insert(0, str(test_path.parent))

    printed = io.StringIO()
    try:
        with redirect_stdout(printed):
            spec = importlib.util.spec_from_file_location("code_under_test", impl_path)
            module = importlib.util.module_from_spec(spec)
            sys.modules["code_under_test"] = module
            spec.loader.exec_module(module)

            namespace = {"__name__": "bughunt_test", "__file__": str(test_path)}
            source = test_path.read_text(encoding="utf-8")
            exec(compile(source, str(test_path), "exec"), namespace)
    except BaseException as exc:  # noqa: BLE001 - report anything to the student
        result["load_error"] = short_error(exc, test_path)
        result["printed"] = printed.getvalue()
        Path(out).write_text(json.dumps(result), encoding="utf-8")
        return

    tests = [
        (name, fn)
        for name, fn in namespace.items()
        if name.startswith("test") and callable(fn)
    ]
    for name, fn in tests:
        entry = {"name": name, "status": "pass", "message": ""}
        try:
            with redirect_stdout(printed):
                fn()
        except AssertionError as exc:
            entry["status"] = "fail"
            entry["message"] = short_error(exc, test_path)
        except BaseException as exc:  # noqa: BLE001
            entry["status"] = "error"
            entry["message"] = short_error(exc, test_path)
        result["tests"].append(entry)

    result["printed"] = printed.getvalue()
    Path(out).write_text(json.dumps(result), encoding="utf-8")


if __name__ == "__main__":
    main(*sys.argv[1:4])
