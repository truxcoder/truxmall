<!-- 组件说明 -->
<template>
  <div class='baseInfo'>
    <div class="title">{{goods.title}}</div>
    <div class="priceInfo">
      <span class="price">{{goods.price}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="discount" :style="'background-color:'+goods.discountBgColor">{{goods.discountDesc}}</span>
    </div>
    <div class="threeInfo">
      <span>{{goods.salesVolume}}</span>
      <span>{{goods.favs}}</span>
      <span><img :src="goods.service1Icon" alt="">{{goods.service1Name}}</span>
    </div>  
    <div class="twoInfo">
      <span><img :src="goods.service2Icon" alt="">{{goods.service2Name}}</span>
      <span><img :src="goods.service3Icon" alt="">{{goods.service3Name}}</span>
    </div>  
  </div>
</template>

<script>
  //import x from ''
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },

    computed: {

    },
    methods: {

    },
  }
</script>

<style scoped>
.baseInfo {
  padding: 10px 5px;
  font-size: 12px;
}
.baseInfo img {
  width: 12px;
  height: 12px;
  position: relative;
  top:2px
}
.title {
  font-size: 14px;
}
.priceInfo{
  margin:10px 0;
  color: #aaa;
}
.price {
  font-size: 16px;
  font-weight: bold;
  color: var(--color-high-text);
}
.oldPrice {
  text-decoration: line-through;
  padding: 0 5px;
  
}
.discount {
  color: #fff;
  position: relative;
  bottom: 5px;
  line-height: 20px;
  padding: 2px 10px;
  border-radius: 8px;
}
.threeInfo {
  display: flex;
  justify-content: space-between;
  color: #aaa;
}
.twoInfo {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
}
.threeInfo span {}
</style>