# Student MacBook setup

> Status: research and design as of **2026-11-12**. Nothing installed. Items
> marked **[unverified]** need a hands-on check on one MacBook Neo before
> imaging the class set. Sources are at the bottom.

## The hardware we're designing for

The **MacBook Neo** uses the **A18 Pro**: a 6-core CPU (2 performance + 4
efficiency cores), a **5-core GPU**, **8 GB unified memory with no upgrade
option**, and **60 GB/s** memory bandwidth [1][2]. That shapes everything
below:

- The laptops are **clients** for Buddy, not servers. A 4B model would fit in
  8 GB, but it would crowd out VS Code and the browser, and at 60 GB/s it would
  run at about half the mini's speed. One central Buddy also means one place
  for logs, safety filtering and planted-mistake control.
- **Local training is real but small.** Character-level nanoGPT, our own
  tiny models, and MLX demos all work. The details are in
  `training-on-apple-silicon.md`.
- **No containers on student machines** (see §3).

## 1. IDE + AI integration

### Recommendation: VS Code, one locked-down profile, Buddy via VS Code's built-in "Custom Endpoint" (BYOK)

| Option | Fit for grades 6–8 | Local OpenAI-compatible endpoint? | Status (Nov 2026) | Verdict |
|---|---|---|---|---|
| **VS Code + built-in BYOK "Custom Endpoint"** | One app for `.py`, notebooks (Jupyter extension), terminal and chat. Professional tools that kids can grow into. | Yes. VS Code's docs say BYOK and local models work **without a Copilot plan and without signing into GitHub** [3]. The older "OpenAI Compatible" option was renamed **Custom Endpoint** [4]. | Actively developed | **Primary** |
| VS Code + **Continue** | Good UX and simple `config.yaml` (`provider: openai`, `apiBase`, `roles`) [5]. Can send custom headers. | Yes [5] | Reported **acquired by Cursor (June 2026). Final release 2.0.0. Repo read-only.** It still works with your own models (Apache-2.0) [6][7] **[unverified, so confirm on GitHub]** | **Backup only.** Don't build a course on a frozen extension. |
| **JupyterLab + Jupyter AI v3** | Notebook-first and great for the "look inside the model" labs, but it's a second tool to teach. | Yes. v3 moved to LiteLLM and added `api_base` [8][9]. Works with JupyterLab 4.6+ [10]. | Active | **Optional** for notebook-heavy lessons; not for Bug Hunts |
| **Buddy in the browser** (a tiny chat page served by the proxy) | Simplest possible. Nothing to configure on the laptop. | n/a (talks to the proxy directly) | Not built yet | **Good Phase 0 option for the youngest group.** About 150 lines of HTML. |
| `python3 -m bughunt` (scripted, no LLM) | Zero setup, fully offline, deterministic | n/a | Being built in `bughunt/` | **Always available as the fallback** |
| Thonny / IDLE | Very kid-friendly | No AI integration | — | Fine for absolute beginners. No Buddy. |

Why not Cursor, Windsurf, Copilot, etc.: they are cloud-first and need
accounts, which is incompatible with local-first and student data staying
on campus.

### VS Code profile to push via MDM

Ship a **VS Code Profile** (`.code-profile`) or a managed `settings.json`
containing:

```jsonc
{
  // Telemetry off (VS Code + extensions that honour it)
  "telemetry.telemetryLevel": "off",
  // Keep the AI to "Ask" chat; no autonomous agent editing files or
  // running terminal commands for 11-year-olds.            [setting names: unverified]
  "chat.agent.enabled": false,
  // Inline completions off: Bug Hunts are about reading and testing code,
  // not tab-accepting it.
  "github.copilot.enable": { "*": false },
  "editor.inlineSuggest.enabled": false,
  "python.defaultInterpreterPath": "${workspaceFolder}/.venv/bin/python",
  "extensions.autoUpdate": false
}
```

Then add the Buddy model via **Chat → Manage Models → Custom Endpoint**
**[unverified menu path; it changes between releases, so check [3][4]]**:
- Base URL: `http://buddy-mini.school.lan:8088/v1`
- API key: this seat's token from `class-keys.txt`
- Models: `buddy` (free-help mode) and `buddy/<challenge-id>` (Bug Hunt mode).
  The proxy lists these at `/v1/models`, so the challenge picker *is* the
  model picker.

Extensions (pin versions): **Python** and **Jupyter** (Microsoft). Nothing
else.

### Continue fallback config (if the built-in path has problems)

```yaml
# ~/.continue/config.yaml   (Continue 2.0.x)
name: Zero to GPT
version: 1.0.0
schema: v1
models:
  - name: Buddy (Bug Hunt 1.3)
    provider: openai               # = "speaks OpenAI chat completions"
    model: buddy/1.3
    apiBase: http://buddy-mini.school.lan:8088/v1   # camelCase matters [5]
    apiKey: SEAT_TOKEN_HERE
    roles: [chat]
    # requestOptions:                # alternative to buddy/<id> model names
    #   headers: { X-Bughunt-Challenge: "1.3" }
```

Continue warns that without `apiBase`, requests go to OpenAI itself [5].
Double-check this field on every laptop.

## 2. Python environment: **uv**

Pick **uv** (Astral). It is a single binary that needs no admin rights. It
installs Python itself, creates the venv, and resolves from a lockfile that
the whole class shares. Both nanochat and the nanochat CPU script already
use it (`uv sync --extra cpu`) [11]. The current release is **0.13.x**
(0.13.6, 2026-10-26) [12].

