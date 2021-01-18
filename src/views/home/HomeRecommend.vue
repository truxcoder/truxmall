<!-- 组件说明 -->
<template>
  <div class='recommend'>
    <div class="recommend-item" v-for="(item,index) in recommends" :key="'home_recd_item_index'+index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  //import x from ''
  export default {
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    },
  }
</script>

<style scoped>
.recommend { display: flex; width:100%; text-align: center; font-size: 14px; padding: 15px 0 30px; border-bottom: 8px solid #eee;}
.recommend-item { flex: 1;}
.recommend-item img { width: 90%; margin-bottom: 8px;}
</style>