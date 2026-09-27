# P015 — JevPilot driving simulator

Creator: Justin Schroeder (@jpschroeder) / Standard Agents; shared by Moritz Kremb

Reviewed: 2026-09-26

Status: Simulator documentation reviewed — not real-vehicle evidence

Review depth: Read-only review of the sources described below; no independent runtime benchmark.

## Sources

- [Announcement](https://x.com/jpschroeder/status/2100698502531514761).
- [Discovery post](https://x.com/moritzkremb/status/2100896019584352520).
- [Repository](https://github.com/standardagents/jevpilot).
- [Hosted demo](https://jevpilot.standardagents.ai).

## Problem, workflow, and evidence

Despite the “Tesla driving” discovery label, JevPilot is a playable driving simulator with Tesla-like presentation. Local code generates steering/speed candidates and geometry; Jev receives compact tables of paths, road conditions, traffic, and destination guidance. Local collision handling and a safety brake remain separate.

The README documents adaptive request rates up to four per second near turns or traffic. The hosted demo requires sign-in; it was not operated. Nothing inspected establishes integration with a physical Tesla or real-road autonomy.

## Connections and open questions

Our interpretation: a bounded candidate generator can encode geometry before a model judges alternatives. This is structurally related to P007's shortlist and P014's decision deadlines, although their domains and consequences differ greatly.

Unknowns: simulated route completion, collision rates, and performance compared with a deterministic controller on identical routes.

See [the index](../INDEX.md) for supported connections and untested ideas.
