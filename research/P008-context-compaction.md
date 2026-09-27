# P008 — Context compaction

Creator: Tamara Tran (@tamarajtran)

Reviewed: 2026-09-26

Status: Documentation reviewed — scripted demo distinguished from integration

Review depth: Read-only review of the sources described below; no independent runtime benchmark.

## Sources

- [Announcement](https://x.com/tamarajtran/status/2100694549362553153).
- [Submitted short link](https://t.co/htDJNJnLaa).
- [Resolved repository](https://github.com/tamaratran/fast-jev-compaction).

## Problem, workflow, and evidence

The linked repository contains a compaction library and Claude Code plugin. It pairs tool calls with results, pins recent history, and asks separate keep-call and keep-result questions. Code keeps, truncates, or drops paired content while preserving user/assistant text in the output. The state shown to Jev omits result bodies and may abridge older context; large question sets require multiple requests.

Important evidence distinction: the repository explicitly describes its animated macOS demo as scripted and making no API calls. That animation does not measure the actual library. The documented hook falls back to normal summarization on failure or insufficient reduction.

## Connections and open questions

Our interpretation: verbatim retention avoids rewriting errors but does not avoid selection errors. P001 selects external evidence before work; P008 selects historical evidence to continue work.

Unknowns: later-task success after pruning, missed facts hidden inside omitted result bodies, and whether tool outputs can actually be recovered by rerunning them. No plugin installed or benchmark run.

See [the index](../INDEX.md) for supported connections and untested ideas.
