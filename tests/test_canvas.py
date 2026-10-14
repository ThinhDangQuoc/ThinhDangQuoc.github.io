import os
import unittest

class TestCanvasScript(unittest.TestCase):
    def setUp(self):
        self.canvas_path = os.path.join(os.path.dirname(__file__), "..", "js", "canvas-bg.js")

    def test_file_exists(self):
        self.assertTrue(os.path.exists(self.canvas_path))

    def test_required_canvas_features(self):
        with open(self.canvas_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("neural-canvas", content)
        self.assertIn("requestAnimationFrame", content)
        self.assertIn("prefers-reduced-motion", content)
        self.assertIn("IntersectionObserver", content)

if __name__ == "__main__":
    unittest.main()
