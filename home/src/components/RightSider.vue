<template>
<!-- <div>{{msg}}</div> -->
<div id="sider">
    <Card v-if="JSON.stringify(rightSliderData.terms)!='{}'" style="margin-top:30px;">
        <p slot="title">{{rightSliderData.terms.title}}</p>
        <p>
            <Button color="primary" type="info" shape="circle" style="margin-right:10px" v-for="(item,index) in rightSliderData.terms.list" :key="index" @click="handleClick(item.term_taxonomy_id)">{{item.term_name}}</Button>
        </p>
    </Card>
    <Card  v-if="JSON.stringify(rightSliderData.notes)!='{}'" style="margin-top:30px;">
        <p slot="title">{{rightSliderData.notes.title}}</p>
        <p>{{rightSliderData.notes.content}}
        </p>
    </Card>
    <Card  v-if="JSON.stringify(rightSliderData.concat)!='{}'" style="margin-top:30px;">
        <p slot="title">{{rightSliderData.concat.title}}</p>
        <div v-html="rightSliderData.concat.content"></div>
    </Card>
</div>
</template>

<script>
export default {
    name: "RightSider",
    props: ['rightSliderData'],
    methods: {
        handleClick(key) {
            console.log(key)
        }
    }
}
</script>
