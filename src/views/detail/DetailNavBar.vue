<!-- 组件说明 -->
<template>
  <div class='detail_navbar'>
    <nav-bar>
      <div slot='left' class="nav_left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot='center' class="title_center">
        <div v-for='(item,index) in titles' class="title_item" :key='index' :class='{active:currentIndex===index}' @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  //import x from ''
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    data () {
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      };
    },
    computed: {

    },
    methods: {
      titleClick(index){
        this.currentIndex = index
      },
      backClick(){
        this.$router.back()
      }
    },
  }
</script>

<style scoped>
.detail_navbar{ position: relative; z-index: 9;background-color: #fff;}
.nav_left img {margin: 10px 0 0 10px;}
.title_center { font-size: 14px; display: flex;}
.title_item { flex:1}
.active {
  color: var(--color-high-text);
}
</style>