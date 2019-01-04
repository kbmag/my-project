<template>
  <div>
    <x-header
      slot="header"
      :left-options="{showBack: false}"
      :title="title"
      class="header"
    ></x-header>
  </div>
</template>

<script>
  import {XHeader} from 'vux'
  export default {
    components:{
      XHeader,
    },
    data(){
      return{
        title:'首页'
      }
    }
  }
</script>

<style scoped>
  .header{
    width:100%;
    position:absolute;
    left:0;
    z-index:100;
    background:green;
    position: fixed;
  }
</style>
