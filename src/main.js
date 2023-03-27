import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import HomePage from './components/pages/Home.vue'
import AboutPage from './components/pages/About.vue'
import { VApp, VMain, VContainer, VAppBar } from 'vuetify/components'
loadFonts()

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App).use(router).use(vuetify)

app.component('v-app', VApp)
app.component('v-main', VMain)
app.component('v-container', VContainer)
app.component('v-app-bar', VAppBar)

app.mount('#app')