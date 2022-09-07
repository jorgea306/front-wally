
<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col
          v-for="product in products"
          :key="product._id"
          cols="4"
          data-aos="zoom-in"
        >
          <v-card
            elevation="10"
            outlined
            shaped
            class="mx-auto cards"
            max-width="344"
          >
            <v-img
              height="200"
              class="imagen"
              :src="product.pictures[0]"
              loading="lazy"
            ></v-img>
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-title>Precio:$ {{ product.price }}</v-card-title>
            <v-card-subtitle>Currency:$ {{ product.currency }}</v-card-subtitle>
            <v-card-text>
              Code: {{ product.code }}. Descipcion: {{ product.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>





<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Cards",
  data: () => ({
    products: [],
  }),
  async mounted() {
    try {
      const response = await this.axios.get("http://[::1]:3000/products");

      this.products = response.data.products;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
.cards {
  margin: 10px;
  font-family: "Montserrat Alternates", sans-serif;
}
.imagen {
  object-fit: contain;
  image-rendering: auto;
}
</style>