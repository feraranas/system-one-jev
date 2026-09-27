import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch
import serve


class MediaTest(unittest.TestCase):
    def test_only_research_images_are_resolved(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory).resolve()
            (root / 'research').mkdir()
            (root / 'research' / 'photo name.png').write_bytes(b'fixture')
            (root / 'secret.png').write_bytes(b'private')
            (root / 'research' / 'escape.png').symlink_to(root / 'secret.png')
            (root / 'research' / 'note.md').write_text('private')
            with patch.object(serve, 'ROOT', root):
                self.assertEqual(serve.image_file('/research/photo%20name.png'), root / 'research' / 'photo name.png')
                for url in ['/research/../secret.png', '/research/%2e%2e/secret.png', '/research/escape.png', '/research/note.md', '/research/missing.png']:
                    self.assertIsNone(serve.image_file(url), url)

    def test_sections_preserve_diagrams(self):
        text = '## Connections\n### P001 ↔ P002\n```mermaid\ngraph LR\n A-->B\n```\n## Ideas to explore\n'
        self.assertIn('```mermaid', serve.section(text, 'Connections'))


if __name__ == '__main__':
    unittest.main()
