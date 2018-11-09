<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>
            <v-card xs12>
                <v-card-title>
                    <h4><span class="header">Title: </span> {{post.title}}</h4>
                </v-card-title>
                <v-img 
                height="200px"
                width="auto"
                :src="post.imageUrl"
                >
                </v-img>
                <v-card-text>
                    <div class="info--text"><span class="header">Request ID: </span>{{post.id.toUpperCase()}}</div>
                    <div class="info--text"><span class="header">Posted on: </span>{{post.date}}</div>
                    <div class="info--text"><span class="header">Posted By: </span>{{post.first_name}} {{post.last_name}}</div>
                    <div class="info--text"><span class="header">Phone No: </span>{{post.phone_no}}</div>
                    <div class="info--text"><span class="header">Deliver To: </span>{{post.destination}}</div>
                    <div class="info--text"><span class="header">Description: </span>{{post.description}}</div>
                    <div class="info--text"><span class="header">My current Location : </span>{{post.current_location}}</div>
                    <div class="info--text"><span class="header">Date: </span>{{post.date}}</div>
                </v-card-text>
                <v-flex xs12 sm6 offset-sm3 class="text-xs-center">
                  <v-btn class="primary" >Mark Delivered</v-btn>
                </v-flex>
            </v-card>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3 class="text-xs-right">
                <v-btn class="secondary" router to="/" >Back</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: ['id'],
    computed: {
     post(){
       return this.$store.getters.loadedPost(this.id)
        }
    }
}
</script>

<style scoped>
 .header{
     color: orange;
     font-weight: bold;
 }
</style>
