const {Builder, By, Key, until} = require('selenium-webdriver');

(async function test() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://developers.google.com');
    await driver.findElement(By.xpath('//*[contains(text(), "Hone your skills on the latest cloud technologies")]')).isDisplayed();
    await driver.findElement(By.id('google-cloud-next-18br-july-24-26-san-francisco-usa')).click();
    await driver.sleep(5000);
    //await driver.findElement(By.cssSelector('btn.hero-cta-btn.light-blue.btn_border_white')).click();
    //await driver.findElement(By.xpath('//*[contains(text(), "Imagine")]')).isDiplayed();
    await driver.findElement(By.name('firstName')).click();
    await driver.findElement(By.name('firstName')).sendKeys('Brian', Key.RETURN);
    //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();
//*[@id="main"]/span/div[2]/div/div/div[1]/div[1]/div/div[1]/div[1]/h3
