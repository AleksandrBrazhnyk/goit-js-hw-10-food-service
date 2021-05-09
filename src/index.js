
import TplCards from './template/menu-cards.hbs';
import menuCards from './menu.json';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggleTheme = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const userTheme = localStorage.getItem('theme');
bodyRef.classList.add(Theme.LIGHT);
 
toggleTheme.addEventListener('change', onChangeTheme);

if (userTheme) {
    bodyRef.classList.add(userTheme);
}

if (userTheme === Theme.DARK) {
        toggleTheme.checked = true;
    }

// кнопка
function onChangeTheme(evt) {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);

    if (!evt.currentTarget.checked) {
        bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    }

    const bgColor = bodyRef.classList;
    localStorage.setItem('theme', bgColor);
}


// разметка
const listMenu = document.querySelector('.js-menu');
const cardsMarkup = createListMenu(menuCards);
listMenu.insertAdjacentHTML('beforeend', cardsMarkup);

function createListMenu(cards) {
    return cards.map(TplCards).join('');
}
