import menuTemplate from '../template/menu.hbs';
import menuData from './menu.json';

const menuRef = document.querySelector('.js-menu');
const menuMarkup = menuTemplate(menuData);

menuRef.insertAdjacentHTML('afterbegin', menuMarkup);