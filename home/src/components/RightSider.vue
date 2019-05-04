<template>
    <!-- <div>{{msg}}</div> -->
    <div id="sider" >
        <Card style="margin-top:30px;">
            <p slot="title">{{rightSliderData.slider_jitang.title}}</p>
            <p>{{rightSliderData.slider_jitang.content}}</p>
        </Card>
        <Card style="margin-top:30px;">
            <p slot="title">{{rightSliderData.slider_jiaoliu.title}}</p>
            <p>{{rightSliderData.slider_jiaoliu.content}}</p>
        </Card>
        <Card style="margin-top:30px;">
            <p slot="title">{{rightSliderData.slider_adv.title}}</p>
            <p>{{rightSliderData.slider_adv.content}}</p>
        </Card>
    </div>
</template>
<script>
export default {
    name:"RightSider",
    props: ['rightSliderData']
}
</script>
