<script lang='ts' setup>
import logo from '@/assets/logo.png'
import Coupons from './Coupons.vue'
</script>

<template>
  <nav class="nav">
    <section class="section">
      <img :src="logo" class="avatar">
      <div class="d-inline-block">
        <p class="name-zh">
          屈臣氏
        </p>
        <small class="name-en">watsons</small>
      </div>
    </section>
  </nav>
  <Suspense>
    <Coupons />

    <template #fallback>
      <van-loading vertical>
        加载中...
      </van-loading>
    </template>
  </Suspense>
</template>

<style lang="stylus" scoped>
.nav
    height 100px

    .name-zh
       font-family: PingFangSC-Medium;
       font-size: 21px;
       color #fff
    .name-en
        opacity: 0.3;
        font-family: AppleSDGothicNeo-SemiBold;
        font-size: 17.5px;
        color #fff

.section
    height 100px
    margin-left 6.4%
    margin-top 6.6%
.avatar
    width 50px
    height 50px
    background: #15918C;
    border: 3px solid #FFB8B7;
    margin-right 2.5%

</style>
