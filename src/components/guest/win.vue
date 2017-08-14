<style lang='sass'>
  @import '../../scss/layout';
  .guest-win-wrapper {
    @include coverBg(100%);
    background-color: #df2023;
    text-align: center;
    color: #fff;
    .btn-rule {
      position: absolute;
      top: 30%;
      right: 0;
      padding: 10px 8px 10px 10px;
      writing-mode: vertical-lr;
      background-color: #ffe641;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      box-shadow: -3px 0 3px #d9c119, 0 3px 3px #d9c119;
      color: #d65d18;
    }
    .btn-query {
      position : absolute;
      top:11%;
      right:0;
      height:0;
      padding:10px 8px 10px 10px;
      color:#185ad6;
      text-decoration:underline;
    }
    .content {
      color: #fff;
      margin-bottom: 15px;
    }
    .name {
      font-size: 20px;
      margin-bottom: 10px;
    }
    em {
      color: #ffda23;
    }
    .form {
      position: absolute;
      top: 0;
      left: 5%;
      width: 90%;
      color: #333;
      margin-top: 95%;
    }
    input {
      background-color: #bb2e2d;
      border-radius: 3px;
      padding: 10px;
      width: 100%;
      margin-bottom: 10px;
      color: #fff;
      height: 35px;
    }
    .code {
      position: relative;
      margin-bottom: 10px;
      input {
        margin-bottom: 0;
      }
    }
    .btn-code {
      background-color: #ab2b2a;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      padding: 0 10px;
      line-height: 35px;
      color: #fff;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      &.disabled {
        pointer-events: none;
        opacity: 0.5;
      }
    }
    .submit {
      color: #d65d18;
      width: 60%;
      padding: 10px 8px 10px 10px;
      background-color: #ffe641;
      border-radius: 5px;
      box-shadow: 0 3px 0 #d9c119;
    }
  }
</style>

<template lang='jade'>
  .wrapper.guest-win-wrapper(
    :style='bgImg'
  )
    a.btn-query(
       v-if ='is_history =="1" ',
       @click='getSource()',
    ) 溯源查询
    a.btn-rule(
      v-if='introduction',
      @click='ruleDialogToggle = true',
    ) 活动规则
    common-dialog(
      v-if='ruleDialogToggle',
      @closeDialog='ruleToggle',
      :ruleDialogToggle='ruleDialogToggle',
      :icon='true'
    )
      div(
        v-html='introduction'
      )
    form.form(
      @submit.prevent='submit'
    )
      article.content
        p.name(v-if='qrCode.pztype == 1')
          span 恭喜您! 本次获得
          em(v-text='qrCode.price')
          span 元微信红包
        p.name(
          v-else
        )
          span 恭喜您获得
          em(v-text='qrCode.pzname')
        p.follow
          span 请关注微信公众号, 到
          em 领奖中心
          span 获取奖品。
      input( 
        v-if ='is_input == "1"'
        v-model='mobile',
        maxlength='11',
        type='tel',
        placeholder='请输入手机号'
      )
      p.code
        input(
          v-if ='is_input == "1"'
          v-model='validcode',
          maxlength='6',
          placeholder='请输入短信验证码'
        )
        a.btn-code(
          v-if ='is_input == "1"',
          :class='{disabled: codeToggle}',
          @click='getValidCode',
          v-text='codeText'
        )
      button.submit 去领奖
    common-dialog(
      v-if='dialogToggle',
      @closeDialog='toggle',
      :dialogToggle='dialogToggle',
      :icon='false'
    )
      img(:src='imgUrl')
      p 长按二维码识别，马上领奖
</template>

