# P002 — Transaction categorization prototype

Creator: Will Newton (@willdjthrill)

Reviewed: 2026-09-26

Status: Design prototype — no live Jev integration

Review depth: Original announcement, visible demo frame, and expanded author FAQ inspected in the browser. No executable implementation, classifier prompt, or benchmark was verified.

## Sources

- [Original announcement, September 25](https://x.com/willdjthrill/status/2103556432729870627): presents a Jev transaction-categorization concept and suggests replacing QuickBooks.
- [Author clarification, September 26](https://x.com/willdjthrill/status/2103852099243327706): explicitly says this is a design prototype rather than a real Jev implementation, so there is no classification prompt to share.

## Problem and workflow

Concept: categorize transactions and summarize spending visually. This is the intended behavior communicated by the post, not a verified integration.

At roughly 00:12 of the 21-second demo, the visible UI contains stacked transaction cards, a categorized donut chart, and money-out bars. The recorded animation demonstrates a presentation, not model accuracy or a live processing pipeline.

A possible implementation lifecycle, inferred by us:

1. Import and normalize transaction records.
2. Supply a transaction and allowed category definitions for classification.
3. Apply application rules to accept a category or request review.
4. Persist the selected category and update spending summaries.

The input format, classifier schema, acceptance rules, storage, bank connection, and accounting/export integration are unknown. Jev execution is explicitly absent from the prototype according to the creator.

## What makes it interesting

Our interpretation: the paper-stack animation makes a batch of records feel like individual items being processed, while charts communicate an accumulating result. That can make a classification workflow understandable before the backend exists.

The author describes iterating the design in code with Opus 5.5, working through the paper stack, charts, detail fixes, and success state. This is a creator report; we did not inspect its development artifacts.

## Evidence and limitations

- Confirmed source statement: the creator identifies this as a design prototype, not a working Jev integration.
- Visually observed: transaction cards and category/spending charts in the recorded demo.
- Not established: categorization quality, processing speed, cost, robustness to ambiguous merchants, or accounting correctness.
- No repository or runnable app was linked in the inspected announcement or expanded FAQ. This does not establish that none exists elsewhere.
- The QuickBooks comparison is aspirational. A categorization demo does not demonstrate replacement of a full accounting product.

## Connections and questions

- P001 ↔ P002: both concern selecting useful labels or candidates from input records. P001 documents a working retrieval tool; P002 illustrates a proposed transaction workflow. This is our conceptual comparison, not evidence of equivalent implementations.
- P001 returns context for another agent to act on; P002 visually emphasizes a user-facing aggregate. The executor and persistence behind P002 are unspecified.
- What should happen when a merchant description supports several categories?
- Should users be able to correct labels and reuse those corrections on later imports?
- How would we distinguish a model judgment from an explicit user rule?

## Idea inspired

See I002 in [the index](../INDEX.md#ideas-to-explore): a classification result that includes its source evidence and an explicit unresolved state. The usefulness of that design is a hypothesis; novelty has not been investigated.
