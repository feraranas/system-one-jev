# P016 — App testing with Jev and OpenCode

Creator: Filip (@Neriousy)

Reviewed: 2026-09-26

Status: Public demo reviewed — Jev role not established

Review depth: Read-only review of the sources described below; no independent runtime benchmark.

## Sources

- [Announcement and demo](https://x.com/Neriousy/status/2100287208166969746).

## Problem, workflow, and evidence

The creator presents a small app-testing demo naming Jev and OpenCode. A visible video frame shows an Atlas browser-automation page. The inspected post does not explain the contract between the coding agent, Jev, and the browser executor. Replies ask what Jev is doing, rather than providing authoritative implementation details.

No source repository, repeatable benchmark, or assertion results were identified. Browser interaction is not by itself evidence of test coverage or defect detection.

## Connections and open questions

Our interpretation: P013 offers a concrete architecture to compare with this demo, but it would be speculation to assign that architecture to P016.

Unknowns: whether Jev chooses actions, checks assertions, or both; how failures are detected; and whether tests can replay deterministically. No application tests run.

See [the index](../INDEX.md) for supported connections and untested ideas.
