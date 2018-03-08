/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(4);

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(9);

	var _index4 = _interopRequireDefault(_index3);

	var _losing = __webpack_require__(18);

	var _losing2 = _interopRequireDefault(_losing);

	var _map = __webpack_require__(22);

	var _map2 = _interopRequireDefault(_map);

	var _win = __webpack_require__(26);

	var _win2 = _interopRequireDefault(_win);

	var _center = __webpack_require__(30);

	var _center2 = _interopRequireDefault(_center);

	var _prize = __webpack_require__(34);

	var _prize2 = _interopRequireDefault(_prize);

	var _querySource = __webpack_require__(38);

	var _querySource2 = _interopRequireDefault(_querySource);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = [{
	  path: '/',
	  name: 'Home',
	  meta: {
	    title: '二维码'
	  },
	  component: _index2.default
	}, {
	  path: '/guest',
	  name: 'guestHome',
	  meta: {
	    title: '抽奖首页'
	  },
	  component: _index4.default
	}, {
	  path: '/guest/losing',
	  name: 'guestLosing',
	  meta: {
	    title: '未中奖'
	  },
	  component: _losing2.default
	}, {
	  path: '/guest/win',
	  name: 'guestWin',
	  meta: {
	    title: '中奖了'
	  },
	  component: _win2.default
	}, {
	  path: '/guest/center',
	  name: 'guestCenter',
	  meta: {
	    title: '领奖中心'
	  },
	  component: _center2.default
	}, {
	  path: '/award/querySource',
	  name: 'querySource',
	  meta: {
	    title: '溯源查询'
	  },
	  component: _querySource2.default
	}, {
	  path: '/guest/prize/:id',
	  name: 'guestPrize',
	  meta: {
	    title: '领奖中心/奖品详情'
	  },
	  component: _prize2.default,
	  children: [{
	    path: 'map/:prizeId',
	    name: 'map',
	    meta: {
	      title: '自提网点'
	    },
	    component: _map2.default
	  }]
	}];

	var router = new VueRouter({ routes: routes });

	new Vue({
	  router: router
	}).$mount('#qrCode');

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/* eslint-disable max-len */
	/* eslint-disable no-use-before-define */
	/* eslint-disable no-restricted-syntax */
	Vue.http.options.emulateJSON = true;

	var Common = function () {
	  function Common() {
	    _classCallCheck(this, Common);
	  }

	  _createClass(Common, [{
	    key: 'setTitle',

	    /**
	     * 设置页面 title
	     * @param {String} title
	     */
	    value: function setTitle(title) {
	      self.document.title = title;
	      var iframe = self.document.createElement('iframe');
	      iframe.style.display = 'none';
	      iframe.src = '/index.html';
	      self.document.body.appendChild(iframe);
	      iframe.addEventListener('load', cIframe);

	      function cIframe() {
	        self.setTimeout(function () {
	          iframe.removeEventListener('load', cIframe);
	          self.document.body.removeChild(iframe);
	        }, 0);
	      }
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize(sourceParams) {
	      if (typeof sourceParams === 'string') return sourceParams;
	      var params = [];
	      var add = function add(key, value) {
	        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value != null) {
	          var keys = self.Object.keys(value);
	          keys.map(function (item) {
	            add(key + '[' + item + ']', value[item]);
	          });
	        } else {
	          params[params.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
	        }
	      };

	      // Serialize the key/values

	      var _loop = function _loop(i) {
	        if (_typeof(sourceParams[i]) === 'object' && sourceParams[i] != null) {
	          if (Array.isArray(sourceParams[i])) {
	            sourceParams[i].map(function (item, index) {
	              add(i + '[' + index + ']', item);
	            });
	          } else {
	            var keys = self.Object.keys(sourceParams[i]);
	            keys.map(function (item) {
	              add(i + '[' + item + ']', sourceParams[i][item]);
	            });
	          }
	        } else {
	          add(i, sourceParams[i]);
	        }
	      };

	      for (var i in sourceParams) {
	        _loop(i);
	      }
	      return params.join('&').replace('/%20/g', '+');
	    }

	    /**
	     * 页面级 loading .
	     * @param {Boolean} [toggle = true] - 控制 loading 的显/隐
	     */

	  }, {
	    key: 'loading',
	    value: function loading() {
	      var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	      var loadEl = self.document.getElementById('loading');
	      if (toggle) {
	        self.document.body.style.overflow = 'hidden';
	        loadEl.style.display = 'block';
	      } else {
	        self.document.body.style.overflow = 'auto';
	        loadEl.style.display = 'none';
	      }
	    }

	    /**
	     * 扩展 ES6 Object.assign 方法, 如果原生支持则用原生的，否则用模拟的.
	     * @param {Object} target - 目录对象, 方法调用的结果会修改 target 的值.
	     * @param {Object} source - 源对象，需要追加的属性.
	     */

	  }, {
	    key: 'assign',
	    value: function assign(target, source) {
	      var newTarget = target;
	      if (Object.assign) {
	        Object.assign(target, source);
	      } else {
	        for (var prop in source) {
	          if ({}.hasOwnProperty.call(source, prop)) {
	            newTarget[prop] = source[prop];
	          }
	        }
	      }
	    }

	    /**
	     * get请求
	     * @param {String} url - 请求的 url
	     * @param {Object} options
	     * @param {Object} options.params - 请求的参数
	     * @param {Function} options.callback - 成功执行的回调
	     */

	  }, {
	    key: 'get',
	    value: function get(url) {
	      var _this = this;

	      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	          _ref$params = _ref.params,
	          params = _ref$params === undefined ? {} : _ref$params,
	          callback = _ref.callback;

	      this.loading();
	      Vue.http.get(url + '?' + this.serialize(params)).then(function (response) {
	        return response.json();
	      }).then(function (data) {
	        _this.loading(false);
	        callback(data);
	      });
	    }

	    /**
	     * post请求
	     * @param {String} url - 请求的 url
	     * @param {Object} options
	     * @param {Object} options.params - 请求的参数
	     * @param {Function} options.callback - 成功执行的回调
	     */

	  }, {
	    key: 'post',
	    value: function post(url) {
	      var _this2 = this;

	      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	          _ref2$params = _ref2.params,
	          params = _ref2$params === undefined ? {} : _ref2$params,
	          callback = _ref2.callback;

	      this.loading();
	      Vue.http.post(url, params).then(function (response) {
	        return response.json();
	      }).then(function (data) {
	        _this2.loading(false);
	        callback(data);
	      });
	    }
	  }, {
	    key: 'getPostion',
	    value: function getPostion(config, callback) {
	      var _this3 = this;

	      wx.ready(function () {
	        wx.getLocation({
	          type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
	          success: function (res) {
	            var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
	            var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
	            var speed = res.speed; // 速度，以米/每秒计
	            var accuracy = res.accuracy; // 位置精度
	            callback(config.url + '/' + longitude + '/' + latitude);
	          }.bind(_this3),
	          cancel: function (res) {
	            callback(config.url + '/0/0');
	          }.bind(_this3),
	          fail: function (res) {
	            callback(config.url + '/-1/-1');
	          }.bind(_this3)

	        });
	      });
	    }
	  }]);

	  return Common;
	}();

	self.common = new Common();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	(function () {
	  var $el = null;
	  var mask = null;
	  if (!$el) {
	    $el = self.document.createElement('div');
	    $el.style.position = 'fixed';
	    $el.style.left = '50%';
	    $el.style.top = '50%';
	    $el.style.zIndex = 5;
	    $el.style.padding = '10px';
	    $el.style.color = '#fff';
	    $el.style.borderRadius = '5px';
	    $el.style.backgroundColor = 'rgba(40, 40, 40, .75)';
	    $el.style.webkitTransform = 'translate(-50%, -50%)';
	    $el.style.transform = 'translate(-50%, -50%)';
	    $el.style.display = 'none';
	    self.document.body.appendChild($el);
	  }
	  if (!mask) {
	    mask = self.document.createElement('div');
	    mask.style.position = 'fixed';
	    mask.style.left = 0;
	    mask.style.top = 0;
	    mask.style.right = 0;
	    mask.style.bottom = 0;
	    mask.style.zIndex = 4;
	    mask.style.backgroundColor = 'rgba(0, 0, 0, .01)';
	    mask.style.display = 'none';
	    self.document.body.appendChild(mask);
	  }
	  self.toast = function (content) {
	    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	        callback = _ref.callback,
	        _ref$time = _ref.time,
	        time = _ref$time === undefined ? 2000 : _ref$time;

	    $el.innerHTML = content;
	    $el.style.display = 'block';
	    mask.style.display = 'block';
	    self.setTimeout(function () {
	      $el.style.display = 'none';
	      mask.style.display = 'none';
	      if (typeof callback === 'function') {
	        callback();
	      }
	    }, time);
	  };
	  self.toastr = function (content) {
	    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	        callback = _ref2.callback,
	        _ref2$time = _ref2.time,
	        time = _ref2$time === undefined ? 600000000 : _ref2$time;

	    $el.innerHTML = content;
	    $el.style.display = 'block';
	    mask.style.display = 'block';
	    self.setTimeout(function () {
	      if (typeof callback === 'function') {
	        callback();
	      }
	    }, time);
	  };
	})();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * 日期格式化
	 */
	Vue.filter('formatDate', function (timeStamp) {
	  if (timeStamp == '' || timeStamp == null || timeStamp == 0) {
	    return '';
	  }
	  var d = new Date(+timeStamp);
	  var year = d.getFullYear();
	  var month = d.getMonth() + 1;
	  var day = d.getDate();
	  return year + '\u5E74' + month + '\u6708' + day + '\u65E5';
	});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(6)
	__vue_script__ = __webpack_require__(7)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(8)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-d5098ca8/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <style lang='sass'>
	//
	// </style>
	//
	// <template lang="jade">
	//   div
	//     .not-found(
	//       v-if='code != 200',
	//       v-text='msg'
	//     )
	// </template>
	//
	// <script lang='babel'>
	exports.default = {
	  data: function data() {
	    return {
	      code: self.qrcode.code,
	      msg: self.qrcode.msg,
	      openId: self.qrcode.openId,
	      uuid: self.qrcode.uuid,
	      from: self.qrcode.from,
	      qrcode: self.qrcode,
	      is_history: self.qrcode.is_history,
	      is_input: self.qrcode.is_input
	    };
	  },
	  created: function created() {
	    // code == 200，才算是正常流程，再执行页面跳转
	    switch (self.qrcode.code) {
	      case '200':
	        if (self.qrcode.from == 0) {
	          this.$router.replace({
	            name: 'guestHome'
	          });
	        }
	        if (self.qrcode.from == 1) {
	          this.$router.replace({
	            name: 'guestCenter'
	          });
	        }
	        break;
	      case '1007':
	        // 二维码已抽奖,未中奖
	        this.$router.replace({
	          name: 'guestLosing'
	        });
	        break;
	      case '1015':
	        // 未启用营销，直接进入物流追溯界面
	        this.$router.replace({
	          name: 'querySource'
	        });
	        self.qrcode.islogis = '0';
	        break;
	      case '1008':
	      case '1009':
	        // 1008 已抽奖中奖, 未填写手机号, 去中奖页面
	        // 1009 已抽奖中奖, 填写手机号, 未关注
	        this.$router.replace({
	          name: 'guestWin',
	          query: {
	            actwinid: self.qrcode.actwinid,
	            pzid: self.qrcode.pzid
	          }
	        });
	        break;
	      case '1012':
	      case '1013':
	        // 1012 已抽奖并且已关注
	        // 1013 已兑奖
	        this.$router.replace({
	          name: 'guestCenter'
	        });
	        break;
	    }
	  }
	};
	// code -> 200为成功, 其他为失败
	// code: ${code!},
	// openId: '${openId!}',
	// uuid: '${uuid!}',
	// // from -> 判断页面来源, 0: 二维码扫码, 1: 领奖中心
	// from: ${from!},
	// origin: self.location.origin,
	// pathname: self.location.pathname,
	// </script>

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = "<div><div v-if=\"code != 200\" v-text=\"msg\" class=\"not-found\"></div></div>";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(10)
	__vue_script__ = __webpack_require__(11)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\guest\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(17)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-c05ab1b0/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dialog = __webpack_require__(12);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _api = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <style lang='sass'>
	//   @import '../../scss/layout';
	//   .guest-home-wrapper {
	//     @include coverBg;
	//     .btn {
	//       $w: (306px/2);
	//       position: absolute;
	//       left: 50%;
	//       bottom: 18%;
	//       margin-left: -($w/2);
	//       width: $w;
	//       height: (108px/2);
	//       background: url(/dist/images/btn_start.png);
	//       background-size: cover;
	//     }
	//     .btn-rule {
	//       position: absolute;
	//       top: 30%;
	//       right: 0;
	//       padding: 10px 8px 10px 10px;
	//       writing-mode: vertical-lr;
	//       background-color: #ffe641;
	//       border-top-left-radius: 5px;
	//       border-bottom-left-radius: 5px;
	//       box-shadow: 0 3px 0 #d9c119;
	//     }
	//   }
	// </style>
	//
	// <template lang='jade'>
	//   .wrapper.guest-home-wrapper(
	//     :style='bgImg'
	//   )
	//     a#drawStartBtn.btn(@click='start')
	//     a.btn-rule(
	//       v-if='introduction',
	//       @click='dialogToggle = true',
	//     ) 活动规则
	//     common-dialog(
	//       v-if='dialogToggle',
	//       @closeDialog='toggle',
	//       :dialogToggle='dialogToggle',
	//       :icon='true'
	//     )
	//       div(
	//         v-html='introduction'
	//       )
	// </template>
	//
	// <script lang='babel'>
	exports.default = {
	  components: {
	    CommonDialog: _dialog2.default
	  },
	  data: function data() {
	    return {
	      productId: self.qrcode.productId,
	      activityId: self.qrcode.activityId,
	      uuid: self.qrcode.uuid,
	      type: self.qrcode.type,
	      openid: self.qrcode.openId,
	      bgImg: {
	        backgroundImage: 'url(' + (self.qrcode.bgImg || "/dist/images/bg_start.png") + ')'
	      },
	      dialogToggle: false,
	      introduction: self.qrcode.introduction
	    };
	  },

	  methods: {
	    toggle: function toggle() {
	      this.dialogToggle = false;
	    },
	    start: function start() {
	      document.getElementById("drawStartBtn").style.visibility = "hidden";

	      var url = '' + _api.drawPrize + this.productId + '/' + this.activityId + '/' + this.uuid + '/' + this.type + '/' + this.openid;
	      var copythis = this;
	      var config = { url: url };
	      var draw = function draw(url) {
	        self.common.get(url, {
	          callback: function (json) {
	            if (json.code == 200) {
	              self.qrcode.pztype = json.pztype;
	              self.qrcode.pzname = json.pzname;
	              self.qrcode.price = json.price;
	              self.qrcode.is_input = json.is_input;
	              copythis.$router.replace({
	                name: 'guestWin',
	                query: {
	                  actwinid: json.actwinid,
	                  pzid: json.pzid
	                }
	              });
	            } else if (json.code == 1105 || json.code == 1106 || json.code == 1107) {
	              // 1105 奖品已发完
	              // 1106 未中奖
	              // 1107 未设置奖品
	              self.qrcode.background_image_los = json.background_image_los;
	              copythis.$router.replace({
	                name: 'guestLosing'
	              });
	            } else {
	              self.toast(json.msg);
	              document.getElementById("drawStartBtn").style.visibility = "visible";
	            }
	          }.bind(copythis)
	        });
	      };
	      //判断是是够需要获取消费者位置，启用则调用微信定位
	      if (self.qrcode.is_postion == 1) {
	        self.common.getPostion(config, draw);
	      } else {
	        draw(url + '/-9/-9');
	      }
	    }
	  },
	  mounted: function mounted() {
	    if (self.qrcode.isAutoDraw == 1) {
	      console.log("==>启动自动抽奖，准备开始抽奖");
	      this.start();
	    }
	  }
	};
	// </script>

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(13)
	__vue_script__ = __webpack_require__(14)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\common\\dialog.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(15)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2466789a/dialog.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <style lang='sass'>
	//   .dialog {
	//     position: fixed;
	//     top: 10%;
	//     padding: 10%;
	//     left: 0;
	//     right: 0;
	//     z-index: 5;
	//     color:#333;
	//     .dialog-content {
	//       position: relative;
	//       z-index: 3;
	//       border-radius: 10px;
	//       padding: 10px;
	//       background-color: #fff;
	//     }
	//     p {
	//       margin-bottom: 5px;
	//     }
	//     .btn-close {
	//       width: 25px;
	//       height: 25px;
	//       border: 1px solid #fff;
	//       border-radius: 100px;
	//       position: absolute;
	//       left: 50%;
	//       bottom: -35px;
	//       margin-left: -13px;
	//       pointer-events: none;
	//       z-index: 4;
	//       &:before {
	//         position: absolute;
	//         content: '';
	//         left: 2px;
	//         width: 21px;
	//         height: 1px;
	//         top: 12px;
	//         background-color: #fff;
	//         transform: rotate(45deg);
	//       }
	//       &:after {
	//         position: absolute;
	//         content: '';
	//         left: 2px;
	//         width: 21px;
	//         height: 1px;
	//         top: 12px;
	//         background-color: #fff;
	//         transform: rotate(135deg);
	//       }
	//     }
	//     img {
	//       width: 100%;
	//       display: block;
	//     }
	//   }
	// </style>
	//
	// <template lang='jade'>
	//   .dialog
	//     section.dialog-content
	//       slot
	//     a.btn-close(v-if='icon')
	//     .mask(
	//       @click='toggle'
	//     )
	// </template>
	//
	// <script lang='babel'>
	exports.default = {
	  props: ['dialog-toggle', 'icon'],
	  methods: {
	    toggle: function toggle() {
	      this.$emit('closeDialog');
	    }
	  }
	  // </script>

	};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"dialog\"><section class=\"dialog-content\"><slot></slot></section><a v-if=\"icon\" class=\"btn-close\"></a><div @click=\"toggle\" class=\"mask\"></div></div>";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// const url = 'http://betascan.vats.com.cn';
	//const url = 'http://192.168.13.149:8080';
	var url = '';

	/**
	 * 领奖中心
	 * @params {String} /openid
	 */

	var awardCenter = exports.awardCenter = url + '/award/index/';
	/**
	 * 抽奖
	 * @params {String} /product_id/activity_id/uuid/type/openid
	 */
	var drawPrize = exports.drawPrize = url + '/drawprize/';

	/**
	 * 去领奖
	 * @params {String} /openid/actwinid/prizeid/mobile/validcode/type/uuid
	 */

	var awardAcceptPrize = exports.awardAcceptPrize = url + '/award/accept_prize/';

	/**
	 * 获取短信验证码
	 * @params {String} /mobile
	 */
	var getCode = exports.getCode = url + '/award/validcode/';

	/**
	 * 领奖中心，奖品详情
	 * @params {String} /openid/id
	 */
	var awardPrize = exports.awardPrize = url + '/award/prize/';

	/**
	 * 领奖中心，配送地址
	 * @params {String} /openid/id
	 * @query {String} consignee 收货人
	 * @query {String} mobile 手机号
	 * @query {String} rgn_region_id 地区id
	 * @query {String} address 详细地址
	 */
	var awardDistribution = exports.awardDistribution = url + '/award/distribution/';

	/**
	 * 领奖中心，自提获取二维码
	 * @params {String} id
	 */
	var getQrcodeImageURL = exports.getQrcodeImageURL = url + '/award/getQrcodeImage/';

	/**
	 * 领奖中心，获取附件的自提点
	 * @param longitude 经度
	 * @param latitud 维度
	 */
	var getBranchListURL = exports.getBranchListURL = url + '/award/getBranchList/';

	/**
	 * 获取省市区
	 * @params {Number} /parentid/
	 */
	var rgnRegion = exports.rgnRegion = url + '/award/rgnRegion/';

	/**
	 * 获取促销记录
	 * @param salesmanId 促销员id
	 * @param productName 产品名称
	 * @param startTime  扫码时间开始时间
	 * @param endTime    扫码时间结束时间
	 * @param timeType  时间类型：1、今天，2、近7天，3、近30天， 4、输入时间进行查询
	 * @return
	 */

	var promoterRecordURL = exports.promoterRecordURL = url + '/getSaleLogForSalesman/';

	/**
	 * 获取兑奖记录
	 * @param salesmanId 促销员id
	 * @param productName 产品名称
	 * @param startTime  扫码时间开始时间
	 * @param endTime    扫码时间结束时间
	 * @param timeType  时间类型：1、今天，2、近7天，3、近30天， 4、输入时间进行查询
	 * @return
	 */

	var expiryRecordURL = exports.expiryRecordURL = url + '/getStoreWinList/';

	/**
	 * 兑奖记录详情点击链接
	 * @param id 兑奖记录id
	 * @return
	 */

	var expiryRecordDetailURL = exports.expiryRecordDetailURL = url + '/getWinMessageDetail/';

	/**
	 * 确认兑奖 按钮点击链接
	 * @param id 兑奖记录id
	 * @param storeId 网点id
	 * @return
	 */

	var confirmPrizeURL = exports.confirmPrizeURL = url + '/confirmWin/';

	/**
	 * 溯源查询
	 * @param type 
	 * 扫码类型 2：历史普通码瓶码 （营销码）；3：普通码箱码 （物流码） ；4：组合码瓶码 物流码 ;
	 * 5：代表组合码箱码（物流码）；6：代表普通码瓶码（营销码）7.普通码瓶码（物流码）
	 * @param uuid 
	 * return
	 */
	var getSource = exports.getSource = url + '/award/querySource/';

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = "<div :style=\"bgImg\" class=\"wrapper guest-home-wrapper\"><a id=\"drawStartBtn\" @click=\"start\" class=\"btn\"></a><a v-if=\"introduction\" @click=\"dialogToggle = true\" class=\"btn-rule\">活动规则</a><common-dialog v-if=\"dialogToggle\" @closeDialog=\"toggle\" :dialogToggle=\"dialogToggle\" :icon=\"true\"><div v-html=\"introduction\"></div></common-dialog></div>";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(19)
	__vue_script__ = __webpack_require__(20)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\guest\\losing.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-b140c1a8/losing.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dialog = __webpack_require__(12);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    CommonDialog: _dialog2.default
	  },
	  data: function data() {
	    return {
	      bgImg: {
	        backgroundImage: 'url(' + self.qrcode.background_image_los + ')'
	      },
	      qr: self.qrcode.imgUrl,
	      ruleDialogToggle: false,
	      introduction: self.qrcode.introduction
	    };
	  },

	  methods: {
	    ruleToggle: function ruleToggle() {
	      this.ruleDialogToggle = false;
	    }
	  }
	  // </script>

	}; // <style lang='sass'>
	//   @import '../../scss/layout';
	//   .guest-losing-wrapper {
	//     @include coverBg(100%);
	//     background-color: #df2023;
	//     text-align: center;
	//     color: #fff;
	//     .btn-rule {
	//       position: absolute;
	//       top: 30%;
	//       right: 0;
	//       padding: 10px 8px 10px 10px;
	//       writing-mode: vertical-lr;
	//       background-color: #ffe641;
	//       border-top-left-radius: 5px;
	//       border-bottom-left-radius: 5px;
	//       box-shadow: -3px 0 3px #d9c119, 0 3px 3px #d9c119;
	//       color: #d65d18;
	//     }
	//     .tips {
	//       font-size: 20px;
	//       text-shadow: 0 1px #7e8180;
	//       margin-top: 15%;
	//       position: absolute;
	//       top: 45%;
	//       left: 0;
	//       width: 100%;
	//     }
	//     .follow {
	//       position: absolute;
	//       top: 60%;
	//       left: 0;
	//       width: 100%;
	//     }
	//     img {
	//       width: 40%;
	//       position: absolute;
	//       top: 70%;
	//       left: 30%;
	//       border: 5px solid #fff;
	//       margin-left: -5px;
	//       background-color: #fff;
	//       border-radius: 3px;
	//     }
	//   }
	// </style>
	//
	// <template lang='jade'>
	//   .wrapper.guest-losing-wrapper(
	//     :style='bgImg'
	//   )
	//     a.btn-rule(
	//       v-if='introduction',
	//       @click='ruleDialogToggle = true',
	//     ) 活动规则
	//     common-dialog(
	//       v-if='ruleDialogToggle',
	//       @closeDialog='ruleToggle',
	//       :ruleDialogToggle='ruleDialogToggle',
	//       :icon='true'
	//     )
	//       div(
	//         v-html='introduction'
	//       )
	//     img(:src='qr')
	// </template>
	// <script lang='babel'>

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = "<div :style=\"bgImg\" class=\"wrapper guest-losing-wrapper\"><a v-if=\"introduction\" @click=\"ruleDialogToggle = true\" class=\"btn-rule\">活动规则</a><common-dialog v-if=\"ruleDialogToggle\" @closeDialog=\"ruleToggle\" :ruleDialogToggle=\"ruleDialogToggle\" :icon=\"true\"><div v-html=\"introduction\"></div></common-dialog><img :src=\"qr\"/></div>";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(23)
	__vue_script__ = __webpack_require__(24)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\guest\\map.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3249e632/map.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _api = __webpack_require__(16);

	exports.default = {
	  data: function data() {
	    return {
	      prizeId: 0,
	      fixedPoint: [],
	      centerPoint: {},
	      toggle: false
	    };
	  },

	  methods: {
	    initMap: function initMap(defaultIndex) {
	      // 创建Map实例
	      var map = new BMap.Map("allmap");

	      // 设置地图点的中心点
	      var point = new BMap.Point(this.centerPoint.x, this.centerPoint.y);

	      // 将地图渲染到 DOM 中，并设置地图的显示级别
	      map.centerAndZoom(point, 12);

	      // 描点点击后信息窗口样式
	      var infoOpts = {
	        // 信息窗口宽度
	        width: 200,
	        // 信息窗口高度
	        height: 100,
	        // 信息窗口标题
	        // title : "默认标题" ,
	        // 自动平移
	        enableAutoPan: true
	        // 信息窗口的详情内容
	        // message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"


	        /**
	         * 创建自定义标注
	         * @param {Object} point - 标注点的经伟度及信息窗口内容.
	         * @param {Number} index - 描点的索引.
	         */
	      };function addMarker(item, index) {
	        // 设置标注点的百度经伟度
	        var point = new BMap.Point(item.lng, item.lat);
	        // 创建一个标注点
	        var marker = new BMap.Marker(point);

	        // 事件绑定及设置信息窗口的相关信息
	        infoHandler(marker, item.content, point, infoOpts);

	        // 设置第一个默认显示
	        if (index === defaultIndex) {
	          var infoWindow = new BMap.InfoWindow(item.content, infoOpts);
	          map.openInfoWindow(infoWindow, point);
	        }
	        // 将创建的标注点添加到地图中
	        map.addOverlay(marker);
	      }

	      /**
	       * 设置信息窗口的事件
	       * @param {Object} marker - 标注点.
	       * @param {String} content - 信息窗口的详细内容.
	       * @param {Object} opts - 信息窗口的样式.
	       */
	      function infoHandler(marker, content, point, opts) {
	        marker.addEventListener('click', function (event) {
	          var infoWindow = new BMap.InfoWindow(content, opts);
	          map.openInfoWindow(infoWindow, point);
	        });
	      }
	      this.fixedPoint.map(function (item, index) {
	        var coords = item.geoPoint.split(',');
	        var aMarker = {
	          lng: coords[1],
	          lat: coords[0],
	          content: '<p>\u81EA\u63D0\u7F51\u70B9: ' + item.name + '</p><p>\u5730\u5740: ' + item.address + '</p><p>\u7535\u8BDD: ' + item.linkPhone + '</p>'
	        };
	        addMarker(aMarker, index);
	      });
	    },
	    showPosition: function showPosition(coords) {
	      var _this = this;

	      var geoconv = 'http://api.map.baidu.com/geoconv/v1/?coords=' + coords.longitude + ',' + coords.latitude + '&ak=' + self.qrcode.ak;
	      this.$http.jsonp(geoconv).then(function (response) {
	        return response.json();
	      }).then(function (data) {
	        if (data.status == 0) {
	          return data.result[0];
	        }
	      }).then(function (result) {
	        var url = '' + _api.getBranchListURL + _this.prizeId;
	        self.common.get(url, {
	          params: {
	            longitude: result.x,
	            latitud: result.y
	          },
	          callback: function (json) {
	            if (json.code == 200) {
	              console.log(json);
	              this.fixedPoint = json.data;
	              this.centerPoint = result;
	              this.initMap(0);
	            } else {
	              self.toast(json.msg);
	            }
	          }.bind(_this)
	        });
	      });
	    },
	    geolocation: function geolocation() {
	      var _this2 = this;

	      wx.ready(function () {
	        wx.getLocation({
	          type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
	          success: function (res) {
	            this.showPosition(res);
	          }.bind(_this2)
	        });
	      });
	    }
	  },
	  mounted: function mounted() {
	    this.prizeId = this.$route.params.prizeId;
	    this.geolocation();
	  }
	};
	// </script>
	// <style lang='sass'>
	//   @import '../../scss/line';
	//   .map-wrapper {
	//     position: absolute;
	//     left: 0;
	//     top: 0;
	//     width: 100%;
	//     height: 100%;
	//     background-color: #fff;
	//     z-index: 5;
	//     .map {
	//       height: 100%;
	//     }
	//     .icon-nav {
	//       width: 50px;
	//       height: 50px;
	//       position: absolute;
	//       z-index: 10;
	//       left: 10px;
	//       top: 10px;
	//       border-radius: 3px;
	//       background-color: rgba(0, 0, 0, .5);
	//       em {
	//         position: absolute;
	//         left: 10px;
	//         top: 10px;
	//         width: 30px;
	//         border-top: 2px solid #fcfcfc;
	//         border-bottom: 2px solid #fcfcfc;
	//         height: 26px;
	//         &:before {
	//           content: '';
	//           position: absolute;
	//           left: 0;
	//           top: 12px;
	//           height: 2px;
	//           width: 100%;
	//           background-color: #fcfcfc;
	//         }
	//       }
	//     }
	//     .items {
	//       position: absolute;
	//       top: 70px;
	//       left: 10px;
	//       z-index: 10;
	//       overflow: auto;
	//       max-height: 200px;
	//       width: 150px;
	//       border-radius: 3px;
	//       border-top: 10px solid rgba(0, 0, 0, .8);
	//       border-bottom: 10px solid rgba(0, 0, 0, .8);
	//       a {
	//         display: block;
	//         position: relative;
	//         padding: 10px;
	//         background-color: rgba(0, 0, 0, .8);
	//         @include borderBottom;
	//         &:first-child {
	//           padding-top: 0;
	//         }
	//       }
	//       .name {
	//         color: #fff;
	//       }
	//       .address {
	//         font-size: 12px;
	//         color: #999;
	//       }
	//     }
	//   }
	// </style>
	//
	// <template lang='jade'>
	//   .map-wrapper
	//     .map#allmap
	//     a.icon-nav(
	//       @click='toggle = !toggle'
	//     )
	//       em
	//     nav.items(
	//       v-if='fixedPoint.length && toggle',
	//     )
	//       a(
	//         v-for='(item, index) in fixedPoint',
	//         :key='item.id',
	//         @click='initMap(index)'
	//       )
	//         h4.name(v-text='item.name')
	//         p.address(v-text='item.address')
	// </template>
	//
	// <script lang='babel'>

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"map-wrapper\"><div id=\"allmap\" class=\"map\"></div><a @click=\"toggle = !toggle\" class=\"icon-nav\"><em></em></a><nav v-if=\"fixedPoint.length &amp;&amp; toggle\" class=\"items\"><a v-for=\"(item, index) in fixedPoint\" :key=\"item.id\" @click=\"initMap(index)\"><h4 v-text=\"item.name\" class=\"name\"></h4><p v-text=\"item.address\" class=\"address\"></p></a></nav></div>";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(27)
	__vue_script__ = __webpack_require__(28)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\guest\\win.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(29)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-50d2ccb2/win.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _api = __webpack_require__(16);

	var _dialog = __webpack_require__(12);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <style lang='sass'>
	//   @import '../../scss/layout';
	//   .guest-win-wrapper {
	//     @include coverBg(100%);
	//     background-color: #df2023;
	//     text-align: center;
	//     color: #fff;
	//     .btn-rule {
	//       position: absolute;
	//       top: 30%;
	//       right: 0;
	//       padding: 10px 8px 10px 10px;
	//       writing-mode: vertical-lr;
	//       background-color: #ffe641;
	//       border-top-left-radius: 5px;
	//       border-bottom-left-radius: 5px;
	//       box-shadow: -3px 0 3px #d9c119, 0 3px 3px #d9c119;
	//       color: #d65d18;
	//     }
	//     .btn-query {
	//       position : absolute;
	//       top:11%;
	//       right:0;
	//       height:0;
	//       padding:10px 8px 10px 10px;
	//       color:#185ad6;
	//       text-decoration:underline;
	//     }
	//     .content {
	//       color: #fff;
	//       margin-bottom: 15px;
	//     }
	//     .name {
	//       font-size: 20px;
	//       margin-bottom: 10px;
	//     }
	//     em {
	//       color: #ffda23;
	//     }
	//     .form {
	//       position: absolute;
	//       top: 0;
	//       left: 5%;
	//       width: 90%;
	//       color: #333;
	//       margin-top: 95%;
	//     }
	//     input {
	//       background-color: #bb2e2d;
	//       border-radius: 3px;
	//       padding: 10px;
	//       width: 100%;
	//       margin-bottom: 10px;
	//       color: #fff;
	//       height: 35px;
	//     }
	//     .code {
	//       position: relative;
	//       margin-bottom: 10px;
	//       input {
	//         margin-bottom: 0;
	//       }
	//     }
	//     .btn-code {
	//       background-color: #ab2b2a;
	//       position: absolute;
	//       top: 0;
	//       right: 0;
	//       bottom: 0;
	//       padding: 0 10px;
	//       line-height: 35px;
	//       color: #fff;
	//       border-top-right-radius: 3px;
	//       border-bottom-right-radius: 3px;
	//       &.disabled {
	//         pointer-events: none;
	//         opacity: 0.5;
	//       }
	//     }
	//     .submit {
	//       color: #d65d18;
	//       width: 60%;
	//       padding: 10px 8px 10px 10px;
	//       background-color: #ffe641;
	//       border-radius: 5px;
	//       box-shadow: 0 3px 0 #d9c119;
	//     }
	//   }
	// </style>
	//
	// <template lang='jade'>
	//   .wrapper.guest-win-wrapper(
	//     :style='bgImg'
	//   )
	//     a.btn-query(
	//        v-if ='is_history =="1" ',
	//        @click='getSource()',
	//     ) 溯源查询
	//     a.btn-rule(
	//       v-if='introduction',
	//       @click='ruleDialogToggle = true',
	//     ) 活动规则
	//     common-dialog(
	//       v-if='ruleDialogToggle',
	//       @closeDialog='ruleToggle',
	//       :ruleDialogToggle='ruleDialogToggle',
	//       :icon='true'
	//     )
	//       div(
	//         v-html='introduction'
	//       )
	//     form.form(
	//       @submit.prevent='submit'
	//     )
	//       article.content
	//         p.name(v-if='qrCode.pztype == 1')
	//           span 恭喜您! 本次获得
	//           em(v-text='qrCode.price')
	//           span 元微信红包
	//         p.name(
	//           v-else
	//         )
	//           span 恭喜您获得
	//           em(v-text='qrCode.pzname')
	//         p.follow
	//           span 请关注微信公众号, 到
	//           em 领奖中心
	//           span 获取奖品。
	//       input( 
	//         v-if ='is_input == "1"'
	//         v-model='mobile',
	//         maxlength='11',
	//         type='tel',
	//         placeholder='请输入手机号'
	//       )
	//       p.code
	//         input(
	//           v-if ='is_input == "1"'
	//           v-model='validcode',
	//           maxlength='6',
	//           placeholder='请输入短信验证码'
	//         )
	//         a.btn-code(
	//           v-if ='is_input == "1"',
	//           :class='{disabled: codeToggle}',
	//           @click='getValidCode',
	//           v-text='codeText'
	//         )
	//       button#drawBtn.submit 去领奖
	//     common-dialog(
	//       v-if='dialogToggle',
	//       @closeDialog='toggle',
	//       :dialogToggle='dialogToggle',
	//       :icon='false'
	//     )
	//       img(:src='imgUrl')
	//       p 长按二维码识别，马上领奖
	// </template>
	//
	// <script lang='babel'>
	exports.default = {
	  components: {
	    CommonDialog: _dialog2.default
	  },
	  data: function data() {
	    return {
	      actwinid: 0,
	      pzid: 0,
	      mobile: '',
	      validcode: '',
	      codeText: '获取验证码',
	      codeToggle: false,
	      num: 60,
	      timer: null,
	      bgImg: {
	        backgroundImage: 'url(' + (self.qrcode.bgWinImg || "/dist/images/bg_red.png") + ')'
	      },
	      qrCode: self.qrcode,
	      dialogToggle: false,
	      imgUrl: '',
	      ruleDialogToggle: false,
	      introduction: self.qrcode.introduction,
	      is_history: self.qrcode.is_history,
	      is_input: self.qrcode.is_input
	    };
	  },

	  methods: {
	    toggle: function toggle() {
	      if (this.imgUrl) return;
	      this.dialogToggle = false;
	    },
	    ruleToggle: function ruleToggle() {
	      this.ruleDialogToggle = false;
	    },
	    getSource: function getSource() {
	      this.$router.replace({
	        name: 'querySource'
	      });
	      self.qrcode.islogis = '1';
	      var fullPath = window.location.href;
	      self.qrcode.urlparams = fullPath.split("?")[0];
	    },
	    submit: function submit() {
	      //去领奖提交
	      var copythis = this;
	      var awardPrize = function awardPrize(url) {
	        document.getElementById("drawBtn").style.visibility = "hidden";
	        self.common.post(url, {
	          callback: function (res) {
	            if (res.code == 200) {
	              // prize_type == 2说明是实物，subscribe == 0说明没有关注公众号；
	              if (res.data.subscribe == 0) {
	                copythis.dialogToggle = true;
	                copythis.imgUrl = res.data.imgurl;
	              } else {
	                copythis.$router.replace({
	                  name: 'guestCenter'
	                });
	              }
	            } else {
	              self.toast(res.msg);
	              document.getElementById("drawBtn").style.visibility = "visible";
	            }
	          }.bind(copythis)
	        });
	      };

	      if (self.qrcode.is_input == '0') {
	        var qr = self.qrcode;
	        var url = '' + _api.awardAcceptPrize + qr.openId + '/' + this.actwinid + '/' + this.pzid + '/""/""/' + qr.type + '/' + qr.uuid + '/' + qr.is_input;
	        //判断是是够需要获取消费者位置，启用则调用微信定位
	        if (self.qrcode.is_postion == 1) {
	          var config = { url: url };
	          self.common.getPostion(config, awardPrize);
	        } else {
	          awardPrize(url + '/-9/-9');
	        }
	      } else if (self.qrcode.is_input == '1') {
	        if (this.mobile == '') {
	          self.toast('手机号还没填写哟~');
	        } else if (!/^1[345678]{1}\d{9}$/.test(this.mobile)) {
	          self.toast('手机号不正确哟~');
	        } else if (this.validcode == '') {
	          self.toast('验证码还没填写哟~');
	        } else {
	          console.log('========\u662F\u5426\u9700\u8981\u5B9A\u4F4D\u53C2\u6570\uFF1A' + self.qrcode.is_location + '========');
	          var _qr = self.qrcode;
	          var _url = '' + _api.awardAcceptPrize + _qr.openId + '/' + this.actwinid + '/' + this.pzid + '/' + this.mobile + '/' + this.validcode + '/' + _qr.type + '/' + _qr.uuid + '/' + _qr.is_input;
	          //判断是是够需要获取消费者位置，启用则调用微信定位
	          if (self.qrcode.is_postion == 1) {
	            var _config = { url: _url };
	            self.common.getPostion(_config, awardPrize);
	          } else {
	            awardPrize(_url + '/-9/-9');
	          }
	        }
	      }
	    },
	    getValidCode: function getValidCode() {
	      if (this.num < 60) return;
	      if (this.mobile == '') {
	        self.toast('手机号还没填写哟~');
	      } else if (!/^1[345678]{1}\d{9}$/.test(this.mobile)) {
	        self.toast('手机号不正确哟~');
	      } else {
	        this.codeToggle = true;
	        var url = '' + _api.getCode + this.mobile + '/' + self.qrcode.uuid;
	        self.common.get(url, {
	          callback: function (data) {
	            this.codeToggle = false;
	            if (data.code == 200) {
	              this.timer = self.setInterval(this.countDown, 1000);
	              self.toast('发送成功~');
	            } else {
	              this.codeText = '获取验证码';
	              self.toast(data.msg);
	            }
	          }.bind(this)
	        });
	      }
	    },
	    countDown: function countDown() {
	      this.num--;
	      if (this.num < 1) {
	        self.clearInterval(this.timer);
	        this.num = 60;
	        this.codeText = '获取验证码';
	      } else {
	        this.codeText = this.num + 's\u540E\u91CD\u65B0\u83B7\u53D6';
	      }
	    }
	  },
	  created: function created() {
	    this.pzid = this.$route.query.pzid;
	    this.actwinid = this.$route.query.actwinid;
	    this.imgUrl = self.qrcode.imgUrl;
	    if (this.imgUrl && self.qrcode.code === '1009') {
	      this.dialogToggle = true;
	    }
	  },
	  mounted: function mounted() {
	    self.document.body.style.backgroundColor = '#df2023';
	    self.document.documentElement.style.backgroundColor = '#df2023';
	  },
	  beforeDestroy: function beforeDestroy() {
	    self.document.body.style.backgroundColor = '#fff';
	    self.document.documentElement.style.backgroundColor = '#fff';
	  }
	};
	// </script>

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = "<div :style=\"bgImg\" class=\"wrapper guest-win-wrapper\"><a v-if=\"is_history ==&quot;1&quot; \" @click=\"getSource()\" class=\"btn-query\">溯源查询</a><a v-if=\"introduction\" @click=\"ruleDialogToggle = true\" class=\"btn-rule\">活动规则</a><common-dialog v-if=\"ruleDialogToggle\" @closeDialog=\"ruleToggle\" :ruleDialogToggle=\"ruleDialogToggle\" :icon=\"true\"><div v-html=\"introduction\"></div></common-dialog><form @submit.prevent=\"submit\" class=\"form\"><article class=\"content\"><p v-if=\"qrCode.pztype == 1\" class=\"name\"><span>恭喜您! 本次获得</span><em v-text=\"qrCode.price\"></em><span>元微信红包</span></p><p v-else=\"v-else\" class=\"name\"><span>恭喜您获得</span><em v-text=\"qrCode.pzname\"></em></p><p class=\"follow\"><span>请关注微信公众号, 到</span><em>领奖中心</em><span>获取奖品。</span></p></article><input v-if=\"is_input == &quot;1&quot;\" v-model=\"mobile\" maxlength=\"11\" type=\"tel\" placeholder=\"请输入手机号\"/><p class=\"code\"><input v-if=\"is_input == &quot;1&quot;\" v-model=\"validcode\" maxlength=\"6\" placeholder=\"请输入短信验证码\"/><a v-if=\"is_input == &quot;1&quot;\" :class=\"{disabled: codeToggle}\" @click=\"getValidCode\" v-text=\"codeText\" class=\"btn-code\"></a></p><button id=\"drawBtn\" class=\"submit\">去领奖</button></form><common-dialog v-if=\"dialogToggle\" @closeDialog=\"toggle\" :dialogToggle=\"dialogToggle\" :icon=\"false\"><img :src=\"imgUrl\"/><p>长按二维码识别，马上领奖</p></common-dialog></div>";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(31)
	__vue_script__ = __webpack_require__(32)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\guest\\center.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(33)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-75dc5f6f/center.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _api = __webpack_require__(16);

	exports.default = {
	  data: function data() {
	    return {
	      banner: '/dist/images/banner.jpg',
	      ajaxFlag: false,
	      items: [],
	      page: 0,
	      pageTotal: 0
	    };
	  },

	  methods: {
	    next: function next() {
	      var scrollHeight = self.document.body.scrollHeight;
	      var scrollTop = self.document.body.scrollTop;
	      if (self.innerHeight + scrollTop + 50 > scrollHeight && !this.ajaxFlag) {
	        if (this.page < this.pageTotal) {
	          this.initPage();
	        }
	      }
	    },
	    initPage: function initPage() {
	      this.ajaxFlag = true;
	      var url = '' + _api.awardCenter + self.qrcode.openId;
	      self.common.get(url, {
	        params: {
	          page: this.page + 1
	        },
	        callback: function (json) {
	          this.ajaxFlag = false;
	          if (json.code === 200) {
	            if (this.page == 0) {
	              this.items = json.data.result;
	              this.pageTotal = json.data.pageTotal;
	              self.document.addEventListener('scroll', this.next);
	            } else {
	              this.items = this.items.concat(json.data.result);
	            }
	            this.page = json.data.page;
	          } else {
	            self.toast(json.msg);
	          }
	        }.bind(this)
	      });
	    },
	    setClass: function setClass(type) {
	      //- (1红包，2实物，3优惠券）
	      if (type === 1) {
	        return 'ico-red';
	      } else if (type === 2) {
	        return 'ico-gift';
	      } else {
	        return 'ico-coupon';
	      }
	    },
	    btnText: function btnText(status) {
	      //- 1.已发送、2.未领取、3、未配送，4.已配送、5.发送中、6.发送失败、7.发送成功
	      var text = ['已发送', '未领取', '未配送', '已配送', '发送中', '发送失败', '发送成功'];
	      return text[status - 1];
	    },
	    viewPrize: function viewPrize(id) {
	      this.$router.push({
	        name: 'guestPrize',
	        params: {
	          id: id
	        }
	      });
	    }
	  },
	  mounted: function mounted() {
	    this.initPage();
	  },
	  beforeDestroy: function beforeDestroy() {
	    // 在销毁的时候, 一定要先卸载当前组件的 scroll 事件, 不然的话, 在所有组件下都会触发当前组件的 scroll 事件
	    self.document.removeEventListener('scroll', this.next);
	  }
	};
	// </script>
	// <style lang='sass'>
	//   @import '../../scss/layout';
	//   @import '../../scss/line';
	//   .award-center-wrapper {
	//     .banner{
	//       display: block;
	//       width: 100%;
	//     }
	//     li{
	//       color: #999;
	//       position: relative;
	//       padding: 10px 95px 10px 65px;
	//       @include borderBottom;
	//     }
	//     .title {
	//       color: #333;
	//     }
	//     .icon {
	//       position: absolute;
	//       left: 0;
	//       top: 0;
	//       bottom: 0;
	//       width: 65px;
	//       background-repeat: no-repeat;
	//       background-position: 50% 50%;
	//       background-size: 50%;
	//     }
	//     .btn {
	//       position: absolute;
	//       top: 0;
	//       bottom: 0;
	//       right: 10px;
	//       height: 30px;
	//       line-height: 30px;
	//       width: 75px;
	//       text-align: center;
	//       border-radius: 3px;
	//       margin: auto;
	//       color: #ffecaa;
	//       background-color: #eb5169;
	//       &.disabled {
	//         color: #666;
	//         background-color: #e5e5e5;
	//       }
	//     }
	//     .ico-coupon {
	//       background-image: url(/dist/images/icon_coupon.png);
	//     }
	//     .ico-gift {
	//       background-image: url(/dist/images/icon_gift.png);
	//     }
	//     .ico-red {
	//       background-image: url(/dist/images/icon_red_packet.png);
	//     }
	//   }
	// </style>
	//
	// <template lang='jade'>
	//   .wrapper.award-center-wrapper
	//     img.banner(:src="banner")
	//     ul.awards(
	//       v-if='items.length > 0'
	//     )
	//       li(
	//         v-for='item in items',
	//         @click='viewPrize(item.id)',
	//       )
	//         em.icon(
	//           :class='setClass(item.type)'
	//         )
	//         p.title(v-text='item.name')
	//         p.date(
	//           v-cloak,
	//         ) {{item.scanTime | formatDate}}
	//         p.introduce(
	//           v-if='item.summary',
	//           v-text='item.summary'
	//         )
	//         //- 1.已发送、2.未领取、3、未配送，4.已配送、5.发送中、6.发送失败、7.发送成功
	//         a.btn(
	//           :class='{disabled: item.status !== 2}',
	//           v-text='btnText(item.status)'
	//         )
	//     p.not-found(v-else) 暂无数据!
	// </template>
	//
	// <script lang='babel'>

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"wrapper award-center-wrapper\"><img :src=\"banner\" class=\"banner\"/><ul v-if=\"items.length &gt; 0\" class=\"awards\"><li v-for=\"item in items\" @click=\"viewPrize(item.id)\"><em :class=\"setClass(item.type)\" class=\"icon\"></em><p v-text=\"item.name\" class=\"title\"></p><p v-cloak=\"v-cloak\" class=\"date\">{{item.scanTime | formatDate}}</p><p v-if=\"item.summary\" v-text=\"item.summary\" class=\"introduce\"></p><a :class=\"{disabled: item.status !== 2}\" v-text=\"btnText(item.status)\" class=\"btn\"></a></li></ul><p v-else=\"v-else\" class=\"not-found\">暂无数据!</p></div>";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(35)
	__vue_script__ = __webpack_require__(36)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\guest\\prize.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(37)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-787f9268/prize.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _api = __webpack_require__(16);

	exports.default = {
	  data: function data() {
	    return {
	      id: 0,
	      info: {},
	      province: [],
	      city: [],
	      regions: [],
	      regionsId: 0,
	      provinceName: '',
	      cityName: '',
	      regionName: '',
	      textarea: '',
	      params: {
	        consignee: '',
	        mobile: '',
	        rgn_region_id: '',
	        address: ''
	      },
	      prizeId: 0
	    };
	  },

	  methods: {
	    initPage: function initPage() {
	      var url = '' + _api.awardPrize + self.qrcode.openId + '/' + self.qrcode.uuid + '/' + this.id;
	      self.common.get(url, {
	        callback: function (json) {
	          if (json.code === 200) {
	            Vue.set(this, 'info', json.data);
	            if (json.data.acceptprize_ERR_CODE_1211 != null && json.data.acceptprize_ERR_CODE_1211 != '' && json.data.acceptprize_ERR_CODE_1211 != "1211") {
	              self.toast(json.data.acceptprize_ERR_CODE_1211);
	            }
	            if (json.data.type === 2 && json.data.status === 2 && json.data.shippingMethod === 3) {
	              //配送信息
	              this.getRegion(1, 0);
	            } else if (json.data.type === 2 && json.data.status === 2 && json.data.shippingMethod === 2) {
	              //自提
	              this.prizeId = json.data.prizeId;
	              this.getLocation();
	            }
	          } else {
	            self.toastr(json.msg);
	          }
	        }.bind(this)
	      });
	    },
	    qrcodeBg: function qrcodeBg() {
	      return '' + _api.getQrcodeImageURL + this.id;
	    },
	    getRegion: function getRegion($event, type) {
	      var id = 0;
	      if (type) {
	        var target = $event.target;
	        id = +target.value;
	        var index = target.options.selectedIndex;
	        var text = target.options[index].textContent;
	        this.regionsId = id;
	        if (type === 1) {
	          this.cityName = '';
	          this.regionName = '';
	          if (id) {
	            this.provinceName = text;
	          } else {
	            this.provinceName = '';
	            return;
	          }
	        } else if (type === 2) {
	          this.regionName = '';
	          if (id) {
	            this.cityName = text;
	          } else {
	            this.cityName = '';
	            return;
	          }
	        } else if (type === 3) {
	          if (id) {
	            this.regionName = text;
	          } else {
	            this.regionName = '';
	          }
	          return;
	        }
	      } else {
	        id = $event;
	      }
	      var url = '' + _api.rgnRegion + id;
	      self.common.get(url, {
	        callback: function (data) {
	          if (data.code === 200) {
	            if (type === 1) {
	              this.city = data.data;
	              this.regions = [];
	              this.regionsId = 0;
	            } else if (type === 2) {
	              this.regions = data.data;
	            } else {
	              this.province = data.data;
	            }
	          }
	        }.bind(this)
	      });
	    },
	    submit: function submit() {
	      if (!this.params.consignee) {
	        self.toast("请填写收件人姓名");
	      } else if (!/^[a-zA-Z \u4e00-\u9fa5]+$/.test(this.params.consignee)) {
	        self.toast("请输入正确的收件人姓名");
	      } else if (!this.params.mobile) {
	        self.toast("请填写联系电话");
	      } else if (!/^1[345678]{1}\d{9}$/.test(this.params.mobile)) {
	        self.toast('手机号不正确哟~');
	      } else if (!this.regionName) {
	        self.toast('请选择配送地址~');
	      } else if (!this.textarea) {
	        self.toast('请填写详细地址~');
	      } else if (!/^[#\-\w\u4e00-\u9fa5]+$/.test(this.textarea)) {
	        self.toast('不能输入特殊字符~');
	      } else {
	        var url = '' + _api.awardDistribution + self.qrcode.openId + '/' + this.id;
	        var params = {
	          consignee: self.encodeURIComponent(this.params.consignee),
	          mobile: this.params.mobile,
	          rgn_region_id: this.regionsId,
	          address: self.encodeURIComponent('' + this.provinceName + this.cityName + this.regionName + this.textarea)
	        };
	        self.common.post(url, {
	          params: params,
	          callback: function (data) {
	            if (data.code === 200) {
	              self.toast('提交成功, 坐等收货吧', {
	                callback: function callback() {
	                  self.location.reload();
	                }
	              });
	            } else {
	              self.toast(data.msg);
	            }
	          }.bind(this)
	        });
	      }
	    },
	    logisticsStatus: function logisticsStatus(status) {
	      //- 1.已发送、2.未领取、3、未配送，4.已配送
	      var text = ['已发送', '未领取', '未配送', '已配送'];
	      return text[status - 1];
	    }
	  },
	  mounted: function mounted() {
	    this.id = this.$route.params.id;
	    this.initPage();
	  }
	};
	// </script>
	// <style lang='sass'>
	//   .prize-wrapper {
	//     min-height: 100%;
	//     background: url(/dist/images/prize_bottom.png) 50% bottom no-repeat,
	//                 url(/dist/images/prize_top.png) 50% 0 no-repeat;
	//     background-color: #ffedcd;
	//     background-size: contain;
	//     .info {
	//       color: #fff1d9;
	//       position: relative;
	//       padding: 15px;
	//       width: 75%;
	//       margin: 50% auto 0;
	//       background-color: #fa5f75;
	//       box-sizing: border-box;
	//       margin-bottom: 20px;
	//       &:before {
	//         content: '';
	//         background-color: #535353;
	//         height: 8px;
	//         border-radius: 5px;
	//         overflow: hidden;
	//         position: absolute;
	//         left: -10px;
	//         right: -10px;
	//         top: 0;
	//         box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
	//       }
	//     }
	//     .view-map {
	//       color: #F6F6F6;
	//       text-decoration: underline;
	//     }
	//     .layout-lr{
	//       .item {
	//         overflow: hidden;
	//         padding: 5px 0;
	//         line-height: 18px;
	//       }
	//       .title {
	//         float: left;
	//         width: 65px;
	//         margin-right: 5px;
	//         text-align:justify;
	//         text-align-last:justify;
	//         height: 18px;
	//         &:after {
	//           content:"";
	//           display: inline-block;
	//           width:100%;
	//           overflow:hidden;
	//           height:0;
	//         }
	//       }
	//       .con {
	//         overflow: hidden;
	//       }
	//     }
	//     $color: #da3f59;
	//     .branch {
	//       width: 75%;
	//       color: $color;
	//       margin: 0 auto;
	//       .title {
	//         width: 40px;
	//       }
	//       .head {
	//         font-weight: 700;
	//         padding: 0;
	//       }
	//     }
	//     .form {
	//       .item {
	//         line-height: 32px;
	//       }
	//     }
	//     .form,
	//     .delivery {
	//       color: #da3f59;
	//       padding: 5%;
	//       background-color: #fff4e1;
	//       input,
	//       select,
	//       textarea {
	//         border: 1px solid $color;
	//         background-color: transparent;
	//         border-radius: 0;
	//         padding: 5px;
	//         color: inhert;
	//       }
	//       input,
	//       textarea {
	//         width: 100%;
	//       }
	//       textarea {
	//         height: 80px;
	//       }
	//       select {
	//         width: 32%;
	//         margin-right: 2%;
	//         &:last-child {
	//           margin-right: 0;
	//         }
	//       }
	//       .head {
	//         line-height: 18px;
	//         padding-bottom: 0;
	//       }
	//       .select-box {
	//         margin-bottom: 10px;
	//       }
	//       .btn {
	//         background-color: $color;
	//         text-align: center;
	//         color: #fff;
	//         display: block;
	//         width: 90%;
	//         padding: 10px 0;
	//         margin: 0 auto;
	//         border-radius: 3px;
	//       }
	//     }
	//     .qrcodeImage{
	//       display: block;
	//       width:160px;
	//       height:160px;
	//       margin: 0 auto;
	//       border: 5px solid #fff;
	//       border-radius: 5px;
	//     }
	//   }
	// </style>
	//
	// <template lang='jade'>
	//   .wrapper.prize-wrapper
	//     ul.layout-lr.info
	//       li.item
	//         span.title 扫码商品:
	//         .con(v-text='info.productName')
	//       li.item
	//         span.title 奖品等级:
	//         .con(v-text='info.gradeName')
	//       li.item
	//         span.title 二维码号:
	//         .con(v-text='info.id')
	//       li.item
	//         span.title 奖品名称:
	//         .con(v-text='info.prizeName')
	//       li.item
	//         span.title 奖品价格:
	//         .con(v-text='(info.prizePrice || 0.00) + "元"')
	//       li.item(v-if='info.cashTime')
	//         span.title 领取时间:
	//         .con(v-cloak) {{info.cashTime | formatDate}}
	//       li.item(v-if='info.type === 2 && info.status === 2 && info.shippingMethod === 2')
	//         span.title 自提网点:
	//         .con
	//           router-link.view-map(:to='{name: "map", params: {prizeId: prizeId}}') 查看自提网点地图
	//     ul.layout-lr.branch(v-if='info.branch')
	//       li.item.head
	//         span 自提网点:
	//         span(v-text='info.branch.name')
	//       li.item
	//         span.title 地址:
	//         .con(v-text='info.branch.address')
	//       li.item
	//         span.title 电话:
	//         .con(v-text='info.branch.linkPhone')
	//     ul.layout-lr.delivery(v-if='info.delivery')
	//       li.item.head
	//         strong 配送信息:
	//       li.item
	//         span.title 收件人:
	//         .con(v-text='info.delivery.consignee')
	//       li.item
	//         span.title 联系电话:
	//         .con(v-text='info.delivery.mobile')
	//       li.item
	//         span.title 配送地址:
	//         .con(v-text='info.delivery.address')
	//       li.item
	//         span.title 状态:
	//         .con(v-text='logisticsStatus(info.status)')
	//       li.item(v-if='info.delivery.logisticsCompanyName')
	//         span.title 承运来源:
	//         .con(v-text='info.delivery.logisticsCompanyName')
	//       li.item(v-if='info.delivery.waybillNumber')
	//         span.title 运单编号:
	//         .con(v-text='info.delivery.waybillNumber')
	//     form(
	//       v-if='info.type === 2 && info.status === 2 && info.shippingMethod === 3',
	//       @submit.prevent='submit'
	//     )
	//       ul.layout-lr.form
	//         li.item.head
	//           strong 配送信息:
	//         li.item
	//           span.title 收件人:
	//           .con
	//             input(
	//               v-model.trim='params.consignee',
	//               maxlength='20'
	//             )
	//         li.item
	//           span.title 联系电话:
	//           .con
	//             input(
	//               v-model='params.mobile',
	//               maxlength='11',
	//               type='tel'
	//             )
	//         li.item
	//           span.title 配送地址:
	//         li.item
	//           .select-box
	//             select(
	//               @change='getRegion($event, 1)'
	//             )
	//               option(value='0') 省/直辖市
	//               option(
	//                 v-for='item in province',
	//                 :key='item.id',
	//                 :value='item.id'
	//               ) {{item.name}}
	//             select(
	//               v-if="city.length",
	//               @change='getRegion($event, 2)',
	//             )
	//               option(value='0') 市/区
	//               option(
	//                 v-for='item in city',
	//                 :key='item.id',
	//                 :value='item.id'
	//               ) {{item.name}}
	//             select(
	//               v-if="regions.length",
	//               @change='getRegion($event, 3)',
	//             )
	//               option(value='0') 区/县
	//               option(
	//                 v-for='item in regions',
	//                 :key='item.id',
	//                 :value='item.id'
	//               ) {{item.name}}
	//           textarea(
	//             placeholder='请输入详细地址',
	//             v-model.trim='textarea',
	//             maxlength='200',
	//           )
	//         li.item
	//           button.btn 确认
	//     img.qrcodeImage(
	//       v-if='info.type === 2 && info.status === 2 && info.shippingMethod === 2 && id',
	//       :src='qrcodeBg()'
	//     )
	//     router-view
	// </template>
	// <script lang='babel'>

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"wrapper prize-wrapper\"><ul class=\"layout-lr info\"><li class=\"item\"><span class=\"title\">扫码商品:</span><div v-text=\"info.productName\" class=\"con\"></div></li><li class=\"item\"><span class=\"title\">奖品等级:</span><div v-text=\"info.gradeName\" class=\"con\"></div></li><li class=\"item\"><span class=\"title\">二维码号:</span><div v-text=\"info.id\" class=\"con\"></div></li><li class=\"item\"><span class=\"title\">奖品名称:</span><div v-text=\"info.prizeName\" class=\"con\"></div></li><li class=\"item\"><span class=\"title\">奖品价格:</span><div v-text=\"(info.prizePrice || 0.00) + &quot;元&quot;\" class=\"con\"></div></li><li v-if=\"info.cashTime\" class=\"item\"><span class=\"title\">领取时间:</span><div v-cloak=\"v-cloak\" class=\"con\">{{info.cashTime | formatDate}}</div></li><li v-if=\"info.type === 2 &amp;&amp; info.status === 2 &amp;&amp; info.shippingMethod === 2\" class=\"item\"><span class=\"title\">自提网点:</span><div class=\"con\"><router-link :to=\"{name: &quot;map&quot;, params: {prizeId: prizeId}}\" class=\"view-map\">查看自提网点地图</router-link></div></li></ul><ul v-if=\"info.branch\" class=\"layout-lr branch\"><li class=\"item head\"><span>自提网点:</span><span v-text=\"info.branch.name\"></span></li><li class=\"item\"><span class=\"title\">地址:</span><div v-text=\"info.branch.address\" class=\"con\"></div></li><li class=\"item\"><span class=\"title\">电话:</span><div v-text=\"info.branch.linkPhone\" class=\"con\"></div></li></ul><ul v-if=\"info.delivery\" class=\"layout-lr delivery\"><li class=\"item head\"><strong>配送信息:</strong></li><li class=\"item\"><span class=\"title\">收件人:</span><div v-text=\"info.delivery.consignee\" class=\"con\"></div></li><li class=\"item\"><span class=\"title\">联系电话:</span><div v-text=\"info.delivery.mobile\" class=\"con\"></div></li><li class=\"item\"><span class=\"title\">配送地址:</span><div v-text=\"info.delivery.address\" class=\"con\"></div></li><li class=\"item\"><span class=\"title\">状态:</span><div v-text=\"logisticsStatus(info.status)\" class=\"con\"></div></li><li v-if=\"info.delivery.logisticsCompanyName\" class=\"item\"><span class=\"title\">承运来源:</span><div v-text=\"info.delivery.logisticsCompanyName\" class=\"con\"></div></li><li v-if=\"info.delivery.waybillNumber\" class=\"item\"><span class=\"title\">运单编号:</span><div v-text=\"info.delivery.waybillNumber\" class=\"con\"></div></li></ul><form v-if=\"info.type === 2 &amp;&amp; info.status === 2 &amp;&amp; info.shippingMethod === 3\" @submit.prevent=\"submit\"><ul class=\"layout-lr form\"><li class=\"item head\"><strong>配送信息:</strong></li><li class=\"item\"><span class=\"title\">收件人:</span><div class=\"con\"><input v-model.trim=\"params.consignee\" maxlength=\"20\"/></div></li><li class=\"item\"><span class=\"title\">联系电话:</span><div class=\"con\"><input v-model=\"params.mobile\" maxlength=\"11\" type=\"tel\"/></div></li><li class=\"item\"><span class=\"title\">配送地址:</span></li><li class=\"item\"><div class=\"select-box\"><select @change=\"getRegion($event, 1)\"><option value=\"0\">省/直辖市</option><option v-for=\"item in province\" :key=\"item.id\" :value=\"item.id\">{{item.name}}</option></select><select v-if=\"city.length\" @change=\"getRegion($event, 2)\"><option value=\"0\">市/区</option><option v-for=\"item in city\" :key=\"item.id\" :value=\"item.id\">{{item.name}}</option></select><select v-if=\"regions.length\" @change=\"getRegion($event, 3)\"><option value=\"0\">区/县</option><option v-for=\"item in regions\" :key=\"item.id\" :value=\"item.id\">{{item.name}}</option></select></div><textarea placeholder=\"请输入详细地址\" v-model.trim=\"textarea\" maxlength=\"200\"></textarea></li><li class=\"item\"><button class=\"btn\">确认</button></li></ul></form><img v-if=\"info.type === 2 &amp;&amp; info.status === 2 &amp;&amp; info.shippingMethod === 2 &amp;&amp; id\" :src=\"qrcodeBg()\" class=\"qrcodeImage\"/><router-view></router-view></div>";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(39)
	__vue_script__ = __webpack_require__(40)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\guest\\querySource.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(41)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1d5ea34e/querySource.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _api = __webpack_require__(16);

	var _querySource = __webpack_require__(38);

	var _querySource2 = _interopRequireDefault(_querySource);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <style lang='sass'>
	//     .product-info{
	//     padding: 10px 10px 64px;
	//     .prize-info{
	//       padding: 10px;
	//     }
	//     .product-img{
	//       padding: 50% 0 20px;
	//       border-radius: 5px;
	//       background-color: #fff;
	//       box-shadow: 0 0 10px #c2c2c2;
	//       margin-bottom: 15px;
	//       background-position: center;
	//       background-repeat: no-repeat;
	//       background-size: auto 80%;
	//     }
	//     .form-info{
	//       padding: 15px;
	//       border-radius: 5px;
	//       background-color: #fff;
	//       box-shadow: 0 0 10px #c2c2c2;
	//       color: #333;
	//     }
	//     .info-box{
	//       margin-bottom: 10px;
	//     }
	//   }
	// </style>
	//
	// <template lang='jade'>
	//   .wrapper.product-info 
	//     .product-img(  :style='{backgroundImage:"url("+is_no+")"}' v-if='pictures == ""')
	//     .product-img(  :style='{backgroundImage:"url("+pictures+")"}' v-if='pictures != ""')
	//     ul.form-info.justify
	//       li.info-box
	//         span.box-title 产品名称：
	//         .box-text {{proname}}
	//       li.info-box 
	//         span.box-title 批次号：
	//         .box-text {{batch_nub}}
	//       li.info-box(v-if='first_scan_time!=""')  
	//         span.box-title 生产日期：
	//         .box-text {{first_scan_time | formatDate}}
	//       li.info-box
	//         span.box-title 生产企业：
	//         .box-text {{depotname}}
	//       li.info-box
	//         span.box-title 扫码次数：
	//         .box-text {{sacncount}}
	//     promoter-nav
	// </template>
	//
	// <script lang='babel'>
	exports.default = {
	  components: {
	    QuerySource: _querySource2.default
	  },
	  data: function data() {
	    return {
	      is_no: '/dist/images/bg_no.png',
	      proname: '',
	      batch_nub: '', //批次号
	      first_scan_time: '',
	      depotname: '', //所属公司
	      pictures: '',
	      sacncount: ''
	    };
	  },

	  methods: {
	    initQuery: function initQuery() {
	      var qr = self.qrcode;
	      var url = '' + _api.getSource + qr.type + '/' + qr.uuid + '/' + qr.islogis;
	      self.common.get(url, {
	        callback: function (res) {
	          if (res.code === 200) {
	            var pushHistory = function pushHistory() {
	              var state = {
	                title: "title",
	                url: "#"
	              };
	              window.history.pushState(state, "title", "#");
	            };
	            self.qrcode.data = res.data;
	            self.common.assign(this, res.data);
	            pushHistory();
	            window.addEventListener("popstate", function (e) {
	              //alert("我监听到了浏览器的返回按钮事件啦");
	              window.location = self.qrcode.urlparams; //获取扫码进入页面的url 重新回调一遍二维码url
	            }, false);
	          }
	        }.bind(this)
	      });
	    }
	  },
	  mounted: function mounted() {
	    this.initQuery();
	    $("#title").html("溯源查询");
	  },
	  beforeDestroy: function beforeDestroy() {}
	};
	// </script>

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"wrapper product-info\"> <div :style=\"{backgroundImage:&quot;url(&quot;+is_no+&quot;)&quot;}\" v-if=\"pictures == &quot;&quot;\" class=\"product-img\"></div><div :style=\"{backgroundImage:&quot;url(&quot;+pictures+&quot;)&quot;}\" v-if=\"pictures != &quot;&quot;\" class=\"product-img\"></div><ul class=\"form-info justify\"><li class=\"info-box\"><span class=\"box-title\">产品名称：</span><div class=\"box-text\">{{proname}}</div></li><li class=\"info-box\"> <span class=\"box-title\">批次号：</span><div class=\"box-text\">{{batch_nub}}</div></li><li v-if=\"first_scan_time!=&quot;&quot;\" class=\"info-box\"> <span class=\"box-title\">生产日期：</span><div class=\"box-text\">{{first_scan_time | formatDate}}</div></li><li class=\"info-box\"><span class=\"box-title\">生产企业：</span><div class=\"box-text\">{{depotname}}</div></li><li class=\"info-box\"><span class=\"box-title\">扫码次数：</span><div class=\"box-text\">{{sacncount}}</div></li></ul><promoter-nav></promoter-nav></div>";

/***/ })
/******/ ]);