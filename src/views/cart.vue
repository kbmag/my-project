<template>
  <div class="cart">
    <x-header :left-options="{backText: ''}" style="background: #ffcc33;">购物车</x-header>
    <div class="no-cart">
      <div class="no-cart-content">
        <img src="../assets/ico_13.png" alt="image">
        <p>你的购物车中没有商品哦!</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {XHeader} from 'vux'
  export default {
    name: "cart",
    components:{
      XHeader,
    },
  }
</script>

<style scoped lang="less">
  .vux-header /deep/ .vux-header-left .left-arrow:before{
    border: 1px solid #fff;
    border-width: 1px 0 0 1px;
  }
  .cart{
    .no-cart{
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding-top:80px;
      .no-cart-content{
        img{
          width:100px;
          height: 100px;
        }
        p{
          padding-top: 10px;
          font-size: 14px;
          color: #808080;
        }
      }
    }
  }
</style>
