const BTN_PRIMARY = 'button.btn-primary';
const BTN_SECONDARY = 'button.btn-secondary';

const selectors = {
  btnStartNow: BTN_PRIMARY,
  btnImportWallet: `.select-action__select-button:first-child ${BTN_PRIMARY}`,
  btnNoThanks: `.page-container__footer ${BTN_SECONDARY}`,
  inputRecoveryPhrase: '.first-time-flow__seedphrase input',
  inputNewPassword: '#password',
  inputConfirmPassword: '#confirm-password',
  checkboxTermsOfUse: '.first-time-flow__checkbox.first-time-flow__terms',
  btnImport: `.first-time-flow ${BTN_PRIMARY}`,
};

export default selectors;
