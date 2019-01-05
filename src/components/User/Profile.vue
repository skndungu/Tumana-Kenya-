<template>
<v-layout>
    <v-flex xs-12> 
     <v-img  src="https://images.pexels.com/photos/297755/pexels-photo-297755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
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
             <br>
             <br><br><br><br>
             <div class="profile">
                <span style="color: green" class="profile_name"> 
                   <!-- <strong> {{user.email}}</strong> -->
                    </span>
             </div>
        <v-layout row wrap>
            <v-flex 
            v-for="post in posted" 
            :src="post.imageUrl"
            :key="post.id" class="mb-3"
            >
            <!-- <v-btn @click="showRequests">Click</v-btn> -->
            <div class="card-display">
            <v-card accent slot="activator"
                 width="400" v-if="post.creatorId == id"
                 >
              
                 <v-card-title>
                    <h2><span class="header">Title: </span>{{post.title}}</h2>
                </v-card-title>
                    <v-container>
                        <v-img
                        class="white--text"
                        height="200px"
                        :src="post.imageUrl"
                        >
                        </v-img>
                     </v-container>
                        <v-card-text>
                        <div>
                            <span> <span class="details">Request ID: </span>{{post.id.toUpperCase()}}</span><br>
                            <span><span class="details">Name: </span>{{post.first_name}} {{post.last_name}}</span><br>
                            <span> <span class="details">Deliver to: </span> {{post.destination}}</span><br>
                            <span> <span class="details"> Description: </span> {{post.description}}</span><br>
                            <span> <span class="details"> Date: </span> {{post.date}}</span><br>
                            <span></span>
                        </div>
                        </v-card-text>
                        <v-card-actions>
                        <v-btn flat color="orange">contact</v-btn>
                        <v-btn flat color="red">Not Delivered</v-btn>
                        </v-card-actions>
                         <v-flex xs12 sm6 offset-sm3 class="text-xs-center ">
                            <v-btn large class="info mb-2" router :to="'/posted-request/' + post.id">view request</v-btn>
                        </v-flex>
                    </v-card>
                    <v-card
                     v-for="post in posted" 
                    :src="post.imageUrl"
                    :key="post.id"
                     v-if="post.id === null"
                    >
                      <v-card-title>
                          You have  no active posts 
                      </v-card-title>
                    </v-card>
                </div>
            </v-flex>
        </v-layout>
    </v-img> 
    </v-flex>
   </v-layout>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
           email: '',
        }
    },
    computed: {
        loadUserRequests(){
            return this.$store.getters.loadUserRequests(this.id)
        },
     profile(){
      return this.$store.getters.user.email
    },
     post(){
       return this.$store.getters.loadedPost(this.id)
        },
     posted(){
      return this.$store.getters.featuredPosts
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
        },
         user() {
             return this.$store.getters.user
             },
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
        myrequests(){
            
        }

    },
    methods: {
        showRequests(){
            // console.log('cliked')
            this.$store.dispatch('fetchUserData', this.requestsPosted)
            console.log(this.requestsPosted)
        },
         onLogout(){
            this.$store.dispatch('logout')
            this.$router.push('/')
    },
    }
  
}
</script>

<style scoped>
@font-face{
    font-family: Tesla;
    src: url(fonts/TESLA.ttf);
}

@font-face{
    font-family: Gotham Meduim;
    src: url(fonts/Gotham.ttf);
}

 .header{
     color: orange;
     font-weight: bold;
 }
 .card-display{
     display: flex;
     flex-flow: row wrap;
     justify-content: center;
     align-items: center;
 }

#logo{
    font-size: 26pt;
    position: absolute;
    top: 15px;
    left: 7px;
    color: #d32f2f;
    text-transform: uppercase;
    font-family: Tesla;
    font-weight: 700;
    z-index: 1;
    cursor: pointer;

}
#sublogo{
    color: #388e3c;
}

/* SERVICE ITEMS */
.service-items{
    text-transform: uppercase;
    display: inline-flex;
    float: right;
    font-weight: normal;
    position: fixed;
    top: 5px;
    right: 100px;
    color: #ffff;
}
.profile{
    position: fixed;
    top: 10px;
    right: 35px;
    cursor: pointer;

}
.profile_name{
    position: fixed;
    top: 20px;
    right: 5px;
    cursor: pointer;

}

@media(max-width: 768px){
      .service-items{
        display: none;
    }

}
</style>
