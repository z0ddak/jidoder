// назначаем флаг
const flag = true

// пишем его в localStorage
if (localStorage.flag === '') {
    localStorage.flag = flag
}

// определяем локаль посетителя
const language = (window.navigator.language || navigator.userLanguage).substr(0, 2).toLowerCase()

// пишем локаль в localStorage, при условии если отсутствует или отличается с текущей
if ((localStorage.language && (localStorage.language === '')) || ((localStorage.language !== language) && (localStorage.flag === flag))) {
    localStorage.language = language
}

// назначаем локаль глобально
export const locale = localStorage.language

// подтягиваем файл локализации
export const messages = require(`./i18n/all.js`).default

console.log(localStorage.language)
