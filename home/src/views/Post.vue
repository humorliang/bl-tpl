<template>
<div id="post">
    <div id="post-content" style="margin:0 10px;">
        <Card v-if="JSON.stringify(pdata)!='{}'">
            <div style="border-bottom:1px solid #ccc;text-align:center;">
                <h2>{{pdata.post_title}}</h2>
                <p>作者：<span style="color:green; padding-right:20px;">{{pdata.user_nickname}}</span>
                    时间：<span style="color:green;">{{pdata.post_date}}</span></p>
            </div>
             <div v-html="pdata.post_content" style="padding:20px">
          </div>
        </Card>
        <Card v-else>文章内容不见了（⊙ｏ⊙）</Card>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            pdata: {
            }
        }
    },
    name: "post",
    created() {
        // console.log(this.$route.params.id) //{id: 37}
        
        var id = this.$route.params.id
        let _this = this
        this.axios
            .get('/api/v1/admin/auth/post/' + id)
            .then(function (res) {
                // console.log(res)
                if (res.status == 200 && res.data.code == 0) {
                    // console.log(res.data.data)
                    _this.pdata = res.data.data
                } else {

                }
            })
    },
}
</script>
