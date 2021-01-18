<!-- 组件说明 -->
<template>
  <swiper class="detail_swiper">
    <swiper-item v-for="(item,index) in topImages" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  //import x from ''
  import {Swiper,SwiperItem } from "components/common/swiper/index"
  export default {
    name: "DetailSwiper",
    components: {
      Swiper,SwiperItem
    },
    props: {
      topImages:{
        type:Array,
        default(){return []}
      }
    },
    data () {
      return {

      };
    },
    computed: {

    },
    methods: {

    },
  }
</script>

<style scoped>
.detail_swiper{
  height: 300px; overflow: hidden;
}
</style>