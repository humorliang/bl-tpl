<template>
<div class="home">
    <el-container>
        <el-aside width="auto" id="home-aside">
            <div class="logo"></div>
            <el-row class="tac">
                <el-col :span="12">
                    <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="!isCollapse">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-setting"></i>
                                <span>系统设置</span>
                            </template>
                            <el-menu-item index="1-1">系统状态</el-menu-item>
                            <el-menu-item index="1-2">系统日志</el-menu-item>
                            <el-menu-item index="1-3">数据库操作</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-tickets"></i>
                                <span>文章管理</span>
                            </template>
                            <el-menu-item index="2-1" @click="toPostList">文章列表</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <i class="iconfont icon-user el-icon-user"></i>
                                <span>其他设置</span>
                            </template>
                            <el-menu-item index="3-1">友链管理</el-menu-item>
                            <el-menu-item index="3-2">广告管理</el-menu-item>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span>分类管理</span>
                            </template>
                            <el-menu-item index="4-1" @click="toKindList">分类列表</el-menu-item>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title">
                                <i class="el-icon-info"></i>
                                <span>登录日志</span>
                            </template>
                            <el-menu-item index="5-1">日志列表</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
        <el-container>
            <el-header class="cf" style="background-color:#269677;">
                <div class="dash-left cl" style="">
                    <el-switch v-model="isCollapse" active-color="#13ce66" inactive-color="#ff4949">
                    </el-switch>
                </div>
                <div class="dash-right cr">
                    <el-dropdown trigger="click">
                        <div class="admin-img">
                            <img src="@/assets/logo.png" alt="logo" srcset="">
                            <!-- <i class="el-icon-caret-bottom"></i> -->
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item>修改密码</el-dropdown-item>
                            <el-dropdown-item @click="loginout()">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: true,
        }
    },
    methods: {
        switchCollapse() {
            this.isCollapse = !this.isCollapse
        },
        toPostList() {
            this.$router.push({
                name: 'plist',
            })
        },
        toAddPost() {
            this.$router.push({
                name: 'padd',
            })
        },
        toKindList() {
            this.$router.push({
                name: 'terms',
            })
        },
        loginout() {
            this.$store.dispatch('logout')
            this.$router.push({
                path: 'login'
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.home {
    height 100%
}

.icon-user {
    vertical-align: middle;
    margin-right: 8px;
    width: 22px;
    text-align: center;
    font-size: 17px;
}

.cf {
    overflow: hidden;
}

.cl {
    float: left;
    margin-top: 15px;
    cursor: pointer;
}

.cr {
    float: right;
    cursor: pointer;
}

.admin-img {
    display: table-cell;
    height: 60px;
    vertical-align: middle;
}

.admin-img img {
    width: 50px;
    height: 50px;
    border-radius: 30%;
}

.admin-img i {
    color: rgb(41, 160, 91);
    font-size: 20px;
}

.el-container .el-container .el-header {
    border-bottom: 1px solid #ccc;
}

.logo {
    height: 50px;
    background: #545c64;
}

aside {
    width: auto;
}

.el-aside .el-menu {
    overflow: none;
}

.el-menu {
    border-color: #545c64;
}

.home>.el-container {
    height: 100%;
}

.home>.el-container>.el-aside {
    height: 100%;
    background: #545c64;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
