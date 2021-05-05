<script lang='ts' setup>
import axios from '@/axios'
import CouponCard from '@/components/CouponCard.vue'
import StickLine from '@/components/StickLine.vue'
import More from '@/components/More.vue'

const { data: { coupons, merchantCoupons } } = await axios.get<any, {data: {coupons: any; merchantCoupons: any}}>('/api/coupons')

</script>

<template>
  <div class="panel">
    <div>
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
    <div>
      <StickLine main="商户优惠券" secondary="'请向收银员出示使用优惠券'" />
      <div class="container d-flex flex-wrap">
        <coupon-card
          v-for="item of merchantCoupons"
          :key="item"
          :name="item.name"
          :type="item.type"
          :left-part="{icon:item.icon,threshold:item.threshold,icontip:item.icontip,discount:item.discount}"
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
    </div>
    <More />
    <div class="placeholder text-center  mt-1">
      活动规则 | 联系客服
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.panel
    background #F7F7F7
    border-top-right-radius  25px
    border-top-left-radius 25px
    padding 20px 10px

.placeholder
    height 80px
    line-height @height
    opacity .6
</style>
