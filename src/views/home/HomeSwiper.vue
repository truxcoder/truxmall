<!-- 组件说明 -->
<template>
  <swiper>
      <swiper-item v-for='(item,index) in banners' :key="'swiper_item_index_'+index">
        <a :href="item.link">
          <img :src="item.image" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
  //import x from ''
  import {Swiper,SwiperItem} from 'components/common/swiper/index'
  export default {
    components: {
      Swiper,SwiperItem
    },
    data(){
      return {
        isLoad:false
      }
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods: {
      imageLoad(){
        if(!this.isLoad){
          this.$emit('swiper_image_load')
          this.isLoad = true
        }
      }
    },
  }
</script>

<style scoped>

</style>