# P014 — Trading bot / jev-trader

Creator: Jarrod Watts (@jarrodwatts)

Reviewed: 2026-09-26

Status: Documentation reviewed — live trading claim not independently verified

Review depth: Read-only review of the sources described below; no independent runtime benchmark.

## Sources

- [Announcement](https://x.com/jarrodwatts/status/2100356151468585346).
- [Repository](https://github.com/jarrodwatts/jev-trader).

## Problem, workflow, and evidence

The post claims real trades on Monad using Jev decisions at roughly block cadence. The README describes MON–USDC order-book observations, post-only limit orders, replacement of previous orders, and fills only when matched. Late decisions can become hold; position caps can override the model's side.

Crucial distinction: the repository defaults to a mock momentum model, and absence of a private key selects dry-run simulated fills. Its documented deployed endpoint uses mock/dry-run settings. Neither cloning the repository nor viewing that endpoint establishes live Jev trading.

## Connections and open questions

Our interpretation: deadlines and application limits are a useful bounded-decision pattern independently of this financial use case. Compare P015's separate local control rules.

Unknowns: the announcement's actual runtime configuration, reproducible execution results, and profitability after fees and slippage. Fast decisions do not demonstrate profitable decisions. No wallet connected, code run, or trades placed.

See [the index](../INDEX.md) for supported connections and untested ideas.