**Watch out:** uv 0.13.0 changed the *default* Python it downloads to
**3.15** [13]. Pin the course to a version that PyTorch, MLX and Jupyter
publish macOS-arm64 wheels for **[verify the exact version at imaging time;
3.12 or 3.13 is the safe bet]**:

```bash
# in the course repo
uv python pin 3.12          # writes .python-version
uv lock                     # commit uv.lock
uv sync                     # each laptop: creates .venv from the lock
```

| Alternative | Why not (for this class) |
|---|---|
| Xcode CLT `python3` + `venv` + `pip` | Old system Python, no lockfile, per-laptop drift |
| Homebrew Python | Upgrades under you; needs Homebrew on student machines |
| Miniforge / conda | Heavy (GBs), a second package universe, slower |
| pyenv + pip-tools | More moving parts for the same result |

**Classroom logistics:** run `uv sync` once per laptop **through MDM before
day 1**, so 12 laptops don't each download PyTorch over school Wi-Fi in the
first five minutes of class. You can optionally point uv at a local package
mirror or wheelhouse on the mini (`UV_INDEX_URL` / `--find-links`) and use
`uv sync --offline` in class.

## 3. Containers: **none on student laptops**

| | Docker Desktop | Apple `container` | None (native) |
|---|---|---|---|
| What it is | Linux VM + Docker engine | Each Linux container runs in its own lightweight VM. Swift, Apache-2.0. **1.0 shipped June 2026.** Targets macOS 26 on Apple silicon [14][15][16]. | uv venv |
| Metal GPU inside? | **No.** Linux guests don't get Apple's Metal. PyTorch MPS and MLX are macOS-only. **[well established; no single authoritative link found. Podman/krunkit offers Vulkan-based GPU passthrough, but not MPS/MLX [unverified]]** | **No** (same reason) | **Yes** |
| RAM cost on an 8 GB Neo | VM reservation (GBs) | Smaller, per container | 0 |
| License | Free for education and small orgs (<250 staff AND <$10M revenue) [17] | Apache-2.0 | — |
| Verdict for students | ✗ | ✗ | **✓** |

So **all training and inference runs natively**: PyTorch-MPS and MLX on the
laptops, llama.cpp and mlx-lm on the mini.

Things that *may* belong in containers (Apple `container`, on the **mini**
only, Phase 3+): non-GPU sidecars like a Prometheus/Grafana stack or a docs
site for the course. Even those run fine natively via Homebrew, so only
containerize if the sysadmin already has a container workflow. Note that
Docker Compose-style multi-container setups were reported as unsupported in
Apple `container` [15] **[unverified]**.

## 4. Imaging checklist (per laptop)

1. MDM pushes: VS Code (pinned), Python + Jupyter extensions, the VS Code
   profile, uv, and the course repo checkout.
2. `uv sync` (pre-warmed).
3. Write the seat token into the profile or Continue config. Label the laptop
   with its seat number.
4. Smoke test: open `lessons/01-…`, ask Buddy "hi", run
   `python3 -m bughunt list`, and run a 1-minute nanoGPT CPU training to check
   PyTorch.
5. Optional: Screen Time / content filter policies as per school norm. Buddy's
   own filter is in the proxy.

## Sources

1. Apple support tech specs: MacBook Neo (A18 Pro; 8 GB; 60 GB/s) - https://support.apple.com/en-sg/126322
2. EveryMac: MacBook Neo A18 Pro specs - https://everymac.com/systems/apple/macbook-neo/
3. VS Code docs, "AI language models in VS Code" (BYOK/local without a Copilot plan or GitHub sign-in) - https://code.visualstudio.com/docs/agent-customization/language-models
4. Marketplace listing noting the built-in "Custom Endpoint" BYOK provider (replacing "OpenAI Compatible") - https://marketplace.visualstudio.com/items?itemName=AndrewButson.github-copilot-llm-gateway
5. Continue config reference - https://docs.continue.dev/reference ; local example: https://docs.continue.dev/customize/model-providers/more/openvino_model_server ; camelCase pitfall: https://docs.opper.ai/integrations/editors/continue
6. Continue status (Cursor acquisition, final 2.0.0, Hub shutdown) - https://www.gradually.ai/en/harnesses/continue/
7. Continue 2.0 review (works with own models after acquisition) - https://dev.to/jovan_chan_9500711396d4e6/continuedev-review-2026-free-ai-coding-ci-agents-and-when-to-pick-it-over-cursor-5d26
8. Jupyter AI v3.0.0beta7 notes (`api_base`) - https://newreleases.io/project/github/jupyterlab/jupyter-ai/release/v3.0.0beta7
9. Jupyter AI v3 Jupyternaut docs - https://jupyter-ai.readthedocs.io/en/v3/users/jupyternaut/index.html
10. Jupyter AI v3.1.0 release notes (JupyterLab 4.6+) - https://jupyter-ai.readthedocs.io/en/stable/releases/v3.1.0.html
11. nanochat README (uv; `uv sync --extra cpu` for CPU/MPS) - https://github.com/karpathy/nanochat
12. uv 0.13.6 release - https://newreleases.io/project/github/astral-sh/uv/release/0.13.6 ; releases: https://github.com/astral-sh/uv/releases
13. uv 0.13.0 (default Python → 3.15) - https://newreleases.io/project/github/astral-sh/uv/release/0.13.0
14. apple/container repository - https://github.com/apple/container
15. Apple ships stable 1.0 of `container` - https://cloudnativenow.com/features/apple-ships-stable-1-0-of-its-native-container-tool-for-macos/
16. Help Net Security on Apple Container (July 2026) - https://www.helpnetsecurity.com/2026/07/07/apple-container-open-source-linux-mac/
17. Docker Desktop license agreement - https://docs.docker.com/subscription/desktop-license/
