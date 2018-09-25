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

    def test_login(self):
        self.browser.get('http://localhost:8000/accounts/login')
        username_field = self.browser.find_element_by_name('username')
        username_field.clear()
        username_field.send_keys('testuser')
        self.browser.implicitly_wait(2)
        password_field = self.browser.find_element_by_name('password')
        password_field.clear()
        password_field.send_keys('testuser')
        self.browser.implicitly_wait(2)
        submit = self.browser.find_element_by_xpath('//form[1]/input[2]')
        self.browser.implicitly_wait(2)
        submit.submit()


if __name__ == '__main__':
    unittest.main(warnings='ignore')


# assertEqual, assertTrue, assertFalse
# useful implicitly_wait(3) would make the browser wait
# seconds to give it time to load.
