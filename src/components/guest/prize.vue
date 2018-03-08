<style lang='sass'>
  .prize-wrapper {
    min-height: 100%;
    background: url(/dist/images/prize_bottom.png) 50% bottom no-repeat,
                url(/dist/images/prize_top.png) 50% 0 no-repeat;
    background-color: #ffedcd;
    background-size: contain;
    .info {
      color: #fff1d9;
      position: relative;
      padding: 15px;
      width: 75%;
      margin: 50% auto 0;
      background-color: #fa5f75;
      box-sizing: border-box;
      margin-bottom: 20px;
      &:before {
        content: '';
        background-color: #535353;
        height: 8px;
        border-radius: 5px;
        overflow: hidden;
        position: absolute;
        left: -10px;
        right: -10px;
        top: 0;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      }
    }
    .view-map {
      color: #F6F6F6;
      text-decoration: underline;
    }
    .layout-lr{
      .item {
        overflow: hidden;
        padding: 5px 0;
        line-height: 18px;
      }
      .title {
        float: left;
        width: 65px;
        margin-right: 5px;
        text-align:justify;
        text-align-last:justify;
        height: 18px;
        &:after {
          content:"";
          display: inline-block;
          width:100%;
          overflow:hidden;
          height:0;
        }
      }
      .con {
        overflow: hidden;
      }
    }
    $color: #da3f59;
    .branch {
      width: 75%;
      color: $color;
      margin: 0 auto;
      .title {
        width: 40px;
      }
      .head {
        font-weight: 700;
        padding: 0;
      }
    }
    .form {
      .item {
        line-height: 32px;
      }
    }
    .form,
    .delivery {
      color: #da3f59;
      padding: 5%;
      background-color: #fff4e1;
      input,
      select,
      textarea {
        border: 1px solid $color;
        background-color: transparent;
        border-radius: 0;
        padding: 5px;
        color: inhert;
      }
      input,
      textarea {
        width: 100%;
      }
      textarea {
        height: 80px;
      }
      select {
        width: 32%;
        margin-right: 2%;
        &:last-child {
          margin-right: 0;
        }
      }
      .head {
        line-height: 18px;
        padding-bottom: 0;
      }
      .select-box {
        margin-bottom: 10px;
      }
      .btn {
        background-color: $color;
        text-align: center;
        color: #fff;
        display: block;
        width: 90%;
        padding: 10px 0;
        margin: 0 auto;
        border-radius: 3px;
      }
    }
    .qrcodeImage{
      display: block;
      width:160px;
      height:160px;
      margin: 0 auto;
      border: 5px solid #fff;
      border-radius: 5px;
    }
  }
</style>

<template lang='jade'>
  .wrapper.prize-wrapper
    ul.layout-lr.info
      li.item
        span.title 扫码商品:
        .con(v-text='info.productName')
      li.item
        span.title 奖品等级:
        .con(v-text='info.gradeName')
      li.item
        span.title 二维码号:
        .con(v-text='info.qrcodeNum')
      li.item
        span.title 奖品名称:
        .con(v-text='info.prizeName')
      li.item
        span.title 奖品价格:
        .con(v-text='(info.prizePrice || 0.00) + "元"')
      li.item(v-if='info.cashTime')
        span.title 领取时间:
        .con(v-cloak) {{info.cashTime | formatDate}}
      li.item(v-if='info.type === 2 && info.status === 2 && info.shippingMethod === 2')
        span.title 自提网点:
        .con
          router-link.view-map(:to='{name: "map", params: {prizeId: prizeId}}') 查看自提网点地图
    ul.layout-lr.branch(v-if='info.branch')
      li.item.head
        span 自提网点:
        span(v-text='info.branch.name')
      li.item
        span.title 地址:
        .con(v-text='info.branch.address')
      li.item
        span.title 电话:
        .con(v-text='info.branch.linkPhone')
    ul.layout-lr.delivery(v-if='info.delivery')
      li.item.head
        strong 配送信息:
      li.item
        span.title 收件人:
        .con(v-text='info.delivery.consignee')
      li.item
        span.title 联系电话:
        .con(v-text='info.delivery.mobile')
      li.item
        span.title 配送地址:
        .con(v-text='info.delivery.address')
      li.item
        span.title 状态:
        .con(v-text='logisticsStatus(info.status)')
      li.item(v-if='info.delivery.logisticsCompanyName')
        span.title 承运来源:
        .con(v-text='info.delivery.logisticsCompanyName')
      li.item(v-if='info.delivery.waybillNumber')
        span.title 运单编号:
        .con(v-text='info.delivery.waybillNumber')
    form(
      v-if='info.type === 2 && info.status === 2 && info.shippingMethod === 3',
      @submit.prevent='submit'
    )
      ul.layout-lr.form
        li.item.head
          strong 配送信息:
        li.item
          span.title 收件人:
          .con
            input(
              v-model.trim='params.consignee',
              maxlength='20'
            )
        li.item
          span.title 联系电话:
          .con
            input(
              v-model='params.mobile',
              maxlength='11',
              type='tel'
            )
        li.item
          span.title 配送地址:
        li.item
          .select-box
            select(
              @change='getRegion($event, 1)'
            )
              option(value='0') 省/直辖市
              option(
                v-for='item in province',
                :key='item.id',
                :value='item.id'
              ) {{item.name}}
            select(
              v-if="city.length",
              @change='getRegion($event, 2)',
            )
              option(value='0') 市/区
              option(
                v-for='item in city',
                :key='item.id',
                :value='item.id'
              ) {{item.name}}
            select(
              v-if="regions.length",
              @change='getRegion($event, 3)',
            )
              option(value='0') 区/县
              option(
                v-for='item in regions',
                :key='item.id',
                :value='item.id'
              ) {{item.name}}
          textarea(
            placeholder='请输入详细地址',
            v-model.trim='textarea',
            maxlength='200',
          )
        li.item
          button.btn 确认
    img.qrcodeImage(
      v-if='info.type === 2 && info.status === 2 && info.shippingMethod === 2 && id',
      :src='qrcodeBg()'
    )
    router-view
