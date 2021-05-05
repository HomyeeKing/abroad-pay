<script lang='ts' setup>
import axios from '@/axios'
import { ref, watch } from 'vue'
import CouponCard from '@/components/CouponCard.vue'
const show = ref(true)
const { coupons } = await axios.get<any, {coupons: any[]}>('/api/freeCoupons')
const curIndex = ref(0)
const curItem = ref(coupons[curIndex.value])
watch(curIndex, (val) => {
  curItem.value = coupons[val]
})
const overlayClick = () => {
  if (curIndex.value === coupons.length - 1)
    show.value = false
}
</script>

<template>
  <van-overlay
    :show="show"
    class="d-flex flex-column justify-center align-center text-white"
    @click="overlayClick"
  >
    <h3 class="mt-1">
      恭喜你获得：
    </h3>
    <coupon-card
      :name="curItem.name"
      :type="curItem.type"
      style="width:238px;margin:50px 0"
      :card-style="{background: '#00C250'}"
      :left-part="{icon:curItem.icon,threshold:curItem.threshold,icontip:curItem.icontip,discount:curItem.discount}"
    />
    <van-button
      v-if="curIndex < coupons.length -1"
      style="width:238px"
      color="#00C250"
      @click.stop="curIndex++"
    >
      领取下一张
    </van-button>
  </van-overlay>
</template>
