---
title: "comb"
repo: "hivevm/comb"
weight: 30
summary: "Node-based visual workflow engine and UI coordinator. A browser node editor on WebGL2 with a Rust engine compiled to WebAssembly, built for tens of thousands of nodes."
tags: ["Rust", "WebAssembly", "WebGL2", "Specs + ADRs"]
language: "Rust · TypeScript"
license: "MIT"
commits: "22 commits"
updated: "Oct 2026"
flow:
  arrow: "↔"
  nodes:
    - { label: HOST,   title: "Host application", text: "createComb · HTML attribute forms" }
    - { label: LIBRARY, title: "Comb",            text: "TypeScript · PixiJS · WebGL2", highlight: true }
    - { label: ENGINE, title: "Geometry engine",  text: "Rust · WebAssembly" }
parts:
  - { title: "crates/engine",       text: "The engine's pure Rust core (ADR-0009)." }
  - { title: "crates/engine-wasm",  text: "The Rust side of the bridge, containing all WebAssembly exports (ADR-0010)." }
  - { title: "packages/comb",       text: "The library, with api, store, interaction, render and bridge modules." }
  - { title: "examples/metric-tree", text: "An example host application with browser tests." }
docs:
  - { path: "docs/SPECIFICATION.md", text: "Specification" }
  - { path: "docs/ARCHITECTURE.md",  text: "Architecture" }
  - { path: "docs/GLOSSARY.md",      text: "Glossary" }
  - { path: "docs/CONVENTIONS.md",   text: "Conventions" }
  - { path: "docs/adr/",             text: "Architecture Decision Records" }
  - { path: "AGENTS.md",             text: "Rules for coding agents" }
start_note: "Run inside the Dev Container: VS Code with the Dev Containers extension (or a compatible IDE) and Docker or rootless Podman."
start:
  - "git clone https://github.com/hivevm/comb"
  - "cd comb"
  - "bun run build"
  - "bun run test"
  - "bun run example"
---
Comb is a high-performance, interactive node-editor framework for the browser, built to stay responsive with tens of thousands of nodes.

Nodes, edges, connectors and edge labels are drawn on a WebGL2 canvas with PixiJS. Users create, connect, move and delete graph elements directly on the canvas, while attribute forms stay in the host application's HTML. Geometry runs in a Rust engine compiled to WebAssembly.

A host app passes an element to `createComb`, loads a graph of nodes and edges, calls `fitView()` and subscribes to selection changes through `onSelectionChange`. The full example is in `examples/metric-tree/`.
