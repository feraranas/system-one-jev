# Jev project inventory

A shared index of interesting Jev projects, connections between them, and ideas to explore. Detailed research lives in the linked research tasks.

## Projects

Six entries recorded, including tools, experiments, and workflows. Next project ID: `P007`.

| ID | Project | What makes it interesting | Mechanisms | Research task | Source |
| --- | --- | --- | --- | --- | --- |
| P001 | [jevgrep](research/P001-jevgrep.md) | Uses Jev to select source context before a coding agent implements a change; published cost savings include a solve-rate tradeoff. | Hierarchical discovery; relevance classification; source selection | This inventory task; task link pending | [X announcement](https://x.com/dzhng/status/2103920741481848861), [repository](https://github.com/dzhng/jevgrep) |
| P002 | [Transaction categorization prototype](research/P002-transaction-categorization.md) | Makes transaction classification visible through animated cards and spending charts; creator explicitly says there is no real Jev integration. | Transaction classification concept; progressive visualization | This inventory task; task link pending | [X announcement](https://x.com/willdjthrill/status/2103556432729870627), [creator clarification](https://x.com/willdjthrill/status/2103852099243327706) |
| P003 | [Named-dimension document embeddings](research/P003-named-dimension-embeddings.md) | Turns answers to named questions into reusable search features; described as an experiment in Cora. | Named judgment vectors; semantic search | This inventory task; task link pending | [X post](https://x.com/kieranklaassen/status/2103537214575743221), [explanation](https://x.com/kieranklaassen/status/2103522599414501550) |
| P004 | [Lev](research/P004-lev.md) | Independent Qwen-based decision model with a published comparison harness; not an official open release of Jev. | Typed judgments; bounded answer readout; model comparison | This inventory task; task link pending | [X post](https://x.com/interfaze_ai/status/2103523046774771805), [repository](https://github.com/InterfazeAI/lev) |
| P005 | [TypeSafe agent skill](research/P005-typesafe-agent-skill.md) | Guides coding agents to design typed judgments, batch independent questions, and keep actions in code. | Agent skill; parallel judgments; explicit policy | This inventory task; task link pending | [Discovery post](https://x.com/Mnilax/status/2103901384135295088), [official repository](https://github.com/typesafe-ai/skills) |
| P006 | [Named signals for agent-trace search](research/P006-agent-trace-signals.md) | Keeps satisfaction, corrections, and other signals separately searchable instead of reducing each session to one label. | Named judgment vectors; parallel judgments; trace analysis | This inventory task; task link pending | [X post](https://x.com/annabellschfr/status/2103723431711690768), [article](https://x.com/annabellschfr/article/2102799529074459025) |

## Connections

### P001 ↔ P002 — Classification before downstream action

Reason: P001 selects relevant code for a coding agent; P002 proposes categories for transactions and displays spending summaries. Both illustrate a judgment step feeding another action or presentation.
Basis: Our conceptual inference from P001's published architecture and P002's design prototype. P002 has no live Jev integration according to its creator.
Evidence: [P001 research](research/P001-jevgrep.md), [P002 research](research/P002-transaction-categorization.md), [P001 architecture](https://github.com/dzhng/jevgrep/blob/main/docs/architecture.md), [P002 clarification](https://x.com/willdjthrill/status/2103852099243327706).
Unknowns: P002's actual classifier contract and executor are unspecified. Shared conceptual structure does not establish compatible code or comparable performance.

### P003 ↔ P006 — Named judgments become reusable search features

Reason: Both authors propose numeric vectors whose axes have explicit meanings. P003 covers documents; P006 specializes the approach to conversation signals.
Basis: Shared mechanism described in both sources; our comparison does not establish collaboration or direct influence.
Evidence: [P003](research/P003-named-dimension-embeddings.md), [P006](research/P006-agent-trace-signals.md).
Unknowns: Retrieval quality and feature coverage on a shared evaluation set. Related QA-Emb prior work means the general pattern is not newly established here.

### P001 ↔ P003 — Query-time retrieval versus reusable document features

Reason: P001 selects repository evidence for a particular question; P003 proposes scoring named features ahead of later searches. These are contrasting retrieval designs worth comparing.
Basis: Our architectural comparison of published descriptions, not a head-to-head benchmark.
Evidence: [P001](research/P001-jevgrep.md), [P003](research/P003-named-dimension-embeddings.md).
Unknowns: Whether a hybrid approach improves recall enough to justify feature extraction and maintenance.

### P001 ↔ P005 — Skills shape how coding agents use judgments

Reason: P001's skill teaches use of a retrieval CLI; P005 guides construction of typed-decision applications. Both put workflow guidance beside the underlying capability.
Basis: Published skill descriptions; effectiveness and actual agent compliance remain unmeasured here.
Evidence: [P001](research/P001-jevgrep.md), [P005](research/P005-typesafe-agent-skill.md).
Unknowns: How much each skill changes downstream correctness compared with ordinary documentation.

### P005 ↔ P006 — Multiple independent judgments over one state

Reason: The skill recommends grouping independent questions; the trace workflow evaluates several conversation signals together.
Basis: Matching documented pattern; we did not inspect or run the Langfuse template implementation.
Evidence: [P005](research/P005-typesafe-agent-skill.md), [P006](research/P006-agent-trace-signals.md).
Unknowns: Application-specific accuracy, full cost, and failure handling.

### P004 ↔ P005 — Separate judgment design from model execution

Reason: P005 describes how to structure typed-decision workflows; P004 advertises a compatible independent backend that could be evaluated against the same questions.
Basis: Proposed compatibility experiment based on repository claims, not a demonstrated integration.
Evidence: [P004](research/P004-lev.md), [P005](research/P005-typesafe-agent-skill.md).
Unknowns: Behavioral compatibility, calibration differences, supported inputs, and performance on our chosen workload.

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

### I003 — Explainable discovery filters for this inventory

Idea: Define a small set of named research questions, such as whether an entry has executable code, published measurements, or an explicit review path. Use the answers to suggest comparisons while showing supporting passages and unknown states.
Inspired by: P003's document features and P006's multi-signal trace search.
Unknown: Whether model-derived features improve discovery beyond manually maintained tags; missing evidence must not become a confident negative.
Smallest test: Manually label the six current entries on four dimensions, then compare a proposed automated extraction against those labels and record disagreements. Do not automate scoring yet.
Status: Untested

### I004 — Compare backends on the same named questions

Idea: Use one fixed set of conversation-signal questions and compare Jev and Lev on synthetic traces, including a service-failure path distinct from negative answers.
Inspired by: P004's independent backend, P005's judgment-design guidance, and P006's trace signals.
Unknown: Whether compatible interfaces yield sufficiently comparable judgments, uncertainty, total cost, and latency. No interchangeability or cost advantage is assumed.
Smallest test: Prepare ten synthetic conversations with reviewed labels, keep question definitions fixed, and compare outputs and end-to-end measurements. Model execution requires a separate experiment; none has been run.
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
