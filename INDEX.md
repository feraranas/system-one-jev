# Jev project inventory

A shared index of interesting Jev projects, connections between them, and ideas to explore. Detailed research lives in the linked research tasks.

## Projects

Eighteen entries recorded, including tools, experiments, demos, and workflows. Next project ID: `P019`.

| ID | Project | What makes it interesting | Mechanisms | Research task | Source |
| --- | --- | --- | --- | --- | --- |
| P001 | [jevgrep](research/P001-jevgrep.md) | Uses Jev to select source context before a coding agent implements a change; published cost savings include a solve-rate tradeoff. | Hierarchical discovery; relevance classification; source selection | This inventory task; task link pending | [X announcement](https://x.com/dzhng/status/2103920741481848861), [repository](https://github.com/dzhng/jevgrep) |
| P002 | [Transaction categorization prototype](research/P002-transaction-categorization.md) | Makes transaction classification visible through animated cards and spending charts; creator explicitly says there is no real Jev integration. | Transaction classification concept; progressive visualization | This inventory task; task link pending | [X announcement](https://x.com/willdjthrill/status/2103556432729870627), [creator clarification](https://x.com/willdjthrill/status/2103852099243327706) |
| P003 | [Named-dimension document embeddings](research/P003-named-dimension-embeddings.md) | Turns answers to named questions into reusable search features; described as an experiment in Cora. | Named judgment vectors; semantic search | This inventory task; task link pending | [X post](https://x.com/kieranklaassen/status/2103537214575743221), [explanation](https://x.com/kieranklaassen/status/2103522599414501550) |
| P004 | [Lev](research/P004-lev.md) | Independent Qwen-based decision model with a published comparison harness; not an official open release of Jev. | Typed judgments; bounded answer readout; model comparison | This inventory task; task link pending | [X post](https://x.com/interfaze_ai/status/2103523046774771805), [repository](https://github.com/InterfazeAI/lev) |
| P005 | [TypeSafe agent skill](research/P005-typesafe-agent-skill.md) | Guides coding agents to design typed judgments, batch independent questions, and keep actions in code. | Agent skill; parallel judgments; explicit policy | This inventory task; task link pending | [Discovery post](https://x.com/Mnilax/status/2103901384135295088), [official repository](https://github.com/typesafe-ai/skills) |
| P006 | [Named signals for agent-trace search](research/P006-agent-trace-signals.md) | Keeps satisfaction, corrections, and other signals separately searchable instead of reducing each session to one label. | Named judgment vectors; parallel judgments; trace analysis | This inventory task; task link pending | [X post](https://x.com/annabellschfr/status/2103723431711690768), [article](https://x.com/annabellschfr/article/2102799529074459025) |

| P007 | [Keystroke oracle / Launcher](research/P007-keystroke-oracle.md) | Local candidates are reranked as you type, using recency evidence rather than filename matching alone. | Incremental intent; candidate ranking; explicit execution | This inventory task; task link pending | [Submitted repository](https://github.com/dabit3/jev-experiments), [Discovery post](https://x.com/moritzkremb/status/2100895906103206250) |
| P008 | [Context compaction](research/P008-context-compaction.md) | Selectively retains tool history verbatim instead of generating a replacement summary. | relevance classification; context pruning; parallel judgments | This inventory task; task link pending | [Announcement](https://x.com/tamarajtran/status/2100694549362553153), [Resolved repository](https://github.com/tamaratran/fast-jev-compaction) |
| P009 | [Drawing with voice](research/P009-voice-drawing.md) | Combines speech and pointing context to select and manipulate canvas objects. | Multimodal intent; candidate selection; canvas actions | This inventory task; task link pending | [Drawing demo](https://x.com/jackcheng/status/2100729670991802386), [Author follow-up](https://x.com/jackcheng/status/2100749778787131649) |
| P010 | [Natural-language database search / pg-jev](research/P010-pg-jev.md) | Places semantic judgments inside SQL filtering and ranking without an embedding index. | Semantic predicates; row batching; caching | This inventory task; task link pending | [Announcement](https://x.com/iam_zachi/status/2100749651448054136), [Repository](https://github.com/realZachi/pg-jev) |
| P011 | [Browser controlled with voice](research/P011-voice-browser.md) | Judges partial speech against page targets, then uses policy to act, wait, ask, or ignore. | Incremental intent; DOM candidates; explicit policy | This inventory task; task link pending | [Announcement](https://x.com/moritzkremb/status/2100577979021832365), [Repository](https://github.com/moritzkremb/jev-voice-browser) |
| P012 | [Email classifier](research/P012-email-classifier.md) | Demonstrates inexpensive bulk labeling as a possible inbox triage primitive. | Batch classification; inbox triage | This inventory task; task link pending | [Announcement and demo](https://x.com/rileybrown/status/2100404532119269426) |
| P013 | [Browser Use / jev-ultrafast](research/P013-browser-use-ultrafast.md) | Uses Jev for bounded browser decisions and a small generative model only when text is needed. | DOM candidates; speculative judgments; hybrid generation | This inventory task; task link pending | [Repository](https://github.com/browser-use/jev-ultrafast), [Announcement](https://x.com/gregpr07/status/2100411066966749359) |
| P014 | [Trading bot / jev-trader](research/P014-jev-trader.md) | Separates rapid market judgments from order execution and deterministic position limits. | Time-bounded decisions; explicit policy; order execution | This inventory task; task link pending | [Announcement](https://x.com/jarrodwatts/status/2100356151468585346), [Repository](https://github.com/jarrodwatts/jev-trader) |
| P015 | [JevPilot driving simulator](research/P015-jevpilot.md) | Chooses among locally generated driving paths in a visual simulation. | Candidate trajectories; explicit policy; simulation | This inventory task; task link pending | [Announcement](https://x.com/jpschroeder/status/2100698502531514761), [Discovery post](https://x.com/moritzkremb/status/2100896019584352520), [Repository](https://github.com/standardagents/jevpilot) |
| P016 | [App testing with Jev and OpenCode](research/P016-app-testing.md) | Explores fast application interaction within a coding-agent testing workflow. | Application testing; agent interaction | This inventory task; task link pending | [Announcement and demo](https://x.com/Neriousy/status/2100287208166969746) |
| P017 | [Smart copy/paste / Jaste](research/P017-jaste.md) | Uses contextual selection to choose a clipboard match for smart paste. | Contextual selection; clipboard retrieval | This inventory task; task link pending | [Announcement and beta follow-up](https://x.com/marcus_lowe/status/2101476399488160013), [Product site](https://jaste.app) |

| P018 | [Jev + Opus decision harness](research/P018-jev-opus-harness.md) | Applies bounded selection to context, worker routing, recovery, and checks; creator-reported savings lack a reproducible benchmark. | relevance classification; candidate selection; explicit policy; worker routing | This inventory task; task link pending | [Workflow post](https://x.com/zodchiii/status/2103881136149848430), [quoted guide](https://x.com/i/article/2102703913195729398) |

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

### P001 ↔ P008 — Selecting evidence before and during work

Reason: P001 selects source context; P008 retains useful tool history. Both use relevance judgments to reduce the evidence a downstream agent sees.
Basis: Documented workflows; our comparison, not a shared evaluation.
Evidence: [P001](research/P001-jevgrep.md), [P008](research/P008-context-compaction.md).
Unknowns: Whether fewer tokens preserve dependency facts and later task success.

### P007 ↔ P011 — Intent can be judged before input is complete

Reason: The launcher reranks on typing; the voice browser evaluates partial transcripts. Their execution boundaries differ: explicit Enter versus an act/wait/ask policy.
Basis: Documented mechanisms; our comparison.
Evidence: [P007](research/P007-keystroke-oracle.md), [P011](research/P011-voice-browser.md).
Unknowns: How often early confidence reverses, and which readiness policy prevents premature actions.

### P009 ↔ P011 — Grounding speech in visible targets

Reason: Canvas pointing and browser page elements provide context for a spoken command.
Basis: P009 visible demo frame and P011 documentation; shared abstraction inferred.
Evidence: [P009](research/P009-voice-drawing.md), [P011](research/P011-voice-browser.md).
Unknowns: P009 implementation details and correction behavior; no performance equivalence established.

### P003 ↔ P010 — Precomputed features versus query-time semantic predicates

Reason: P003 proposes reusable document dimensions; pg-jev evaluates language conditions within SQL queries.
Basis: Published descriptions; architectural comparison inferred.
Evidence: [P003](research/P003-named-dimension-embeddings.md), [P010](research/P010-pg-jev.md).
Unknowns: Which repeated queries justify cached features rather than fresh judgments.

### P002 ↔ P012 — Categories become a user-facing view

Reason: P002 visualizes transaction categories; P012 reports email classification.
Basis: Conceptual inference: P002 is a non-integrated prototype, P012 a creator-reported demo.
Evidence: [P002](research/P002-transaction-categorization.md), [P012](research/P012-email-classifier.md).
Unknowns: Label accuracy, ambiguity handling, and downstream action policies.

### P011 ↔ P013 — Two ways to supply text in browser actions

Reason: P011 selects literal transcript spans; P013 uses a small generative model for typing while Jev selects operations and targets.
Basis: Documented architectural difference.
Evidence: [P011](research/P011-voice-browser.md), [P013](research/P013-browser-use-ultrafast.md).
Unknowns: Where extraction stops being sufficient, and the cost and correctness impact of generation.

### P014 ↔ P015 — Model choices meet local control rules

Reason: The trading repo has deadlines and position caps; the simulator has candidate geometry and collision handling.
Basis: Documented separation of judgment and control; our cross-domain inference.
Evidence: [P014](research/P014-jev-trader.md), [P015](research/P015-jevpilot.md).
Unknowns: Failure behavior under delayed answers; similarity does not validate trading returns or real driving safety.

### P013 ↔ P016 — Interaction can support testing but is not an assertion

Reason: P013 documents a browser executor; P016 demonstrates app interaction under a testing label.
Basis: Potential connection inferred; P016 model and assertion roles remain unknown.
Evidence: [P013](research/P013-browser-use-ultrafast.md), [P016](research/P016-app-testing.md).
Unknowns: What independent oracle establishes task success or detects a defect.

### P007 ↔ P017 — Retrieve an existing item from intent and context

Reason: The launcher chooses file candidates; Jaste chooses clipboard matches.
Basis: P007 documentation and P017 product description; abstraction inferred.
Evidence: [P007](research/P007-keystroke-oracle.md), [P017](research/P017-jaste.md).
Unknowns: Which contextual features help enough to justify their privacy and latency costs.

### P001 ↔ P018 — Context selection as one stage of a wider harness

Reason: P001 selects source context for a coding agent; P018 describes selecting project notes before context loading as one of several decision points.
Basis: P001 published tool documentation and P018 creator account; our architectural comparison, not evidence that P018 uses jevgrep.
Evidence: [P001](research/P001-jevgrep.md), [P018](research/P018-jev-opus-harness.md).
Unknowns: Whether P018's context selection preserves dependency coverage and how much it contributes to the claimed savings.

### P005 ↔ P018 — Typed choices need a harness that prepares and validates options

Reason: P005 guides explicit judgment contracts and application policy; P018 describes the harness preparing alternatives for Jev while Opus performs harder reasoning.
Basis: Shared design principle in published descriptions; P018 implementation remains uninspected.
Evidence: [P005](research/P005-typesafe-agent-skill.md), [P018](research/P018-jev-opus-harness.md).
Unknowns: Actual schemas, validation rules, fallback behavior, and whether agent decisions comply with those boundaries.

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
Smallest test: Manually label P001–P006 on four dimensions, then compare a proposed automated extraction against those labels and record disagreements. Do not automate scoring yet.
Status: Untested

### I004 — Compare backends on the same named questions

Idea: Use one fixed set of conversation-signal questions and compare Jev and Lev on synthetic traces, including a service-failure path distinct from negative answers.
Inspired by: P004's independent backend, P005's judgment-design guidance, and P006's trace signals.
Unknown: Whether compatible interfaces yield sufficiently comparable judgments, uncertainty, total cost, and latency. No interchangeability or cost advantage is assumed.
Smallest test: Prepare ten synthetic conversations with reviewed labels, keep question definitions fixed, and compare outputs and end-to-end measurements. Model execution requires a separate experiment; none has been run.
Status: Untested

### I005 — Recoverable compaction with an evidence ledger

Idea: When pruning tool history, retain a small pointer and reason for each removed result so a later missing-evidence check can recover the exact archived output rather than rerun a changing tool.
Inspired by: P001's evidence selection and P008's selective compaction. This is an untested combination, not an established novelty claim.
Unknown: Whether retrieval overhead is lower than simply keeping more history, and whether pointers reveal which omitted facts matter.
Smallest test: Use a synthetic transcript with ten tool results and two facts needed later; compare summary, pruning, and pruning with recoverable pointers on answer correctness and context size.
Status: Untested

### I006 — Predict continuously, commit deliberately

Idea: Expose a provisional target while typing or speaking, and require an explicit commit signal for consequential actions. Record target changes so readiness can be evaluated rather than inferred from one confidence score.
Inspired by: P007's explicit Enter, P011's act/wait policy, and P009's pointed-at canvas objects.
Unknown: Whether reduced false actions outweigh the added interaction step.
Smallest test: Replay twenty synthetic incomplete commands including reversals; measure premature actions, time to stable target, and extra confirmation effort across two policies.
Status: Untested

### I007 — Test the outcome separately from choosing the action

Idea: Give a fast browser actor a separate, task-specific assertion after each meaningful action; preserve a failure trace instead of treating a successful click as task completion.
Inspired by: P013's bounded actions and P016's app-testing demo; P006 suggests searchable failure signals.
Unknown: Whether a separate check detects failures the actor misses without merely repeating its assumptions.
Smallest test: Use a local form with a deliberately broken save handler; compare click completion with an assertion that checks the saved record. Record false passes and added latency.
Status: Untested

### I008 — Measure each harness decision before combining them

Idea: Evaluate context selection, worker routing, recovery selection, and focused-check ordering independently before attributing savings to the combined workflow.
Inspired by: P018's multi-stage harness and P001's documented cost-versus-solve-rate tradeoff. This is an evaluation proposal, not a novelty claim.
Unknown: Whether apparent savings survive equal-quality comparisons after retries, escalations, and all model calls are counted.
Smallest test: On five fixed local coding tasks, compare a baseline with context selection alone and worker routing alone. Keep acceptance checks fixed; record task success, wall time, total model cost, and rework before trying combinations.
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
