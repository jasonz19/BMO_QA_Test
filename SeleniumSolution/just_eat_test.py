from selenium import webdriver
import unittest
import HtmlTestRunner


class JustEatTest(unittest.TestCase):
    """test just eat suite"""

    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome(executable_path="c:/WebDrivers/chromedriver.exe")
        cls.driver.maximize_window()

    @classmethod
    def tearDownClass(cls):
        cls.driver.close()

    def setUp(self):
        self.driver.delete_all_cookies()

    def test_search_areacode(self):
        self.driver.get("http://www.just-eat.co.uk/")
        assert "Order takeaway online from 30,000+ food delivery restaurants | Just Eat" in self.driver.title
        self.driver.find_element_by_name('postcode').send_keys("AR51 1AA")
        self.driver.find_element_by_xpath("//button[@data-test-id='find-restaurants-button']").click()
        assert "Restaurants and takeaways in Area51, AR51 | Just Eat" in self.driver.title

    def test_search_invaild_areacode(self):
        self.driver.get("http://www.just-eat.co.uk/")
        assert "Order takeaway online from 30,000+ food delivery restaurants | Just Eat" in self.driver.title
        self.driver.find_element_by_name('postcode').send_keys("")
        self.driver.find_element_by_xpath("//button[@data-test-id='find-restaurants-button']").click()
        assert "Order takeaway online from 30,000+ food delivery restaurants | Just Eat" in self.driver.title
        assert "Please enter a postcode" in self.driver.find_element_by_id('errorMessage').text

    def test_search_special_character(self):
        self.driver.get("http://www.just-eat.co.uk/")
        assert "Order takeaway online from 30,000+ food delivery restaurants | Just Eat" in self.driver.title
        self.driver.find_element_by_name('postcode').send_keys("<!@#$W%^&*()_+ >")
        self.driver.find_element_by_xpath("//button[@data-test-id='find-restaurants-button']").click()
        assert "Order takeaway online from 30,000+ food delivery restaurants | Just Eat" in self.driver.title
        assert "Please enter a full, valid postcode" in self.driver.find_element_by_id('errorMessage').text


if __name__ == "__main__":
    unittest.main(testRunner=HtmlTestRunner.HTMLTestRunner())





