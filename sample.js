var webdriver = require('selenium-webdriver');
var {By, click} = require('selenium-webdriver');

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://developers.google.com');

driver.findElement(By.id('google-cloud-next-18br-july-24-26-san-francisco-usa')).click();

await driver.sleep(5000);
await driver.findElement(By.xpath('//*[@id="main"]/span/div[1]/div/div/div/div[4]/button')).click();
 var searchForm = driver.findElement(By.tagName('form'));
 var searchBox = searchForm.findElement(By.name('q'));
 searchBox.sendKeys('webdriver');
 driver.findElement(By.name('btnK')).click();



/*driver.get('https://developers.google.com');
driver.sleep(10000);
var paragraph = driver.findElement(webdriver.By.className('devsite-landing-row-item-description-content')).getText();
if(paragraph.equals("Hone your skills on the latest cloud technologies with Google experts at hundreds of breakout sessions and interactive on-demand hands-on labs and bootcamps.  You'll have the opportunity to engage with the best minds in cloud technology on how your industry is adapting, innovating, and growing with cloud.")){
    console.log("This is correct");
} else {           { className: "devsite-landing-row-item-description-content" }
  console.log("This is wrong!");
};*/
