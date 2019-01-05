<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignIn">
                <v-layout row>
                  <v-icon>email</v-icon> 
                  <v-flex xs12>
                    <v-text-field
                    name="email"
                    label="Email"
                    id="email"
                    v-model= "email"
                    type="email"
                    required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-icon>lock</v-icon> 
                  <v-flex xs12>
                    <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    v-model= "password"
                    type="password"
                    required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit"
                     :disabled="loading" 
                     :loading="loading"
                      class="logincolor"
                      >Sign in
                      <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                        </span>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      email: '',
      password: ''
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
     loadedUsers(){
      return this.$store.getters.loadUsers
    },
    error () {
      return this.$store.getters.error
    },
    loading(){
      return this.$store.getters.loading
    },
   posted(){
      return this.$store.getters.featuredPosts
        },
  },
  watch:{
      user(value) {
        console.log(value.id)
        if(value !== null && value !== undefined) {
          this.$router.push('/profile/' + value.id)
        }
      }
    },
  methods: {
    onSignIn(){
      //Vuexid
      // console.log({email: this.email, password: this.password, confirmPassword: this.confirmPassword})
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      this.$store.dispatch('fetchUserData')
    },
    onDismissed(){
       console.log('Dismissed Alert!')
       this.$store.dispatch('clearError')
     },
    onLogin(){
      this.$store.dispatch('fetchUserData')
    }
  }
}
</script>



<style scoped>
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
