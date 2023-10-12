import { Options as OptionsChrome } from 'selenium-webdriver/chrome';

import * as metamaskWelcomeActions from '../pages/metamask/welcome/actions';
import { setupDriver } from '../setup';
import { FAKE_PASSWORD, FAKE_RECOVERY_PHRASE, METAMASK_EXTENSION_PATH } from '../utils/_consts';
import { BrowsersEnum } from '../utils/_types';

async function importMetamaskAccount() {
  const options = new OptionsChrome().addExtensions([METAMASK_EXTENSION_PATH]);
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');
  let driver = await setupDriver({ browser: BrowsersEnum.Chrome, options, hasExtension: true });

  try {
    await metamaskWelcomeActions.clickBtnStartNow(driver);
    await metamaskWelcomeActions.clickBtnImportWallet(driver);
    await metamaskWelcomeActions.clickBtnNoThanks(driver);
    await metamaskWelcomeActions.fillRecoveryPhrase(driver, FAKE_RECOVERY_PHRASE);
    await metamaskWelcomeActions.fillNewPassword(driver, FAKE_PASSWORD);
    await metamaskWelcomeActions.fillConfirmPassword(driver, FAKE_PASSWORD);
    await metamaskWelcomeActions.checkTermsOfUse(driver);
    await metamaskWelcomeActions.clickBtnImport(driver);
  } finally {
    await driver.quit();
  }
}

importMetamaskAccount();
