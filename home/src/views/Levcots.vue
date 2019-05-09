<template>
<div id="comment" style="padding-top:20px;margin:0 20px;">
    <h2 style="text-align:center;">
        <Icon type="md-book" style="color:green;" />留言墙
        <Icon type="md-book" style="color:green;" />
    </h2>
    
    <Card>
        <h3 style="text-align:center;color:green">暂不开放</h3>
        <div v-html="tpl"></div>
    </Card>
</div>
</template>

<script>
export default {
    name: "comment",
    data() {
        return {
            tpl: ""
        }
    },
    created() {
        let _this = this
        //留言
        // this.axios.get("/api/v1/home/levcots").then(function (res) {
        //     console.log(res);
        //     if (res.data.code == 0) {
        //         _this.tpl = res.data.data.tpl
        //     } else {}
        // })
    }
}
</script>

<style lang="stylus" scoped>
</style>
