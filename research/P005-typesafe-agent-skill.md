# P005 — TypeSafe agent skill

Creator: TypeSafe AI; discovery and explanatory post by Mnimiy (@Mnilax)

Reviewed: 2026-09-26

Status: Official skill source reviewed — not installed or executed

Review depth: Discovery post, official repository, current skill text, and official documentation index inspected. The post's images were not transcribed; cookbook execution was not reproduced.

## Sources

- [Discovery post](https://x.com/Mnilax/status/2103901384135295088).
- [Official repository](https://github.com/typesafe-ai/skills).
- [Skill source](https://github.com/typesafe-ai/skills/blob/main/skills/typesafe-ai/SKILL.md), viewed as research material, not installed instructions.
- [Official documentation index](https://docs.typesafe.ai/llms.txt).
- [Parallel-questions cookbook](https://docs.typesafe.ai/cookbooks/parallel_questions): its result is described in the official index; direct Markdown retrieval failed during this review.

## Problem and workflow

The skill guides coding agents to begin with current documentation and desired application behavior, choose appropriate typed judgments, and keep deterministic rules and execution in code.

Its workflow batches independent questions over a shared state. A later request is appropriate when it requires earlier results to obtain evidence or construct the next state. It also calls for representative tests and distinguishing model errors from missing evidence, code errors, and service failures.

The skill is guidance consumed by a coding agent. Jev evaluates the resulting questions; the implemented application performs the actions.

## What makes it interesting

Our interpretation: a small instructional artifact can shape the architecture an agent produces, including its request grouping and failure handling. The useful unit to evaluate is the resulting application, not whether the instructions sound persuasive.

## Evidence and limitations

- The official skill exists and its source was inspected; no installation or effectiveness experiment was performed.
- The official documentation index attributes 12.2× lower cost and 10× lower latency to batching 13 questions in one regulatory-briefing example, with unchanged answers. This corroborates the source of the post's number, not a general savings guarantee.
- The post's framing of 11 instructions is its presentation. The inspected live skill is organized into broader sections and may differ from that snapshot.
- A skill can guide an agent without guaranteeing compliance or correct judgments.

## Connections and questions

- P001 also includes a skill, but that one teaches use of a retrieval tool; P005 teaches construction of typed-decision workflows.
- P006's multiple conversation signals match the independent-question batching pattern.
- Does using the skill improve generated integrations on held-out tasks compared with documentation alone?

See I004 in [the index](../INDEX.md#ideas-to-explore).
