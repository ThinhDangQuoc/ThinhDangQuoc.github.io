import os
import unittest

class TestCSSFoundation(unittest.TestCase):
    def setUp(self):
        self.css_path = os.path.join(os.path.dirname(__file__), "..", "styles", "main.css")

    def test_css_file_exists(self):
        self.assertTrue(os.path.exists(self.css_path), "styles/main.css must exist")

    def test_design_tokens_defined(self):
        with open(self.css_path, "r", encoding="utf-8") as f:
            content = f.read()
        required_tokens = [
            "--bg-primary",
            "--bg-surface",
            "--accent-violet",
            "--accent-cyan",
            "--border-subtle",
            "--font-sans",
            "--font-mono",
        ]
        for token in required_tokens:
            self.assertIn(token, content, f"Missing token: {token}")

    def test_reduced_motion_query(self):
        with open(self.css_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("prefers-reduced-motion", content)

if __name__ == "__main__":
    unittest.main()
