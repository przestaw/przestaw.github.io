# Projekty

Katalog publicznych repozytoriów, narzędzi inżynierskich oraz prac badawczo-rozwojowych.

## Wybrane repozytoria

### Boost.Python Tutorial (submoduł)

Praktyczny przewodnik pokazujący, jak udostępniać funkcje i klasy C++ w Pythonie za pomocą `Boost.Python`. Obejmuje konstruktory, metody, właściwości, dziedziczenie, funkcje wirtualne, polityki zarządzania pamięcią (`CallPolicy`, smart pointery), operatory i budowanie w CMake/SCons. Repozytorium jest podpięte do tej strony jako submoduł Git (`docs/boost-python`).

- **Kod (osobne repo):** [przestaw/Boost-Python_tutorial](https://github.com/przestaw/Boost-Python_tutorial)
- **Technologie:** C++, Python, Boost.Python, CMake
- **Czytaj na stronie:** [Boost.Python Tutorial](../boost-python/)

### workctl — Zunifikowany CLI i serwer MCP dla agentów AI

CLI i serwer Model Context Protocol (MCP) w Go, który łączy agentów z konfigurowalnymi API HTTP i dozwolonymi poleceniami SSH. Może służyć do obsługi narzędzi programistycznych, monitoringu, CI/CD, pakietów, deploymentów, administracji i własnych procesów pracy. Wbudowane polecenia dostawców są ułatwieniem, nie zamkniętą listą usług: ogólny dostęp zależy od protokołu, uwierzytelniania i konfiguracji endpointów. Zapis jest domyślnie wyłączony; opcjonalne zgody dotyczą operacji, batcha lub połączenia MCP.

- **Kod:** [przestaw/cli-tools-MCP](https://github.com/przestaw/cli-tools-MCP)
- **Czytaj na stronie:** [przewodnik workctl](../workctl/)
- **Przykładowe integracje:** wbudowane polecenia dla GitHuba, GitLaba, Jiry, Confluence i Azure DevOps; potwierdzona przez autora praca przez API z Jenkinsem i Conanem. Przykłady nie ograniczają listy zgodnych usług, które można skonfigurować.
- **Technologie:** Go, MCP, API HTTP, API monitoringu i deploymentu, OS Keyring

### nbc4gpu — Naive Bayes Classifier na GPU

Szablonowa biblioteka C++20 (`header-only`) implementująca gaussowski naiwny klasyfikator Bayesa na GPU przy użyciu OpenCL i `Boost.Compute`, wraz z referencyjną implementacją CPU oraz benchmarkami wydajnościowymi do $10^7$ rekordów.

- **Kod:** [przestaw/nbc4gpu](https://github.com/przestaw/nbc4gpu)
- **Technologie:** C++20, OpenCL, Boost.Compute, Boost.Test, CMake

---

## Praca inżynierska i publikacja naukowa

### BGM_assembler — Binary Genome Map Assembly

Algorytm, biblioteka C++17, aplikacja konsolowa oraz moduł Pythona do *de novo* składania optycznych map genomowych (Optical Mapping) z wykorzystaniem reprezentacji binarnej.

- **Publikacja (arXiv):** P. Stawczyk, R. Nowak, *"Fast genomic optical map assembly algorithm using binary representation"*, [arXiv:2210.06865v1](https://arxiv.org/abs/2210.06865v1)
- **Kod (GitHub):** [przestaw/BGM_assembler](https://github.com/przestaw/BGM_assembler)
- **Kod i zbiory danych (SourceForge):** [binary-genome-maps](https://sourceforge.net/p/binary-genome-maps/code/ci/master/tree/)
- **Technologie:** C++17, Boost, Boost.Python, CMake, Python 3

---

## Szablony i notatki inżynierskie

### Cpp_CMake_template — Szablon projektu C++20 + CMake 3.25+

Niewymagający zewnętrznych zależności szablon projektu C++20 oparty o podzielone per system presety `CMakePresets.json` (Ninja dla MSVC, GCC i Clang), zakresowe ostrzeżenia kompilatora i sanitizery ASan/UBSan (`PRIVATE`), stemplowanie wersji z Gita bez zatruwania cache'u, CTest / GoogleTest oraz relokowalny eksport `Config.cmake` pod `find_package`. Jako dodatek zawiera dwujęzyczny **tutorial migracji qmake / Qt 5 → CMake / Qt 6**, działający wycinek referencyjny `before`/`after` oraz konfigurowalne skrypty pomocnicze `qmig` w Pythonie.

- **Kod:** [przestaw/Cpp_CMake_template](https://github.com/przestaw/Cpp_CMake_template)
- **Tutorial migracji (qmake / Qt 5 → CMake / Qt 6):** [docs/qmake-cmake-guide.pl.md](https://github.com/przestaw/Cpp_CMake_template/blob/master/docs/qmake-cmake-guide.pl.md)
- **Wycinek referencyjny `before`/`after` i szablony:** [examples/qmake-migration/](https://github.com/przestaw/Cpp_CMake_template/tree/master/examples/qmake-migration)
- **Konfigurowalne skrypty `qmig`:** [tools/qmake-migration-kit/](https://github.com/przestaw/Cpp_CMake_template/tree/master/tools/qmake-migration-kit)
- **Technologie:** C++20, CMake 3.25+, Ninja, CTest / GoogleTest, Qt 5 / Qt 6, Python 3
