# Jev research index

A small shared inventory of Jev projects, evidence-backed connections, and ideas to explore.

Start with [INDEX.md](INDEX.md). Detailed research stays in the linked research tasks; this repository keeps the shared index available across computers.

## Use on another computer

Clone this private repository using an authenticated GitHub account with access:

```sh
git clone https://github.com/feraranas/system-one-jev.git
cd system-one-jev
```

Before editing, with a clean working tree:

```sh
git pull --ff-only
```

After updating the index:

```sh
git add INDEX.md
git commit -m "Update Jev research index"
git push
```

If a push is rejected because another computer pushed changes, fetch and reconcile those changes before retrying. Preserve both contributions; do not force-push to bypass a conflict.

Suggested research prompt:

> Read INDEX.md, investigate this project, and update the index.

Git synchronizes committed files. It does not copy research task histories or grant access to linked tasks.
