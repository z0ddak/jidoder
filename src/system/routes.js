import Home from '../pages/index.vue'
import NotFound from '../pages/404.vue'

// берём из localStorage текущую локаль
const locale = localStorage.language

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

console.log(localStorage.language)
