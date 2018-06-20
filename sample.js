const {Builder, By, Key, until} = require('selenium-webdriver');

(async function test() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://developers.google.com');
    await driver.findElement(By.xpath('//*[contains(text(), "Hone your skills on the latest cloud technologies")]')).isDisplayed();
    await driver.findElement(By.id('google-cloud-next-18br-july-24-26-san-francisco-usa')).click();
    await driver.sleep(5000);
    await driver.findElement(By.name('firstName')).click();
    await driver.sleep(2000);
    await driver.findElement(By.name('firstName')).sendKeys('Brian', Key.RETURN);
    await driver.sleep(2000);
    await driver.findElement(By.name('lastName')).sendKeys('Heptinstall', Key.RETURN);
    await driver.sleep(2000);
    await driver.findElement(By.name('email')).sendKeys('bheptin@gmail.com', Key.RETURN);
    await driver.sleep(2000);
    await driver.findElement(By.name('jobTitle')).sendKeys('QA Tester', Key.RETURN);
    await driver.sleep(2000);
    await driver.findElement(By.name('company')).sendKeys('Influence Health', Key.RETURN);
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="industry"]/option[3]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="country"]/option[232]')).click();
    await driver.sleep(5000);
  } finally {
    await driver.quit();
  }
})();
