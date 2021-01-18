<!-- 组件说明 -->
<template>
    <div>
        <div id='tab-bar'>
            <slot></slot>             
        </div>
    </div>
</template>

<script>
    //import x from ''
    export default {
        
    }
</script>

<style scoped>
#tab-bar {
    display:flex;
    background-color: #f2f2f2;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
    /* z-index: 100; */
}



</style>