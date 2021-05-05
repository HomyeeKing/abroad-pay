<template>
  <header class="header">
  </header>
  <main class="main">
    <Home />
  </main>
  <footer class="footer">
    <Pay v-if="!isBottom" />
  </footer>
</template>

<script lang="ts" setup>
import Home from '@/views/Home.vue'
import Pay from '@/components/Pay.vue'
import { ref } from '@vue/reactivity'
import throttle from 'lodash.throttle'
const html = document.documentElement
const isBottom = ref(false)
const calcScroll = () => {
  isBottom.value = html.scrollHeight - html.scrollTop <= html.clientHeight + 100
}

document.addEventListener('scroll', throttle(calcScroll))
</script>
