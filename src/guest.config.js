import './scss/style.scss';
import './js/common.js';
import './js/toast.js';
import './js/vue-filter.js';
import Home from './components/index.vue';
import GuestHome from './components/guest/index.vue';
import GuestLosing from './components/guest/losing.vue';
import BMap from './components/guest/map.vue';
import GuestWin from './components/guest/win.vue';
import GuestCenter from './components/guest/center.vue';
import GuestPrize from './components/guest/prize.vue';
import QuerySource from './components/guest/querySource.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '二维码',
    },
    component: Home,
  },
  {
    path: '/guest',
    name: 'guestHome',
    meta: {
      title: '抽奖首页',
    },
    component: GuestHome,
  },
  {
    path: '/guest/losing',
    name: 'guestLosing',
    meta: {
      title: '未中奖',
    },
    component: GuestLosing,
  },
  {
    path: '/guest/win',
    name: 'guestWin',
    meta: {
      title: '中奖了',
    },
    component: GuestWin,
  },
  {
    path: '/guest/center',
    name: 'guestCenter',
    meta: {
      title: '领奖中心',
    },
    component: GuestCenter,
  },
   {
    path: '/award/querySource',
    name: 'querySource',
    meta: {
      title: '溯源查询',
    },
    component: QuerySource,
  },
  {
    path: '/guest/prize/:id',
    name: 'guestPrize',
    meta: {
      title: '领奖中心/奖品详情',
    },
    component: GuestPrize,
    children: [
      {
        path: 'map/:prizeId',
        name: 'map',
        meta: {
          title: '自提网点',
        },
        component: BMap,
      },
    ]
  },
];

const router = new VueRouter({ routes });

new Vue({
  router,
}).$mount('#qrCode');
