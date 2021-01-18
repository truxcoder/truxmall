<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goodsList" :goods-item="item" :key="'goodsitem'+index"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  props:{
    goodsList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }

}
</script>

<style scoped>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>