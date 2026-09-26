# P001 — jevgrep

Creator: David (@dzhng)

Reviewed: 2026-09-26

Review depth: Announcement and published documentation/results inspected. No installation, source-code audit, or independent benchmark run.

## Sources

- [X announcement](https://x.com/dzhng/status/2103920741481848861): read in the browser, including author follow-ups; embedded video was unavailable.
- [Repository and README](https://github.com/dzhng/jevgrep): current main branch viewed on the review date.
- [Architecture](https://github.com/dzhng/jevgrep/blob/main/docs/architecture.md): documents the reference design and distinguishes it from production evidence.
- [Published variance repeat](https://github.com/dzhng/jevgrep/blob/main/specs/done/jevgrep/assets/variance-repeat.md): author-maintained evaluation record, not independently reproduced here.

These branch links can change. The findings below describe the material inspected on the review date.

## Problem and workflow

Coding agents need relevant context before editing unfamiliar repositories. Jevgrep offers a retrieval CLI, `jg`, plus a skill explaining when and how the coding agent should use the returned context.

Documented lifecycle:

1. A caller supplies a repository question and search root.
2. The retrieval program explores the repository hierarchy and submits candidates for Jev relevance judgments.
3. The program uses those judgments to choose further exploration, useful files, reading locations, and source excerpts.
4. It returns source with file/line references and indicates incomplete results.
5. The calling coding agent interprets the evidence, edits code, and runs verification.

Jev's role is relevance judgment. The retrieval program executes exploration; the caller owns implementation and testing.

## What makes it interesting

Our interpretation: the reusable idea is dividing context collection into smaller selection decisions. File relevance, useful reading locations, and immediate source inclusion can be decided separately. A relevant file can remain a lead even when an excerpt is not returned.

The architecture explicitly distinguishes unvisited descendants from inspected irrelevant content. That distinction is useful for our own research inventory: missing evidence should remain unknown.

## Evidence and limitations

The announcement claims roughly 40% lower coding-agent cost on SWE-bench. The published repeat reports:

| Measure | Saved baseline | Repeat with jevgrep |
| --- | --- | --- |
| Sol cost, including failed tasks | $7.6220690 | $4.5195532 |
| Official solves | 8/10 | 7/10 |

Reported Sol savings are 40.70%; Jev charges are excluded. Known additional Jev charges total $1.021334412, with the full amount unknown. Both corrected cohorts failed the original quality gate. Baselines were reused; the tuned ten-task Python sample does not establish general savings or equal quality.

These are published results, not our measurements. The project is catalogued as researched, not locally validated.

## Connections and questions

- No cross-project connection yet: this is the first inventory entry.
- Candidate to investigate later: `keltokhy/jgrep`, mentioned by another participant in the announcement replies; not reviewed or accepted as a connection.
- What is the total cost including Jev on a fresh task set?
- How does relevance selection affect missed dependencies and final correctness?
- Does the approach help across languages and coding agents beyond the published sample?

## Idea inspired

See I001 in [the index](../INDEX.md): evaluate an explicit missing-dependency check. Its overlap with existing follow-up retrieval must be established before calling it novel.
