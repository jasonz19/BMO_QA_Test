/*Test suite:
    Feature: Use the website to find restaurants
            So that I can order food
            As a hungry customer
            I want to be able to find restaurants in my area
    Scenario 1) : Search for restaurants in an area
            Enter area code "AR51 1AA" in search bar
            Click the serch button.
            expected page display resturant near that area code.
    Scenario 2) : Search for restaurants with invaild area code.
            Enter area code L4G 2S9 which a canadian area code.
            Click the serch button.
            Expected an error message display to user.           
    Scenario 3): Search for restaurants with special characters.
            Enter <<!@#$W%^&*()_+ >> in search text field.
            Click the serch button.
            Expected an error message display to user.
*/
describe('Use the website to find restaurants', function() {
  var boxInput;
  var addButton;

  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://www.just-eat.co.uk/');
  });

  afterEach(function() {
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  });

  it('Search for restaurants with correct area code', function() {
    element(by.name('postcode')).sendKeys("AR51 1AA");
    element(by.xpath("//button[@data-test-id='find-restaurants-button']")).click()
    console.log(browser.getTitle());
    expect(browser.getTitle()).toEqual('Restaurants and takeaways in Area51, AR51 | Just Eat');
  });

  it('Search for restaurants with invaild postcode', function() {
    element(by.name('postcode')).clear();
    element(by.name('postcode')).sendKeys("L4G 2S9");
    element(by.xpath("//button[@data-test-id='find-restaurants-button']")).click()
    console.log(browser.getTitle());
    // make sure we still at the search page.
    expect(browser.getTitle()).toEqual('Order takeaway online from 30,000+ food delivery restaurants | Just Eat');
    //check to see error message was display.
    expect(element(by.id('errorMessage')).getText()).toEqual('Please enter a full, valid postcode');
  });

  it('Search for restaurants with invaild special characters.', function() {
    element(by.name('postcode')).clear();
    element(by.name('postcode')).sendKeys("<<!@#$W%^&*()_+ >>");
    element(by.xpath("//button[@data-test-id='find-restaurants-button']")).click()
    console.log(browser.getTitle());
    expect(browser.getTitle()).toEqual('Order takeaway online from 30,000+ food delivery restaurants | Just Eat');
    //check to see error message was display.
    expect(element(by.id('errorMessage')).getText()).toEqual('Please enter a full, valid postcode');
  });


});
