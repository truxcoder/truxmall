<!-- 组件说明 -->
<template>
  <div class='detail'>
    <detail-nav-bar/>
    <div class="detailContent">
      <scroll ref="scroll" class="scroll">
        <detail-swiper :topImages="topImages"/>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-goods-info :goods="goodsInfo" @detail_image_load="imageLoad"/>
      </scroll>
    </div>
  </div>
</template>

<script>
  //import x from ''
  import DetailNavBar from './DetailNavBar'
  import DetailSwiper from "./DetailSwiper"
  import DetailBaseInfo from './DetailBaseInfo'
  import DetailShopInfo from './DetailShopInfo'
  import DetailGoodsInfo from './DetailGoodsInfo'

  import Scroll from 'components/common/scroll/Scroll'
  import {mixin} from 'common/mixin'
  import { getDetailData,Goods,Shop } from "network/detail"
  export default {
    name:'Detail',
    mixins:[mixin],
    components: {
      DetailNavBar,DetailSwiper,DetailBaseInfo,DetailShopInfo,DetailGoodsInfo,Scroll
    },
    data () {
      return {
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        goodsInfo:{}
      }
    },
    created(){   
      this.iid= this.$route.params.iid
      this.getData()
    },
    computed: {

    },
    methods: {
      getData(){
        getDetailData(this.iid).then(res => {
          console.log(res)
          this.topImages = res.result.itemInfo.topImages
          this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
          this.shop = new Shop(res.result.shopInfo)
          this.goodsInfo = res.result.detailInfo.detailImage[0]
        })
      },
      imageLoad(){
        //监听图片加载完成，调用防抖函数，运用混入（mixin）中定义的scrollRefresh。
        //下边是直接调用scroll的refresh方法，可对比两者调用的次数。
        this.scrollRefresh()
        // this.$refs.scroll.refresh()
      }
    },
  }
</script>

<style scoped>
.detail {
  height: 100vh; 
  position: relative;
  background-color: #fff; 
  z-index: 1;
}
.detailContent {height:calc(100vh - 44px); background-color: #fff; position: relative;}
/* .detailContent {height:500px; overflow: hidden;} */
.scroll { height: 100%;}

</style>