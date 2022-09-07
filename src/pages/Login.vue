<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-img
              class="logo"
              align-center
              contain
              lazy-src="../assets/LOGO1[1].png"
              max-height="100"
              max-width="250"
              src="../assets/LOGO1[1].png"
            ></v-img>

            <div v-if="msjerror">
              <v-alert type="error"
                >Usuario y/o Contraseña incorrectos. Recuerde que debe tener los
                permisos adecuados para ingresar</v-alert
              >
            </div>

            <v-card class="elevation-12">
              <validation-observer ref="observer" v-slot="{ invalid }">
                <form class="login" @submit.prevent="submit">
                  <validation-provider
                    v-slot="{ errors }"
                    name="username"
                    rules="required"
                  >
                    <v-text-field
                      prepend-icon="mdi-account"
                      v-model="username"
                      label="Login"
                      type="text"
                      :error-messages="errors"
                      required
                    ></v-text-field>
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="password"
                    rules="required"
                  >
                    <v-text-field
                      id="password"
                      prepend-icon="mdi-lock"
                      v-model="password"
                      label="Password"
                      type="password"
                      :error-messages="errors"
                      required
                    ></v-text-field>
                  </validation-provider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" type="submit" :disabled="invalid"
                      >Login</v-btn
                    >
                    <v-progress-circular
                      v-show="loading"
                      indeterminate
                      color="purple"
                    ></v-progress-circular>
                  </v-card-actions>
                </form>
              </validation-observer>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
import { required } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import storage from "../storage";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} este campo es requerido",
});
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      username: "",
      password: "",
      msjerror: false,
    };
  },
  methods: {
    async submit() {
      this.$refs.observer.validate();
      var payload = {
        username: this.username,
        password: this.password,
      };
      this.msjerror = false;
      console.log(this.msjerror);
      try {
        const response = await this.axios.post(
          "http://[::1]:3000/auth/login",
          payload
        );
        this.axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.access_token;
        localStorage.setItem("token", response.data.access_token);
        storage.commit("setAuthenticated", true);
        this.$router.push("/products");
        this.msjerror = false;
      } catch (error) {
        this.msjerror = true;
        console.log(error);
      }

      this.msjerror = true;
    },
  },
};
</script>

<style>
#inspire {
  background: rgb(46, 41, 82);
  background: linear-gradient(320deg, #383172 0%, #25204a 61%);
}
.logo {
  text-align: center;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}
.login {
  margin: 15px;
  padding-top: 20px;
}
</style>

