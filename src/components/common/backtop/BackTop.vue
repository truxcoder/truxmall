<!-- 组件说明 -->
<template>
  <div class='back-top'>
    <img src="~assets/img/common/top.png" alt="" @click="backClick">
  </div>
</template>

<script>
  //import x from ''
  export default {
    methods: {
      backClick(){
        this.$emit('backclick')
      }
    },
  }
</script>

<style scoped>
.back-top img{ position: fixed; right: 10px;bottom: 55px; width: 40px; height: 40px;}
</style>