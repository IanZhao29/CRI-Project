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

router.beforeEach((to, from, next) => {
    let getFlag = localStorage.getItem("Flag");
    let getid = localStorage.getItem("Userid");
    if (getFlag === "isLogin" && getid !== null) {
        store.state.isLogin = true;
        next();
        if (!to.meta.isLogin) {
            next({
                path: '/main'
            })
        }
    } else {
        if (to.meta.isLogin) {
            next({
                path: '/',
            })
        } else {
            next()
        }
    }
});

router.afterEach(() => {
    window.scroll(0, 0);
});

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
