<template>
  <button @click="test">
    test
  </button>
</template>

<script lang="ts" setup>
import axios from '@/axios'
import { Dialog } from 'vant'
const test = async() => {
  const res = await axios.get('/api/user')
  console.log(res)
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
