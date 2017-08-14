import './scss/style.scss';
import './js/common.js';
import './js/toast.js';
import './js/vue-filter.js';
import BMap from './components/guest/map.vue';

const routes = [
  {
    path: '/',
    name: 'map',
    meta: {
      title: '百度地图',
    },
    component: BMap,
  }
];

const router = new VueRouter({ routes });

new Vue({
  router,
}).$mount('#qrCode');
