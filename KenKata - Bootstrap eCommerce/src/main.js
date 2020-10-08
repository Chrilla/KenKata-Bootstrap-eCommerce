import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueTippy from "vue-tippy";
import BackToTop from 'vue-backtotop'

Vue.use(VueTippy);
Vue.use(BackToTop);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
