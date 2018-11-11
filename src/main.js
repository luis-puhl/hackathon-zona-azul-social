import Vue from 'vue'
import './registerServiceWorker'

import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'
import './assets/app.css'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import App from './App.vue'

Vue.use(VueMaterial)
Vue.use(VueLayers)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
