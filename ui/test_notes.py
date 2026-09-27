import json
import tempfile
import threading
import unittest
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError
from http.server import ThreadingHTTPServer
from notes import Notes, Conflict
from serve import Handler


class NotesTest(unittest.TestCase):
    def test_persistence_conflict_and_project_isolation(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'notes.sqlite3'
            notes = Notes(path)
            self.assertEqual(notes.get('P001')['revision'], 0)
            text = 'Ideas: español\n<script>alert(1)</script>\n\'SQL'
            saved = notes.save('P001', text, 0)
            self.assertEqual(Notes(path).get('P001'), saved)
            with self.assertRaises(Conflict):
                notes.save('P001', 'stale tab', 0)
            self.assertEqual(notes.get('P001')['body'], text)
            self.assertEqual(notes.get('P002')['body'], '')
            notes.save('P001', '', 1)
            self.assertEqual(notes.get('P001')['body'], '')

    def test_http_boundaries(self):
        with tempfile.TemporaryDirectory() as directory:
            server = ThreadingHTTPServer(('127.0.0.1', 0), Handler)
            server.notes = Notes(Path(directory) / 'notes.sqlite3')
            thread = threading.Thread(target=server.serve_forever, daemon=True)
            thread.start()
            base = f'http://127.0.0.1:{server.server_port}'
            def request(path, payload=None, headers=None):
                req = Request(base + path, data=json.dumps(payload).encode() if payload is not None else None,
                              method='PUT' if payload is not None else 'GET',
                              headers=headers or {'Content-Type':'application/json'})
                try:
                    with urlopen(req) as response: return response.status, response.read()
                except HTTPError as error:
                    with error: return error.code, error.read()
            try:
                self.assertEqual(request('/api/notes/P001')[0], 200)
                self.assertEqual(request('/api/notes/P001', {'body':'hello','revision':0})[0], 200)
                self.assertEqual(request('/api/notes/P001', {'body':'stale','revision':0})[0], 409)
                self.assertEqual(request('/api/notes/P999', {'body':'x','revision':0})[0], 404)
                self.assertEqual(request('/api/notes/P001', {'body':7,'revision':1})[0], 400)
                self.assertEqual(request('/api/notes/P001', {'body':'x','revision':1}, {'Content-Type':'application/json','Origin':'https://example.com'})[0], 403)
                self.assertEqual(request('/api/notes/P001', headers={'Host':'example.com'})[0], 403)
                self.assertEqual(request('/.local/notes.sqlite3')[0], 404)
                self.assertEqual(json.loads(request('/api/notes/P001')[1])['body'], 'hello')
            finally:
                server.shutdown();server.server_close();thread.join()


if __name__ == '__main__':
    unittest.main()
