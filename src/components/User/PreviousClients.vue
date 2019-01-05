<template>

    <div id="previous-clients">
      <h2 style="text-align: center">Reviews from our previous clients and returning customers </h2>
    <v-img class="clients mb-2" 
    v-for="client in clients" v-bind:src="client.imageUrl" :key="client.id"
    >
    <span id="description">Name:  {{client.name}}</span> <br>
    <span id="description">Location: {{client.location}}</span> <br>
    <span id="description">Service:  {{client.service}}</span> <br>
    <span id="description">Reviews:  {{client.reviews}}</span> <br>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    </v-img>
</div>
</template>
<script>
export default {
  data(){
    return{
      clients: [
        {
          imageUrl: "https://images.pexels.com/photos/462680/pexels-photo-462680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          name: "James Ngigi",
          location: "Thika",
          service: "Delivery of a Letter of Application",
          id: "dsfweadefdsw",
          reviews: 'Services were as described',
          applicatio: ''
        },
        { 
          imageUrl: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          name: "George Ngigi",
          location: "Makongeni",
          service: "Delivery of a Letter of Application",
          id: "dsfweaewdew",
          reviews: 'Delivery was faster than I expected, Tumana Kenya is the best Courier'
        },
        {
          imageUrl: "https://images.pexels.com/photos/818819/pexels-photo-818819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          name: "Alice Ngigi",
          location: "Nairobi",
          service: "Delivery of a Letter of Application",
          id: "dewrewsfweadew",
          reviews: 'Second Time service at its best as usual'
        }

      ]
    }
  }
}
</script>

<style scoped>
#previous-clients{
background: #ccc;
}
.clients{
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    width: 450px;
    margin: 0 auto;
    border-radius: 15px;
}
.clients v-img{
  margin: 20px;
}
#description{
  font-weight: bold;
  font-size: 16pt;
  color: green;
}
.checked {
    color: orange;
}
</style>
