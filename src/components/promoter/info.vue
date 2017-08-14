<style lang='sass'>
  .product-info{
    padding: 10px 10px 64px;
    .prize-info{
      padding: 10px;
    }
    .product-img{
      padding: 50% 0 20px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 0 10px #c2c2c2;
      margin-bottom: 15px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: auto 80%;
    }
    .form-info{
      padding: 15px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 0 10px #c2c2c2;
      color: #333;
    }
    .info-box{
      margin-bottom: 10px;
    }
  }
</style>

<template lang='jade'>
  .wrapper.product-info
    .product-img(:style='{backgroundImage:"url("+picture+")"}')
    ul.form-info.justify
      li.info-box
        span.box-title 商品名称：
        .box-text {{name}}
      li.info-box
        span.box-title 产品编号：
        .box-text {{number}}
      li.info-box
        span.box-title 条形码：
        .box-text {{barcode}}
      li.info-box
        span.box-title 数量(瓶)：
        .box-text {{num}}
    promoter-nav
</template>

<script lang='babel'>
  import {
    scanCodeURL,
  } from '../../api.js';
  import PromoterNav from './nav.vue';
  export default {
    components: {
      PromoterNav,
    },
    data() {
      return {
        barcode: '',  //条形码
        name: '',      //名称
        num: 0,     //数量
        number: '',  //产品编号
        picture: '',  //产品图片
      }
    },

    mounted() {
      /*this.$route.params.id*/
      self.common.assign(this, self.qrcode.promotion);
    },
    beforeDestroy() {

    }
  }
</script>