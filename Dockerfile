# syntax=docker/dockerfile:1
#
# Zero to GPT: CPU-only course tools (JupyterLab + the `bughunt` checker).
# For a teacher machine or CI. Nothing here needs a GPU.
#
# NOT in this container: Buddy (the local model server) and any model
# training. Linux containers on macOS can't use Apple's Metal GPU, so that
# work runs natively on macOS. See infrastructure/student-macbook-setup.md.
#
#   docker compose up lab                          # JupyterLab on http://127.0.0.1:8888
#   docker compose run --rm selfcheck              # python -m bughunt selfcheck
#
# Python is pinned by exact tag *and* digest. JupyterLab and every dependency
# are pinned with hashes in container/requirements.txt (regenerate with the
# command at the top of that file).
FROM python:3.13.17-slim-bookworm@sha256:e32be0e55814a08977501ca863271d9bd02443710db8f2afaf8372e2c4508530

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

COPY container/requirements.txt /tmp/requirements.txt
RUN pip install --require-hashes --only-binary=:all: -r /tmp/requirements.txt \
    && rm /tmp/requirements.txt

# Run as an ordinary user, not root.
RUN useradd --create-home --uid 1000 learner
WORKDIR /home/learner/zero-to-gpt
COPY --chown=learner:learner . .
USER learner

# Inside the container Jupyter must listen on all of the container's own
# interfaces so Docker can forward the port. compose.yaml publishes it on the
# host's 127.0.0.1 only. Token auth stays on (Jupyter prints the URL + token).
EXPOSE 8888
CMD ["jupyter", "lab", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--ServerApp.root_dir=/home/learner/zero-to-gpt"]
