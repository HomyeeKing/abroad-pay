<script lang='ts' setup>

</script>

<template>
  <div class="panel">
    <div class="stick">
      优惠券
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.panel
    background #F7F7F7
    border-top-right-radius  25px
    border-top-left-radius 25px
    padding 20px

    .stick
        position relative
        font-family: PingFangSC-Medium;
        color: #252525;
        font-weight bold

        &::before
            content ''
            display inline-block
            margin-right 10px
            width 4px
            height 20px
            background #E54A30
            border-radius 2px
        &::after
            content 'asdasd'
            position absolute
            right 0
            opacity: 0.6;
            font-family: PingFangSC-Regular;
            font-size: 13px;
            color: #000000;
</style>
