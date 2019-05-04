<template>
<div id="post">
    <div id="post-content" style="text-align:center;margin:0 10px;">
        <Card>
            <div style="border-bottom:1px solid #ccc;">
                <h2>文章标题</h2>
                <p>作者：<span style="color:green; padding-right:20px;">三毛</span>时间：<span style="color:green;">2017-10-02</span></p>
            </div>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            pdata:{
                title:"",
                author:"",
                pub_data:"",
                content:"",
            }
        }
    },
    name: "post",
    created() {
        // console.log(this.$route.params.id) //{id: 37}
        var id = this.$route.params.id
        /*  let _this = this
         this.axios
             .get('http://humorliang.top:5000/api/v_1.0/post/', {
                 params: {
                     post_id: id
                 }
             })
             .then(function (response) {
                 _this.postdata = JSON.parse(response.data)
                 // console.log(response.data)
             })
             .catch(function (err) {
                 console.log(err.data)
             }) */
        console.log(id)
        console.log(this)
    },
}
</script>
