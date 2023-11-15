<template>
  <div class="ma-10 h-full w-full d-flex flex-row">
    <div class="mr-10">
      <div>
        <NuxtImg class="main-image" src="/selfie.jpg" />
      </div>
      <div class="pt-10">
        <h5>Skills</h5>
        <ul>
          <li>Vue JS</li>
        </ul>
      </div>
    </div>
    <div class="w-full">
      <h1>Full-Stack Software Engineer</h1>
      <h3>Alejandro Munoz</h3>
      <p>Hey there :)</p>
      <p>My name is Alejandro Munoz and I'm a front-end software engineer living in Sydney.</p>
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
