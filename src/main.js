import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import SuiVue from 'semantic-ui-vue'
import '../semantic/dist/semantic.min.css';
import VueAgile from 'vue-agile'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);


Vue.use(SuiVue);
Vue.use(VueAgile);
Vue.config.productionTip = false;

axios.defaults.baseURL = "https://scheduler-rest.herokuapp.com/api/lectures/";

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
