from django.test import TestCase
from django.urls import resolve
from django.http import HttpRequest
from revamp_tool.views import home_page


# Create your tests here.
class SmokeTest(TestCase):

    def test_root_url_resolves_to_home_page(self):
        found = resolve('/')
        self.assertEqual(found.func, home_page)

    def test_home_page_returns_correct_html(self):
        request = HttpRequest()
        response = home_page(request)
        self.assertTrue(response.content.startswith(b'<!DOCTYPE html>'))
        self.assertIn(b'<title>REVAMP</title>', response.content)
        self.assertTrue(response.content.endswith(b'</html>'))
