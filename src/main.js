import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import store from './store'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueCompositionAPI)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
