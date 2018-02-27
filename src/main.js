// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'

import ThreeBoxGeometry from './components/ThreeBoxGeometry'
import ThreeCamera from './components/ThreeCamera'
import ThreeMaterial from './components/ThreeMaterial'
import ThreeMesh from './components/ThreeMesh'
import ThreeRenderer from './components/ThreeRenderer'
import ThreeScene from './components/ThreeScene'

Vue.use(ThreeBoxGeometry)
Vue.use(ThreeCamera)
Vue.use(ThreeMaterial)
Vue.use(ThreeMesh)
Vue.use(ThreeRenderer)
Vue.use(ThreeScene)
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.config.performance = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
