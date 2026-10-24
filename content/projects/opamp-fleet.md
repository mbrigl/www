---
title: "opamp-fleet"
repo: "mbrigl/opamp-fleet"
weight: 10
hue: "brick"
summary: "Fleet management based on OpAMP. A Rust implementation of OpenTelemetry's OpAMP protocol with an API-first server and a native client that supervises many agents."
tags: ["Rust", "OpAMP", "Hexagonal", "Specs + ADRs"]
language: "Rust"
license: "Apache-2.0"
commits: "144 commits"
updated: "Oct 2026"
flow:
  arrow: "↔"
  nodes:
    - { label: SERVER, title: "Fleet server",          text: "REST API · UI · config push", highlight: true }
    - { label: CLIENT, title: "Native OS service",     text: "Supervisor and gateway modes" }
    - { label: AGENTS, title: "Collectors and agents", text: "OpenTelemetry · via plugins" }
parts:
  - { title: "Server",              text: "API-first control plane. Holds the desired configuration, tracks what each agent reports and reconfigures only agents whose configuration differs. OpenAPI REST API with a rudimentary bundled UI, served on port 4320 by default." }
  - { title: "Client",              text: "One process, installable as a native OS service on Linux, macOS and Windows, with in-place self-update. Supervisor mode runs many supervisors; gateway mode multiplexes other clients onto a small pool of upstream connections." }
  - { title: "Hexagonal core",      text: "Supervisors are plugins behind ports. A Collector supervisor manages OpenTelemetry Collectors, a custom supervisor manages a foreign agent that does not speak OpAMP." }
  - { title: "Connection pool",     text: "The server sees only agents, identified by instance_uid, never the connection that carried them. A pool carries many agents over few connections." }
docs:
  - { path: "docs/SPECIFICATION.md", text: "Problem statement, goals and vocabulary" }
  - { path: "docs/CONFORMANCE.md",   text: "Protocol baseline and conformance matrix" }
  - { path: "docs/adr/",             text: "Architecture Decision Records" }
  - { path: "docs/manual/README.md", text: "User manual for server and client" }
  - { path: "AGENTS.md",             text: "Rules for coding agents" }
start_note: "Prerequisites: VS Code with the Dev Containers extension (or another DevContainer-compatible IDE) and Docker or rootless Podman. Rust stable comes with the Dev Container."
start:
  - "git clone https://github.com/mbrigl/opamp-fleet"
  - "cd opamp-fleet"
  - "cargo build --workspace"
  - "cargo run -p server -- --config config/server.toml"
  - "cargo run -p client -- --config config/client.toml"
---
A Rust implementation of OpenTelemetry's [OpAMP](https://opentelemetry.io/docs/specs/opamp/) protocol for managing a fleet of telemetry agents. It covers OpenTelemetry Collectors as well as agents that do not speak OpAMP.

The server is API-first: its contract is an OpenAPI-described REST API, and it pushes configuration only to agents whose configuration differs. The client runs as a native OS service and can supervise many processes at once, or act as a gateway for other clients.

The code is one Cargo workspace with three crates: `opamp` (shared library), `server` and `client`.
