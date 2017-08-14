<style lang='sass'>
  @import '../../scss/layout';
  .guest-home-wrapper {
    @include coverBg;
    .btn {
      $w: (306px/2);
      position: absolute;
      left: 50%;
      bottom: 18%;
      margin-left: -($w/2);
      width: $w;
      height: (108px/2);
      background: url(/dist/images/btn_start.png);
      background-size: cover;
    }
    .btn-rule {
      position: absolute;
      top: 30%;
      right: 0;
      padding: 10px 8px 10px 10px;
      writing-mode: vertical-lr;
      background-color: #ffe641;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      box-shadow: 0 3px 0 #d9c119;
    }
  }
</style>

<template lang='jade'>
  .wrapper.guest-home-wrapper(
    :style='bgImg'
  )
    a.btn(@click='start')
    a.btn-rule(
      v-if='introduction',
      @click='dialogToggle = true',
    ) 活动规则
    common-dialog(
      v-if='dialogToggle',
      @closeDialog='toggle',
      :dialogToggle='dialogToggle',
      :icon='true'
    )
      div(
        v-html='introduction'
      )
</template>

<script lang='babel'>
  import CommonDialog from '../common/dialog.vue';
  import {drawPrize} from '../../api.js';

  export default {
    components: {
      CommonDialog,
    },
    data() {
      return {
        productId: self.qrcode.productId,
        activityId: self.qrcode.activityId,
        uuid: self.qrcode.uuid,
        type: self.qrcode.type,
        openid: self.qrcode.openId,
        bgImg: {
          backgroundImage: `url(${self.qrcode.bgImg || "/dist/images/bg_start.png"})`
        },
        dialogToggle: false,
        introduction: self.qrcode.introduction
      }
    },
    methods: {
      toggle() {
        this.dialogToggle = false;
      },
      start() {
        const url = `${drawPrize}${this.productId}/${this.activityId}/${this.uuid}/${this.type}/${this.openid}`;
        var copythis=this;
        var config={url:url};
        var draw=function(url){
          self.common.get(url, {
            callback: function(json) {
              if (json.code == 200) {
                self.qrcode.pztype = json.pztype;
                self.qrcode.pzname = json.pzname;
                self.qrcode.price = json.price;
                self.qrcode.is_input = json.is_input;
                copythis.$router.replace({
                  name: 'guestWin',
                  query: {
                    actwinid: json.actwinid,
                    pzid: json.pzid,
                  }
                })
              } else if (json.code == 1105 || json.code == 1106 || json.code == 1107) {
              // 1105 奖品已发完
              // 1106 未中奖
              // 1107 未设置奖品
              self.qrcode.background_image_los = json.background_image_los;
              copythis.$router.replace({
                name: 'guestLosing'
              })
            } else {
              self.toast(json.msg);
            }
          }.bind(copythis)
        })
        }
        //判断是是够需要获取消费者位置，启用则调用微信定位
        if(self.qrcode.is_postion==1)
        {
          self.common.getPostion(config,draw);
        }else{
          draw(`${url}/-9/-9`);
        }
        
      }
    },
    mounted() {
      if(self.qrcode.isAutoDraw == 1){
        this.start();
      }
    },
  }
</script>