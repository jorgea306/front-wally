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
                 
                   <v-card class="elevation-12">
                      <v-card-text>
                         <v-form>
                            <v-text-field
                               prepend-icon="person"
                               name="login"
                               label="Login"
                               type="text"
                            ></v-text-field>
                            <v-text-field
                               id="password"
                               prepend-icon="lock"
                               name="password"
                               label="Password"
                               type="password"
                            ></v-text-field>
                         </v-form>
                      </v-card-text>
                      <v-card-actions>
                         <v-spacer></v-spacer>
                         <v-btn color="primary" to="/">Login</v-btn>
                      </v-card-actions>
                   </v-card>
                </v-flex>
             </v-layout>
          </v-container>
       </v-content>
    </v-app>
 </template>


<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Login",
 
}
</script>

<style>
    #inspire {
        background: rgb(46,41,82);
        background: linear-gradient(320deg, #383172 0%,#25204A 61%);
    }
    .logo {
        text-align: center;
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;
    }

</style>

