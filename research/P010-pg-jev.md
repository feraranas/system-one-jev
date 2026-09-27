# P010 — Natural-language database search / pg-jev

Creator: Zachi (@iam_zachi; realZachi on GitHub)

Reviewed: 2026-09-26

Status: Documentation reviewed — database extension not run

Review depth: Read-only review of the sources described below; no independent runtime benchmark.

## Sources

- [Announcement](https://x.com/iam_zachi/status/2100749651448054136).
- [Repository](https://github.com/realZachi/pg-jev).

## Problem, workflow, and evidence

The PostgreSQL extension documents boolean, probability, choice, and score functions over rows. SQL controls the query; Jev supplies judgments. Read-ahead batches, bounded concurrency, and a session cache reduce repeated network work. Anonymous CTE rows do not receive the same read-ahead optimization.

The post describes plans to expand an example from 129 to roughly 4,500 rows. The current README separately reports a 2,000-row benchmark: roughly 3.5 seconds initially versus 50 ms cached. These are different contexts, not evidence that the announced expansion was verified. Its batching experiments also report accuracy loss at larger batch sizes.

## Connections and open questions

Our interpretation: this moves semantic selection to where structured filtering already happens. Compare P003's reusable document features with query-time predicates here.

Unknowns: representative query accuracy, cache invalidation behavior, query-planner interactions, and cold versus warm costs under real workloads. No database created or extension installed.

See [the index](../INDEX.md) for supported connections and untested ideas.
