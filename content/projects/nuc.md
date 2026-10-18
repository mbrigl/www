---
title: "nuc"
repo: "hivevm/nuc"
weight: 60
summary: "Template for agentic development in a Dev Container. A written specification and architecture decision records guide the work, and one AGENTS.md rules file is read by all coding agents."
tags: ["Spec-driven", "Dev Container", "AGENTS.md"]
language: "Shell"
license: "MIT"
commits: "16 commits"
updated: "Oct 2026"
flow:
  arrow: "→"
  nodes:
    - { label: INPUT,  title: "Spec and ADRs",  text: "Intent and decisions" }
    - { label: CORE,   title: "Coding agent",   text: "Rules from AGENTS.md", highlight: true }
    - { label: OUTPUT, title: "Software",       text: "Built in a Dev Container" }
parts:
  - { title: "Dev Container",   text: "Defined entirely in devcontainer.json: a prebuilt base image plus Dev Container Features and VS Code extensions. No Dockerfile or Compose file. Claude Code and Mistral Vibe are preinstalled." }
  - { title: "AGENTS.md",       text: "The single source of truth for all coding agents (ADR-0001). Procedures are Agent Skills in .agents/skills/ (ADR-0003)." }
  - { title: "Git hooks",       text: "The container enables hooks that block commits on main and run checks before a push." }
  - { title: "Spec structure",  text: "SPECIFICATION, GLOSSARY, CONVENTIONS and ARCHITECTURE in docs/, plus Architecture Decision Records with a template. CODEOWNERS names who must approve changes." }
docs:
  - { path: "docs/SPECIFICATION.md", text: "Problem, goals, success criteria" }
  - { path: "docs/ARCHITECTURE.md",  text: "The system as it currently stands" }
  - { path: "docs/adr/",             text: "Architecture Decision Records" }
  - { path: "AGENTS.md",             text: "Rules for coding agents" }
start_note: "Open the repository in VS Code and choose Reopen in Container, then authenticate your coding agent inside the container. The README still marks the build, test and run commands as TODO, because it is a template."
start:
  - "git clone https://github.com/hivevm/nuc"
  - "cd nuc"
  - "code ."
---
NUC is a starting point for building software with coding agents inside a ready-to-use Dev Container. It is named after the small nucleus colony a full hive grows from.

The work is driven by a written specification and Architecture Decision Records, so intent and the reasoning behind structural choices stay reviewable. The other HiveVM projects follow the same layout.
