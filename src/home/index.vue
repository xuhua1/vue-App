<template lang="html" >
    <div class="">
      <AdSlider></AdSlider>
      <BodySlider></BodySlider>
      <NavBar></NavBar>
    </div>
  </template>
  <script>
    import AdSlider from '../components/adslider.vue';
    import BodySlider from '../components/bodyslider.vue';
    import NavBar from '../components/navbar.vue';
    export default {
      pros:[],
      components:{
        AdSlider,
        BodySlider,
        NavBar
      },
      data(){
        return {
          
        }
      }
    }
  </script>