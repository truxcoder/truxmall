<template>
  <div id="home">
    <nav-bar class='home-nav'><span slot='center'>购物街</span></nav-bar>
    <!-- 这里为了解决tab-control的吸顶效果，用了一个碍眼法，在scroll外边也复制了一份，等里边那个被nav-bar盖住时，这一份显示 -->
    <tab-control class="tab-control" 
    :titles="['流行','新款','精选']" 
    @typeclick="changeGoods"
    v-show="isTabControlShow" 
    ref='tab_control1'/>
    <scroll class= "scroll-zone" ref="scroll" 
    :probe-type='3' 
    :pull-up-load ='true'
    @pullingUp="loadMore" 
    @get_scroll_position="changeTopStatus">
      <home-swiper :banners="banner" @swiper_image_load="swiperImageLoad"/>
      <home-recommend :recommends="recommend"></home-recommend>
      <home-popular/>
      <tab-control :titles="['流行','新款','精选']" @typeclick="changeGoods" ref='tab_control2'/>
      <goods-list :goods-list="showGoods"/>
    </scroll>
    <back-top @backclick="backTop" v-show='isTopShow'/>
  </div>
  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/common/backtop/BackTop'
import TabControl from 'components/content/TabControl'
import GoodsList from 'components/content/goodslist/GoodsList'

import HomeSwiper from './HomeSwiper'
import HomeRecommend from './HomeRecommend'
import HomePopular from './HomePopular'

import {getHomeMultidata,getHomeGoodsdata} from 'network/home'
import {debounce} from 'common/utils'


export default {
  name: 'Home',
  data(){
    return {
      banner:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isTopShow:false,
      tabOffsetTop:0,
      isTabControlShow:false
    }
  },
  components: {
    NavBar,HomeSwiper,HomeRecommend,HomePopular,TabControl,GoodsList,Scroll,BackTop
  },
  created() {
    this.getMultidata()
    this.getGoodsdata('pop')
    this.getGoodsdata('new')
    this.getGoodsdata('sell')
  },
  mounted() {
     //监听item中图片加载完成，调用防抖函数，把刷新方法传进去。
    const refresh = debounce(this.$refs.scroll.refresh,500)
    this.$bus.$on('itemImageLoad',() => {
      refresh()
    })


  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods: {

    backTop(){
      this.$refs.scroll.scrollTo(0,0)
    },
    changeTopStatus(position){
      this.isTopShow = (-position.y) > 1000
      //如果下边的tab-control上滑到一定位置，将上边的tab-control控制v-show的变量更改为true。
      this.isTabControlShow = (-position.y) > this.tabOffsetTop
    },
    loadMore(){
      this.getGoodsdata(this.currentType)
      this.$refs.scroll.finishPullUp()
    },

    //Swiper图片加载完成，计算tab-control的offsetTop
    swiperImageLoad(){
      // this.tabOffsetTop = this.$refs.tab-control2
      console.log(this.$refs.tab_control2.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tab_control2.$el.offsetTop
    },
    /* 
    数据请求相关
    */
    getMultidata(){
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    getGoodsdata(type){
      let page = this.goods[type].page+1
      getHomeGoodsdata(type,page).then(
        res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page = page
        })
    },
    changeGoods(index){
      this.currentType=Object.keys(this.goods)[index]
      //为了解决两个top_control点击商品类别时，状态不一致问题
      this.$refs.tab_control2.currentindex = index
      this.$refs.tab_control1.currentindex = index
    }
  },
}
</script>

<style scoped>
  #home {padding-top: 44px; margin-top: 0;height: 100vh;
    position: relative;}
  .home-nav { background-color: var(--color-tint); position: fixed; top:0; left: 0; right: 0; z-index: 9; color: #fff;}
  /* .tab-control {position: sticky; top:44px} 仅在原生有用，在better-scroll下不起作用*/
  .tab-control { position: relative; z-index: 9;}
    .scroll-zone {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

</style>
