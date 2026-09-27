# P006 — Named signals for agent-trace search

Creator: Annabell (@annabellschfr), with a Langfuse workflow described in her linked article

Reviewed: 2026-09-26

Status: Published workflow reviewed — integration not run

Review depth: Submitted post and linked article read in the browser. No Langfuse account configured and no production traces evaluated.

## Sources

- [Submitted post](https://x.com/annabellschfr/status/2103723431711690768).
- [Author article](https://x.com/annabellschfr/article/2102799529074459025), linked from the post.
- [Langfuse background article](https://langfuse.com/blog/2026-09-18-using-typesafes-jev-for-evals), linked by the author; the detailed workflow summarized below comes from her X article.

## Problem and workflow

The post proposes turning conversations into a vector of named signals: frustration, follow-up, correction of the agent, and satisfaction. These dimensions can support session search or clustering, including finding successful interactions.

The article describes independent Noul questions evaluated together over a conversation, with results attached to traces. It reports a Langfuse User Conversation Signal evaluator template, rules for incoming or historical observations, and dashboards or saved views for inspection. Those product steps were not executed here.

Documented lifecycle: conversation → parallel signal judgments → stored trace scores → application filtering or visualization → human investigation. A successful outcome can coexist with earlier mistakes and user corrections.

## What makes it interesting

Our interpretation: retaining several signals avoids flattening a session into one good/bad label. Named dimensions can explain why a trace was retrieved while preserving different kinds of success and failure.

## Evidence and limitations

- The vector in the post is illustrative, not a validated prediction on a dataset inspected here.
- The article describes an integration; production throughput and the claim of economical full-traffic evaluation were not measured here.
- A probability of a signal is not its intensity. We should not interpret a high frustration probability as a calibrated severity score.
- Search explanations identify contributing dimensions; source conversation excerpts are still needed to check the model's interpretation.
- No causal conclusion about why a user was frustrated follows from a signal alone.

## Connections and questions

- P003 uses named judgments for documents; P006 specializes that pattern to agent traces. Shared mechanism is evident, but collaboration or direct influence is not established.
- P005's batching guidance fits this workflow conceptually; we did not inspect the template's implementation.
- How do signal definitions perform on sarcasm, mixed outcomes, and multilingual conversations?

See I003 and I004 in [the index](../INDEX.md#ideas-to-explore).
