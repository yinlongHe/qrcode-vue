<style lang='sass'>
  .dialog {
    position: fixed;
    top: 10%;
    padding: 10%;
    left: 0;
    right: 0;
    z-index: 5;
    color:#333;
    .dialog-content {
      position: relative;
      z-index: 3;
      border-radius: 10px;
      padding: 10px;
      background-color: #fff;
    }
    p {
      margin-bottom: 5px;
    }
    .btn-close {
      width: 25px;
      height: 25px;
      border: 1px solid #fff;
      border-radius: 100px;
      position: absolute;
      left: 50%;
      bottom: -35px;
      margin-left: -13px;
      pointer-events: none;
      z-index: 4;
      &:before {
        position: absolute;
        content: '';
        left: 2px;
        width: 21px;
        height: 1px;
        top: 12px;
        background-color: #fff;
        transform: rotate(45deg);
      }
      &:after {
        position: absolute;
        content: '';
        left: 2px;
        width: 21px;
        height: 1px;
        top: 12px;
        background-color: #fff;
        transform: rotate(135deg);
      }
    }
    img {
      width: 100%;
      display: block;
    }
  }
</style>

<template lang='jade'>
  .dialog
    section.dialog-content
      slot
    a.btn-close(v-if='icon')
    .mask(
      @click='toggle'
    )
</template>

<script lang='babel'>
  export default {
    props: ['dialog-toggle', 'icon'],
    methods: {
      toggle() {
        this.$emit('closeDialog');
      }
    }
  }
</script>