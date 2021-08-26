import menuTemplate from '../template/menu.hbs';
import menuDate from './menu.json';
console.log(menuTemplate(menuDate[0]));
const markup = menuTemplate({
    "id": "XWaQXcbk0",
    "name": "Картофель, запеченный в мундире",
    "description": "Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.",
    "image": "https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg",
    "price": 100,
    "ingredients": [
        "Картофель",
        "Чеснок",
        "Сметана",
        "Бекон",
        "Твердый сыр",
        "Зеленый лук"
    ]
}
);
    
console.log(markup);

const bodyRef = document.querySelector('body');
bodyRef.append(markup);