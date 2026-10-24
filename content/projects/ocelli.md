---
title: "ocelli"
repo: "hivevm/ocelli"
weight: 40
hue: "olive"
summary: "View and edit Git repositories. A Git client that draws history as a lane graph, as desktop app (Tauri), terminal app or read-only remote server."
tags: ["Rust", "Tauri", "Git", "Web UI"]
language: "Rust · TypeScript"
license: "MIT"
commits: "52 commits"
updated: "Oct 2026"
flow:
  arrow: "→"
  nodes:
    - { label: INPUT,  title: "Git repository", text: "History, branches, tags" }
    - { label: CORE,   title: "Ocelli",         text: "Lane graph · edit from the view", highlight: true }
    - { label: OUTPUT, title: "Three run modes", text: "Desktop · terminal · server" }
parts:
  - { title: "Desktop",   text: "Tauri app. Run it with bun run tauri dev, or build installers with bun run tauri build." }
  - { title: "Terminal",  text: "ocelli-cli opens the repository at a path, defaulting to the current directory. An ASCII flag is available for terminals without box-drawing characters." }
  - { title: "Server",    text: "ocelli-server serves the same interface to a browser. It only reads unless started with the allow-writes flag." }
  - { title: "Lane graph", text: "Each branch in its own lane, merges as orthogonal edges, with chips for branches, remotes and tags, plus stash and uncommitted-change rows." }
docs:
  - { path: "docs/", text: "Specification and Architecture Decision Records" }
start_note: "Prerequisites and exact server options are in the README."
start:
  - "git clone https://github.com/hivevm/ocelli"
  - "cd ocelli"
  - "bun install --frozen-lockfile"
  - "bun run tauri dev"
  - "cargo run -p ocelli-cli -- ."
---
Ocelli draws a Git repository's commit history as a graph, with each branch in its own lane and merges drawn as orthogonal edges, and lets you edit the repository from that view. It runs as a desktop app, a terminal app, or a remote server that serves the same interface to a browser.

Features include commit detail with SHA, message, author, parents, children and changed files; search over message, author, SHA and refs; lineage highlighting for a selected commit; keyboard navigation; dark and light themes; and background loading of history with virtual rendering for large repositories.

The project is driven by a written specification and Architecture Decision Records in `docs/`.
