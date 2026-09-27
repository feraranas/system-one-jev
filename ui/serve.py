#!/usr/bin/env python3
"""Local, read-only research notebook. No third-party dependencies."""
import argparse
import json
import re
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent.parent
UI = ROOT / 'ui'


def section(text, title):
    match = re.search(r'^## ' + re.escape(title) + r'\s*\n(.*?)(?=^## |\Z)', text, re.M | re.S)
    return re.sub(r'```.*?```', '', match.group(1), flags=re.S).strip() if match else ''


def inventory():
    index = (ROOT / 'INDEX.md').read_text()
    projects = []
    for line in section(index, 'Projects').splitlines():
        cells = [cell.strip() for cell in re.split(r'(?<!\\)\|', line.strip().strip('|'))]
        if len(cells) < 6 or not re.fullmatch(r'P\d+', cells[0]):
            continue
        link = re.search(r'\[([^\]]+)\]\(([^)]+)\)', cells[1])
        path = (ROOT / link[2]).resolve() if link else None
        valid = path and path.is_relative_to(ROOT / 'research') and path.suffix == '.md' and path.is_file()
        research = path.read_text() if valid else 'Research note is not available yet.'
        status = re.search(r'^Status: (.+)$', research, re.M)
        projects.append(dict(status=status[1] if status else 'Status not recorded', id=cells[0], name=link[1] if link else cells[1], summary=cells[2],
                             mechanisms=[s.strip() for s in cells[3].split(';') if s.strip()],
                             task=cells[4], sources=cells[5], path=str(path.relative_to(ROOT)) if valid else None,
                             research=research))
    return dict(projects=projects, connections=section(index, 'Connections').split('Use this format:')[0].strip(),
                ideas=section(index, 'Ideas to explore').split('Use this format:')[0].strip(),
                updated=(re.search(r'^Last updated: (.+)$', index, re.M) or [None, 'Not recorded'])[1])


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        path = urlsplit(self.path).path
        if path == '/api/inventory':
            try:
                body = json.dumps(inventory()).encode()
            except (OSError, ValueError) as exc:
                self.send_error(500, 'Unable to read inventory files')
                print(exc)
                return
            mime = 'application/json; charset=utf-8'
        elif path in ('/', '/index.html', '/app.js', '/style.css'):
            name = 'index.html' if path == '/' else path[1:]
            body = (UI / name).read_bytes()
            mime = {'html': 'text/html', 'js': 'text/javascript', 'css': 'text/css'}[name.rsplit('.', 1)[1]] + '; charset=utf-8'
        else:
            self.send_error(404)
            return
        self.send_response(200)
        self.send_header('Content-Type', mime)
        self.send_header('Cache-Control', 'no-store')
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.end_headers()
        self.wfile.write(body)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8765)
    args = parser.parse_args()
    server = ThreadingHTTPServer(('127.0.0.1', args.port), Handler)
    print(f'Jev notebook: http://127.0.0.1:{args.port}', flush=True)
    server.serve_forever()
