import os
import unittest

class TestAppController(unittest.TestCase):
    def setUp(self):
        self.app_path = os.path.join(os.path.dirname(__file__), "..", "js", "app.js")

    def test_file_exists(self):
        self.assertTrue(os.path.exists(self.app_path))

    def test_required_features(self):
        with open(self.app_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("skillsData", content)
        self.assertIn("timelineData", content)
        self.assertIn("btn-copy-email", content)
        self.assertIn("showToast", content)
        self.assertIn("contact-form", content)

if __name__ == "__main__":
    unittest.main()
