# P004 — Lev

Creator: Interfaze (@interfaze_ai)

Reviewed: 2026-09-26

Status: Public repository reviewed — model not run

Review depth: Announcement and repository README inspected. No weights downloaded, code audit, or independent benchmark execution.

## Sources

- [Announcement](https://x.com/interfaze_ai/status/2103523046774771805).
- [Repository](https://github.com/InterfazeAI/lev), current main viewed on review date.
- [Model link from announcement](https://huggingface.co/interfaze-ai/lev): direct retrieval failed; availability and contents were not independently checked.

## Problem and workflow

The repository describes an independent System One model built with a Qwen3.5-4B LoRA adapter. It explicitly disclaims TypeSafe affiliation. The announcement's framing does not mean TypeSafe released Jev's weights.

Documented flow: state and typed questions → batched model computation → bounded answer readout and calibration → probabilities and typed answers → caller-controlled actions. The repository claims TypeSafe wire-protocol compatibility; this was not tested.

## What makes it interesting

Our interpretation: an independently runnable decision model could let us compare the same application-level judgment across providers and deployment environments. That is an experiment to perform, not proof of interchangeability.

## Evidence and limitations

The README reports 68.9% macro accuracy for Lev versus 76.1% for Jev across 13 S1Bench subsets (3,880 items). It distinguishes 69 ms engine compute from laptop-to-server medians: 414–654 ms for hosted Lev and 335–346 ms for Jev. These are author-published measurements, not ours; compute time is not end-to-end latency.

It acknowledges weaknesses on minimal edits and fine-grained ratings. Its stated English-only scope also sits alongside a German evaluation row, leaving supported-language scope worth clarifying.

## Connections and questions

- P005 concerns designing typed judgments; P004 offers a potential alternative execution backend. Interface compatibility would not establish equivalent accuracy or uncertainty behavior.
- Could P003/P006 feature extraction work with either model? This is an untested comparison, not an implemented integration.
- Before choosing a backend, measure the exact target questions, total cost, latency, and error modes on the same examples.

See I004 in [the index](../INDEX.md#ideas-to-explore).
