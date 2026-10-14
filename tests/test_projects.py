import os
import unittest

class TestProjectsImplementation(unittest.TestCase):
    def setUp(self):
        self.js_path = os.path.join(os.path.dirname(__file__), "..", "js", "projects.js")
        self.css_path = os.path.join(os.path.dirname(__file__), "..", "styles", "architecture.css")
        self.components_path = os.path.join(os.path.dirname(__file__), "..", "styles", "components.css")

    def test_files_exist(self):
        self.assertTrue(os.path.exists(self.js_path))
        self.assertTrue(os.path.exists(self.css_path))
        self.assertTrue(os.path.exists(self.components_path))

    def test_projects_content(self):
        with open(self.js_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("multimodal-video-retrieval-system", content)
        self.assertIn("Reinforcement Learning", content)
        self.assertIn("architecture-svg", content)
        self.assertIn("tab-overview", content)
        self.assertIn("tab-architecture", content)
        self.assertIn("tab-tech", content)

    def test_architecture_css_rules(self):
        with open(self.css_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn(".pipeline-node", content)
        self.assertIn(".pipeline-arrow", content)
        self.assertIn(".node-telemetry", content)

if __name__ == "__main__":
    unittest.main()
