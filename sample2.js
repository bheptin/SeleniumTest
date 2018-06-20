const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://developers.google.com');
    await driver.findElement(By.xpath('//*[contains(text(), "Hone your skills on the latest cloud technologies with Google experts at hundreds of breakout sessions and interactive on-demand hands-on labs and bootcamps.  You\'ll have the opportunity to engage with the best minds in cloud technology on how your industry is adapting, innovating, and growing with cloud.")]/div[2]/article/article/section[1]/div/div[1]/div/div[1]/p[1]')).isDisplayed();
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();
