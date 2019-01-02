import Vue from 'vue'
import './plugins'
import App from './App.vue'
import store from './store/store'

// Makes the vue's event manager available
// across the app
export const eventManager = new Vue

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
