import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import 'assets/css/base.css';
import 'assets/fonts/iconfont.css';
import Axios from "axios";

Vue.config.productionTip = false;
Vue.use(Element);
Axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';
Vue.prototype.$http = Axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
