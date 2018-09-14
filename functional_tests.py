from selenium import webdriver
import unittest


class NewVisitorTest(unittest.TestCase):
	def setUp(self):
		self.browser = webdriver.Firefox()

	def tearDown(self):
		self.browser.quit()

	def test_something(self):
		self.browser.get('http://localhost:8000')
		self.assertIn('REVAMP', self.browser.title)
		self.fail('Finish!')

if __name__ == '__main__':
	unittest.main(warnings='ignore')


## assertEqual, assertTrue, assertFalse
## useful implicitly_wait(3) would make the browser wait 3 
## seconds to give it time to load. 
