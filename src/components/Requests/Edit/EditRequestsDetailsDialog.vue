<template>
    <v-dialog width="350px" persistent v-model="editDialog">
        <v-btn fab accent slot="activator">
            <v-icon>edit</v-icon>
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title>Edit Request</v-card-title>
                    </v-flex>
                    <v-divider></v-divider>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-card-text>
                                <v-text-field name="title"
                                label="Title *"
                                id="title"
                                required
                                v-model="editedTitle"
                                ></v-text-field>
                                <v-textarea name="description"
                                label="Description *"
                                id="Description"
                                required
                                v-model="editedDescription"
                                ></v-textarea> 
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-actions>
                           <v-btn flat class="blue--text darken-1" @click="editDialog=false">Close</v-btn> 
                           <v-btn flat class="blue--text darken-1" @click="onSaveChanges">Save</v-btn> 
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props:['post'],
    data(){
        return{
            editDialog: false,
            editedTitle: this.post.title,
            editedDescription: this.post.description
        }
    },
    methods: {
        onSaveChanges (){
            if(this.editedTitle.trim() === '' || this.editedDescription.trim() === ''){
                return
            }
            this.editDialog =false
            this.$store.dispatch('updatePostsData', {
                id: this.post.id,
                title: this.editedTitle,
                description: this.editedDescription
            })
        }
    }
}
</script>
