<script setup>
definePageMeta({ layout: "plain" });

const user = useUser();
const login = () => {
  user.isLoggedIn = true;
  useRouter().push("/");
};
</script>

<template>
  <form @submit.prevent="login">
    <h1>Login</h1>
    <label>
      Username
      <input type="text" />
    </label>
    <label>
      Password
      <input type="password" />
    </label>
    <button>Login</button>
  </form>
</template>
