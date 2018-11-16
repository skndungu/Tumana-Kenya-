<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>
                <!-- {{id}} -->
            <v-btn @click="showRequests">Click</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
        }
    },
    computed: {
        loadUserRequests(){
            return this.$store.getters.loadUserRequests(this.id)
        },
     post(){
       return this.$store.getters.loadedPost(this.id)
        },
        userIsAuthenticated(){
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined
        },
        userIsCreator () {
            if(!this.userIsAuthenticated){
                return false
            } 
            return this.$store.getters.user.id === this.post.creatorId

        },
       loading() {
           return this.$store.getters.loading
        },
        loggedUser(){
        return this.$store.getters.user.id
        }

    },
    methods: {
        showRequests(){
            // console.log('cliked')
            this.$store.dispatch('fetchUserData', this.requestsPosted)
        }
    }
  
}
</script>

<style scoped>
 .header{
     color: orange;
     font-weight: bold;
 }
</style>
