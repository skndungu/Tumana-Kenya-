<template>
    <v-dialog persistent v-model="DeliveredDialog">
        <v-btn accent slot="activator">
     {{requestIsDelivered ? 'Delivered' : 'Not-Delivered'}}
     </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title v-if="requestIsDelivered">Mark Delivered</v-card-title>
                        <v-card-title v-else>Not Delivered</v-card-title>
                    </v-flex>
                    <v-divider></v-divider>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-card-text>
                                you can always review this later
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-actions>
                           <v-btn flat class="red--text darken-1" @click="DeliveredDialog=false">Cancel</v-btn> 
                           <v-btn flat class="green--text darken-1" @click="onAgree">Confirm</v-btn> 
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props:['requestId'],
    data(){
        return{
            DeliveredDialog: false
        }
    },
    computed: {
        requestIsDelivered(){
            return this.$store.getters.user.requestsPosted.findIndex(requestId => {
                return this.requestId === this.requestId
            }) >= 0
        }
    }, 
    methods: {
        onAgree(){
            if(this.requestIsDelivered){
                this.$store.dispatch('markPostUndelivered', this.requestId)
            } else {
                this.$store.dispatch('markPostDelivered', this.requestId)
            }
        }
    }

}
</script>
