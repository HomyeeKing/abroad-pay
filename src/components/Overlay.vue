<script lang='ts' setup>
import axios from '@/axios'
import { ref } from 'vue'
import CouponCard from '@/components/CouponCard.vue'
const show = ref(true)
const { coupons } = await axios.get<any, {coupons: any[]}>('/api/freeCoupons')
const curIndex = ref(0)
const curItem = ref(coupons[curIndex.value])

const overlayClick = () => {
  if (curIndex.value === coupons.length - 1)
    show.value = false
}
</script>

<template>
  <van-overlay
    :show="show"
    class="text-center text-white px-2"
    @click="overlayClick"
  >
    <h3 class="mt-1">
      恭喜你获得：
    </h3>
    <coupon-card
      :name="curItem.name"
      :type="curItem.type"
      :left-part="{icon:curItem.icon,threshold:curItem.threshold,icontip:curItem.icontip,discount:curItem.discount}"
    />
    <van-button v-if="curIndex < coupons.length -1" color="#00C250" @click.stop="curIndex++">
      领取下一张
    </van-button>
  </van-overlay>
</template>
