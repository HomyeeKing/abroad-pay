<script lang='ts' setup>
import { defineProps } from '@vue/runtime-core'

defineProps({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
})
</script>

<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath id="cut-off-left">
        <circle :cx="x" :cy="y" r="10" />
      </clipPath>
    </defs>
  </svg>
</template>
