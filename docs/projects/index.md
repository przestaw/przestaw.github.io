# Projects

Directory of public repositories, engineering tools, and R&D work.

## Selected repositories

### Boost.Python Tutorial (Git submodule)

Practical tutorial on exposing C++ functions and classes to Python with `Boost.Python`. Covers constructors, methods, properties, inheritance, virtual functions, memory ownership policies (`CallPolicy`, smart pointers), operators, and CMake/SCons builds. Embedded directly into this site as a Git submodule (`docs/boost-python`).

- **Code (standalone repo):** [przestaw/Boost-Python_tutorial](https://github.com/przestaw/Boost-Python_tutorial)
- **Technologies:** C++, Python, Boost.Python, CMake
- **Read on this site:** [Boost.Python Tutorial](../boost-python/)

### workctl — Unified CLI & MCP Server for AI Agents

CLI and Model Context Protocol (MCP) server in Go that connects coding agents to configurable HTTP APIs and allow-listed SSH commands. Use it for development services, monitoring, CI/CD, packages, deployments, administration and custom workflows. Built-in provider commands are shortcuts, not a closed service list: generic access depends on protocol, authentication and endpoint configuration. Writes are disabled by default, with optional per-operation, batch or MCP-session approvals.

- **Code:** [przestaw/cli-tools-MCP](https://github.com/przestaw/cli-tools-MCP)
- **Read on this site:** [workctl guide](../workctl/)
- **Example integrations:** built-in commands for GitHub, GitLab, Jira, Confluence and Azure DevOps; maintainer-verified API use with Jenkins and Conan. These examples do not limit which compatible services can be configured.
- **Technologies:** Go, MCP, HTTP APIs, monitoring and deployment APIs, OS Keyring

### nbc4gpu — Naive Bayes Classifier on GPU

Header-only C++20 template library implementing a Gaussian Naive Bayes Classifier on the GPU using OpenCL and `Boost.Compute`, accompanied by a reference CPU implementation and scaling benchmarks up to $10^7$ records.

- **Code:** [przestaw/nbc4gpu](https://github.com/przestaw/nbc4gpu)
- **Technologies:** C++20, OpenCL, Boost.Compute, Boost.Test, CMake

---

## Publication & B.Sc. Thesis

### BGM_assembler — Binary Genome Map Assembly

C++17 library, CLI application, and Python extension module for *de novo* assembly of Optical Mapping genomic reads using binary representation.

- **Paper (arXiv):** P. Stawczyk, R. Nowak, *"Fast genomic optical map assembly algorithm using binary representation"*, [arXiv:2210.06865v1](https://arxiv.org/abs/2210.06865v1)
- **Code (GitHub):** [przestaw/BGM_assembler](https://github.com/przestaw/BGM_assembler)
- **Companion Repo & Datasets (SourceForge):** [binary-genome-maps](https://sourceforge.net/p/binary-genome-maps/code/ci/master/tree/)
- **Technologies:** C++17, Boost, Boost.Python, CMake, Python 3

---

## Templates & Engineering Notes

### Cpp_CMake_template — C++20 & CMake 3.25+ Project Template

Zero-dependency C++20 starter structured around OS-segmented `CMakePresets.json` workflows (Ninja across MSVC, GCC, and Clang), target-scoped warnings and ASan/UBSan sanitizers (`PRIVATE`), non-stale Git version stamping, CTest / GoogleTest integration, and relocatable `find_package` `Config.cmake` export. Includes an appendix **qmake / Qt 5 → CMake / Qt 6 migration tutorial**, a runnable `before`/`after` reference slice, and customizable Python `qmig` inspection probes.

- **Code:** [przestaw/Cpp_CMake_template](https://github.com/przestaw/Cpp_CMake_template)
- **Migration tutorial (qmake / Qt 5 → CMake / Qt 6):** [docs/qmake-cmake-guide.md](https://github.com/przestaw/Cpp_CMake_template/blob/master/docs/qmake-cmake-guide.md)
- **Reference `before`/`after` slice & snippets:** [examples/qmake-migration/](https://github.com/przestaw/Cpp_CMake_template/tree/master/examples/qmake-migration)
- **Customizable `qmig` reference scripts:** [tools/qmake-migration-kit/](https://github.com/przestaw/Cpp_CMake_template/tree/master/tools/qmake-migration-kit)
- **Technologies:** C++20, CMake 3.25+, Ninja, CTest / GoogleTest, Qt 5 / Qt 6, Python 3
