<style lang='sass'>
  .prize-info{
    padding: 10px 10px 64px;
    .product-box{
      padding: 22px 0 27px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 0 10px #c2c2c2;
      margin-bottom: 15px;
      overflow: hidden;
      .product-img{
        width: 100px;
        height: 100px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: auto 90%;
        float: left;
      }
      .form-info{
        color: #333;
        overflow: hidden;
      }
    }
    .info-box{
      margin-bottom: 10px;
    }
    .prize-box{
      padding: 15px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 0 10px #c2c2c2;
      margin-bottom: 25px;
      .product-img{
        padding-top: 30%;
        margin-bottom: 15px;
        position: relative;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: auto 100%;
      }
    }
    .award-mark{
      width: 15%;
      padding-top: 15%;
      background:  url(data:image/png;base64,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) center center no-repeat;
      background-size: auto 100%;
      position: absolute;
      top: -6px;
      right: 0px;
    }
    .affirm{
      display: block;
      width: 124px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      margin: 0 auto;
    }
  }

</style>

<template lang='jade'>
  .wrapper.prize-info
    article.product-box
      .product-img(:style='{backgroundImage:"url("+productPicture+")"}')
      ul.form-info.justify
        li.info-box
          span.box-title 商品名称：
          .box-text {{productName}}
        li.info-box
          span.box-title 产品编号：
          .box-text {{productNumber}}
        li.info-box
          span.box-title 条形码：
          .box-text {{productBarcode}}
        li.info-box
          span.box-title 数量(瓶)：
          .box-text {{productNum}}
    article.prize-box
      .product-img(:style='{backgroundImage:"url("+prizePicture+")"}')
        span.award-mark
      ul.form-info
        li.info-box
          span.box-title 兑换奖品：
          .box-text {{prizeName}}
        li.info-box
          span.box-title 奖品价格：
          .box-text {{prizePrice}}元
        li.info-box
          span.box-title 奖品描述：
          .box-text {{prizeSummary}}
    a.btn.btn-pale-red.affirm(
      v-if="!recordDetailFlag",
      @click="confirmPrize()"
    ) 确认兑奖
    point-nav
</template>

<script lang='babel'>
  import {
    expiryRecordDetailURL,
    confirmPrizeURL,
  } from '../../api.js';
  import PointNav from './nav.vue';
  export default {
    components: {
      PointNav,
    },
    data() {
      return {
        banner: '/dist/images/banner.jpg',
        id:'',//记录id
        prizeName: '',  //奖品名称
        prizePicture: '',    //奖品图片
        prizePrice: 0,     //奖品价格
        prizeSummary: '', //奖品描述
        productBarcode: '',  //产品条形码
        productName: '',  //产品名称
        productNum: 1,  //产品数量
        productNumber: '',  //产品编码
        productPicture: '',  //产品图片
        recordDetailFlag:false, //兑奖记录详情
        storeId:self.qrcode.branchId, //网点id

      }
    },
    methods: {
      confirmPrize(){
        self.common.post(confirmPrizeURL,{
          params:{
            id:this.id,
            qyuuid:self.qrcode.qyuuid,
          },
          callback:function (json) {
            if(json.code == 200){
              self.toast('兑换成功');
              this.recordDetailFlag = true;
            } else {
              self.toast(json.msg);
            }
          }.bind(this)
        })
      },
      initRecordDetail() {
        self.common.get(expiryRecordDetailURL, {
          params:{
            id:this.id,
          },
          callback: function(json) {
            if (json.code === 200) {
              self.common.assign(this, json.data);
            } else {
              self.toast(json.msg);
            }
          }.bind(this)
        });
      },
    },
    mounted() {
      this.id = this.$route.query.id;

      if(this.id){
        this.recordDetailFlag = true;
        this.initRecordDetail();
      } else {
        self.common.assign(this, self.qrcode.prizePoint);
      }
    },
    beforeDestroy() {

    }
  }
</script>