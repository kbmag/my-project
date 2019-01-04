<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppFooter from './components/Footer'
  export default {
    name: 'app',
    components:{
      AppFooter,
    },
    computed:{

    },
    data(){
      return{

      }
    }
  }
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
#app {
  height: 100%;
}
body {
  background-color: #fbf9fe;
}
</style>
