<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="https://vueschool.io">VueSchool</NuxtLink>
  </nav>

  <slot></slot>
</template>

<style>
nav {
  display: flex;
  gap: 0.5rem;
}
</style>
