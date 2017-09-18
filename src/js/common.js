/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
Vue.http.options.emulateJSON = true;
class Common {
  /**
   * 设置页面 title
   * @param {String} title
   */
   setTitle(title) {
    self.document.title = title;
    const iframe = self.document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = '/index.html';
    self.document.body.appendChild(iframe);
    iframe.addEventListener('load', cIframe);

    function cIframe() {
      self.setTimeout(() => {
        iframe.removeEventListener('load', cIframe);
        self.document.body.removeChild(iframe);
      }, 0);
    }
  }
  serialize(sourceParams) {
    if (typeof sourceParams === 'string') return sourceParams;
    const params = [];
    const add = function add(key, value) {
      if (typeof value === 'object' && value != null) {
        const keys =  self.Object.keys(value);
        keys.map(item => {
          add(`${key}[${item}]`, value[item]);
        });
      } else {
        params[params.length] =
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      }
    };

    // Serialize the key/values
    for (const i in sourceParams) {
      if (typeof sourceParams[i] === 'object' && sourceParams[i] != null) {
        if (Array.isArray(sourceParams[i])) {
          sourceParams[i].map((item, index) => {
            add(`${i}[${index}]`, item);
          });
        } else {
          const keys =  self.Object.keys(sourceParams[i]);
          keys.map(item => {
            add(`${i}[${item}]`, sourceParams[i][item]);
          });
        }
      } else {
        add(i, sourceParams[i]);
      }
    }
    return params.join('&').replace('/%20/g', '+');
  }

  /**
   * 页面级 loading .
   * @param {Boolean} [toggle = true] - 控制 loading 的显/隐
   */
   loading(toggle = true) {
    const loadEl = self.document.getElementById('loading');
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
   assign(target, source) {
    const newTarget = target;
    if (Object.assign) {
      Object.assign(target, source);
    } else {
      for (const prop in source) {
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
   get(url, { params = {}, callback } = {}) {
    this.loading();
    Vue.http.get(`${url}?${this.serialize(params)}`)
    .then(response => response.json())
    .then(data => {
      this.loading(false);
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
   post(url, { params = {}, callback } = {}) {
    this.loading();
    Vue.http.post(url, params)
    .then(response => response.json())
    .then(data => {
      this.loading(false);
      callback(data);
    });
  }


  getPostion(config,callback){ 
       wx.ready(() => {
          wx.getLocation({
          type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
          success: function (res) {
              var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
              var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
              var speed = res.speed; // 速度，以米/每秒计
              var accuracy = res.accuracy; // 位置精度
              callback(`${config.url}/${longitude}/${latitude}`);
            }.bind(this),
            cancel: function (res) {
              callback(`${config.url}/0/0`);
            }.bind(this),
            fail:function (res) {
              callback(`${config.url}/-1/-1`);
            }.bind(this),

          });
        });
  }

}

self.common = new Common();
