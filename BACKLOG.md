# Later work

## Browser-based discovery routine — deferred

Requested 2026-09-26. No scheduled job has been created.

Desired routine: use the user's computer browser to review recent X feed items and Hacker News for interesting Jev projects, then surface new discoveries for research.

When this is picked up:

- Define which X feed/searches and Hacker News views to inspect, plus frequency and lookback.
- Validate browser access and behavior when the computer is asleep, offline, or signed out.
- Deduplicate by source URL and project identity; retain provenance.
- Save candidate discoveries separately from researched entries.
- Notify only for meaningful new discoveries, failures, or required user action; stay quiet on unchanged runs.

## Inventory UI — proposed next step

Goal: browse the inventory and inspect evidence, connections, and ideas while continuing to conduct research through tasks.

Recommended first version:

- Searchable project list with mechanism and evidence-status filters.
- Project detail view containing workflow, sources, published claims, limitations, connections, and ideas.
- Separate Connections and Ideas views, with honest empty states.
- A compact, readable research-notebook layout with restrained color and clear evidence labels.
- Repository files remain the source of truth. The first UI is read-only; research updates continue through tasks and Git.
- Include P001 jevgrep as the first real entry. Do not invent additional projects to fill the screen.

Alternatives: a single long rendered index is cheaper but harder to browse as it grows; a graph-first interface becomes useful when enough real connections exist. Neither requires introducing a database now.

UI implementation and hosting choice remain pending design review. A local preview can be reviewed before deciding on private hosting for access across computers.
