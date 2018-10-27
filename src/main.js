import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App'

import '@fortawesome/fontawesome-free/css/all.css'
import HomePage from '@/components/HomePage'
import Frowning from '@/components/Frowning'


Vue.use(Vuetify, {
    iconfont: 'fa'
})

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
    { path: '/', component: HomePage },
    { path: '/frowning', component: Frowning }
]

const router = new VueRouter({
    routes
})

new Vue({
    router, 
    render: h => h(App)
}).$mount('#app')
