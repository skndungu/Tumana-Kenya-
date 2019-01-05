<template>
  <div id="home">
   <v-layout>
    <v-flex xs-12> 
     <v-img  class="background-image" src="https://images.pexels.com/photos/297755/pexels-photo-297755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
          <h1 id="logo">Tumana <span id="sublogo"> | Kenya</span>
          </h1> 
            <ul class="service-items">
            <v-list-tile id="service-item" 
            v-for="item in menuItems" 
            :key="item.title" router :to="item.link">
            <v-icon dark right >
              {{item.icon}}
              </v-icon>
              {{item.title}}
              </v-list-tile>
            <v-list-tile
             v-if="userIsAuthenticated" 
             id="service-item"
             @click="onLogout"
            >
                <v-icon dark right>exit_to_app</v-icon>
                <v-list-tile-action>Logout</v-list-tile-action>
              </v-list-tile>
             </ul>
               <div class="side-wrapper">
          <ul id="side-wrapper-item">
              <div class="btn-close">
                  <div class="btn-line-close">sdfe</div>
                  <div class="btn-line-close">rfwefgv</div>
                  <div class="btn-line-close">rewfger</div>
              </div>
              <li><a>Home</a></li>
              <hr>
              <li><a>About</a></li>
              <hr>
              <li><a>News</a></li>
              <hr>
              <li><a>Our Services</a></li>
              <hr>
              <li><a>Clients</a></li>
              <hr>
              <li><a>Support</a></li>
              <hr>
              <li><a>Our Team</a></li>
              <hr>
              <li><a>Contact Us</a></li>
              <hr>
              <li><a>Promotions</a></li>
              <hr>
          </ul>
      </div>
    <div class="request-service">
     <div id="consultation">Wise courier for wise business <br> Awaiting your call for pick up?</div>  
        <div class="service-categories">
            <v-btn large router to="/services" class="info">Services offered</v-btn>
            <v-btn large router to="/post-request" class="info">Post Request</v-btn>
            <v-btn large router to="/previous-clients/:client_id" class="info">Previous Clients</v-btn>
            <v-btn large router to="/posted-requests" class="info">Admin</v-btn>
        </div>
          <div large router :to="'/profile/' + post.creatorId" 
            v-for="post in posted" 
                    :src="post.imageUrl"
                    :key="post.id"
            ></div>
    </div>
    </v-img> 
    </v-flex>
   </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return{
      email: ''
    }
  },
  computed: {
    menuItems() {
      let menuItems = [
        {icon: 'face', title: 'Sign In', link: '/signin'},
        {icon: 'lock_open', title: 'Sign up', link: '/signup'},
      ]
      if (this.userIsAuthenticated){
        menuItems = [
         {icon: 'how_to_vote', title: 'Post A Request', link: '/post-request'}, 
         {icon: 'supervisor_account', title: 'Our Team', link: '/team'}, 
         {icon: 'supervisor_account', title: 'Previous Clients', link: '/previous-clients/:client_id'},
         {icon: 'room', title: 'Areas of Service', link: '/areas-of-service'}
        ]
      }
      return menuItems
    },
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    posted(){
      return this.$store.getters.featuredPosts
        },
    user() {
      return this.$store.getters.user
    },
    loggedUser(){
      return this.$store.getters.user.id
    },
    profile(){
      return this.$store.getters.user.email
    }
  },
  methods: {
    onLogout(){
      this.$store.dispatch('logout')
    },
    onLogin(){
      this.$store.dispatch('fetchUserData')
    }
  }
}
</script>

<style src="./css/style.css">

</style>
