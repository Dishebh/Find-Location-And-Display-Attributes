import Vue from 'vue'
import App from './App.vue'

import "chart.js"
import "hchs-vue-charts"
Vue.use(window.VueCharts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
