<script lang='ts' setup>
import axios from '@/axios'
import CouponCard from '@/components/CouponCard.vue'
import StickLine from '@/components/StickLine.vue'
const { coupons } = await axios.get<any, {coupons: any}>('/api/coupons')

</script>

<template>
  <div class="panel">
    <div class="part-1">
      <StickLine main="微信支付优惠券" secondary="'微信支付自动抵扣'" />
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
    <div class="part-2">
      <StickLine main="商户优惠券" secondary="'请向收银员出示使用优惠券'" />
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.panel
    background #F7F7F7
    border-top-right-radius  25px
    border-top-left-radius 25px
    padding 20px 10px
    overflow auto

</style>
