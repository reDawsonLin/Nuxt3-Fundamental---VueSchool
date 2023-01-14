<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - My movie site` : "My movie site";
  },
});
</script>

<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="https://vueschool.io">VueSchool</NuxtLink>
  </nav>

  <div>
    <NuxtPage />
  </div>
</template>

<style>
nav {
  display: flex;
  gap: 0.5rem;
}
</style>
