<template>
  <section :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in items" :key="item.id">
        <router-link :to="{name:item.href}">
          <img :src="item.src" alt=""/>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  export default {
    props:{
      options:{
        type:Object,
        default(){
          return{
            autoplay: true,//自动滚动
            speed: 1000,
            loop:true,
            pagination:{
              el:".swiper-pagination"
            },
            notNextTick: false,
            effect : 'cube',
          }
        }
      },
      items:{
        type:Array,
        default(){
          return [];
        }
      },
      cname:{
        type:String,
        default:'',
      }
    },
    components:{
      swiper,
      swiperSlide,
    },
    mounted() {
      console.log(this.items);
    },
  }
</script>
<style lang="css">
  @import "~swiper/dist/css/swiper.css";
</style>