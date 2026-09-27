# P012 — Email classifier

Creator: Riley Brown (@rileybrown)

Reviewed: 2026-09-26

Status: Creator report reviewed — classifier implementation unverified

Review depth: Read-only review of the sources described below; no independent runtime benchmark.

## Sources

- [Announcement and demo](https://x.com/rileybrown/status/2100404532119269426).

## Problem, workflow, and evidence

The author reports classifying 500 emails in seconds for 3.5 cents. The post includes a video, but no implementation repository was identified in the inspected material. Treat timing and cost as a creator claim about that run, not a general service price or independently established throughput.

The available evidence does not establish the label schema, ground-truth accuracy, batch strategy, or whether classifications trigger any inbox actions. No email account connected and no private message content collected.

## Connections and open questions

Our interpretation: classification could supply suggestions for human inbox triage, but labels alone do not show that messages were routed correctly. Compare P002's categorization concept and P006's richer multi-signal approach.

Unknowns: handling overlapping categories, uncertain labels, important-message recall, and evaluation data.

See [the index](../INDEX.md) for supported connections and untested ideas.
