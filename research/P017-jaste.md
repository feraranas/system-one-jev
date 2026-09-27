# P017 — Smart copy/paste / Jaste

Creator: Marcus Lowe (@marcus_lowe)

Reviewed: 2026-09-26

Status: Announcement and beta site reviewed — application not installed

Review depth: Read-only review of the sources described below; no independent runtime benchmark.

## Sources

- [Announcement and beta follow-up](https://x.com/marcus_lowe/status/2101476399488160013).
- [Product site](https://jaste.app).

## Problem, workflow, and evidence

The post presents Jev-powered smart copy/paste; an author reply announces Jaste beta and mentions bring-your-own-key support and a forthcoming local mode. The supplied announcement URL appeared twice and is recorded once.

The current product site offers a Mac beta for Apple silicon and macOS 14 or later. It says clipboard history is not stored on Jaste servers, but relevant text is sent for Smart Paste processing and images remain local. “History not stored” therefore does not mean no text leaves the device. The post's promised local mode was not verified as shipped.

## Connections and open questions

Our interpretation: the interesting primitive is choosing an existing item from context, rather than generating replacement text. P007 retrieves files from intent; Jaste applies contextual matching to clipboard material.

Unknowns: what destination context is used, selection accuracy, retention by processing providers, and implementation of local mode. No app downloaded or clipboard access granted.

See [the index](../INDEX.md) for supported connections and untested ideas.
