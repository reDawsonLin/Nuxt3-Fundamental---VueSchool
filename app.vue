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
