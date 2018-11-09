import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        loadedPosts: [
        {  
            id: 'Js3fsda4dy',
            first_name: 'James',
            last_name: 'Njoroge',
            phone_no: '0758698645',
            title: 'Helb Application Delivery',
            description: 'Please deliver this helb application to Nairobi Aniversary Towers',
           your_location:'Nyeri, DeKUT',
            destination: 'Nairobi',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKBDFjKDd4i2f6KgZgz1nwg2C0ANb3KJayJqYEqE3wTjm0t4-8w',
            date: '2018/5/18'
        },
        {   
            id: 'Xhy7drgsew2e',
            first_name: 'Jones',
            last_name: 'Kibe',
            phone_no: '0736792822',
            title: 'Tender quotation',
            description: 'Please provide a quotation of the following tender items as soon a s possible ',
           your_location:'Nyahururu',
            destination: 'Nyahururu',
            imageUrl: 'https://images.template.net/wp-content/uploads/2015/03/Shopping-List-Template-Printable1.jpg',
            date: '2018/9/25'
        },
        {  
            id: 'Qre8w7sdtf',
            first_name: 'Samuel',
            last_name: 'Omondi',
            phone_no: '0716789526',
            title: 'Farm Products delivery',
            description: 'please deliver the following to 2NK Nyeri',
           your_location:'Mweiga',
            destination: 'Nyeri',
            imageUrl: 'http://contentwww.azureedge.net/ffty/step3-farm-products.jpg',
            date: '2018/6/27'
        }
        ],
         user: null,
         loading: false,
         error: null
    },
    mutations:{
        createPost(state, payload) {
            state.loadedPosts.push(payload)
        },
        setUser(state, payload){
            state.user = payload
        },
        setLoading(state, payload){
            state.loading = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        clearError(state){
            state.error = null
        }
    },
    actions:{
        createPost ({commit}, payload) {
            const post_request= {
                first_name: payload.first_name,
                last_name: payload.last_name,
                phone_no: payload.phone_no,
                title: payload.title,
                description: payload.description,
                your_location:payload.your_location,
                destination: payload.destination,
                imageUrl: payload.imageUrl,
                date: payload.date,
                time: payload.time
            }
            // // Reach out to firebase and store it
            firebase.database().ref('Requests').push(post_request).then((data) => {
                console.log(data)
                commit('createPost', post_request)
            })
            .catch((error) => {
                console.log(error)
            })
            // commit('createPost', post_request)
        },
        signUserUp({commit}, payload){
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(
                user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        postedRequests: []
                    }
                    commit('setUser', newUser)
                }
            )
            .catch(
                error => {
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error)
                }
            )
        },
        signUserIn ({commit}, payload){
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(
                user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        postedRequests: []
                    }
                    commit('setUser', newUser)
                }
            )
            .catch(
                error => {
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error)
                }
            )
        },
        clearError({commit}) {
            commit('clearError')
        }
       },
    getters: {
        loadedPosts(state) {
            return state.loadedPosts.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredPosts(state, getters){
            return getters.loadedPosts.slice(0,3)
        },
        loadedPost(state){  
            return(requestId) => {
                return state.loadedPosts.find((post) => {
                    return post.id === requestId
                })
            }
        },
        user (state) {
            return state.user
        },
        loading(state){
            return state.loading
        },
        error(state) {
            return state.error
        }
    }
})