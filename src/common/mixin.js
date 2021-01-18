import {debounce} from './utils'
export const mixin = {
  data(){
    return {
      scrollRefresh:null
    }
  },
  mounted(){
    this.scrollRefresh = debounce(this.$refs.scroll.refresh,500)
  }
}