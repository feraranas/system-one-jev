# P009 — Drawing with voice

Creator: Jack Cheng (@jackcheng)

Reviewed: 2026-09-26

Status: Public demo reviewed — implementation unverified

Review depth: Read-only review of the sources described below; no independent runtime benchmark.

## Sources

- [Drawing demo](https://x.com/jackcheng/status/2100729670991802386).
- [Author follow-up](https://x.com/jackcheng/status/2100749778787131649).

## Problem, workflow, and evidence

The visible demo frame shows a drawing canvas with selected shapes and separate input, Jev, and canvas panels. The input combines speech with pointing context; the judgment panel exposes action and target probabilities; the canvas panel reports selected shapes. This supports the user's description of voice-driven drawing, but a frame is not a complete implementation audit.

The follow-up links an Every article about Jev generally. Its headline's 0.7-second figure concerns judging written material, not the drawing workflow. No project repository was identified in the inspected posts.

## Connections and open questions

Our interpretation: pointing supplies a candidate neighborhood while speech supplies the intended operation. This may resolve commands such as “these” more effectively than speech alone. Compare P011's DOM targets.

Unknowns: speech recognition, gesture tracking, executor details, correction behavior, and end-to-end accuracy. We did not reproduce the interaction.

See [the index](../INDEX.md) for supported connections and untested ideas.
