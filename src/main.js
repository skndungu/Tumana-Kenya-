import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {store} from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
import EditRequestsDetailsDialog from './components/Requests/Edit/EditRequestsDetailsDialog.vue'
import DeliveredDialog from './components/Admin/MarkDeliveredDialog.vue'
import TenderDialog from './components/Services/TenderDialog.vue'
import HelbDialog from './components/Services/HelbDialog.vue'
import KRADialog from './components/Services/KRADialog.vue'
import GarageDialog from './components/Services/GarageDialog.vue'
import MarketResearchDialog from './components/Services/MarketResearchDialog.vue'
import MeetingDialog from './components/Services/MeetingDialog.vue'
import TumanaDawaDialog from './components/Services/TumanaDawaDialog.vue'
import BrandingDialog from './components/Services/BrandingDialog.vue'
import GetEulogyDialog from './components/Services/GetEulogyDialog.vue'
import TumanaGiftsDialog from './components/Services/TumanaGiftsDialog.vue'
import GoodsDeliveryDialog from './components/Services/GoodsDeliveryDialog.vue'
import StationeryDialog from './components/Services/StationeryDialog.vue'
import ApplicationsDialog from './components/Services/ApplicationsDialog.vue'

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
Vue.component('app-edit-requests-details-dialog', EditRequestsDetailsDialog)
Vue.component('app-delivered-dialog', DeliveredDialog)
Vue.component('app-tender-dialog', TenderDialog)
Vue.component('app-helb-dialog', HelbDialog)
Vue.component('app-kra-dialog', KRADialog)
Vue.component('app-garage-dialog', GarageDialog)
Vue.component('app-meeting-dialog', MeetingDialog)
Vue.component('app-market-dialog', MarketResearchDialog)
Vue.component('app-dawa-dialog', TumanaDawaDialog)
Vue.component('app-branding-dialog', BrandingDialog)
Vue.component('app-gifts-dialog', TumanaGiftsDialog)
Vue.component('app-eulogy-dialog', GetEulogyDialog)
Vue.component('app-delivery-dialog', GoodsDeliveryDialog)
Vue.component('app-stationery-dialog', StationeryDialog )
Vue.component('app-application-dialog', ApplicationsDialog)

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
      storageBucket: "gs://tumana-kenya.appspot.com",
      messagingSenderId: "819934414157"
    })

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadRequests')
  }
})