<script lang='babel'>
  import {
    awardAcceptPrize,
    getCode,
  } from '../../api.js';
  import CommonDialog from '../common/dialog.vue';
  export default {
    components: {
      CommonDialog,
    },
    data() {
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
          backgroundImage: `url(${self.qrcode.bgWinImg || "/dist/images/bg_red.png"})`
        },
        qrCode: self.qrcode,
        dialogToggle: false,
        imgUrl: '',
        ruleDialogToggle:false,
        introduction: self.qrcode.introduction,
        is_history: self.qrcode.is_history,
        is_input:self.qrcode.is_input
      }
    },
    methods: {
      toggle() {
        if (this.imgUrl) return;
        this.dialogToggle = false;
      },
      ruleToggle(){
        this.ruleDialogToggle = false;
      },
      getSource(){
        this.$router.replace({
            name: 'querySource',
        });
         self.qrcode.islogis = '1';
	     var fullPath = window.location.href;
	     self.qrcode.urlparams = (fullPath.split("?"))[0];
      },
      submit() {//去领奖提交
      var copythis   = this;
      var awardPrize = function(url){
      self.common.post(url, {
        callback: function(res) {
          if (res.code == 200) {
                // prize_type == 2说明是实物，subscribe == 0说明没有关注公众号；
                if (res.data.subscribe == 0) {
                  copythis.dialogToggle = true;
                  copythis.imgUrl = res.data.imgurl;
                } else {
                  copythis.$router.replace({
                    name: 'guestCenter',
                  });
                }
              } else {
                self.toast(res.msg);
              }
            }.bind(copythis)
          })  
       }
      
       if( self.qrcode.is_input == '0'){
         const qr = self.qrcode;
         const url = `${awardAcceptPrize}${qr.openId}/${this.actwinid}/${this.pzid}/""/""/${qr.type}/${qr.uuid}/${qr.is_input}`;
         //判断是是够需要获取消费者位置，启用则调用微信定位
         if(self.qrcode.is_postion==1){
           const config={url:url};
           self.common.getPostion(config,awardPrize);
         }else{
           awardPrize(`${url}/-9/-9`);
         }
       }else if(self.qrcode.is_input == '1'){
         if (this.mobile == '') {
          self.toast('手机号还没填写哟~');
        } else if (!/^1[345678]{1}\d{9}$/.test(this.mobile)) {
          self.toast('手机号不正确哟~');
        } else if (this.validcode == '') {
          self.toast('验证码还没填写哟~');
        } else {
          console.log(`========是否需要定位参数：${self.qrcode.is_location}========`);
          const qr = self.qrcode;
          const url = `${awardAcceptPrize}${qr.openId}/${this.actwinid}/${this.pzid}/${this.mobile}/${this.validcode}/${qr.type}/${qr.uuid}/${qr.is_input}`;
          //判断是是够需要获取消费者位置，启用则调用微信定位
          if(self.qrcode.is_postion==1){
           const config={url:url};
           self.common.getPostion(config,awardPrize);
         }else{
           awardPrize(`${url}/-9/-9`);
         }
       }
     }
   },
      getValidCode() {
        if (this.num < 60) return;
        if (this.mobile == '') {
          self.toast('手机号还没填写哟~');
        } else if (!/^1[345678]{1}\d{9}$/.test(this.mobile)) {
          self.toast('手机号不正确哟~');
        } else {
          this.codeToggle = true;
          const url = `${getCode}${this.mobile}/${self.qrcode.uuid}`;
          self.common.get(url, {
            callback: function(data) {
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
      countDown() {
        this.num--;
        if (this.num < 1) {
          self.clearInterval(this.timer);
          this.num = 60;
          this.codeText = '获取验证码';
        } else {
          this.codeText = `${this.num}s后重新获取`;
        }
      }
    },
    created() {
      this.pzid = this.$route.query.pzid;
      this.actwinid = this.$route.query.actwinid;
      this.imgUrl = self.qrcode.imgUrl;
      if (this.imgUrl && self.qrcode.code === '1009') {
        this.dialogToggle = true;
      }
    },
    mounted() {
      self.document.body.style.backgroundColor = '#df2023';
      self.document.documentElement.style.backgroundColor = '#df2023';
    },
    beforeDestroy() {
      self.document.body.style.backgroundColor = '#fff';
      self.document.documentElement.style.backgroundColor = '#fff';
    }
  }
</script>
