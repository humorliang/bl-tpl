<template>
<Menu mode="horizontal" active-name="1" style="margin-bottom:20px;padding-left:20%">
    <!--  <MenuItem name="1" to="/">首页</MenuItem>
    <MenuItem name="2" to="/post">极力推荐</MenuItem>
    <Submenu name="3">
        <template slot="title">文章分类</template>
        <MenuItem name="3-1" to="/list">Web前端</MenuItem>
        <MenuItem name="3-2" to="/list">Python</MenuItem>
        <MenuItem name="3-3" to="/list">Go系列</MenuItem>
    </Submenu>
    <MenuItem name="4" to="/levcots">
    留言板
    </MenuItem>
    <MenuItem name="5" to="/about">
    关于
    </MenuItem> -->
    <div v-for="(item,index) of navData" :key="index">
        <MenuItem :name="index+1" :to="item.path" v-if="item.son.length==0">
        {{item.name}}
        </MenuItem>
        <div v-if="item.son.length!=0">
            <Submenu :name="index+1">
                <template slot="title">{{item.name}}</template>
                <MenuItem :name="index+1+'-'+sindex" v-for="(sitem,sindex) of item.son" :key="index+1+'-'+sindex" :to="sitem.path">{{sitem.name}}</MenuItem>
            </Submenu>
        </div>
    </div>
</Menu>
</template>

<script>
export default {
    name: "Nav",
    props: ['navData']
}
</script>

<style lang="stylus">
</style>
