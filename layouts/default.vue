<template>
  <div>
    <v-app>
      <v-app-bar>
        <div class="w-full h-full d-flex flex-row">
          <div class="background-primary w-40 h-full d-flex justify-center align-center rounded">
            <span>Alejandro Munoz </span>
          </div>
          <div class="d-flex w-100">
            <div class="w-full d-flex justify-space-between align-center rounded">
              <NuxtLink class="pl-10 mx-2" to="/about"> about me </NuxtLink>
              <NuxtLink class="mx-2" to="/contact"> contact me </NuxtLink>
              <NuxtLink class="pr-10 mx-2" to="/projects"> projects </NuxtLink>
            </div>
            <v-spacer />
            <div class="background-secondary w-40 h-full d-flex justify-center align-center rounded">
              <NuxtLink class="mx-2 align-end" to="/blog"> blog </NuxtLink>
            </div>
          </div>
        </div>
      </v-app-bar>
      <v-main>
        <v-row justify="center" align-content="center">
          <slot />
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
