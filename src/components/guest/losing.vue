<style lang='sass'>
  @import '../../scss/layout';
  .guest-losing-wrapper {
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
    .tips {
      font-size: 20px;
      text-shadow: 0 1px #7e8180;
      margin-top: 15%;
      position: absolute;
      top: 45%;
      left: 0;
      width: 100%;
    }
    .follow {
      position: absolute;
      top: 60%;
      left: 0;
      width: 100%;
    }
    img {
      width: 40%;
      position: absolute;
      top: 70%;
      left: 30%;
      border: 5px solid #fff;
      margin-left: -5px;
      background-color: #fff;
      border-radius: 3px;
    }
  }
</style>

<template lang='jade'>
  .wrapper.guest-losing-wrapper(
    :style='bgImg'
  )
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
    img(:src='qr')
</template>
<script lang='babel'>
  import CommonDialog from '../common/dialog.vue';
  export default {
    components: {
      CommonDialog,
    },
    data() {
      return {
        bgImg: {
          backgroundImage: `url(${self.qrcode.background_image_los})`
        },
        qr: self.qrcode.imgUrl,
        ruleDialogToggle:false,
        introduction: self.qrcode.introduction,
      }
    },
    methods: {
      ruleToggle(){
        this.ruleDialogToggle = false;
      },
    },
  }
</script>
