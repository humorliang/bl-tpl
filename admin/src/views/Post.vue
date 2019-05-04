<template>
<div>
    
    <div>
        <!-- 编辑器 -->
        <h2 style="color:#676;padding-left:20px;margin-bottom:0;margin-top:30px;">添加文章：</h2>
        <div id="my-editor">
            <Editor></Editor>
        </div>
       
    </div>
</div>
</template>

<script>
import Editor from '@/components/Editor.vue'

export default {
    data() {
        return {
           
        }
    },
    components: {
        Editor
    },
    methods: {
       
    },
}
</script>

<style lang="stylus" scoped>

</style>
