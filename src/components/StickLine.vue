<script lang='ts' setup>
import { defineProps } from '@vue/runtime-core'

defineProps({
  main: String,
  secondary: String,
})

</script>

<template>
  <div class="stick d-flex align-center">
    {{ main }}
  </div>
</template>
<style lang="stylus" scoped>
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
        content v-bind(secondary)
        position absolute
        right 0
        opacity: 0.6;
        font-family: PingFangSC-Regular;
        font-size: 13px;
        color: #000000;
</style>
