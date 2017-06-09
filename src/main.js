// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router/router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

// 暂时没有配置 config/config.js
// import './config/config';// 引入配置 

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(iView)
Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
  // template: '<App/>',
  // components: { App }
})
