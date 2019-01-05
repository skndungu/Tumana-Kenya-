<template>
   <v-dialog persistent v-model="showModal"
   width="600" >
     <v-card accent slot="activator"
       width="400"
      
       >
        <v-card-title class="info--text"><strong>Helb Applications</strong></v-card-title>
         <v-divider></v-divider>
          <v-card-text> 
              <img src="@/assets/img/Helb/Helb1.png" 
              width="370"
              height="250"
               >
              Are you a firm and you would like to carry out a 
                                research that involves your market size a
                                nd share, your product ranking among competing brands or a 
                                new product you... </v-card-text>
       <v-card-actions>
        <v-spacer></v-spacer> 
          <v-btn flat class="green--text darken-1">get service</v-btn> 
        </v-card-actions>
      </v-card>
      <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title class="info--text"> Helb Applications</v-card-title>
                    </v-flex>
                    <v-divider></v-divider>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-card-text>
                                 <v-carousel class="carousel-image">
                                    <v-carousel-item
                                    v-for="(item,i) in items"
                                        :key="i"
                                        :src="item.src"
                                        reverse-transition="fade"
                                        transition="fade" 
                                        @click="showModal=false"
                                        ></v-carousel-item>
                                </v-carousel>
                                Are you a firm and you would like to carry out a 
                                research that involves your market size a
                                nd share, your product ranking among competing brands or a 
                                new product you 
                                want to introduce to the marker... Just tumana to get a service
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-actions>
                           <v-btn flat class="red--text darken-1" @click="showModal=false">Cancel</v-btn> 
                           <!-- <v-spacer></v-spacer> -->
                           <v-btn flat class="green--text darken-1" router to="/post-request">Tumana</v-btn> 
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>


<style scoped >
 
</style>

<script>
export default {
  data(){
    return{
      showModal: false,
        items: [
                {
                  
                   src: require('@/assets/img/Helb/helb.jpg')
                },
                {
                    src: require('@/assets/img/Helb/helb3.png')
                },
                {
                    src: require('@/assets/img/Helb/helb3.png')
                },
                {
                    src: require('@/assets/img/Helb/helb4.png')
                },
                {
                    src: require('@/assets/img/Helb/helb5.png')
                }
                ]
        }
},
  methods:{
    
  }
}
</script>

<style scoped>
.carousel-image{
    /* width: 400px; */
}
</style>


