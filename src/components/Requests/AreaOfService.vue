<template>
<v-layout row>
  <v-layout>
  <v-flex xs12 sm6 offset-sm3 >
    <app-tender-dialog></app-tender-dialog>
    <app-helb-dialog></app-helb-dialog>
    <app-kra-dialog></app-kra-dialog>
    <app-garage-dialog></app-garage-dialog>
    <app-meeting-dialog></app-meeting-dialog>
    <app-market-dialog></app-market-dialog>
    <app-dawa-dialog></app-dawa-dialog>
    <app-branding-dialog></app-branding-dialog>
    <app-gifts-dialog></app-gifts-dialog>
    <app-eulogy-dialog></app-eulogy-dialog>
    <app-delivery-dialog></app-delivery-dialog>
    <app-stationery-dialog></app-stationery-dialog>
    <app-application-dialog></app-application-dialog>
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
      services: [
        {
          title: ' Transport',
           modal: ''
        },
        {
          title: ' Get you job application Doccuments Delivered',
           modal: ''
        },
        {
          title: ' Tumana for baby items',
           modal: ''
        },
        {
          title: 'Tumana for technicain Services',
           modal: ''
        },
        {
          title: 'Get best tour companies <br> budget',
           modal: ''
        },
        {
          title: 'Tumana Birthday, Wedding and Graduation cakes',
           modal: ''
        },   
        {
          title: 'Get Agricultural Seervices',
           modal: ''
        },  
      ],
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

