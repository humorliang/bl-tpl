<template>
<div class="home" style="margin:10px 0 0 20px;">
    <h2 style="color:green;text-align:left;padding:20px;">热门推荐</h2>
    <!-- //向子组件传递数据 -->
    <Item :plist="plist"></Item>
</div>
</template>

<script>
// @ is an alias to /src
import Item from '@/components/Item.vue';
export default {
    data() {
        return {
            plist: []
        }
    },
    name: 'home',
    components: {
        Item
    },
    created: function () {
        let _this=this
        //获取最新文章
        this.axios.get('/api/v1/home/posts/date')
            .then(function (res) {
                if (res.status == 200 && res.data.code == 0) {
                    _this.plist=res.data.data
                } else {
                    
                }
            })
    },
}
</script>

<style lang="stylus" scoped>

</style>
