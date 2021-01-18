<!-- 组件说明 -->
<template>
  <div class='shopInfo'>
    <div class="shopLineOne">
      <span class="shopLogo"><img :src="shop.shopLogo" alt=""> </span>
      <span class="shopName">{{shop.name}}</span>
    </div>
    <div class="shopLineTwo">
      <span class="baseInfo">
        <span>
          <p class="weight">{{shop.cSells}}</p>
          <p>总销量</p>
        </span>
        <span>
          <p class="weight">{{shop.cGoods}}</p>
          <p>全部宝贝</p>
        </span>
      </span>
      <span class="lineZone"><div class="baseLine"></div></span>
      <span class="shopScore">
        <p v-for="(score,index) in shop.score" :key='index'>
          <span class="scoreName">{{score.name}}</span>
          <span class="scoreScore">{{score.score}}</span>
          <span v-if = "score.isBetter" class="isBetterHigh">高</span>
          <span v-else class="isBetterLow">低</span>
        </p>
      </span>
    </div>
    <div class="shopLineThree">
      <button>进店逛逛</button>
    </div>
  </div>
</template>

<script>
  //import x from ''
  export default {
    name: "DetailShopInfo",
    props:{
      shop:{
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

    },
  }
</script>

<style scoped>
.shopInfo {
  font-size: 12px;
  border-bottom: 5px solid #eee;
  border-top: 5px solid #eee;
}
.shopLineOne {
  display: flex;
  margin-top: 10px;
  padding-left: 10px;
}
.shopLogo { align-self:center;}
.shopLogo img{ width: 50px; height: 50px;}
.shopName {font-size: 18px;align-self:center; padding-left: 10px; }
.shopLineTwo {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}
.baseInfo {
  line-height: 20px;
  text-align: center;
  display: flex;
  align-self:center;
  justify-content: space-around;

}
.baseInfo p { margin: 0 10px;}
.weight {
  font-size: 14px;
  font-weight: bold;
}
.lineZone {text-align: center;align-self:center;}
.baseLine {border-right: 1px solid #CCC;width: 1px;height: 40px;}
.shopScore {line-height: 20px;align-self:center;}
.scoreName {margin-right: 10px;}
.scoreScore {display: inline-block; width: 30px;}
.isBetterHigh {color: white; background-color:orangered; right: 0;}
.isBetterLow {color: white; background-color: yellowgreen; right: 0;}
.shopLineThree {padding: 10px 0; text-align: center;}
.shopLineThree button {
  width: 120px;
  height: 30px;
  line-height: 30px;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: #999;
}
</style>