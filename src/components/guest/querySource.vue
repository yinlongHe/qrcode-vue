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
    .product-img(  :style='{backgroundImage:"url("+is_no+")"}' v-if='pictures == ""')
    .product-img(  :style='{backgroundImage:"url("+pictures+")"}' v-if='pictures != ""')
    ul.form-info.justify
      li.info-box
        span.box-title 产品名称：
        .box-text {{proname}}
      li.info-box 
        span.box-title 批次号：
        .box-text {{batch_nub}}
      li.info-box(v-if='first_scan_time!=""')  
        span.box-title 生产日期：
        .box-text {{first_scan_time | formatDate}}
      li.info-box
        span.box-title 生产企业：
        .box-text {{depotname}}
      li.info-box
        span.box-title 扫码次数：
        .box-text {{sacncount}}
    promoter-nav
</template>

<script lang='babel'>
  import {
    getSource,
  } from '../../api.js';
  import QuerySource from './querySource.vue';
  export default {
  components: {
      QuerySource,
    },
    data() {
      return {
        is_no:'/dist/images/bg_no.png',
        proname:'',
        batch_nub:'',//批次号
        first_scan_time:'',
        depotname:'',//所属公司
        pictures:'',
        sacncount:'',
      }
    },
    methods: {
      initQuery() {
        const qr = self.qrcode;
        const url = `${getSource}${qr.type}/${qr.uuid}/${qr.islogis}`;
        self.common.get(url, {       
          callback: function(res) {
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
                window.location = self.qrcode.urlparams;//获取扫码进入页面的url 重新回调一遍二维码url
              }, false);
            }
          }.bind(this)
        });
      },
    },
    mounted() {
      this.initQuery();
      $("#title").html("溯源查询");
    },  
    beforeDestroy() {

    } 
  }
</script>
