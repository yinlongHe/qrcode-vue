<style lang='sass'>
  .site-nav {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 0;
    height: 54px;
    line-height: 54px;
    text-align: center;
    background-color: #fafafa;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 1px;
      background-color: #cfcfcf;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
    }
    a {
      font-size: 14px;
      color: #333;
      display: inline-block;
      width: 50%;
      position: relative;
      text-decoration: none;
    }
    .scan:before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 1px;
      background-color: #cfcfcf;
      -webkit-transform: scaleX(.5);
      transform: scaleX(.5);
    }
  }
</style>

<template lang='jade'>
  nav.site-nav
    a.scan(@click='wxScan') 扫一扫
    a(href='#/expiry/record') 兑奖记录
</template>
<script lang='babel'>
  export default {
    methods: {
      wxScan() {
        wx.ready(function() {
          wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
              // 当needResult 为 1 时，res.resultStr是扫码返回的结果
              var url = res.resultStr + '?step=3&qyuuid=' + self.qrcode.qyuuid;
              // document.getElementById('href').innerHTML = url;
              // document.getElementById('href').href = url;
              self.location.href = url;
            }
          });
        });
      }
    }
  }
</script>