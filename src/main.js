import Vue from 'vue';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import Notifications from 'vue-notification';
import YmapPlugin from 'vue-yandex-maps';

import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import './assets/sass/style.sass';
import './assets/fonts/fonts.sass';
import ymapSettings from './yandex.map.config';

Axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const token = localStorage.getItem('token');
if (token) {
    Axios.defaults.headers.common['Authorization'] = 'Token ' + token;
}

Vue.use(VueAxios, Axios);
Vue.use(Notifications);
Vue.use(YmapPlugin, ymapSettings);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
