<template>
<div><h2 class="primary--text">Tumana Kenya Services
  <v-spacer></v-spacer>
  <v-btn flat class="back" router to="/"><v-icon>dashboard</v-icon></v-btn>
  
</h2>
  <div class="card-services">
    <app-tender-dialog id="services"></app-tender-dialog><br>
    <app-delivery-dialog id="services"></app-delivery-dialog><br>
    <app-stationery-dialog id="services"></app-stationery-dialog><br>
    <app-helb-dialog id="services"></app-helb-dialog><br>
    <app-kra-dialog id="services"></app-kra-dialog><br> 
    <app-garage-dialog id="services"></app-garage-dialog><br>
    <app-meeting-dialog id="services"></app-meeting-dialog><br>
    <app-market-dialog id="services"></app-market-dialog><br>
    <app-dawa-dialog id="services"></app-dawa-dialog><br>
    <app-branding-dialog id="services"></app-branding-dialog><br>
    <app-gifts-dialog id="services"></app-gifts-dialog><br> 
    <app-application-dialog id="services"></app-application-dialog><br> 
  </div>
  </div>
</template>
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
.card-services{
  display: flex;
  flex-flow: row wrap;
}
.card-services > #services {
  flex:1 1 auto;
  /* margin-bottom: 8px; */
  padding: 25px 0px 0px 25px;
}
h2{
  padding: 10px;
  text-align: center;
  font-size: 24pt;
  font-weight: normal;
  /* font-family: Gotham Medium; */
}
.back{
  position: fixed;
  top: 10px;
  right: 2px;
  padding: 0px;
  margin: 0px;
  cursor: pointer;
}
@media(max-width: 1023px){
  .card-services{
   display: flex;
  flex-flow: column;
  /*justify-content: center;*/
    align-items: center; 
}
.card-services > #services {
  flex:1 1 auto;
  /* margin-bottom: 8px; */
  padding: 0px 0px 0px 0px;
}
}


@media(max-width: 768px){
.back{
  position: fixed;
  top: 2px;
  right: 0px;
  padding: 0px;
  margin: 0px;
  cursor: pointer;
  padding-bottom: 8px;
}
}


</style>

