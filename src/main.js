import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入main.scss模块
import './stylesheets/main.scss'
//引入awsome图标库
import '../public/font-awesome-4.7.0/css/font-awesome.min.css'
//引入rem.js
import "./modules/rem.js"
//引入swiper样式
import "swiper/dist/css/swiper.min.css"
Vue.config.productionTip = false
//引入axios
import axios from "axios"
Vue.prototype.$http = axios

import { Search } from 'mint-ui';
Vue.component("mt-search", Search);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
