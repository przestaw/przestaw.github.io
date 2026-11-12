English | [Polski](README.pl.md)

# przestaw.github.io

Personal portfolio, project directory, and engineering tutorials for **Przemysław Stawczyk** ([https://przestaw.github.io/](https://przestaw.github.io/)). Built as a static bilingual site (English and Polish) with [Zensical](https://zensical.org/).

## Repository Structure

```text
.
├─ .github/workflows/pages.yml    # Automated GitHub Pages build & deploy
├─ mkdocs.yml                     # Zensical site & navigation configuration
├─ requirements.txt               # Pinned Zensical version
├─ theme/
│  └─ zensical_przestaw/          # Git submodule: przestaw/zensical_przestaw
└─ docs/
   ├─ index.md                    # English home page
   ├─ projects/index.md           # English project & publication directory
   ├─ boost-python/               # Git submodule: przestaw/Boost-Python_tutorial
   ├─ pl/
   │  ├─ index.md                 # Polish home page
   │  ├─ projekty/index.md        # Polish project & publication directory
   │  └─ boost-python/index.md    # Polish Boost.Python tutorial (includes README.pl.md)
   ├─ stylesheets/extra.css       # Dark Minimal layout & token aliases
   └─ javascripts/dark-minimal.js # Sidebar navigation, skills accordion, letter canvas
```

- `docs/` serves the default **English** version at `/`.
- `docs/pl/` serves the **Polish** version at `/pl/` without requiring an external translation plugin.

## Submodules

| Path | Repository | Purpose |
| ---- | ---------- | ------- |
| `docs/boost-python` | [`przestaw/Boost-Python_tutorial`](https://github.com/przestaw/Boost-Python_tutorial) | English (`README.md`) and Polish (`README.pl.md`) `Boost.Python` tutorial |
| `theme/zensical_przestaw` | [`przestaw/zensical_przestaw`](https://github.com/przestaw/zensical_przestaw) | Reusable dark theme layer (`theme.custom_dir`) |

Clone with `--recurse-submodules`, or initialize submodules in an existing checkout:

```sh
git submodule update --init --recursive
```

## Local Preview

```sh
python -m venv .venv
# Linux / macOS:
.venv/bin/pip install -r requirements.txt
.venv/bin/zensical serve

# Windows (PowerShell):
.\.venv\Scripts\pip install -r requirements.txt
.\.venv\Scripts\zensical serve
```

Open `http://127.0.0.1:8000/` in a browser. Run a clean production build into `site/` with:

```sh
zensical build --clean
```

## Publishing

`.github/workflows/pages.yml` builds and deploys the site to GitHub Pages (`https://przestaw.github.io/`) on pushes to `main`/`master` and manual `workflow_dispatch` runs:

1. Checks out the repository and submodules recursively (`submodules: recursive`).
2. Sets up Python 3.12 and installs `requirements.txt`.
3. Runs `zensical build --clean` and deploys `site/` via `actions/deploy-pages`.
