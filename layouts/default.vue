<script setup>
const user = useUser();
</script>

<template>
  <nav>
    {{ user.isLoggedIn }}
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="https://vueschool.io">VueSchool</NuxtLink>
    <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
    <a v-else @click.prevent="user.isLoggedIn = false">Logout</a>
  </nav>

  <slot></slot>
</template>

<style>
nav {
  display: flex;
  gap: 0.5rem;
}
</style>
