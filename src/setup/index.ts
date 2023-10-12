import { WebDriver, Builder } from 'selenium-webdriver';
import chromedriver from 'chromedriver';
import geckodriver from 'geckodriver';
import { Options as ChromeOptions } from 'selenium-webdriver/chrome';
import { Options as FirefoxOptions } from 'selenium-webdriver/firefox';
import { Options as EdgeOptions } from 'selenium-webdriver/edge';
import { Options as IeOptions } from 'selenium-webdriver/ie';

import { BrowsersEnum } from '../utils/_types';
import { TSetup } from './_types';

chromedriver;
geckodriver;

export const setupDriver = async ({ browser, options, hasExtension, timeout = 10000 }: TSetup) => {
  let builder = new Builder().forBrowser(browser);
  let driver: WebDriver;

  if (options) {
    if (browser === BrowsersEnum.Chrome) {
      driver = builder.setChromeOptions(options as ChromeOptions).build();
    }
    if (browser === BrowsersEnum.Firefox) {
      driver = builder.setFirefoxOptions(options as FirefoxOptions).build();
    }
    if (browser === BrowsersEnum.Edge) {
      driver = builder.setEdgeOptions(options as EdgeOptions).build();
    }
    if (browser === BrowsersEnum.Ie) {
      driver = builder.setIeOptions(options as IeOptions).build();
    }
    if (hasExtension) {
      // Switch to extension tab
      const handles = await driver.getAllWindowHandles();
      await driver.switchTo().window(handles[1]);
      await driver.close();
      await driver.switchTo().window(handles[0]);
    }
  } else {
    driver = builder.build();
  }

  // Timeout
  driver.manage().setTimeouts({ implicit: timeout });

  return driver;
};
