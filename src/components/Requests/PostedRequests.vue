<template>
   <div id="posted-requests">
       <v-container>
           <v-layout>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large class="primary" router to="/">New requests</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large class="success" router to="/">Delivered </v-btn>
            </v-flex>
           </v-layout>
       </v-container>
     <div row wrap class="posts">
         <v-layout row wrap>
             <v-flex xs12 sm6 offset-sm3 >
                 <v-card  v-for="post in posted" 
                    :src="post.imageUrl"
                    :key="post.id" class="mb-3"
                     
                    >
                 <v-card-title>
                    <h2><span class="header">Title: </span> {{post.title}}</h2>
                </v-card-title>
                        <v-img
                        class="white--text"
                        height="200px"
                        :src="post.imageUrl"
                        >
                        </v-img>
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
              <v-flex xs12 sm6 offset-sm3 class="text-xs-right">
                <v-btn class="secondary" router to="/" >Back</v-btn>
               </v-flex>
             </v-flex>
         </v-layout>
     </div>
    </div> 
</template>

<script>
export default {
    computed: {
        posted(){
            return this.$store.getters.featuredPosts
        }
    }
}
</script>

<style scoped>
.headline{
    color: #000;
    font-weight: bold;
}
.details{
    color: orange;
    font-weight: bold;
}

</style>

 