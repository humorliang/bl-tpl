<template>
<div id="list">
    <h2>
        <Breadcrumb>
            <BreadcrumbItem to="/" style="font-size:20px; color:green;">首页</BreadcrumbItem>
            <BreadcrumbItem style="font-size:20px; color:#AAA;">{{kind_name}}</BreadcrumbItem>
        </Breadcrumb>
    </h2>
    <!-- item项 -->
    <Item :plist="plist"></Item>
    <!--分页-->
    <div style="padding-top:20px">
        <Page :total="total" :page-size="page_size" @on-change="currentPage" prev-text="前推" next-text="后入" />
    </div>
</div>
</template>

<script>
import Item from "@/components/Item.vue";
export default {
    data() {
        return {
            plist: [{
                    id: 1,
                    title: "文章标题一",
                    desc: "这是文章一的描述，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，",
                    author: "三毛",
                    label:{
                        id:11,
                        name:"GO",
                    },
                },
                {
                    id: 2,
                    title: "文章标题二",
                    desc: "这是文章二的描述，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，",
                    author: "三毛",
                    label:{
                        id:11,
                        name:"GO",
                    },
                },
                {
                    id: 3,
                    title: "文章标题二",
                    desc: "这是文章二的描述，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，这是一大堆的废话，",
                    author: "三毛",
                    label:{
                        id:11,
                        name:"GO",
                    },
                }
            ],
            total: 3, //默认数据总数
            page_size: 2, //每页的数据条数
            current_Page: 1, //默认开始页面
            kind_name:"分类",
        };
    },
    components: {
        Item
    },
    created() {
        var id = this.$route.params.kind_id
        console.log(id)
    },
    methods: {
        currentPage: function (page) {
            console.log(page);
        }
    }
};
</script>

<style lang="stylus" scoped>
#list {
    margin: 20px 10px;
    padding: 10px;
}

#list {
    h2 {
        margin: 10px 0;
        padding-left: 20px;
        text-align: left;
    }
}
</style>
