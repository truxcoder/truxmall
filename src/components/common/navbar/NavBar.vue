<!-- 组件说明 -->
<template>
  <div class='navbar'>
    <div class='left'><slot name="left"></slot></div>
    <div class='center'><slot name="center"></slot></div>
    <div class='right'><slot name="right"></slot></div>
  </div>
</template>

<script>
  //import x from ''
  export default {
    name:'NavBar',
    data () {
      return {

      };
    },
  }
</script>

<style scoped>
.navbar { display: flex; height: 44px; 
  line-height: 44px;  
  box-shadow:0 1px 1px rgba(100, 100, 100, .1); 
}
.left { width: 60px;}
.right { width: 60px;}
.center { flex: 1; text-align: center; }

</style>