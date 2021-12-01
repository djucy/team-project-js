export {themeIcon, themeSwitchButton};

const themeSwitchButton = document.querySelector('#theme');
const themeIcon = document.querySelector('#theme-icon');
const body = document.querySelector('body'); 
const footer = document.querySelector('footer');

const onChangeTheme = function () {
    if(themeIcon.classList.contains('icon-dark')) {
        themeIcon.classList.replace('icon-dark', 'icon-light');
        body.classList.remove('theme-dark');
        footer.classList.remove('theme-dark');

    } else {
        themeIcon.classList.replace('icon-light', 'icon-dark');
        body.classList.add('theme-dark');
        footer.classList.add('theme-dark');
    }
};

themeSwitchButton.addEventListener('click', onChangeTheme);
