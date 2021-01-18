<!-- 组件说明 -->
<template>
  <div ref='wrapper'>
    <div>
      <slot></slot>
    </div>   
  </div>
</template>

<script>
  //import x from ''
  import BScroll from 'better-scroll'

  export default {
    name:"Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {
        scroll:null
      }
    },
    mounted(){
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      // 2.监听滚动的位置
      if (this.probeType ===2 || this.probeType ===3){
        this.scroll.on('scroll', (position) => {
          this.$emit('get_scroll_position', position)
        })
      }
      // 3.监听上拉事件
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      scrollTo(x,y,time=300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
        console.log('Scroll.vue:Scroll组件中的refresh被调用');
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
/* .wrapper {height: 300px; overflow: hidden;} */
/* .content {height: 100%;} */
</style>