export default defineNuxtRouteMiddleware((to, from) => {
  const userIsLoggedIn = false;

  if (!userIsLoggedIn) {
    // 直接阻擋讓他斷掉
    // return abortNavigation("You have no access to visit  ./admin page");

    // 導到其他頁面
    return navigateTo({ name: "login" });
    // return navigateTo({ path: "/login" });
    // return navigateTo("/login");
  }
});
