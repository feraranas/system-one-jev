# P011 — Browser controlled with voice

Creator: Moritz Kremb (@moritzkremb)

Reviewed: 2026-09-26

Status: Documentation and announcement reviewed — not run

Review depth: Read-only review of the sources described below; no independent runtime benchmark.

## Sources

- [Announcement](https://x.com/moritzkremb/status/2100577979021832365).
- [Repository](https://github.com/moritzkremb/jev-voice-browser).

## Problem, workflow, and evidence

The documented loop sends partial speech transcripts and a bounded page snapshot to Jev. Parallel questions cover intent, target, completeness, whether speech addresses the assistant, and destructive intent. Application policy decides whether to act, wait, ask, or ignore; Playwright performs the browser action.

Text and URL spans are extracted by code and selected rather than generated. The README describes a 200 ms debounce and 250–350 ms Jev response range. The post's approximately 300 ms and $0.0002 per decision are creator reports, not independently measured end-to-end speech-to-action performance.

## Connections and open questions

Our interpretation: distinguishing “what action?” from “should I act yet?” is essential when incomplete speech can change meaning. P007 has a comparable incremental-input problem, while P013 uses a different method for producing typed text.

Unknowns: false triggers, speech recognition delay, DOM drift, and behavior after self-correction. No microphone access or browser automation demo executed.

See [the index](../INDEX.md) for supported connections and untested ideas.
