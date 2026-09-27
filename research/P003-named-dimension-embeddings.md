# P003 — Named-dimension document embeddings

Creator: Kieran Klaassen (@kieranklaassen)

Reviewed: 2026-09-26

Status: Creator-described experiment — not independently tested

Review depth: Announcement and expanded quoted explanation read; related paper abstract inspected. No code or retrieval benchmark run.

## Sources

- [Submitted post](https://x.com/kieranklaassen/status/2103537214575743221).
- [Detailed explanation](https://x.com/kieranklaassen/status/2103522599414501550), expanded in the submitted post.
- [QA-Emb paper, May 2024](https://arxiv.org/abs/2405.16714): prior work on interpretable features formed from answers to yes/no questions. Abstract reviewed, not full experimental methods.

## Problem and workflow

The creator proposes representing documents with named judgments, then comparing their numeric vectors. Examples cover email, articles, and support tickets. He says he is trying the approach in Cora; production deployment is not established here.

Described lifecycle: define questions → evaluate each document → collect answers in a fixed order → construct a query vector over the same dimensions → rank with cosine similarity in code.

For email, the named axes concern customer identity, urgency, billing, and need for a reply. Jev supplies judgments; ordinary code stores and compares vectors. The search results are the downstream output.

## What makes it interesting

Our interpretation: the feature definitions become an editable search interface. A person can inspect which named dimensions contributed to a match and experiment with weighting preferences.

## Evidence and limitations

- The post describes an experiment; no executable repository or measured retrieval evaluation was inspected.
- Named dimensions make the representation interpretable, not necessarily correct or complete.
- Our analysis: cosine similarity measures direction. A zero-valued query dimension does not by itself enforce exclusion, and an all-zero vector needs explicit handling. Test the retrieval rule against intended semantics.
- Adding a dimension requires evaluating it for existing documents before comparisons are consistent.
- QA-Emb establishes related prior work; do not describe the general idea as newly invented by this post.

## Connections and questions

- P006 applies the same named-judgment pattern to agent sessions.
- P001 selects source context for a particular question; P003 proposes precomputed reusable features. This comparison does not establish either method as universally better.
- How well do selected questions cover future queries? Compare against relevance labels, not just intuitive examples.

See I003 in [the index](../INDEX.md#ideas-to-explore).
