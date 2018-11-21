import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import Vuetify from 'vuetify'
import Masonry from 'vue-masonry-css'
import App  from './app.vue'
import { routes } from './system/routes'
import { locale } from './translate/'
import { messages } from './translate/'


Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(Vuetify, {
    iconfont: 'md',
})
Vue.use(Masonry)

export const router = new VueRouter({
    mode: 'history',
    routes
})

export const masonry = new Masonry({
    mode: 'history'
})

export const i18n = new VueI18n({
    mode: 'history',
    locale,
    messages
})

Vue.config.productionTip = false

new Vue({
    router,
    masonry,
    i18n,
    render: h => h(App),
}).$mount('#app')
