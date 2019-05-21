<template>
  <article ontouchstart>
    <!--修改了swiper文件中的 //// e.preventDefault(); 问题https://github.com/surmon-china/vue-awesome-swiper/issues/423-->
    <section :class="$style.titleWrapper" @click="handleClick">
      <div :class="[$style.tit,selectId==2?$style.bg:'']" id="0" >文章</div>
      <div :class="[$style.tit,selectId==0?$style.bg:'']" id="1">问题</div>
      <div :class="[$style.tit,selectId==1?$style.bg:'']" id="2">文件</div>
    </section>
    <section :class="$style.mainWrapper">
      <swiper :options="mainoptions" ref="mainSwiper" :not-next-tick="mainoptions.notNextTick" >
        <swiper-slide v-for="item in items" :key="item.id">
          <div :class="$style.showWrapper">
            {{item.title}}
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </article>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  export default {
    components:{
      swiper,
      swiperSlide
    },
    data(){
      return{
        selectId:2,
        mainoptions:{
          initialSlide :2,
          loop:true,
          watchSlidesVisibility : true,
          effect : 'fade',
        },
        items:[ 
          {id:"1",href:"home",title:"问题", src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/19037/8/10380/37518/5c862ba2Ec8e629f7/6c4f8c721cf210d8.jpg?width=750&height=320"},
          {id:"2",href:"home",title:"文件", src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg?width=750&height=320"},
          {id:"3",href:"home",title:"文章", src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/28576/40/10399/139307/5c862bc6E022a873e/c50fcefa58db30ce.jpg?width=750&height=320"},
        ]
      }
    },
    computed:{
      mainSwiper(){
        return this.$refs.mainSwiper.swiper;
      },
    },
    mounted() {
      const mainSwiper = this.$refs.mainSwiper.swiper;
      const _that = this;
      mainSwiper.on("slideChangeTransitionStart",function(){
        console.log(this.realIndex);
        _that.selectId = this.realIndex;
      });
    },
    methods:{
      handleClick(e){
        this.mainSwiper.slideTo(parseInt(e.target.id,10), 1000, false)
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" module>
  @import '../assets/css/px2rem';
  @import "~swiper/dist/css/swiper.css";
  .titleWrapper{
    width:px2rem(640);
    height:px2rem(80);
    display:flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    .tit{
      width:px2rem(160);
      text-align: center;
      line-height: px2rem(80);
      padding: px2rem(20),0;
    }
    .bg_blue{
      background:blue;
      width:px2rem(160);
      height:px2rem(80);
      border-radius: px2rem(30);
      z-index: -1;
      position: absolute;
      left:0;
      top:0;
    }
    .bg{
      background: green;;
    }
    .bg2_blue{
      left:px2rem(-480);
    }
  }
  .mainWrapper{
    touch-action: none;
    .showWrapper{
      width:px2rem(640); 
      height:px2rem(100);
      background: red;
    }
  }

</style>