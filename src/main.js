import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';


import VueResource from 'vue-resource'
Vue.use(VueResource);

//ElementUI
import ElementUI from 'element-ui'
Vue.use(ElementUI)

//Echarts
import * as echarts from 'echarts'

import vuetify from './plugins/vuetify'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
