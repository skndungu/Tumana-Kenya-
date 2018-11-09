<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 >
        <h2 class="primary--text" style="text-align: center">Post your request here</h2>
        <v-layout row>
          <v-flex xs-12>
            <form @submit.prevent="onCreateRequest"> 
              <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                  <v-text-field name="title"
                  label="Title *"
                  id="title"
                  required
                  v-model="title"
                  ></v-text-field>
                   </v-flex>
                  </v-layout>
                <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                  <v-text-field name="first_name"
                  label="First name *"
                  id="first_name"
                  required
                  v-model="first_name"
                  ></v-text-field>
                   </v-flex>
                  </v-layout>
                  <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                  <v-text-field name="last_name"
                  label="Last name *"
                  id="last_name"
                  v-model="last_name"
                  required
                  ></v-text-field>
                   </v-flex>
                  </v-layout>
                  <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                  <v-text-field name="phone_no"
                  label="Phone No *"
                  id="phone_no"
                  v-model="phone_no"
                  required
                  ></v-text-field>
                   </v-flex>
                  </v-layout>
                <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                  <v-text-field name="your_location"
                  label="Your Location *"
                  id="your_location"
                  required
                  v-model="your_location"
                  ></v-text-field>
                   </v-flex>
                 </v-layout>
                <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                  <v-text-field name="destination"
                  label="Deliver to*"
                  id="destination"
                  required
                  v-model="destination"
                  ></v-text-field>
                   </v-flex>
                 </v-layout>
                <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                  <v-text-field name="imageUrl"
                  label="Image Url"
                  id="imageUrl"
                  required
                  v-model="imageUrl"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <img :src="imageUrl" height= "180" >
              </v-flex>
               <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                  <v-textarea name="description"
                  label="Description *"
                  id="Description"
                  required
                  v-model="description"
                  ></v-textarea>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12 sm6 offset-sm3 class="text-xs-center">
                  <h4 class="mb-3">Choose a Date & Time </h4>
                </v-flex>
              </v-layout>
              <v-layout row class="mb-2">
                <v-flex xs12  sm6 offset-sm3 class="text-xs-center">
                  <v-date-picker v-model="date"></v-date-picker>
                  <p>{{date}}</p>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12  sm6 offset-sm3 class="text-xs-center">
                  <v-time-picker v-model="time"></v-time-picker>
                  <p>{{time}}</p>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs-12 sm6 offset-sm3  class="text-xs-right">
                  <v-btn type="submit" class="primary" 
                  :disabled="!formIsValid">Post Request</v-btn>
                </v-flex>
                <v-flex xs12 sm6 offset-sm3 class="text-xs-left">
                  <v-btn class="secondary" router to="/" >cancel</v-btn>
               </v-flex>
              </v-layout>
            </form>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      first_name: '',
      last_name: '',
      phone_no: '',
      your_location: '',
      destination: '',
      title: '',
      description: '',
      imageUrl: '',
      date: '',
      time: ''  
    }
  }, 
  computed: {
    formIsValid() {
      return this.title !== '' && 
      this.destination !== '' && 
      this.first_name !== '' &&
      this.last_name !== '' &&
      this.description !== '' && 
      this.imageUrl !== ''
    },
    submittableDateTime() {
      const date = new Date(this.date)
      if(typeof this.time === 'string'){
        let hours = this.time.match(/^(\d+)/)[1]
        const minutes = this.time.match(/:(\d+)/)[1]
        date.setHours(hours)
        date.setMinutes(minutes)
      }else {
        date.setHours(this.time.getHours())
        date.setMinutes(this.time.getMinutes())
      }
      console.log(date)
      return date
    }
  },
  methods: {
    onCreateRequest() {
      if(!this.formIsValid){
        return
      }
      const requestsData = {
                first_name: this.first_name,
                last_name: this.last_name,
                phone_no: this.phone_no,
                title: this.title,
                description: this.description,
                your_location:this.your_location,
                destination: this.destination,
                imageUrl: this.imageUrl,
                date: this.date,
                time: this.time
      }
      this.$store.dispatch('createPost', requestsData)
    }
  }
}
</script>

<style scoped>

</style>
