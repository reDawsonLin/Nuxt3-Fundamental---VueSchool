export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to, from, "middleware/logger.js");
});
