import Vue from 'vue';
import App from './App.vue';

import './registerServiceWorker';
import router from './router';
import store from './store';

import Vue2Filters from 'vue2-filters'

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import Trend from "vuetrend"

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(Vue2Filters)
Vue.use(Trend)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
