import Home from '../pages/index.vue'
import NotFound from '../pages/404.vue'

// импортируем библиотеку tiny-cookie
import { getCookie } from 'tiny-cookie'

// берём из кукисов текущую локаль
const locale = getCookie('language')

// роутинг
export const routes = [

  { path: '/',  redirect: to => {
      if ((locale === 'ru') || (locale === 'en') || (locale === 'ko')) { //
        return `/${locale}`
      } else {
        return '/404'
      }
    }},
  { path: `/${locale}`, component: Home},
  { path: '/404', component: NotFound},
  { path: '*', redirect: "/404" }
]

// console.log(locale)
