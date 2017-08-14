<style lang='sass'>
  .expiry-record{
    padding-bottom: 64px;
    .search{
      height: 36px;
      padding: 10px 50px 10px 10px;
      background-color: #f0f0f0;
      position: relative;
      .input-box{
        box-sizing: border-box;
        width: 100%;
        padding: 0 28px 0 10px;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
        background-color: #fff;
        position: relative;
        .input-text{
          width: 100%;
          padding: 10px 0;
          background: none;
          border: none;
          font-size: 12px;
          color: #999;
        }
      }
      .search-btn{
        width:28px;
        height: 36px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABxklEQVRIie2VLU8kQRCGey8IBKBOgCHBnjuDRN8P4ENisCQXEKDIhkPwA9DnDjxoUsmkp+t5+QNrTgBBErLBbi5z4nqTTZjZzDLIe+X0W/V0dVVqQqiRmc0Bm8CVpAdJlaQKeAUcOIkxrtbFtlJK6Zuk3znxHXDq7nvuvuPuB8ClpCEwAi7MbGGW/D3gR05+A3xpMprZvLvvZ9hA0lorQgb8Ab63vZWkNWAA3BdFsTLVnJ+omgUwlpktS3oEbkMIvSbTXO7BzayAscqy3JBUuft2rQHYzFU09qCNJF0DaoJcSbrrAsiQLUlV7WhLegBOu0JijIuNT5YP9rpCQggBeAEOmyA7HwR5cvejuoNXdz/4AEYPGLn7bh3EgcuuhJTSV0lVSmm9DnIiaWhm810gks4kPff7/U9vDmOMq7nM/fcCgCVJz5LOp5kuJA1bL7q38T/za3xuNJnZQl50AzNbnhFwPHWlTCpv1HtJj2VZbrRIvpQrGP/QjlvdqiiKFeA2B15L2ooxLk5YenmKznIPhu6+Pa6mNSiE0MuBmrjlC/AEjPK3Z0nnkz14DyiE8G/yMvDQ3Y/cfTeltF47pl1As+o/qCvo118WseIdsnRUrgAAAABJRU5ErkJggg==) center center no-repeat;
        background-size: 12px auto;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
      }
      .filtrate-btn{
        width: 50px;
        height: 100%;
        line-height: 56px;
        font-size: 14px;
        color: #333;
        text-align: center;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
      }
      .filtrate-date{
        width: 100%;
        background-color: rgba(0, 0, 0, 0.36);
        position: fixed;
        top: 56px;
        left: 0;
        bottom: 0;
        z-index: 1;
        .form-info{
          width: 100%;
          padding: 20px 0 18px;
          background-color: #fff;
          .info-box{
            padding: 0 10px;
            margin-bottom: 20px;
          }
        }
        .box-title, .box-text{
          height: 30px;
          line-height: 30px;
          color: #333;
        }
        .input-text{
          box-sizing: border-box;
          width: 46%;
          height: 30px;
          border: 1px solid #e5e5e5;
          text-align: center;
          color: #999;
          float: left;
        }
        .date-to{
          float: left;
          width: 8%;
          text-align: center;
        }
      }
      .btns{
        font-size: 0;
        text-align: center;
        .btn{
          width: 100px;
          height: 30px;
          margin: 0 20px;
        }
      }
    }
    .tab-cut{
      border-bottom: 1px solid #f0f0f0;
      background-color: #fff;
      font-size: 0;
      .tab{
        display: inline-block;
        width: 33.3%;
        height: 42px;
        line-height: 42px;
        font-size: 14px;
        color: #333;
        text-align: center;
        position: relative;
        &.active:after{
          content: "";
          display: block;
          width: 66%;
          height: 3px;
          background-color: #ff5151;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          margin: 0 auto;
        }
      }
    }
    .data-list{
      padding: 0 10px;
      background-color: #fff;
      .data-total{
        padding-top: 10px;
        line-height: 16px;
        font-size: 12px;
        color: #999;
      }
      .form-info{
        border-bottom: 1px solid #e9e9e9;
        position: relative;
        a{
          display: block;
          padding: 16px 0;
        }
        &:after{
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          border-left: 1px solid #808080;
          border-top: 1px solid #808080;
          width: 10px;
          height: 10px;
          -webkit-transform: rotate(135deg);
          -moz-transform: rotate(135deg);
          transform: rotate(135deg);
        }
        .info-box{
          margin-bottom: 10px;
          color: #333;
        }
      }
    }
  }
</style>

