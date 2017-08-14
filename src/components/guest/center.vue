<style lang='sass'>
  @import '../../scss/layout';
  @import '../../scss/line';
  .award-center-wrapper {
    .banner{
      display: block;
      width: 100%;
    }
    li{
      color: #999;
      position: relative;
      padding: 10px 95px 10px 65px;
      @include borderBottom;
    }
    .title {
      color: #333;
    }
    .icon {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 65px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: 50%;
    }
    .btn {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 10px;
      height: 30px;
      line-height: 30px;
      width: 75px;
      text-align: center;
      border-radius: 3px;
      margin: auto;
      color: #ffecaa;
      background-color: #eb5169;
      &.disabled {
        color: #666;
        background-color: #e5e5e5;
      }
    }
    .ico-coupon {
      background-image: url(/dist/images/icon_coupon.png);
    }
    .ico-gift {
      background-image: url(/dist/images/icon_gift.png);
    }
    .ico-red {
      background-image: url(/dist/images/icon_red_packet.png);
    }
  }
</style>

<template lang='jade'>
  .wrapper.award-center-wrapper
    img.banner(:src="banner")
    ul.awards(
      v-if='items.length > 0'
    )
      li(
        v-for='item in items',
        @click='viewPrize(item.id)',
      )
        em.icon(
          :class='setClass(item.type)'
        )
        p.title(v-text='item.name')
        p.date(
          v-cloak,
        ) {{item.scanTime | formatDate}}
        p.introduce(
          v-if='item.summary',
          v-text='item.summary'
        )
        //- 1.已发送、2.未领取、3、未配送，4.已配送、5.发送中、6.发送失败、7.发送成功
        a.btn(
          :class='{disabled: item.status !== 2}',
          v-text='btnText(item.status)'
        )
    p.not-found(v-else) 暂无数据!
</template>

<script lang='babel'>
  import {
    awardCenter,
  } from '../../api.js';
  export default {
    data() {
      return {
        banner: '/dist/images/banner.jpg',
        ajaxFlag:false,
        items: [],
        page:0,
        pageTotal:0,
      }
    },
    methods: {
      next(){
        const scrollHeight = self.document.body.scrollHeight;
        const scrollTop    = self.document.body.scrollTop;
        if (self.innerHeight + scrollTop + 50 > scrollHeight && !this.ajaxFlag) {
          if(this.page < this.pageTotal){
            this.initPage();
          }
        }
      },
      initPage() {
        this.ajaxFlag = true;
        const url = `${awardCenter}${self.qrcode.openId}`;
        self.common.get(url, {
          params:{
            page:this.page+1,
          },
          callback: function(json) {
            this.ajaxFlag = false;
            if (json.code === 200) {
              if(this.page == 0){
                this.items = json.data.result;
                this.pageTotal = json.data.pageTotal;
                self.document.addEventListener('scroll', this.next);
              } else {
                this.items = this.items.concat(json.data.result);
              }
              this.page = json.data.page;
            } else {
              self.toast(json.msg);
            }
          }.bind(this)
        });
      },
      setClass(type) {
        //- (1红包，2实物，3优惠券）
        if (type === 1) {
          return 'ico-red';
        } else if (type === 2) {
          return 'ico-gift';
        } else {
          return 'ico-coupon';
        }
      },
      btnText(status) {
        //- 1.已发送、2.未领取、3、未配送，4.已配送、5.发送中、6.发送失败、7.发送成功
        const text = ['已发送', '未领取', '未配送', '已配送','发送中','发送失败','发送成功'];
        return text[status - 1];
      },
      viewPrize(id) {
        this.$router.push({
          name: 'guestPrize',
          params: {
            id,
          },
        });
      },
    },
    mounted() {
      this.initPage();
    },
    beforeDestroy() {
      // 在销毁的时候, 一定要先卸载当前组件的 scroll 事件, 不然的话, 在所有组件下都会触发当前组件的 scroll 事件
      self.document.removeEventListener('scroll', this.next);
    },
  }
</script>
