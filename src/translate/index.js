// импортируем библиотеку tiny-cookie
import { getCookie, setCookie } from 'tiny-cookie'

// назначаем хранение в месяц
const month = new Date;
month.setMonth(month.getMonth() + 1);

// назначаем флаг
const flag = true

// пишем его в кукисы
if (getCookie('flag') === '') {
  setCookie('flag', flag)
}

// определяем локаль посетителя
const language = (window.navigator.language || navigator.userLanguage).substr(0, 2).toLowerCase()

// пишем локаль в кукисы, если отсутствует или отличается с текущей
if ((getCookie('language') === '') || ((getCookie('language') !== language) && (getCookie('flag') === flag))) {
  setCookie('language', language, { expires: month })
}

// назначаем локаль глобально
export const locale = getCookie('language')

// подтягиваем файл локализации
export const messages = require(`./i18n/${locale}`).default

// console.log()
