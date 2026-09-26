# Jev project inventory

A shared index of interesting Jev projects, connections between them, and ideas to explore. Detailed research lives in the linked research tasks.

## Projects

One project recorded. Next project ID: `P002`.

| ID | Project | What makes it interesting | Mechanisms | Research task | Source |
| --- | --- | --- | --- | --- | --- |
| P001 | [jevgrep](research/P001-jevgrep.md) | Uses Jev to select source context before a coding agent implements a change; published cost savings include a solve-rate tradeoff. | Hierarchical discovery; relevance classification; source selection | This inventory task; task link pending | [X announcement](https://x.com/dzhng/status/2103920741481848861), [repository](https://github.com/dzhng/jevgrep) |

## Connections

No connections recorded yet. Add an entry when there is a concrete reason to connect projects.

Use this format:

```text
### P001 ↔ P002 — [relationship]
Reason: [Explain the shared mechanism, difference, or complementary capability.]
Basis: [Demonstrated, creator-reported, or inferred; specify each side if different.]
Evidence: [Links to relevant research or source passages.]
Unknowns: [What still needs checking, if anything.]
```

## Ideas to explore

### I001 — Find the missing dependency before stopping research

Idea: After selecting source context, check whether named dependencies or related implementations remain unexplored, and request a targeted second pass.
Inspired by: P001's separation of useful file locations from selected source; its documented risk of incomplete discovery. This is a research direction, not a claim of novelty over jevgrep's existing follow-up behavior.
Unknown: Whether an additional pass improves coverage enough to justify its cost.
Smallest test: On one public repository question with a known cross-file dependency, compare selected evidence with and without the extra check; record missed dependencies, total retrieval cost, and downstream correctness.
Status: Untested

Proposed combinations remain hypotheses until tested.

Use this format:

```text
### I001 — [Idea title]
Idea: [Describe the proposed behavior and why it could be useful.]
Inspired by: [Project IDs and relevant connections.]
Unknown: [The key assumption or uncertainty.]
Smallest test: [One concrete example or experiment.]
Status: Untested
```

## Upkeep

- Read this index at the start of a project investigation or synthesis task.
- Reuse an existing project entry when researching the same project again. Assign new projects the next unused `P` ID and ideas the next unused `I` ID; never renumber existing entries.
- Keep project rows concise. Link to the research task and original sources using verified URLs; mark unavailable links as pending rather than inventing them.
- Keep mechanism names consistent where their meanings match. Explain any meaningful difference in the research.
- Add supported connections autonomously. Clearly label creator claims and our inferences; preserve uncertainty and conflicting evidence.
- Record ideas with their origins and a smallest test. Update their status and record results when investigated.
- Reread the current file immediately before editing and preserve unrelated changes. Coordinate overlapping edits; this file does not provide automatic conflict resolution.
- Tasks must have access to this project directory or a synced copy to use the index. Update it explicitly as part of research; it does not synchronize task contents automatically.

Last updated: 2026-09-26
