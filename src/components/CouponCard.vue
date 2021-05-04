<script lang='ts' setup>
import { defineProps } from 'vue'
import type { PropType } from 'vue'

defineProps({
  type: {
    type: [Number, String],
    default: 3,
  },
  tip: String,
  name: String,
  note: String,
  remain: Number,
  leftPart: {
    type: Object as PropType<Partial<{icon: string;threshold: number;icontip: string}>>,
  },
})
const cardBgColor: Record<any, Record<string, string>> = {
  1: { 'background-image': 'linear-gradient(200deg, #FFA000 0%, #FF8F00 100%)' },
  2: { background: '#00C250' },
  3: { background: '#FFF2EA' },
}

</script>

<template>
  <div class="coupon">
    <section class="card d-flex align-center" :style="cardBgColor[type]">
      <img v-if="leftPart?.icon" :src="leftPart.icon" width="68" height="61">
      <template v-else>
        <section class="left-container" :class="[type === 3 ? 'text-darkred' :'text-white']">
          <div :class="['threshold',`threshold-${type}`]">
            {{ leftPart?.threshold }}
          </div>
          <b>元</b>
          <p style="font-size:12px; color:#000;" :style="{'opacity':type === 3? .6: .9}">
            {{ leftPart?.icontip }}
          </p>
        </section>
      </template>
      <slot name="left"></slot>
      <div class="right" :class="[type===3?'text-black':'text-white']">
        <b>{{ name }}</b>
        <p class="tip">
          {{ tip }}
        </p>
      </div>
    </section>
    <section class="note d-flex align-center">
      <span v-if="remain" class="unlock">{{ `${remain}张待解锁` }}</span>
      <small v-if="note" class="text-gray">{{ note }}</small>
      <slot name="note"></slot>
    </section>
  </div>
</template>

<style lang="stylus" scoped>
.coupon
    width 347.5px
    height 171px
    box-shadow: 0 3px 11px 0 rgba(179,179,179,0.50);
    margin 30px auto
    overflow hidden

.card
    height 115px
    padding 40px
    box-sizing border-box

    .right
        margin 20px
        .tip
            opacity: 0.9;
            margin-top 10px

$radius = 20px
.note
    position relative
    box-shadow: 0 1px 4px 0 rgba(183,183,183,0.50);
    height calc(100% - 115px)
    padding 20px
    box-sizing: border-box;
    border-top 1px dashed #000
    white-space nowrap

    &:before,&:after
        content:''
        position absolute
        width $radius
        height $radius
        border-radius 50%
        background-color #fff
        top 0

    &:before
        left 0
        transform  translate(-($radius/2),-($radius/2))

    &:after
        right 0
        transform  translate($radius/2,-($radius/2))

    .unlock
        color gray
        border: 2px solid #E9E9E9;
        border-radius: 20px;
        margin-right 10px
        padding 0 10px

    // left part
 .left-container
    text-align center

.threshold
    width 44px
    height 61px
    font-family: Helvetica;
    display inline-block
    line-height @height
    margin-right 5px

    &-2
        opacity: 0.8;
        background: #1F9850;
        border-radius: 2.7px;
        line-height @height
        font-size 40.5px
        margin-bottom 5px
    &-3
        font-size 40px
</style>
