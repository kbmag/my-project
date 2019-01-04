<template>
   <div class="detail" style="height: 100%;">
     <view-box ref="viewBox" body-padding-top="46px">
       <x-header slot="header" :left-options="{backText: ''}">商品详情</x-header>
       <div class="detail-main" v-if="product">
         <div class="detail-img">
           <img :src="product.main_img_url" alt="image">
         </div>
         <div style="text-align: center;">{{product.name}}</div>
       </div>
     </view-box>
   </div>
</template>

<script>
  import {XHeader,ViewBox,Swiper,SwiperItem,} from 'vux'
  export default {
    name: "detail",
    components:{
      XHeader,
      ViewBox,
      Swiper,
      SwiperItem
    },
    data(){
      return{
        product:null,
        index:0,
      }
    },
    mounted(){
      this.getALLProducts();
    },
    methods:{
      getALLProducts(){
        this.$axios.get("https://www.easy-mock.com/mock/5b879fc4e350f14b31982d89/api/v1/product/all").then(res=>{
          let detailData = res.data.data.filter(item => {
            return item.id === +this.$route.query.id
          });
          this.product = detailData[0]
        });
      },
    }
  }
</script>

<style scoped lang="less">
  .vux-header{
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 100;
    background: #ffcc33;
  }
  .vux-header /deep/ .vux-header-left .left-arrow:before{
    border: 1px solid #fff;
    border-width: 1px 0 0 1px;
  }
  .detail{
    .detail-main{
      .detail-img{
        width: 100%;
        height: 200px;
        img{
          width:100%;
          height: 100%;
        }
      }
    }
  }
</style>
