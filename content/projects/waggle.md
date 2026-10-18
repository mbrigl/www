---
title: "waggle"
repo: "hivevm/waggle"
weight: 20
summary: "HiveVM CC, a parser generator forked from JavaCC. Tree building is defined inside the grammar; a Gradle plugin generates parsers in Java, C++ or Rust."
tags: ["Parser generator", "Gradle plugin", "Java · C++ · Rust"]
language: "Java"
license: "BSD-3-Clause"
commits: "1,327 commits"
updated: "Oct 2026"
flow:
  arrow: "→"
  nodes:
    - { label: INPUT,  title: "Grammar",   text: "Lexer and grammar in one file" }
    - { label: CORE,   title: "HiveVM CC", text: "Gradle plugin · generateParser", highlight: true }
    - { label: OUTPUT, title: "Parser",    text: "Java · C++ · Rust" }
parts:
  - { title: "Parsing model",       text: "Top-down recursive descent, LL(1) by default, with syntactic and semantic lookahead for local LL(k) decisions. Left recursion is disallowed." }
  - { title: "Grammar syntax",      text: "A simplified, EBNF-like syntax with semantic actions marked as islands. Tree building is expressed in the grammar with #Node annotations, in a single step with no separate JJTree pass." }
  - { title: "Lexer",               text: "Full Unicode support, lexical states, TOKEN, MORE and SKIP, special tokens for things like comments, and a per-token IGNORE_CASE modifier." }
  - { title: "Targets",             text: "Java, C++ and Rust. Generated Java parsers need only a JRE and have no HiveVM CC runtime dependency." }
docs:
  - { path: "docs/tutorials/",       text: "Tutorials" }
  - { path: "docs/SPECIFICATION.md", text: "Specification" }
  - { path: "docs/adr/",             text: "Architecture Decision Records" }
  - { path: "AGENTS.md",             text: "Single source of truth for coding agents" }
start_note: "Apply the org.hivevm.cc plugin and describe generation units in a parserProject block. Each task produces one parser from one grammar; target selects java, cpp or rust."
start:
  - "git clone https://github.com/hivevm/waggle"
  - "cd waggle"
  - "./gradlew build"
  - "./gradlew test"
code_title: "build.gradle"
code_lang: "groovy"
code: |
  plugins {
    id "org.hivevm.cc" version "1.0.10"
  }

  parserProject {
    target = 'java'                 // java | cpp | rust
    output = 'src/main/generated'

    task {
      name = 'parser'
      file = 'src/main/resources/JavaCC.jj'
    }
  }
---
HiveVM Compiler-Compiler (HiveVM CC) is a parser generator: it reads a grammar and produces a program that recognizes input matching that grammar. It started as a fork of JavaCC 7.0.13 and is no longer grammar-compatible with JavaCC.

It keeps JavaCC's core ideas, namely LL(k) recursive descent, a token manager with lexical states and tree building, and changes the workflow: one grammar file, tree nodes defined inside the grammar, output in three languages, and a Gradle plugin instead of a command line tool.
