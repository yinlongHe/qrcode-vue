<style lang='sass'>
  @import '../../scss/line';
  .map-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 5;
    .map {
      height: 100%;
    }
    .icon-nav {
      width: 50px;
      height: 50px;
      position: absolute;
      z-index: 10;
      left: 10px;
      top: 10px;
      border-radius: 3px;
      background-color: rgba(0, 0, 0, .5);
      em {
        position: absolute;
        left: 10px;
        top: 10px;
        width: 30px;
        border-top: 2px solid #fcfcfc;
        border-bottom: 2px solid #fcfcfc;
        height: 26px;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 12px;
          height: 2px;
          width: 100%;
          background-color: #fcfcfc;
        }
      }
    }
    .items {
      position: absolute;
      top: 70px;
      left: 10px;
      z-index: 10;
      overflow: auto;
      max-height: 200px;
      width: 150px;
      border-radius: 3px;
      border-top: 10px solid rgba(0, 0, 0, .8);
      border-bottom: 10px solid rgba(0, 0, 0, .8);
      a {
        display: block;
        position: relative;
        padding: 10px;
        background-color: rgba(0, 0, 0, .8);
        @include borderBottom;
        &:first-child {
          padding-top: 0;
        }
      }
      .name {
        color: #fff;
      }
      .address {
        font-size: 12px;
        color: #999;
      }
    }
  }
</style>

<template lang='jade'>
  .map-wrapper
    .map#allmap
    a.icon-nav(
      @click='toggle = !toggle'
    )
      em
    nav.items(
      v-if='fixedPoint.length && toggle',
    )
      a(
        v-for='(item, index) in fixedPoint',
        :key='item.id',
        @click='initMap(index)'
      )
        h4.name(v-text='item.name')
        p.address(v-text='item.address')
</template>

<script lang='babel'>
  import {
    getBranchListURL,
  } from '../../api.js';
  export default {
    data() {
      return {
        prizeId: 0,
        fixedPoint: [],
        centerPoint: {},
        toggle: false,
      }
    },
    methods: {
      initMap(defaultIndex) {
        // 创建Map实例
        var map = new BMap.Map("allmap");

        // 设置地图点的中心点
        var point = new BMap.Point(this.centerPoint.x, this.centerPoint.y);

        // 将地图渲染到 DOM 中，并设置地图的显示级别
        map.centerAndZoom(point, 12);

        // 描点点击后信息窗口样式
        var infoOpts = {
          // 信息窗口宽度
          width : 200,
          // 信息窗口高度
          height: 100,
          // 信息窗口标题
          // title : "默认标题" ,
          // 自动平移
          enableAutoPan : true,
          // 信息窗口的详情内容
          // message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
        }

        /**
         * 创建自定义标注
         * @param {Object} point - 标注点的经伟度及信息窗口内容.
         * @param {Number} index - 描点的索引.
         */
        function addMarker(item, index){
          // 设置标注点的百度经伟度
          var point = new BMap.Point(item.lng, item.lat)
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
          marker.addEventListener('click', function(event) {
            var infoWindow = new BMap.InfoWindow(content, opts);
            map.openInfoWindow(infoWindow, point);
          });
        }
        this.fixedPoint.map(function(item, index) {
          const coords = item.geoPoint.split(',');
          const aMarker = {
            lng: coords[1],
            lat: coords[0],
            content: `<p>自提网点: ${item.name}</p><p>地址: ${item.address}</p><p>电话: ${item.linkPhone}</p>`,
          }
          addMarker(aMarker, index);
        });
      },
      showPosition(coords) {
        const geoconv = `http://api.map.baidu.com/geoconv/v1/?coords=${coords.longitude},${coords.latitude}&ak=${self.qrcode.ak}`
        this.$http.jsonp(geoconv)
                  .then(response => response.json())
                  .then(data => {
                    if (data.status == 0) {
                      return data.result[0];
                    }
                  })
                  .then(result => {
                    const url = `${getBranchListURL}${this.prizeId}`;
                    self.common.get(url, {
                      params: {
                        longitude: result.x,
                        latitud: result.y
                      },
                      callback: function(json) {
                        if(json.code == 200){
                          console.log(json);
                          this.fixedPoint = json.data;
                          this.centerPoint = result;
                          this.initMap(0);
                        } else {
                          self.toast(json.msg);
                        }
                      }.bind(this)
                    })
                  });
      },
      geolocation() {
        wx.ready(() => {
          wx.getLocation({
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function(res) {
              this.showPosition(res);
            }.bind(this)
          });
        });
      }
    },
    mounted() {
      this.prizeId = this.$route.params.prizeId;
      this.geolocation();
    }
  }
</script>
