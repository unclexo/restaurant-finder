import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as VueGoogleMaps from 'vue2-google-maps'

// Sets defaults
axios.defaults.baseURL = process.env.ZOMATO_BASE_URL || ''
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['user-key'] = process.env.ZOMATO_API_KEY

// Registers plugins
Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GOOGLE_API_KEY || ''
  }
})