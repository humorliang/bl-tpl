<template>
<div id="item">
    <Card :bordered="false" class="item-card" v-for="(item,index) of plist" :key="index">
        <!-- {{data}} -->
        <Row>
            <Col :sm="4" :md="6" :lg="8">
            <img src="@/assets/a.jpg" alt="文章预览图" style="width: 260px;height:180px;">
            </Col>
            <Col :sm="20" :md="18" :lg="16">
            <p style="font-size:20px;border-bottom:1px solid #ccc;padding-bottom:10px;">
                <Button type="dashed" style="color:green;margin-right:100px;" @click="toLables(((item || {}).label || {}).id)">{{((item || {}).label || {}).name}}</Button>
                {{item.title}}
            </p>
            <p style="height:110px;overflow:hidden;">{{item.desc}}</p>
            <p>
                <Row>
                    <Col span="8">
                    <Button type="success" ghost @click="toArticle(item.id)" >阅读全文                   
                     <Icon type="ios-arrow-round-forward" size="20" color="green"/>
                    </Button>
                    </Col>
                </Row>
            </p>
            </Col>
        </Row>
    </Card>
</div>
</template>

<script>
export default {
    name: "Item",
    props: ['plist'], //传递进行来的可以直接使用
    methods: {
        toArticle(id) {
            // console.log(id);
            this.$router.push({
                name: 'post',
                params: {
                    id: id
                }
            })
        },
        toLables(id){
            this.$router.push({
                name: 'list',
                params: {
                    kind_id: id
                }
            })
        },
    }
};
</script>

<style lang="stylus" scoped>
#item .item-card .ivu-card-body {
    padding-left: 0;
}

#item .item-card p {
    text-align: left;
    padding: 5px 5px;
    height: 50px;
}

#item .item-card .ivu-card-head {
    padding: 0 10px;
}
</style>
