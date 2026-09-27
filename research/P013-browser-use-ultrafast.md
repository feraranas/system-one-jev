# P013 — Browser Use / jev-ultrafast

Creator: Browser Use; shared by Gregor Zunic (@gregpr07)

Reviewed: 2026-09-26

Status: Documentation and published measurement reviewed — not run

Review depth: Read-only review of the sources described below; no independent runtime benchmark.

## Sources

- [Repository](https://github.com/browser-use/jev-ultrafast).
- [Announcement](https://x.com/gregpr07/status/2100411066966749359).

## Problem, workflow, and evidence

Each observation produces an element table and a bounded operation set. The documented loop asks for an operation and possible targets together, then executes only the applicable choice through Browser Harness. A small language model supplies text for typing actions.

The author reports finding flights in about seven seconds for $0.0039; the README reports 7.1 seconds including loading and text generation. This is a particular demonstrated search, not a flight booking or a general browser benchmark.

## Connections and open questions

Our interpretation: parallel speculative judgments can reduce serial model round trips while preserving a separate executor. P011 extracts text spans instead; this project uses generation for text that selection alone cannot supply.

Unknowns: success across sites, recovery from changed elements, and the latency/cost contribution of text generation. No external actions or bookings performed.

See [the index](../INDEX.md) for supported connections and untested ideas.
