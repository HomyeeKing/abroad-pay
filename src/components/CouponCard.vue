<script lang='ts' setup>
import { defineProps } from 'vue'
import type { PropType } from 'vue'
interface LeftPart{
  icon: string
  threshold: number
  icontip: string
  discount: number
}
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
    type: Object as PropType<Partial<LeftPart>>,
  },
  cardStyle: Object,
})
const cardBgColor: Record<any, Record<string, string>> = {
  1: { 'background-image': 'linear-gradient(200deg, #FFA000 0%, #FF8F00 100%)' },
  2: { background: '#00C250' },
  3: { background: '#FFF2EA' },
  4: { background: '#FFF2EA' },
}

const typeMap = {
  working: 1, // 生效中
  got: 2,
  gotNormal: 3,
  merchant: 4,
}
</script>

<template>
  <div class="coupon" :class="{'coupon-merchant':type === typeMap.merchant}">
    <section
      class="card d-flex justify-center align-center"
      :style="{...cardBgColor[type],...cardStyle}"
      :class="{'flex-column':type === typeMap.merchant}"
    >
      <!-- 商户券 -->
      <template v-if="type === typeMap.merchant">
        <b>{{ name }}</b>
        <!-- judge discount or hkd, let's simple here -->
        <h1 class="text-darkred mt-1">
          {{ leftPart?.discount }} <small class="text-small">折</small>
        </h1>
        <small class="text-darkred">{{ leftPart?.icontip }}</small>
      </template>

      <template v-else>
        <img v-if="leftPart?.icon" :src="leftPart.icon" width="68" height="61">
        <template v-else>
          <section class="left-container" :class="[type === typeMap.gotNormal ? 'text-darkred' :'text-white']">
            <div :class="['threshold',`threshold-${type}`]">
              {{ leftPart?.threshold }}
            </div>
            <b>元</b>
            <p style="font-size:12px; color:#000;" :style="{'opacity':type === typeMap.gotNormal? .6: .9}">
              {{ leftPart?.icontip }}
            </p>
          </section>
        </template>
        <slot name="left"></slot>
        <div class="right" :class="[type===typeMap.gotNormal?'text-black':'text-white']">
          <b>{{ name }}</b>
          <p class="tip">
            {{ tip }}
          </p>
        </div>
      </template>
    </section>
    <section class="note d-flex align-center justify-center">
      <!-- 优先判断是否是 商户优惠券 -->
      <template v-if="type === typeMap.merchant">
        <van-button color="#F15451">
          使用优惠
        </van-button>
      </template>
      <template v-else>
        <span v-if="remain" class="unlock">{{ `${remain}张待解锁` }}</span>
        <small v-if="note" class="text-gray">{{ note }}</small>
        <slot name="note"></slot>
      </template>
    </section>
  </div>
</template>

<style lang="stylus" scoped>
.coupon
    width 337px
    height 171px
    box-shadow: 0 3px 11px 0 rgba(179,179,179,0.50);
    margin 30px auto
    overflow hidden
    &-merchant
        width:170px;
        height:215px;

.card
    height 115px
    box-sizing border-box

    .right
        margin-left 20px
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
    background-color #fff

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
