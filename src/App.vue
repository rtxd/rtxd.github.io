<template>
  <v-app>
    <Navbar />
    <v-main>
      <div id="app">
        <router-view />
    </div>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },

}
</script>
