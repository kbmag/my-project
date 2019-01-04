<template>
  <div class="home">
    <view-box ref="viewBox">
      <swiper loop auto dots-position="center" :aspect-ratio="400/750" :duration="800">
        <swiper-item class="banner-item" v-for="(item, index) in imgList" :key="index">
          <img :src="item.img.url" alt="image">
        </swiper-item>
      </swiper>
      <div class="recent-products">
        <div class="products">
          <div class="products-item" v-for="(item,index) in productList" :key="index" :data-id="item.id" @click="linkToDetail">
            <img :src="item.main_img_url" class="products-img" alt="image">
            <div class="products-item-bottom">
              <p>{{item.name}}</p>
              <div class="products-ib-text">
                <span>￥{{item.price}}</span>
                <span>
                  <a href="javascript:;">购买</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </view-box>
  </div>
</template>

<script>
  import {Swiper,SwiperItem,ViewBox,} from 'vux'
  export default {
    name:'home',
    components:{
      Swiper,
      SwiperItem,
      ViewBox,
    },
    data(){
      return{
        imgList: [],
        productList:[],
      }
    },
    mounted(){
      this.getBanner();
      this.getProduct();
    },
    methods:{
      linkToDetail(e){
        let id = e.currentTarget.dataset.id;
        this.$router.push({ path: '/detail',query:{id:id}})
      },
      getBanner(){
        this.$axios.get("https://easy-mock.com/mock/5b879fc4e350f14b31982d89/api/v1/banner").then(res=>{
          // console.log(res.data);
          this.imgList = res.data.data.items
        });
      },
      getProduct(){
        this.$axios.get("https://easy-mock.com/mock/5b879fc4e350f14b31982d89/api/v1/product").then(res=>{
          // console.log(res.data);
          this.productList = res.data.data
        });
      }
    },
  }
</script>

<style scoped lang="less">
  .vux-slider /deep/ .vux-indicator a .vux-icon-dot{
    width: 14px;
    height:3px;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    background-color: #fff;
  }
  .vux-slider /deep/ .vux-indicator  a  .vux-icon-dot.active{
    background-color: #ffc800;
  }
  .home{
    .banner-item img{
      width: 100%;
      height:100%;
    }
    .recent-products{
      padding-top: 10px;
    }
    .products{
      margin: 0 8px 10px 8px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .products-item{
        width: 49%;
        margin-bottom:10px;
        background: #fff;
        color: #000;
        .products-img{
          width:100%;
          display: block;
        }
        .products-item-bottom{
          font-size: 14px;
          padding: 5px;
          p{
            height:40px;
            line-height: 20px;
          }
          .products-ib-text{
            color:#ff4242;
            height: 24px;
            line-height: 24px;
            padding: 5px 0px;
            span:last-child{
              float: right;
              a{
                color:#ff4242;
                border: 1px solid #ff4242;
                padding: 1px 4px;
              }
            }
          }
        }
      }
    }
  }
</style>
