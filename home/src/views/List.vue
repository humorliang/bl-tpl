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
            plist: [],
            total: 0, //默认数据总数
            page_size: 3, //每页的数据条数
            current_Page: 1, //默认开始页面
            kind_name: "分类",
            param_id: 1,
        };
    },
    components: {
        Item
    },
    created() {
        var id = this.$route.params.kind_id
        // console.log(id)　/api/v1/home/posts/term/
        this.param_id = id
        let _this = this
        //获取最新文章
        this.axios({
            method: 'get',
            url: "/api/v1/home/posts/term/" + id,
            params: {
                page_num: _this.current_Page,
                page_size: _this.page_size,
            }
        }).then(function (res) {
            if (res.status == 200 && res.data.code == 0) {
                _this.plist = res.data.data.posts
                _this.kind_name = res.data.data.posts[0].term_name
                _this.total = res.data.data.total
            } else {

            }
        })
    },
    methods: {
        currentPage: function (currentPage) {
            this.current_Page = currentPage
            let _this = this
            //获取最新文章
            this.axios({
                method: 'get',
                url: "/api/v1/home/posts/term/" + _this.param_id,
                params: {
                    page_num: _this.current_Page,
                    page_size: _this.page_size,
                }
            }).then(function (res) {
                if (res.status == 200 && res.data.code == 0) {
                    _this.plist = res.data.data.posts
                    _this.total = res.data.data.total
                } else {

                }
            })
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
