<template>
  <div class="my" style="height: 100%">
    <view-box ref="viewBox" body-padding-top="46px">
      <x-header slot="header" :left-options="{backText: ''}">个人中心</x-header>
      <div class="my-content">
        <div class="header-img">
          <blur :blur-amount=40 :url="url" style="height:180px;">
            <p class="center"><img :src="url"></p>
            <p class="border-name">我是谁</p>
          </blur>
        </div>
        <div class="listTab">
          <div class="line-bottom">
            <div class="list-item" v-for="(list,key) in lists" :key="key">
              <img :src="list.list_img_url" alt="image">
              <p>{{list.name}}</p>
            </div>
          </div>
        </div>
        <div>
          <group class="my-bottom-list">
            <cell-box is-link class="my-bottom-item" v-for="(item,key) in items" :key="key">
              <img :src="item.img_url" class="my-item-img" alt="image">
              {{item.name}}
            </cell-box>
          </group>
        </div>
      </div>
    </view-box>
  </div>
</template>

<script>
  import {XHeader,Blur,Group,CellBox,ViewBox,} from 'vux'
  export default {
    name: "my",
    components:{
      ViewBox,
      XHeader,
      Blur,
      Group,
      CellBox,
    },
    data(){
      return{
        url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
        lists:[],
        items:[],
      }
    },
    mounted() {
      this.getListTab();
      this.getBottomlist();
    },
    methods:{
      getListTab(){
        this.$axios.get("https://www.easy-mock.com/mock/5b879fc4e350f14b31982d89/api/v1/my/list_tab").then(res=>{
          // console.log(res.data);
          this.lists = res.data.data.mylist;
        });
      },
      getBottomlist(){
        this.$axios.get("https://www.easy-mock.com/mock/5b879fc4e350f14b31982d89/api/v1/my/bottom_list").then(res=>{
          // console.log(res.data);
          this.items = res.data.data.blist;
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
    background: #ffcc33;
  }
  .vux-header /deep/ .vux-header-left .left-arrow:before{
    border: 1px solid #fff;
    border-width: 1px 0 0 1px;
  }
  .my-content{
    .header-img{
      .center {
        text-align: center;
        padding-top: 20px;
        color: #fff;
        font-size:14px;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
      }
      .border-name{
        text-align: center;
        color:#fff;
      }
    }
    .listTab{
      margin: 10px 0;
      .line-bottom{
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        .list-item{
          width: 20%;
          text-align: center;
          padding: 8px 0;
          img{
            width: 35px;
            height: 35px;
            vertical-align: bottom;
          }
          p{
            font-size: 13px;
            color: #333;
          }
        }
      }
    }
    .my-bottom-list{
      margin-top: -10px;
      .my-bottom-item{
        font-size: 14px;
        .my-item-img{
          width: 28px;
          height: 28px;
          margin-right: 8px;
        }
      }
    }
  }
</style>
