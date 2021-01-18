<!-- 组件说明 -->
<template>
  <div>
    <tab-bar>
      <tab-bar-item link='/home'>
        <img slot="itemicon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="itemicon-active" src="~assets/img/tabbar/home_a.svg" alt="">
        <div slot="itemtext">首页</div>
      </tab-bar-item> 
      <tab-bar-item  link='/category'>
        <img slot="itemicon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="itemicon-active" src="~assets/img/tabbar/category_a.svg" alt="">
        <div slot="itemtext">分类</div>
      </tab-bar-item> 
      <tab-bar-item link='/cart'>
        <img slot="itemicon" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="itemicon-active" src="~assets/img/tabbar/cart_a.svg" alt="">
        <div slot="itemtext">购物车</div>
      </tab-bar-item> 
      <tab-bar-item link="/profile">
        <img slot="itemicon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="itemicon-active" src="~assets/img/tabbar/profile_a.svg" alt="">
        <div slot="itemtext">我的</div>
      </tab-bar-item> 
    </tab-bar>
  </div>
</template>

<script>
    //import x from ''
    import TabBar from 'components/common/tabbar/TabBar'
    import TabBarItem from 'components/common/tabbar/TabBarItem'
    export default {
        components: {
            TabBar,TabBarItem
        },
    }
</script>
