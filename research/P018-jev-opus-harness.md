# P018 — Jev + Opus decision harness

Creator: darkzodchi (@zodchiii)

Reviewed: 2026-09-26

Status: Creator-described workflow — implementation and savings unverified

Review depth: Submitted X post, visible replies, and quoted setup article read in the browser. No harness repository or reproducible benchmark identified in those sources. No configurations installed or executed.

## Sources

- [Submitted workflow post](https://x.com/zodchiii/status/2103881136149848430).
- [Quoted setup-guide post](https://x.com/zodchiii/status/2102703913195729398).
- [Linked Opus setup article](https://x.com/i/article/2102703913195729398), inspected as author commentary, not official API documentation.

## Problem and workflow

The author describes using Jev alongside Opus 5.5 to make repeated, bounded decisions around a coding agent. The proposed decision points are selecting relevant project notes before loading context, routing suitable work to a faster worker, selecting recovery after tool failure, and choosing focused checks before the full test suite.

In the author's description, the harness prepares and validates the alternatives, Jev selects among them, and Opus handles harder reasoning. The harness still executes the selected action. This is a workflow account, not an inspected implementation of those boundaries.

## What makes it interesting

Our interpretation: the same selection primitive can apply at several points in an agent's lifecycle. Instead of only reducing input context, it can influence which worker acts and what happens after an error. Each decision needs its own evidence, allowed options, and correctness check.

## Evidence and limitations

- The author reports approximately 80% lower cost and time in their workflow. No task set, baseline configuration, raw traces, sample size, quality comparison, or complete accounting of model calls was identified in the inspected material. The figure is not a general performance expectation.
- The quoted article concerns Opus configuration, caching, and prompting. It does not establish the submitted post's Jev savings or provide a reproducible Jev harness benchmark.
- The article's model names, prices, API examples, and migration instructions were not independently validated against official documentation and are not adopted as setup guidance here.
- The post mentions a paper and a full Jev guide, but those were not identifiable as direct links in the material inspected. No paper was inferred from that wording.
- Running focused checks before a full suite does not establish that the full suite can safely be skipped.

## Connections and questions

- P001 provides a concrete context-selection tool corresponding to one of this workflow's decision points.
- P005 describes typed judgments and explicit application policy; P018 proposes applying that pattern across a coding harness.
- P013 likewise separates bounded decisions from a generative model and an executor, but operates on browser actions rather than coding-workflow routing.
- Which decision point contributes most to the reported savings? How often does a cheap worker require escalation or rework? Does recovery selection preserve task success?

See I008 in [the index](../INDEX.md#ideas-to-explore) for a proposed controlled experiment.
