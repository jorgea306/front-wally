<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form
      id="text"
      @submit.prevent="submit"
      data-aos="fade-up"
      data-aos-duration="3000"
      elevation="10"
      outlined
      shaped
    >
      <validation-provider v-slot="{ errors }" name="SKU" rules="required">
        <v-text-field
          v-model="SKU"
          :error-messages="errors"
          label="SKU"
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider v-slot="{ errors }" name="Name" rules="required">
        <v-text-field
          v-model="name"
          :error-messages="errors"
          label="Name"
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider v-slot="{ errors }" name="imagen" rules="required">
        <v-file-input
          required
          :error-messages="errors"
          v-model="imagen"
          label="File input"
          @change="processFile($event)"
        ></v-file-input>
      </validation-provider>

      <validation-provider v-slot="{ errors }" name="price" rules="required">
        <v-text-field
          v-model="price"
          :error-messages="errors"
          label="Price"
          required
          type="number"
        ></v-text-field>
      </validation-provider>

      <validation-provider v-slot="{ errors }" name="currency" rules="required">
        <v-text-field
          v-model="currency"
          :error-messages="errors"
          label="Currency"
          required
        ></v-text-field>
      </validation-provider>

      <v-text-field v-model="code" label="Code" type="number"></v-text-field>

      <v-textarea
        solo
        name="description"
        v-model="description"
        label="Description"
      ></v-textarea>

      <v-btn
        color="accent"
        elevation="2"
        rounded
        depressed
        large
        class="mr-4"
        type="submit"
        :disabled="invalid"
      >
        Crear
      </v-btn>
      <v-btn
        color="secondary"
        elevation="2"
        rounded
        depressed
        large
        class="mr-4 btn"
        to="/products"
      >
        Cancelar
      </v-btn>
    </form>
  </validation-observer>
</template>


<script>
import { required } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} este campo es requerido",
});

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Form",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      SKU: "",
      name: "",
      pictures: "",
      price: null,
      currency: "",
      code: null,
      description: "",
      imagen: null,
    };
  },
  methods: {
    async submit() {
      this.$refs.observer.validate();
      let formData = new FormData();
      formData.append("file", this.imagen);
      formData.append("upload_preset", "uvrak5t6");
      formData.append("cloud_name", "dp1czofyb");

      let axiosUploadImage = this.axios.create();
      delete axiosUploadImage.defaults.headers.common["Authorization"];
      try {
        const response = await axiosUploadImage.post(
          `https://api.cloudinary.com/v1_1/dp1czofyb/image/upload`,
          formData
        );
        this.pictures = response.data.secure_url;
      } catch (error) {
        console.log(error);
      }

      var data = {
        SKU: this.SKU,
        name: this.name,
        pictures: this.pictures,
        price: this.price,
        currency: this.currency,
        code: this.code,
        description: this.description,
      };

      try {
        const response = await this.axios.post(
          "http://[::1]:3000/products",
          data
        );
        console.log(response);
        this.$router.push("/products");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
#text {
  font-family: "Montserrat Alternates", sans-serif;
  background: white;
  padding: 10px;
  border-radius: 15px;
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