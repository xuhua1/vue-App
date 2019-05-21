<template lang="html" >
    <div :class="$style.wrapper">
      <div :class="$style.user">
        <Avatar :class="$style.avatar" v-if="isLogin"></Avatar> 
        <div :class="$style.login" v-if="!isLogin">登陆</div>
        <div :class="$style.login" v-if="isLogin">退出</div>
      </div>  
      <NavBar></NavBar>
    </div>
  </template>
  <script>
    import NavBar from '../components/navbar.vue';
    import Avatar from '../components/avatar.vue';
    export default {
      pros:[],
      components:{
        NavBar,
        Avatar,
      },
      data(){
        return {
          isLogin:true,
          nickname:"",
        }
      }
    }
  </script>
  <style lang="scss" module>
    @import '../assets/css/px2rem';
    .user{
      display:flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin-top: px2rem(200);
      height: px2rem(600);
      .avatar{
        text-align: center;
        img{
          width: px2rem(200);
          height:px2rem(200);
          border-radius: px2rem(100);
        }
      }
      .login{
        width: px2rem(400);
        height:px2rem(100);
        text-align: center;
        line-height: px2rem(100);
        background:cornflowerblue;
        border-radius: px2rem(20);
      }
    }
  </style>