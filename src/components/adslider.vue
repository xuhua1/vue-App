<template>
    <article :class="$style.wrapper">
      <Slider :items="items" :cname="$style.slider"></Slider>
    </article>
  </template>
<script>
  import Slider from '../assets/js/swiper.vue';
  export default {
    components:{
      Slider,
    },
    data(){
      return{
        items:[ 
          {id:"1",href:"home",alt:"title1", src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/19037/8/10380/37518/5c862ba2Ec8e629f7/6c4f8c721cf210d8.jpg?width=750&height=320"},
          {id:"2",href:"home",alt:"title2", src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg?width=750&height=320"},
          {id:"3",href:"home",alt:"title3", src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/28576/40/10399/139307/5c862bc6E022a873e/c50fcefa58db30ce.jpg?width=750&height=320"},
        ]
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" module>
  @import '../assets/css/px2rem';
  .wrapper{
    padding:0;
  }
  .slider{
    margin: 20px 0;
  }
  .slider img{
    height:px2rem(272);
    width:px2rem(640);
  }
</style>