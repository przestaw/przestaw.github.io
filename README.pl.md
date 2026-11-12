[English](README.md) | Polski

# przestaw.github.io

Strona osobista, katalog projektów open-source oraz tutoriale techniczne **Przemysława Stawczyka** ([https://przestaw.github.io/](https://przestaw.github.io/)). Statyczna strona dwujęzyczna (angielski i polski) budowana za pomocą [Zensical](https://zensical.org/).

## Struktura repozytorium

```text
.
├─ .github/workflows/pages.yml    # Automatyczny build i wdrożenie GitHub Pages
├─ mkdocs.yml                     # Konfiguracja strony i nawigacji Zensical
├─ requirements.txt               # Przypięta wersja Zensical
├─ theme/
│  └─ zensical_przestaw/          # Submoduł Git: przestaw/zensical_przestaw
└─ docs/
   ├─ index.md                    # Strona główna (EN)
   ├─ projects/index.md           # Katalog projektów i publikacji (EN)
   ├─ boost-python/               # Submoduł Git: przestaw/Boost-Python_tutorial
   ├─ pl/
   │  ├─ index.md                 # Strona główna (PL)
   │  ├─ projekty/index.md        # Katalog projektów i publikacji (PL)
   │  └─ boost-python/index.md    # Polski tutorial Boost.Python (osadza README.pl.md)
   ├─ stylesheets/extra.css       # Układ Dark Minimal oraz aliasy tokenów
   └─ javascripts/dark-minimal.js # Pasek boczny, akordeon umiejętności, animacja matrycy
```

- `docs/` zawiera domyślną wersję **angielską** pod `/`.
- `docs/pl/` zawiera wersję **polską** pod `/pl/` bez zależności od zewnętrznych wtyczek i18n.

## Submoduły

| Ścieżka | Repozytorium | Przeznaczenie |
| ------- | ------------ | ------------- |
| `docs/boost-python` | [`przestaw/Boost-Python_tutorial`](https://github.com/przestaw/Boost-Python_tutorial) | Angielski (`README.md`) i polski (`README.pl.md`) przewodnik `Boost.Python` |
| `theme/zensical_przestaw` | [`przestaw/zensical_przestaw`](https://github.com/przestaw/zensical_przestaw) | Współdzielona warstwa ciemnego motywu (`theme.custom_dir`) |

Klonowanie wraz z submodułami lub inicjalizacja w istniejącej kopii roboczej:

```sh
git submodule update --init --recursive
```

## Podgląd lokalny

```sh
python -m venv .venv
# Linux / macOS:
.venv/bin/pip install -r requirements.txt
.venv/bin/zensical serve

# Windows (PowerShell):
.\.venv\Scripts\pip install -r requirements.txt
.\.venv\Scripts\zensical serve
```

Podgląd jest dostępny pod adresem `http://127.0.0.1:8000/`. Czysty build produkcyjny do katalogu `site/`:

```sh
zensical build --clean
```

## Publikacja

Workflow `.github/workflows/pages.yml` buduje i publikuje stronę na GitHub Pages (`https://przestaw.github.io/`) po wypchnięciu zmian na gałąź `main`/`master` oraz przy ręcznym uruchomieniu (`workflow_dispatch`):

1. Pobiera repozytorium wraz z submodułami (`submodules: recursive`).
2. Konfiguruje Python 3.12 i instaluje `requirements.txt`.
3. Uruchamia `zensical build --clean` i wdraża artefakt `site/` przez `actions/deploy-pages`.
