<script lang="ts" setup>
const query = ref("");
const search = () => {
  $fetch("http://www.omdbapi.com/", {
    query: {
      apikey: "24a88edc",
      s: query.value,
    },
  });
};
</script>

<template>
  <form @submit.prevent="search()">
    <input type="text" name="searchText" v-model="query" />
    <button>Search</button>
  </form>
</template>

<style scoped></style>
