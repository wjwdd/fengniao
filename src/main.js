// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//插件
import YDUI from 'vue-ydui'; 
import 'vue-ydui/dist/ydui.rem.css';
import District from 'ydui-district/dist/gov_province_city_area_id';
import 'vue-ydui/dist/ydui.base.css';
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
//公共js
import common from '../static/common.js';
Vue.prototype.common=common;

Vue.use(YDUI);
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
/*	组件		*/
//创建的头部返回组件
import headerTop from '@/components/common/header';
Vue.component("head-view",headerTop);
//创建底部组件
import bottom from '@/components/common/bottom';
Vue.component("bottom-view",bottom);
//实验的组件
import shiyan from '@/components/common/shi_yan';
Vue.component("shiyan-view",shiyan);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }else{
  	document.title = "蜂鸟"
  }
  next()
})