<template lang='jade'>
  .wrapper.expiry-record
    form.search(@submit.prevent='initRecordData(true)')
      .input-box
        input.input-text(placeholder="搜索商品",
        v-model="prizeName"
      )
        a.search-btn(@click="initRecordData(true)")
      a.filtrate-btn(@click='toggle = !toggle') 筛选
      .filtrate-date(v-show='toggle')
        .form-info
          .info-box
            span.box-title 扫码时间
            .box-text
              input.input-text(
                type="date" placeholder="开始时间",
                v-model="startTime"
              )
              span.date-to 至
              input.input-text(
                type="date" placeholder="结束时间",
                v-model="endTime"
              )
          .info-box.btns
            input.btn.btn-white(type="button" value="取消", @click='toggle = !toggle')
            input.btn.btn-red(
              type="button" value="确定",
              @click='changeTimeType(4)'
            )
    nav.tab-cut
      a.tab(
        @click='changeTimeType(1)',
        :class='{active: timeType==1}'
      ) 今天
      a.tab(
        @click='changeTimeType(2)',
        :class='{active: timeType==2 }'
      ) 近7天
      a.tab(
        @click='changeTimeType(3)',
        :class='{active: timeType==3 }'
      ) 近30天
    dl.data-list(
      v-if='items.length > 0'
    )
      dt.data-total 共有{{resultTotal}}条记录
      dd.form-info(v-for='item in items')
        router-link(:to="{ name: 'expiryDetail', query: { id: item.id }}")
          .info-box
            span.box-title 奖品名称：
            .box-text {{item.name}}
          .info-box
            span.box-title 兑奖时间：
            .box-text {{item.cTime | formatDate}}
    p.not-found(v-else) 暂无数据!
    point-nav
</template>

<script lang='babel'>
  import {
    expiryRecordURL,
  } from '../../api.js';
  import PointNav from './nav.vue';
  export default {
    components: {
      PointNav,
    },
    data() {
      return {
        banner: '/dist/images/banner.jpg',
        page: 0,
        pageSize:0,
        pageTotal:0,
        resultTotal:0,
        timeType:1,
        ajaxFlag:false,
        items: [],
        prizeName: '',
        startTime: '',
        endTime: '',
        toggle: false,
      }
    },
    methods: {
      changeTimeType(type){
        this.toggle = false;
        this.timeType = type;
        this.initRecordData(true);
      },

      resetInit(){
        this.page = 0;
        this.pageSize = 0;
        this.pageTotal = 0;
        this.resultTotal = 0;
        this.ajaxFlag = false;

        self.document.body.scrollTop = 0;
        self.document.removeEventListener('scroll', this.next);
      },
      next(){
        const scrollHeight = self.document.body.scrollHeight;
        const scrollTop    = self.document.body.scrollTop;
        if (self.innerHeight + scrollTop + 50 > scrollHeight && !this.ajaxFlag) {
          if (this.page < this.pageTotal) {
            this.initRecordData();
          }
        }
      },
      initRecordData(resetFlag) {
        if(resetFlag){
          this.resetInit();
        }

        const url = expiryRecordURL;
        const storeId = self.qrcode.branchId;

        this.ajaxFlag = true;

        self.common.get(url, {
          params:{
            prizeName:this.prizeName,
            timeType: this.timeType,
            startTime:this.startTime ? new Date(this.startTime).getTime().toString() : this.startTime,
            endTime:this.endTime ? new Date(this.endTime).getTime().toString() : this.endTime,
            page: this.page+1,
            qyuuid:self.qrcode.qyuuid,
          },
          callback: function(json) {
            this.ajaxFlag = false;
            if (json.code === 200) {
              this.page = json.data.page;
              if(this.page == 1){
                this.items = json.data.result;
                this.resultTotal = json.data.resultTotal;
                this.pageSize = json.data.pageSize;
                this.pageTotal = json.data.pageTotal;
                if(this.pageTotal > 1){
                  self.document.addEventListener('scroll', this.next);
                }
              } else {
                this.items = this.items.concat(json.data.result);
              }

              if(this.pageTotal - this.page <= 0){
                self.document.removeEventListener('scroll', this.next);
              }
            } else {
              self.toast(json.msg);
            }
          }.bind(this)
        });
      },
    },
    mounted() {
      /*this.$route.params.id*/
      this.initRecordData(true);
    },
    beforeDestroy() {
      // 在销毁的时候, 一定要先卸载当前组件的 scroll 事件, 不然的话, 在所有组件下都会触发当前组件的 scroll 事件
      self.document.removeEventListener('scroll', this.next);
    }
  }
</script>