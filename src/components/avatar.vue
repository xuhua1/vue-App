<template>
    <div :class="$style.wrapper">
      <img :src="src" alt=""/>
    </div>
</template>
<script>
  export default {
    props:{
      src:{
        type:String,
        default:"//upload.jianshu.io/users/upload_avatars/5321383/b4baf8a3-42b3-4039-bc9c-a6471b82d75a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120",
      },
      link:{
        type:String,
        default:"",
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" module>
  @import '../assets/css/px2rem';
  .wrapper img{
    width:px2rem(80);
    height:px2rem(80);
    border-radius: px2rem(40);
  }
</style>