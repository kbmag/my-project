<template>
  <div class="sort" style="height: 100%;">
    <x-header :left-options="{backText: ''}" style="background: #ffcc33;">分类</x-header>
      <div class="sort-content">
        <div class="nav-left">
          <ul>
            <li v-for="(item,index) in menu"
                :key="index" :class="[currentIndex === index?'active':'']" @click="switchCategory(index,item.id)">
                {{item.name}}
            </li>
          </ul>
        </div>
        <div class="list-right">
          <div class="sort-list">
            <div class="sort-goods-items" v-for="(item,index) in list" :key="index">
              <img :src="item.main_img_url" alt="image" class="goods-image">
              <div class="goods-name">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import {XHeader} from 'vux'
  export default {
    name: "sort",
    components:{
      XHeader,
    },
    data(){
      return{
        menu: [],
        list:[],
        currentIndex: 0
      }
    },
    created() {
      this.getSort();
    },
    methods:{
      switchCategory(index,id){
        this.currentIndex = index;
        this.getProduct(id)
      },
      getSort(){
        this.$axios.get("https://easy-mock.com/mock/5b879fc4e350f14b31982d89/api/v1/sort/all").then(res=>{
          // console.log(res.data);
          this.menu = res.data.data.sort;
          this.getProduct(this.menu[0].id)
        });
      },
      getProduct(id){
        this.$axios.get("https://easy-mock.com/mock/5b879fc4e350f14b31982d89/api/v1/product/by_sort",{params:{id:id}}).then(res=>{
          // console.log(res.data);
          this.list = res.data.data.list;
        });
      }
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
  }
  .vux-header /deep/ .vux-header-left .left-arrow:before{
    border: 1px solid #fff;
    border-width: 1px 0 0 1px;
  }
  .sort-content{
    display: flex;
    height: 100%;
    overflow: hidden;
    padding-top: 46px;
    background: #fff;
    .nav-left{
      padding-right: 15px;
      ul{
        width: 84px;
        flex: 0 0 84px;
        height: 100%;
        background: #f4f4f4;
        overflow-y: scroll;
        box-sizing: border-box;
        list-style: none;
        li{
          padding:15px 0;
          text-align: center;
          font-size: 14px;
          color: #333;
          height:50px;
          box-sizing: border-box;
        }
        .active{
          color: #ffcc33;
          border-left:3px solid #ffcc33;
          background: #fff;
          box-sizing: border-box;
        }
      }

    }
    .list-right{
      flex: 1;
      padding:20px;
      .sort-list{
        display: flex;
        flex-wrap: wrap;
        .sort-goods-items{
          text-align: center;
          width:24%;
          margin-right:10%;
          margin-bottom: 10px;
          &:nth-child(3n){
            margin-right: 0;
          }
          .goods-image{
            display: block;
            width:100%;
            height: auto;
          }
          .goods-name{
            color: #808080;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
