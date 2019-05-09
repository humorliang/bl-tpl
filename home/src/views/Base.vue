/* eslint-disable */
<template>
<div id="app">
    <header>
        <div id="nav">
            <Nav msg="nav" :navData="navData"></Nav>
        </div>
    </header>
    <div id="content">
        <Row>
            <!-- 当屏幕再小的时候就会换行，如果不设置比例 -->
            <Col :md="16" :lg="18">
            <router-view />
            </Col>
            <Col :md="8" :lg="6">
            <RightSider :rightSliderData="rightSliderData"></RightSider>
            </Col>
        </Row>
    </div>
    <div id="footer" style="text-align:center">
        <p> 版权所有：© 201７-2019 liangcode.cn</p>
        <p> 本站前端采用vue + ivew框架,后端GO + Gin，托管在阿里云</p>
        <p> 联系邮箱：humorliang@163.com</p>
    </div>
</div>
</template>

<script>
import RightSider from "@/components/RightSider.vue";
import Nav from "@/components/Nav.vue";
export default {
    data() {
        return {
            navData: [],
            rightSliderData: {
                terms: {
                    title: "文章分类",
                    list: []
                },
                notes: {
                    title: "趣事一则",
                    content: ""
                },
                concat: {
                    title: "来聊骚",
                    content: ""
                }
            }
        }
    },
    // 组件注册
    components: {
        RightSider,
        Nav
    },
    created() {
        let _this = this
        //获取分类
        this.axios.get("/api/v1/admin/auth/terms").then(function (res) {
            // console.log(res);
            if (res.data.code == 0) {
                _this.rightSliderData.terms.list = res.data.data
            } else {}
        })
        //获取趣事
        this.axios.get("/api/v1/home/fun").then(function (res) {
            // console.log(res);
            if (res.data.code == 0) {
                _this.rightSliderData.notes.content = res.data.data.content
            } else {}
        })
        //联系
        this.axios.get("/api/v1/home/concat").then(function (res) {
            // console.log(res);
            if (res.data.code == 0) {
                _this.rightSliderData.concat.content = res.data.data.content
            } else {}
        })
        //菜单导航
        this.axios.get("/api/v1/home/navs").then(function (res) {
            console.log(res);
            if (res.data.code == 0) {
                _this.navData = res.data.data
            } else {}
        })
    }
};
</script>

<style lang="stylus">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
