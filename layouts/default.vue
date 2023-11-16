<template>
  <div>
    <v-app>
      <v-app-bar :elevation="0">
        <div class="w-full h-full d-flex flex-row background-secondary">
          <div class="background-primary w-50 h-full d-flex justify-center align-center rounded-shaped ml-n4">
            <NuxtLink class="mx-2 justify-end nav" to="/">
              <h1>Alejandro Munoz</h1>
            </NuxtLink>
          </div>
          <div class="background-primary" />
          <div class="d-flex background-secondary justify-end w-100">
            <div class="nav flex-shrink-1 background-secondary flex-grow-0 d-flex align-center rounded mr-10">
              <NuxtLink active-class="background-primary" class="mx-2 justify-end" to="/about"> about me </NuxtLink>
              <NuxtLink active-class="background-primary" class="mx-2 justify-end" to="/contact"> contact me </NuxtLink>
              <NuxtLink active-class="background-primary" class="mx-2 justify-end" to="/projects"> projects </NuxtLink>
              <NuxtLink active-class="background-primary" class="mx-2 justify-end" to="/blog"> blog </NuxtLink>
              <v-spacer />
            </div>
          </div>
        </div>
      </v-app-bar>
      <v-main>
        <v-row>
          <slot />
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.selected {
  color: $primary;
}
.nav {
  color: white;
}
</style>
