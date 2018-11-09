import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {store} from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify, { theme: {
  primary: '#d32f2f',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107',
  fontcolor: '#fff'
}})

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyBm5jlvs9juZDldfrc_LLAnEsALUJdl9cY",
      authDomain: "tumana-kenya.firebaseapp.com",
      databaseURL: "https://tumana-kenya.firebaseio.com",
      projectId: "tumana-kenya",
      storageBucket: "",
      messagingSenderId: "819934414157"
    })
  }
})


