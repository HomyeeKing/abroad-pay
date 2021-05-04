<template>
  <header class="header">
  </header>
  <main class="main">
    <Home />
  </main>
  <footer class="footer">
    <!-- <div v-if="isBottom" class="text-gray text-center foo-content mt-1">
      活动规则 | 联系客服
    </div> -->

    <Pay v-if="!isBottom" />
  </footer>
</template>

<script lang="ts" setup>
import Home from '@/views/Home.vue'
import Pay from '@/components/Pay.vue'
import { ref } from '@vue/reactivity'
import throttle from 'lodash.throttle'
import { provide } from '@vue/runtime-core'

const html = document.documentElement
const isBottom = ref(false)
const calcScroll = () => {
  isBottom.value = html.scrollHeight - html.scrollTop <= html.clientHeight
  provide('isBottom', isBottom.value)
}

document.addEventListener('scroll', throttle(calcScroll))
</script>
