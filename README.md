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

## Research notebook UI

From the repository directory, run with Python 3.9 or later:

```sh
python3 ui/serve.py
```

Open [the local notebook](http://127.0.0.1:8765). It includes project search, mechanism filters, full research notes, connections, and ideas. Click **Refresh notes** after pulling or editing files. The UI reads `INDEX.md` and its linked `research/*.md` files; it does not save edits or create a second data store.

The server binds only to your computer's loopback address and exposes only the UI and inventory data. Stop it with Ctrl+C. Use `python3 ui/serve.py --port 8766` if the default port is occupied. On another computer, pull the repository and run the same command. Nothing is publicly hosted.

The Markdown reader supports headings, paragraphs, lists, tables, fenced code, links, inline code, and bold text. Keep project rows in the existing index table format and separate mechanisms with semicolons. Add a `Status:` line to research notes to display their evidence status; notes without one show “Status not recorded.”
