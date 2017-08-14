<style lang='sass'>

</style>

<template lang="jade">
  div
    .not-found(
      v-if='code != 200',
      v-text='msg'
    )
    promoter-nav(v-if='code == 200')
</template>

<script lang='babel'>
  import PromoterNav from './nav.vue';
  export default {
    components: {
      PromoterNav,
    },
    data() {
      return {
        code: self.qrcode.code,
        msg: self.qrcode.msg,
        openId: self.qrcode.openId,
        uuid: self.qrcode.uuid,
        from: self.qrcode.from,
        qrcode: self.qrcode
      }
    },
    created() {
      // code == 200，才算是正常流程，再执行页面跳转
      if (self.qrcode.code == 200) {
        if (self.qrcode.promotion.name) {
          // promotion.name存在说明是扫一扫过来的
          this.$router.push({
            name: 'promoterInfo',
          });
        }
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
