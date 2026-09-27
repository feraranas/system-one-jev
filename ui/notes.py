"""Single-user notes; one SQLite connection per operation."""
import sqlite3
from contextlib import closing
from datetime import datetime, timezone


class Conflict(Exception):
    pass


class Notes:
    def __init__(self, path):
        self.path = path
        path.parent.mkdir(parents=True, exist_ok=True)
        with closing(sqlite3.connect(path)) as db, db:
            db.execute('CREATE TABLE IF NOT EXISTS notes (project_id TEXT PRIMARY KEY, body TEXT NOT NULL, revision INTEGER NOT NULL, updated_at TEXT NOT NULL)')

    def get(self, project_id):
        with closing(sqlite3.connect(self.path)) as db:
            db.row_factory = sqlite3.Row
            row = db.execute('SELECT * FROM notes WHERE project_id = ?', (project_id,)).fetchone()
            return dict(row) if row else dict(project_id=project_id, body='', revision=0, updated_at=None)

    def save(self, project_id, body, revision):
        with closing(sqlite3.connect(self.path, timeout=5)) as db, db:
            db.execute('BEGIN IMMEDIATE')
            row = db.execute('SELECT revision FROM notes WHERE project_id = ?', (project_id,)).fetchone()
            if (row[0] if row else 0) != revision:
                raise Conflict()
            updated = datetime.now(timezone.utc).isoformat()
            db.execute('INSERT INTO notes VALUES (?, ?, ?, ?) ON CONFLICT(project_id) DO UPDATE SET body=excluded.body, revision=excluded.revision, updated_at=excluded.updated_at', (project_id, body, revision + 1, updated))
        return dict(project_id=project_id, body=body, revision=revision+1, updated_at=updated)
