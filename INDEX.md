# Jev project inventory

A shared index of interesting Jev projects, connections between them, and ideas to explore. Detailed research lives in the linked research tasks.

## Projects

Two projects recorded. Next project ID: `P003`.

| ID | Project | What makes it interesting | Mechanisms | Research task | Source |
| --- | --- | --- | --- | --- | --- |
| P001 | [jevgrep](research/P001-jevgrep.md) | Uses Jev to select source context before a coding agent implements a change; published cost savings include a solve-rate tradeoff. | Hierarchical discovery; relevance classification; source selection | This inventory task; task link pending | [X announcement](https://x.com/dzhng/status/2103920741481848861), [repository](https://github.com/dzhng/jevgrep) |
| P002 | [Transaction categorization prototype](research/P002-transaction-categorization.md) | Makes transaction classification visible through animated cards and spending charts; creator explicitly says there is no real Jev integration. | Transaction classification concept; progressive visualization | This inventory task; task link pending | [X announcement](https://x.com/willdjthrill/status/2103556432729870627), [creator clarification](https://x.com/willdjthrill/status/2103852099243327706) |

## Connections

### P001 ↔ P002 — Classification before downstream action

Reason: P001 selects relevant code for a coding agent; P002 proposes categories for transactions and displays spending summaries. Both illustrate a judgment step feeding another action or presentation.
Basis: Our conceptual inference from P001's published architecture and P002's design prototype. P002 has no live Jev integration according to its creator.
Evidence: [P001 research](research/P001-jevgrep.md), [P002 research](research/P002-transaction-categorization.md), [P001 architecture](https://github.com/dzhng/jevgrep/blob/main/docs/architecture.md), [P002 clarification](https://x.com/willdjthrill/status/2103852099243327706).
Unknowns: P002's actual classifier contract and executor are unspecified. Shared conceptual structure does not establish compatible code or comparable performance.

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

### I002 — Show evidence and unresolved cases alongside each category

Idea: For transaction categorization, retain the original description beside a suggested category and leave ambiguous cases explicitly unresolved instead of making the chart appear complete.
Inspired by: P001's separation of useful leads from confident excerpts and its incomplete-discovery reporting; P002's visible classification-to-summary concept.
Unknown: Whether the additional evidence and review state improve users' ability to correct misclassification. This is a design hypothesis, not an established novel invention.
Smallest test: Use ten synthetic transaction descriptions, including ambiguous merchants, to compare forced categorization with a review state. Record incorrect accepted labels and review effort; do not use real financial data for the first test.
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
