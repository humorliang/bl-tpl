<template>
<div class="page-login">
    <el-form label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
            <el-input type="text" placeholder="账号" v-model="user_login"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input type="password" placeholder="密码" v-model="user_pass"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click="login()">登录</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            user_login: "",
            user_pass: "",
        };
    },
    mouted() {},
    methods: {
        login() {
            let _this = this
            const params = new URLSearchParams();
            params.append("user_login", this.user_login);
            params.append("user_pass", this.user_pass);
            this.axios
                .post("/api/v1/admin/login",params)
                .then(function (res) {
                    console.log(res);
                    if (res.code == 0) {
                        _this.$store.dispatch("logined", {
                            token: res.data.token,
                        });
                         _this.$message("登陆成功");
                        _this.$router.push({
                            name: 'home',
                        })
                    } else {
                      _this.$message(res.msg);
                    }
                })
        }
    }
};
</script>

<style lang="stylus" scoped>
.login-container {
    /* box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02); */
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

    .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
}
</style>
