<template>
  <div id="Footer">
    <tabbar slot="bottom" style="position:fixed;background:#fff;" v-if="!isShowTabbar">
      <tabbar-item link="/home" :selected="$route.path=='/home'">
        <img slot="icon" src="../assets/home.png">
        <img slot="icon-active" src="../assets/home2.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item  link="/sort" :selected="$route.path=='/sort'">
        <img slot="icon" src="../assets/sort.png">
        <img slot="icon-active" src="../assets/sort2.png">
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item  link="/cart" :selected="$route.path=='/cart'">
        <img slot="icon" src="../assets/cart.png">
        <img slot="icon-active" src="../assets/cart2.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item  link="/my" :selected="$route.path=='/my'">
        <img slot="icon" src="../assets/my.png">
        <img slot="icon-active" src="../assets/my2.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {Tabbar,TabbarItem} from 'vux'
  export default {
    name:'Footer',
    components: {
      Tabbar,
      TabbarItem
    },
    computed:{
      isShowTabbar(){
        if (/detail/.test(this.$route.path)) {
          return true
        }
        return false
      }
    }
  }
</script>

<style>
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label span{
    color:#000;
  }
</style>
