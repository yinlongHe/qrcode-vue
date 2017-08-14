import './scss/style.scss';
import './js/common.js';
import './js/toast.js';
import './js/vue-filter.js';
import ExpiryHome from './components/expiry/index.vue';
import ExpiryInfo from './components/expiry/info.vue';
import ExpiryRecord from './components/expiry/record.vue';

const routes = [
  {
    path: '/',
    name: 'expiryHome',
    meta: {
      title: '兑换网点',
    },
    component: ExpiryHome,
  },
  {
    path: '/expiry/detail',
    name: 'expiryDetail',
    meta: {
      title: '兑奖记录详情页',
    },
    component: ExpiryInfo,
  },
  {
    path: '/expiry/record',
    name: 'expiryRecord',
    meta: {
      title: '兑奖记录',
    },
    component: ExpiryRecord,
  },
];

const router = new VueRouter({ routes });

new Vue({
  router,
}).$mount('#qrCode');
