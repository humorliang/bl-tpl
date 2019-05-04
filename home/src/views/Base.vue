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
    <div id="footer">底部</div>
</div>
</template>

<script>
import RightSider from "@/components/RightSider.vue";
import Nav from "@/components/Nav.vue";
export default {
    data() {
        return {
            navData: [{
                    name: "首页",
                    path: "/",
                    son: []
                },
                {
                    name: "文章分类",
                    path: "/list",
                    son: [{
                            name: "分类1",
                            path: "/list/kind/1"
                        },
                        {
                            name: "分类2",
                            path: "/list/kind/2"
                        },
                        {
                            name: "分类3",
                            path: "/list/kind/3"
                        }
                    ]
                },
                {
                    name: "留言",
                    path: "/levcots",
                    son: []
                },
                {
                    name: "关于",
                    path: "/about",
                    son: []
                }
            ],
            rightSliderData: {
                slider_jitang: {
                    title: "标题一",
                    content: "这是侧边栏的内容好像有一点low，这个是真的很low,一个苦逼的程序员，其实吧不能说是苦逼，但是呢又不想敲代码，真的么有意思"
                },
                slider_jiaoliu: {
                    title: "标题二",
                    content: "这是侧边栏的内容好像有一点low，这个是真的很low,一个苦逼的程序员，其实吧不能说是苦逼，但是呢又不想敲代码，真的么有意思"
                },
                slider_adv: {
                    title: "标题三",
                    content: "这是侧边栏的内容好像有一点low，这个是真的很low,一个苦逼的程序员，其实吧不能说是苦逼，但是呢又不想敲代码，真的么有意思"
                }
            }
        }
    },
    // 组件注册
    components: {
        RightSider,
        Nav
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
