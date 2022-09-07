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
          <h1 id="titulo" class="text">Alta de Productos</h1>
        </div>
        <Form />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "../components/navbar.vue";
import Form from "../components/form.vue";

export default {
  name: "altaProducts",
  components: {
    NavBar,
    Form,
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
</style>