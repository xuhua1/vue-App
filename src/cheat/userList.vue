<template lang="html" >
  <div :class="$style.wrapper">
    <ul :class="$style.userWrapper">
      <li v-for="user in userList" :key="user.id">
        <router-link to="/dialog" :class="$style.userMes">
        <div :class="$style.nickname">{{user.nickname}}</div>
        <div v-if="user.unread" :class="$style.unread">{{user.unread}}</div>
        <div v-if="user.unsend" :class="$style.unsend">{{user.unsend}}</div>
        </router-link>
      </li>
    </ul>
    <NavBar></NavBar>
  </div>
</template>
<script>
  import NavBar from '../components/navbar.vue';
  export default {
    pros:[],
    components:{
      NavBar,
    },
    data(){
      return {
        userList:[
          {id:'1', nickname:"jack",unread:1111,unsend:2},
          {id:"2", nickname:"wangwu",unread:1,unsend:2},
          {id:"3", nickname:"李四",unread:1,unsend:2},
          {id:"4", nickname:"许哈",unread:1,unsend:2},
          {id:"5", nickname:"徐先生",unread:1,unsend:2},
          {id:"6", nickname:"盛汉",unread:1,unsend:2},
          {id:"7", nickname:"j记录",unread:1,unsend:2},
        ]
      }
    }
  }
</script>
<style lang="scss" module>
  @import '../assets/css/px2rem';
  .wrapper{
    .userWrapper{
      width:px2rem(640);
      .userMes{
        height:px2rem(100);
        text-decoration: none;
        color:black;
        display:flex;
        line-height: px2rem(100);
        padding-left: px2rem(100);
        border-bottom:px2rem(1) solid gray;
        .nickname{
          flex:4;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .unread{
          flex:1;
          text-align: center;
          color:red;;
        }
        .unsend{
          flex:1;
          color:green;
          text-align: center; 
        }
      }
    }
  }
</style>