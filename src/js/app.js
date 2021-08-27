import menuTemplate from '../template/menu.hbs';
import menuData from './menu.json';

const bodyRef = document.querySelector('body');
const menuMarkup = createMenuMarkup();

function createMenuMarkup() {
    return menuData.map(menuTemplate).join('');
}
console.log(JSON.parse(<div></div>));
bodyRef.append(menuMarkup);