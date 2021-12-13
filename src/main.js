/* eslint-enable */
import 'babel-polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
// import { sync } from 'vuex-router-sync'
import store from './store'
// import VueMeta from 'vue-meta'

// mixins
import common from './mixins/common.mixin.js'

Vue.mixin(common)

// sync(store, router)

router.beforeEach((to, from, next) => {
  next()
})

// Vue.use(VueMeta)

Vue.config.productionTip = false

/* eslint-disable no-new */
// let setupApplication = {
//   app: null,
//   store: store,
//   router: router
// }

const application = new Vue({
  store,
  router,
  render: h => h(App)
})

document.addEventListener('DOMContentLoaded', function () {
  application.$mount('#app')
})
