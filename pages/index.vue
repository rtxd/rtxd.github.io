<template>
  <div class="ma-10 h-full w-full d-flex flex-row align-start debug">
    <div class="w-50 mr-10 d-flex flex-column debug">
      <div class="justify-end">
        <NuxtImg class="main-image" src="/selfie.jpg" />
      </div>
      <div class="pt-10">
        <h3>Skills</h3>
        <ul>
          <li>Vue JS</li>
        </ul>
      </div>
    </div>
    <div class="w-50 ma-5 debug">
      <div class="mb-5">
        <h1>Full-Stack Software Engineer</h1>
        <h3>Alejandro Munoz</h3>
        <p>My name is Alejandro Munoz and I'm a front-end software engineer living in Sydney.</p>
      </div>
      <div>
        <h2>Technologies</h2>
        <v-list>
          <v-list-item> <v-icon>mdi_gear</v-icon> <span> AWS </span> </v-list-item>
        </v-list>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  ogImage: '/og-image.png',
})
</script>

<style lang="scss">
.main-image {
  border-radius: 12px;
  border: 1px solid #ddd;
  padding: 5px;
  width: 400px;
}
</style>
