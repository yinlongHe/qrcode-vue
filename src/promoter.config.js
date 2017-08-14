import './scss/style.scss';
import './js/common.js';
import './js/toast.js';
import './js/vue-filter.js';
import PromoterHome from './components/promoter/index.vue';
import PromoterInfo from './components/promoter/info.vue';
import PromoterRecord from './components/promoter/record.vue';

const routes = [
  {
    path: '/',
    name: 'promoterHome',
    meta: {
      title: '销售员',
    },
    component: PromoterHome,
  },
  {
    path: '/promoter/info',
    name: 'promoterInfo',
    meta: {
      title: '扫码成功',
    },
    component: PromoterInfo,
  },
  {
    path: '/promoter/record',
    name: 'promoterRecord',
    meta: {
      title: '促销记录',
    },
    component: PromoterRecord,
  },
];

const router = new VueRouter({ routes });

new Vue({
  router,
}).$mount('#qrCode');
