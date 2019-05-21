<template lang="html" >
<div :class="$style.wrapper">
  <ul :class="$style.messageWrapper">
    <li v-for="mes in mesList" :key="mes.id" >
      <div :class="mes.fromId===id?$style.left:$style.right">
      <Avatar :class="$style.avatar"></Avatar>
      <div :class="$style.message">
        <div :class="$style.mes">
        <div :class="$style.angle"></div>
        <div :class="$style.angleborder"></div>
        <div>{{mes.message}}</div>
        </div>
      </div>
      </div>
    </li>
  </ul>
  <div :class="$style.msgInput">
    <textarea v-model="msgInput">
    </textarea>
    <div :class="$style.send" @click="sendMes">发送</div>
  </div>
  </div>
  </template>
  <script>
  import Avatar from '../components/avatar.vue';
    
    export default {
      pros:[],
      components:{
        Avatar,
      },
      data(){
        return {
          id:"1",
          msgInput:"",
          mesList:[
            {id:'1', message:"1231",fromId:"2"},
            {id:'2', message:"1222222222223",fromId:"1"},
          ]
        }
      },
      methods: {
        sendMes(){
          console.log(this.msgInput);
        }
      },
    }
  </script>
  <style lang="scss" module>
    @import '../assets/css/px2rem';
    .messageWrapper{
      width:100%;
      margin-bottom:px2rem(200);
      li{
        overflow: hidden;
        margin: px2rem(20) 0;
      }
      .left{
        display:flex;
        width:100%;
        color:black;
        position: relative;
        .avatar{
          position: absolute;
          left:0;
        }
        .message{
          position: relative;
          left:px2rem(140);
          width: px2rem(360);
          word-wrap: break-word;
          .mes{
            float:left;
            max-width: px2rem(360);
            background: grey;
            border: px2rem(2) solid purple;
            padding: px2rem(20);
            line-height: px2rem(80);
            box-sizing: border-box;
            .angle{
              position: absolute;
              left:px2rem(-40);
              top: 0;
              border-top: px2rem(20) solid transparent;
              border-right: px2rem(40) solid purple;
              border-bottom: px2rem(60) solid transparent;;
              border-left:0;
              height:0;
              width:0;
            }
            .angleborder{
              position: absolute;
              left:px2rem(-37);
              top: 0;
              border-top: px2rem(20) solid transparent;
              border-right: px2rem(40) solid grey;
              border-bottom: px2rem(58) solid transparent;;
              border-left:0;
              height:0;
              width:0;
            }
          }
        }
      }
      .right{
        display:flex;
        width:100%;
        color:black;
        position: relative;
        .avatar{
          position: absolute;
          right:0;
        }
        .message{
          position: relative;
          left:px2rem(140);
          width: px2rem(360);
          word-wrap: break-word;
          .mes{
            float:right;
            max-width: px2rem(360);
            background: white;
            padding:px2rem(20);
            box-sizing: border-box;
            line-height: px2rem(80);
            border: px2rem(1) solid purple;
            .angle{
              position: absolute;
              right:px2rem(-40);
              top: 0;
              border-top: px2rem(20) solid transparent;
              border-left: px2rem(40) solid purple;
              border-bottom: px2rem(60) solid transparent;;
              border-right:0;
              height:0;
              width:0;
            }
            .angleborder{
              position: absolute;
              right:px2rem(-39);
              top: 0;
              border-top: px2rem(21) solid transparent;
              border-left: px2rem(40) solid white;
              border-bottom: px2rem(58) solid transparent;;
              border-right:0;
              height:0;
              width:0;
            }
          }
        }
      }
    }
    .msgInput{
      font-size: px2rem(40);
      width:100%;
      box-sizing: border-box;
      padding:px2rem(20);
      position: fixed;
      bottom:0;
      left:0;
      right:0;
      background:white;
      display:flex;
      justify-content: space-around;
      align-items: center;
      textarea{
        font-size: px2rem(40);
        width:px2rem(400);
      }
      .send{
        height:px2rem(80);
        width:px2rem(160);
        text-align: center;
        line-height: px2rem(80);
        background:burlywood;
      }
    }
  </style>