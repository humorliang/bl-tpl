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
            plist: [{
                id: 1,
                title: "文章标题一",
                desc: "这是文章一的描述，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，",
                author: "三毛",
                label: {
                    id: 11,
                    name: "GO",
                },
            }, {
                id: 2,
                title: "文章标题二",
                desc: "这是文章二的描述，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，",
                author: "三毛",
                label: {
                    id: 11,
                    name: "GO",
                },
            }, {
                id: 3,
                title: "文章标题二",
                desc: "这是文章二的描述，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，",
                author: "三毛",
                label: {
                    id: 11,
                    name: "GO",
                },
            }, {
                id: 4,
                title: "文章标题二",
                desc: "这是文章二的描述，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，",
                author: "三毛",
                label: {
                    id: 11,
                    name: "GO",
                },
            }]
        }
    },
    name: 'home',
    components: {
        Item
    },
    created: function () {
        this.axios.get('/tag')
            .then(function (response) {
                // console.log(response);
            })
            .catch(function (error) {
                // console.log(error);
            });
    },
}
</script>

<style lang="stylus" scoped>

</style>
