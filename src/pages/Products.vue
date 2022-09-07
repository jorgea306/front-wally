<template>
  <v-app id="v-app">
    <NavBar />
    <v-main>
      <v-container>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
        >
          <h1 id="titulo" class="text">Productos</h1>
          <v-btn
            color="secondary"
            elevation="2"
            rounded
            depressed
            large
            class="btn"
            to="/products/alta"
          >
            Agregar Producto
          </v-btn>
        </div>
        <Cards />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "../components/navbar.vue";
import Cards from "../components/cards.vue";
import storage from "../storage";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "products",
  components: {
    NavBar,
    Cards,
  },
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "Products",
          disabled: true,
          href: "/products",
        },
      ],
    };
  },
  async mounted() {
    try {
      const response = await this.axios.get("http://localhost:3000/profile");
      storage.commit("setUsername", response.data.username);
    } catch (error) {
      var data = error.response.data;
      console.log(data);
    }
  },
};
</script>

<style>
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
#titulo {
  color: rgb(0, 0, 0);
  margin-bottom: 15px;
}
.text {
  font-family: "Montserrat Alternates", sans-serif;
}
.btn {
  color: rgb(212, 96, 96);
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