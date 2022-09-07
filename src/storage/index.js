import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);
const storage = new Vuex.Store({
  state: {
    isAuthenticated: false,
    username: "",
  },
  mutations: {
    setAuthenticated(state, value) {
      state.isAuthenticated = value;
    },
    setUsername(state, username) {
      state.username = username;
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      state.username = "";
      this.$router.push("/");
    },
  },
  plugins: [
    new VuexPersistence({
      storage: window.localStorage,
    }).plugin,
  ],
});

export default storage;
