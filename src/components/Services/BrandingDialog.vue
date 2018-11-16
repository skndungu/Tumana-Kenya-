<template>
<v-layout row>
  <v-layout>
  <v-flex class="services">
   <v-dialog persistent v-model="showModal"
   width="600" >
    <v-btn accent slot="activator" class="info"
        id="service1"
       >
       Branding Services
      </v-btn>
      <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title> Branding Services</v-card-title>
                    </v-flex>
                    <v-divider></v-divider>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-card-text>
                             Get caps branded.,t-shirts, hoods, get information booklets printed for you, brochures, flyers and calendars for your firm /business
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
  </v-flex>
  </v-layout>
</v-layout>
</template>

<style scoped >
 
</style>

<script>
export default {
  data(){
    return{

      showModal: false
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
#service1{
    /* display: flex;
    flex-flow: row;
    justify-items: center; */
}
.v-btn__content{
  
}
</style>

