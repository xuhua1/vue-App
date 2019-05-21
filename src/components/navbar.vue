<template>
    <ul :class="$style.wrapper">
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/cheat">聊天</router-link></li>
      <li><router-link to="/user">个人界面</router-link></li>
    </ul>
</template>
<script>
  export default {
  }
</script>
<style lang="scss" rel="stylesheet/scss" module>
  @import '../assets/css/px2rem';
  .wrapper{
    width:px2rem(640);
    height:px2rem(100);
    position: fixed;
    bottom:0;
    left:0;
    right:0;
    display:flex;
    align-items: center;
    justify-content: space-around;
    li{
      width:px2rem(200);
      text-align: center;
      line-height: px2rem(100);
      a{
        text-decoration: none;
        color:gray;
      }
    }
  }
</style>