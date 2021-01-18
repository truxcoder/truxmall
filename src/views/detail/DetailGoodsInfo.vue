<!-- 组件说明 -->
<template>
  <div class='goodsInfo'>
    <img v-for="(image,index) in goods.list" :src="image" :key="index" @load="detailImageLoad">    
  </div>
</template>

<script>
  //import x from ''
  export default {
    name: "DetailGoodsInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data () {
      return {

      };
    },
    computed: {

    },
    methods: {
      detailImageLoad(){
        this.$emit('detail_image_load')
      }
    },
  }
</script>

<style scoped>
.goodsInfo{
  text-align: center;
}
.goodsInfo img{
  display: inline-block;
  height: auto;
  max-width: 98%;
}
</style>