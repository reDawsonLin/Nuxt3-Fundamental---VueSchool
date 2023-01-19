<script setup>
const query = ref("batman");
const movies = ref([]);

const search = async () => {
  const { Search } = await $fetch("https://www.omdbapi.com/", {
    params: {
      apikey: "24a88edc",
      s: query.value,
    },
  });

  movies.value = Search;
};

search();
</script>

<template>
  <form @submit.prevent="search()">
    <input type="text" name="searchText" v-model="query" />
    <button>Search</button>
  </form>
  <ul>
    <li v-for="movie in movies" :key="movie.imdbID">
      <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
        <img :src="movie.Poster" :alt="movie.title" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  list-style: none;
}
</style>
