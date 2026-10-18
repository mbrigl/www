---
title: "libgpkg2"
repo: "hivevm/libgpkg2"
weight: 50
summary: "SQLite loadable extension for GeoPackage file access. A fork of luciad/libgpkg, revived with a specification, conformance notes and ADRs."
tags: ["C++", "GeoPackage", "SQLite", "Specs + ADRs"]
language: "C++"
license: "Apache-2.0"
commits: "367 commits"
updated: "Aug 2026"
flow:
  arrow: "↔"
  nodes:
    - { label: HOST,      title: "SQLite 3",       text: "load_extension" }
    - { label: EXTENSION, title: "libgpkg2",       text: "GeoPackage functions", highlight: true }
    - { label: DATA,      title: "GeoPackage file", text: "OGC, self-describing geodata" }
parts:
  - { title: "Loadable extension", text: "Adds GeoPackage functions to SQLite 3. Load it with the sqlite3_load_extension C function or the load_extension SQL function." }
  - { title: "Bundled shell",      text: "A modified SQLite 3 command-line shell named geopackage that autoloads the extension." }
  - { title: "Dependencies",       text: "CMake 3.21+, SQLite 3.51.0+, Boost 1.90+. Optional ICU for international collation." }
docs:
  - { path: "docs/SPECIFICATION.md", text: "Specification" }
  - { path: "docs/CONFORMANCE.md",   text: "OGC GeoPackage conformance" }
  - { path: "docs/adr/",             text: "Architecture Decision Records" }
  - { path: "AGENTS.md",             text: "Rules for coding agents" }
start_note: "Build outputs: build/shell/geopackage (standalone shell) and build/gpkg/shared/libgpkg.so (gpkg.dll on Windows), the loadable extension."
start:
  - "git clone https://github.com/hivevm/libgpkg2"
  - "cd libgpkg2"
  - "cmake -S . -B build && cmake --build build"
  - "./build/shell/geopackage"
---
GeoPackage is a self-describing file format for geodata based on SQLite. libgpkg is a SQLite 3 extension that provides a minimal OGC GeoPackage implementation.

This repository is a fork of [luciad/libgpkg](https://github.com/luciad/libgpkg). The original was started by Luciad and had not been developed for years. The fork revives it and adds a written specification, conformance notes and Architecture Decision Records, so that the work can proceed spec-first.

It connects my GIS background (WebGIS, mobile GIS) with the spec-driven way of working.
