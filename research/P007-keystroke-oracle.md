# P007 — Keystroke oracle / Launcher

Creator: Nader Dabit (@dabit3); shared by Moritz Kremb

Reviewed: 2026-09-26

Status: Documentation reviewed — not independently tested

Review depth: Read-only review of the sources described below; no independent runtime benchmark.

## Sources

- [Submitted repository](https://github.com/dabit3/jev-experiments).
- [Launcher README](https://github.com/dabit3/jev-experiments/blob/main/jev-launcher/README.md).
- [Successor repository linked by README](https://github.com/dabit3/launcher).
- [Discovery post](https://x.com/moritzkremb/status/2100895906103206250).

## Problem, workflow, and evidence

Local search produces a shortlist; Jev judges target and intent after query changes; local code ranks results; Enter executes the selected item. Late responses are rejected. The README distinguishes added, opened, and modified timestamps instead of treating all recency as equivalent.

The author reports roughly 100 ms median round trips on earlier single-target runs and a newest-PDF example with probability 1.00. These are historical measurements and examples, not guarantees on every keystroke. Metadata gaps can affect “downloaded” interpretation. The submitted launcher directory is archived and points to a successor repository, which was not separately reviewed.

## Connections and open questions

Our interpretation: intent prediction becomes useful before submission when the shortlist is grounded in local evidence and changing results do not trigger execution themselves. Compare P011's partial speech with this partial typing workflow.

Unknowns: ranking accuracy for ambiguous prefixes, geographic latency, and whether displayed probabilities are calibrated.

See [the index](../INDEX.md) for supported connections and untested ideas.
