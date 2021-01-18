<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" :key='item' @click="itemClick(index)" :class="{active:index === currentindex}">
        <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      currentindex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default() {
        return []
      }
    }
  },
  methods:{
    itemClick(index){
      this.currentindex = index
      this.$emit('typeclick',index)
    }
  }

}
</script>

<style scoped>
.tab-control {
  display: flex; 
  text-align: center; 
  font-size: 15px;
  height: 40px; 
  line-height: 40px; 
  background-color: #fff;
  z-index: 9;
  }
.tab-control div{ flex: 1;}
.active {color: var(--color-high-text)}
.active span { padding: 5px; border-bottom: 2px solid var(--color-high-text);}
</style>
