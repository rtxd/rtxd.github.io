import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
loadFonts()

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
