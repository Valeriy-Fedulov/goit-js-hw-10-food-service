import menuTemplate from '../template/menu.hbs';
import menuData from './menu.json';

const menuRef = document.querySelector('.js-menu');
const menuMarkup = menuTemplate(menuData);
const checkBox = document.querySelector('#theme-switch-toggle');
const themeBody = document.querySelector('body');

menuRef.insertAdjacentHTML('afterbegin', menuMarkup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('Theme')) {
    themeBody.classList.add(localStorage.getItem('Theme'));
    localStorage.getItem('Theme') === Theme.LIGHT ? checkBox.checked = false : checkBox.checked = true;
} else {
    localStorage.setItem('Theme', Theme.LIGHT);
    themeBody.classList.add(localStorage.getItem('Theme'));
    checkBox.checked = false;
};

checkBox.addEventListener('change', changeInput);

function changeInput() {
    if (checkBox.checked) {
        themeBody.classList.toggle(Theme.LIGHT);
        themeBody.classList.add(Theme.DARK);
        localStorage.setItem('Theme', Theme.DARK);
    } else {
        themeBody.classList.remove(Theme.DARK);
        themeBody.classList.add(Theme.LIGHT);
        localStorage.setItem('Theme', Theme.LIGHT);
    };
}