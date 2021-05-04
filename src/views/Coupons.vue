<script lang='ts' setup>
import axios from '@/axios'
import CouponCard from '@/components/CouponCard.vue'
const { coupons } = await axios.get<any, {coupons: any}>('/api/coupons')

</script>

<template>
  <div class="panel">
    <div class="stick">
      微信支付优惠券
    </div>

    <coupon-card
      v-for="item of coupons"
      :key="item"
      :name="item.name"
      :tip="item.tip"
      :type="item.type"
      :remain="item.remain"
      :note="item.note"
      :left-part="{icon:item.icon,threshold:item.threshold,icontip:item.icontip}"
    >
      <template v-if="!item.note" #note>
        <span style="margin-right: 5px;">{{ `${item.HKD}港币=${item.RMB}人民币` }}</span>
        <small class="text-gray">
          市场参考价
        </small>
        <small class="text-gray text-deleted">
          {{ item.RMBE }}人民币
        </small>
      </template>
    </coupon-card>
  </div>
</template>
<style lang="stylus" scoped>
.panel
    background #F7F7F7
    border-top-right-radius  25px
    border-top-left-radius 25px
    padding 20px 10px
    overflow auto

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
            content '微信支付自动抵扣'
            position absolute
            right 0
            opacity: 0.6;
            font-family: PingFangSC-Regular;
            font-size: 13px;
            color: #000000;

</style>
