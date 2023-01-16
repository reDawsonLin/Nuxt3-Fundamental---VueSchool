export const useUser = defineStore("useUser", {
  state: () => ({
    isLoggedIn: false,
  }),
  getter: {},
  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}
