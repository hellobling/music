import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'


import 'common/stylus/index.styl'

// 用fastclick所有点击就没有300毫秒延迟
fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
	loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
