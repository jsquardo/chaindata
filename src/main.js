import Vue from 'vue';
import App from './App.vue';

import './registerServiceWorker';
import router from './router';
import store from './store';

import Vue2Filters from 'vue2-filters'

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import '../src/assets/main.scss'
import IconCrypto from 'vue-cryptocurrency-icons'
import ReadMore from 'vue-read-more'

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(Vue2Filters)
Vue.use(IconCrypto)
Vue.use(ReadMore)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
