<template>
  <div>
    <v-app>
      <v-app-bar title="Alejandro Munoz">
        <v-spacer />
        <NuxtLink class="mx-2" to="/about"> about me </NuxtLink>
        <NuxtLink class="mx-2" to="/contact"> contact </NuxtLink>
        <NuxtLink class="mx-2" to="/projects"> projects </NuxtLink>
        <NuxtLink class="mx-2" to="/blog"> blog </NuxtLink>
      </v-app-bar>
      <v-main>
        <v-row justify="center" align-content="center">
          <v-col :cols="9">
            <slot />
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<script></script>

<style></style>