</template>
<script lang='babel'>
  import {
    awardPrize,
    rgnRegion,
    awardDistribution,
    getQrcodeImageURL,
  } from '../../api.js';
  export default {
    data() {
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
          address: '',
        },
        prizeId: 0,
      }
    },
    methods: {
      initPage() {
        const url = `${awardPrize}${self.qrcode.openId}/${self.qrcode.uuid}/${this.id}`;
        self.common.get(url, {
          callback: function(json) {
            if (json.code === 200) {
              Vue.set(this, 'info', json.data);
               if(json.data.acceptprize_ERR_CODE_1211 !=null && json.data.acceptprize_ERR_CODE_1211 !='' && json.data.acceptprize_ERR_CODE_1211 != "1211"){
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

      qrcodeBg(){
        return `${getQrcodeImageURL}${this.id}`;
      },

      getRegion($event, type) {
        let id = 0;
        if (type) {
          const target = $event.target;
          id = +target.value;
          const index = target.options.selectedIndex;
          const text = target.options[index].textContent;
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
          } else if (type === 3){
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
        const url = `${rgnRegion}${id}`;
        self.common.get(url, {
          callback: function(data) {
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
        })
      },
      submit() {
        if(!this.params.consignee){
          self.toast("请填写收件人姓名");
        } else if(!/^[a-zA-Z \u4e00-\u9fa5]+$/.test(this.params.consignee)){
          self.toast("请输入正确的收件人姓名");
        } else if(!this.params.mobile){
          self.toast("请填写联系电话");
        } else if(!/^1[345678]{1}\d{9}$/.test(this.params.mobile)){
          self.toast('手机号不正确哟~');
        } else if(!this.regionName){
          self.toast('请选择配送地址~');
        } else if(!this.textarea){
          self.toast('请填写详细地址~');
        } else if(!/^[#\-\w\u4e00-\u9fa5]+$/.test(this.textarea)){
          self.toast('不能输入特殊字符~');
        } else {
          const url = `${awardDistribution}${self.qrcode.openId}/${this.id}`;
          const params = {
            consignee: self.encodeURIComponent(this.params.consignee),
            mobile: this.params.mobile,
            rgn_region_id: this.regionsId,
            address: self.encodeURIComponent(`${this.provinceName}${this.cityName}${this.regionName}${this.textarea}`),
          };
          self.common.post(url, {
            params,
            callback: function(data) {
              if (data.code === 200) {
                self.toast('提交成功, 坐等收货吧', {
                  callback: function() {
                    self.location.reload();
                  }
                });
              } else {
                self.toast(data.msg);
              }
            }.bind(this)
          })
        }
      },
      logisticsStatus(status) {
        //- 1.已发送、2.未领取、3、未配送，4.已配送
        const text = ['已发送', '未领取', '未配送', '已配送'];
        return text[status - 1];
      },
    },
    mounted() {
      this.id = this.$route.params.id;
      this.initPage();
    }
  }
</script>
