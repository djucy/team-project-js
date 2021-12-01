import refs from './refs';
export { onCloseModalClick };

refs.loginLink.addEventListener('click', onLoginClick);
refs.signLink.addEventListener('click', onSignClick);
refs.loginCloseButton.addEventListener('click', onCloseModalClick);
refs.signCloseButton.addEventListener('click', onCloseModalClick);

function onSignClick(evt) {
  evt.preventDefault();
  refs.signPage.classList.remove('visually-hidden');
  document.body.classList.add('stop');
}

function onLoginClick(evt) {
  evt.preventDefault();
  refs.loginPage.classList.remove('visually-hidden');
  document.body.classList.add('stop');
}

function onCloseModalClick() {
  refs.signPage.classList.add('visually-hidden');
  refs.loginPage.classList.add('visually-hidden');
  document.body.classList.remove('stop');
}

// при клике на ESC закрывается модалка

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    onCloseModalClick();
  }
});
