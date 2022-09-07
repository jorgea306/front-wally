<template>
  <v-app-bar app id="bar" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        id="img"
        contain
        src="../assets/LOGO1[1].png"
        width="80"
        style=""
      />
    </div>

    <v-spacer></v-spacer>
    <!-- <span class="mr-2">{{ $store.state.username }}</span> -->
    <v-btn @click="logout" to="/" text>
      <span class="mr-2">Cerrar Sesion</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import storage from "../storage";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "NavBar",
  data() {
    return {
      users: null,
    };
  },
  methods: {
    logout() {
      storage.commit("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style>
#img {
  margin-left: 50px;
}
#v-app {
  background-image: linear-gradient(
    to bottom,
    #ffffff,
    #ebeaed,
    #d8d6db,
    #c6c2c9,
    #b4aeb7
  );
}
#bar {
  background-image: linear-gradient(
    to right,
    #310442,
    #2c0648,
    #26094f,
    #1b0c55,
    #04105c
  );
}
</style>