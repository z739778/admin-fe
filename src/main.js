// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-default/index.css'
import 'normalize.css'
import './style/style.scss'
import Vue from 'vue'
import ElementUI from 'element-ui'
// import VeeValidate from 'vee-validate'
import router from './router'
import axios from 'axios'

// const config = {
//   errorBagName: 'errors', // change if property conflicts.
//   fieldsBagName: 'fields',
//   delay: 0,
//   locale: 'en',
//   dictionary: null,
//   strict: true,
//   enableAutoClasses: false,
//   classNames: {
//     touched: 'touched', // the control has been blurred
//     untouched: 'untouched', // the control hasn't been blurred
//     valid: 'valid', // model is valid
//     invalid: 'invalid', // model is invalid
//     pristine: 'pristine', // control has not been interacted with
//     dirty: 'dirty' // control has been interacted with
//   }
// }

// Vue.use(VeeValidate, config)
Vue.use(ElementUI)

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
  // template: '<App/>',
  // components: { App }
}).$mount('#app')
