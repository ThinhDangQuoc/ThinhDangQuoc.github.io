import os
import unittest

class TestHTMLStructure(unittest.TestCase):
    def setUp(self):
        self.html_path = os.path.join(os.path.dirname(__file__), "..", "index.html")

    def test_html_exists(self):
        self.assertTrue(os.path.exists(self.html_path))

    def test_required_ids_exist(self):
        with open(self.html_path, "r", encoding="utf-8") as f:
            content = f.read()
        required_ids = [
            "neural-canvas",
            "projects",
            "skills",
            "timeline",
            "contact",
            "btn-copy-email",
            "btn-download-cv",
            "mobile-menu-toggle",
            "contact-form",
            "toast-notification"
        ]
        for item_id in required_ids:
            self.assertIn(f'id="{item_id}"', content, f"Missing element ID: {item_id}")

    def test_schema_json_ld(self):
        with open(self.html_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn('application/ld+json', content)
        self.assertIn('"@type": "Person"', content)
        self.assertIn('Thinh Dang Quoc', content)

if __name__ == "__main__":
    unittest.main()
