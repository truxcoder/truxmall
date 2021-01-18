<!-- 组件说明 -->
<template>
    <div class='tab-bar-item' @click="itemClick">
        <div v-if='!isActive'><slot name='itemicon'></slot></div>
        <div v-else><slot name='itemicon-active'></slot></div>
        <div :style='activeStyle'><slot name='itemtext'></slot></div>
    </div>
</template>

<script>
    //import x from ''
    export default {
        props:{
            link:String,
            activeColor:{
                type:String,
                default(){
                    return 'red'
                }
            }
        },
        computed: {
            isActive(){
                return this.$route.path.indexOf(this.link) != -1
            },
            activeStyle(){
                return this.isActive ? {color:this.activeColor} : {}
            }
        },
        methods: {
            itemClick(){
                this.$router.replace(this.link)
            }
        },
    }
</script>

<style scoped>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}
.tab-bar-item img {
    width:24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;

}
.active {
    color: red;
}
</style>