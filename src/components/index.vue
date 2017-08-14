<style lang='sass'>

</style>

<template lang="jade">
  div
    .not-found(
      v-if='code != 200',
      v-text='msg'
    )
</template>

<script lang='babel'>
  export default {
    data() {
      return {
        code: self.qrcode.code,
        msg: self.qrcode.msg,
        openId: self.qrcode.openId,
        uuid: self.qrcode.uuid,
        from: self.qrcode.from,
        qrcode: self.qrcode,
        is_history: self.qrcode.is_history,
        is_input:self.qrcode.is_input
      }
    },
    created() {
      // code == 200，才算是正常流程，再执行页面跳转
      switch (self.qrcode.code) {
        case '200':
          if (self.qrcode.from == 0) {
            this.$router.replace({
              name: 'guestHome',
            });
          }
          if (self.qrcode.from == 1) {
            this.$router.replace({
              name: 'guestCenter',
            });
          }
        break;
        case '1007':
          // 二维码已抽奖,未中奖
          this.$router.replace({
            name: 'guestLosing',
          });
          break;
       case '1015':
          // 未启用营销，直接进入物流追溯界面
          this.$router.replace({
            name: 'querySource',
          });
        self.qrcode.islogis = '0';
        break;
        case '1008':
        case '1009':
          // 1008 已抽奖中奖, 未填写手机号, 去中奖页面
          // 1009 已抽奖中奖, 填写手机号, 未关注
          this.$router.replace({
            name: 'guestWin',
            query: {
              actwinid: self.qrcode.actwinid,
              pzid: self.qrcode.pzid,
            }
          });
          break;
        case '1012':
        case '1013':
          // 1012 已抽奖并且已关注
          // 1013 已兑奖
          this.$router.replace({
            name: 'guestCenter'
          });
          break;
      }
    }
  }
  // code -> 200为成功, 其他为失败
  // code: ${code!},
  // openId: '${openId!}',
  // uuid: '${uuid!}',
  // // from -> 判断页面来源, 0: 二维码扫码, 1: 领奖中心
  // from: ${from!},
  // origin: self.location.origin,
  // pathname: self.location.pathname,
</script>
