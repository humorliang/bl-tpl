<template>
<div>
    <div>
        <el-row :gutter="10">
            <el-col :span="4">
                <el-input placeholder="请输入内容"></el-input>
            </el-col>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary" icon="el-icon-plus" @click="toArticle">新建文章</el-button>
        </el-row>
    </div>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="50"></el-table-column>
        <el-table-column prop="post_title" label="标题"></el-table-column>
        <el-table-column prop="post_date" label="文章日期" width="120"></el-table-column>
        <el-table-column prop="term_name" label="文章分类" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="danger" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div>
        <el-pagination background layout="prev, pager, next" :total="total" :page-size="pagesize" @current-change="current_change">
        </el-pagination>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [],
            total: 0, //默认数据总数
            pagesize: 7, //每页的数据条数
            currentPage: 1 //默认开始页面
        };
    },
    // 拿数据
    created() {
        let _this = this;
        //获取最新文章
        this.axios
            .get("/api/v1/admin/auth/posts", {
                params: {
                    page_num: _this.currentPage,
                    page_size: _this.pagesize
                }
            })
            .then(function (res) {
                if (res.code == 0) {
                    _this.tableData = res.data.posts;
                    _this.total = res.data.total;
                    console.log(_this.tableData);
                } else {}
            });
    },
    methods: {
        //去添加文章路由
        toArticle() {
            this.$router.push({
                name: "padd"
            });
        },
        //删除
        deleteRow(index, rows, id) {
            let _this = this;
            // console.log("删除row_id:", rows[index].id,rows,_this.total);
            this.$confirm("是否真的删除这篇文章？", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning",
                    center: true
                })
                .then(() => {
                    let __this = this
                    if (rows.length==0) {
                        return
                    }
                    // 　发送数据后台删除
                    this.axios
                        .delete("/api/v1/admin/auth/post/"+rows[index].id+"/tax_id/"+rows[index].term_taxonomy_id)
                        .then(function (res) {
                            if (res.code == 0) {
                                __this.$message({
                                    type: "success",
                                    message: "删除成功!"
                                });
                                //表格中删除
                                rows.splice(index, 1);
                                _this.total--;
                            } else {
                                 __this.$message({
                                    type: "info",
                                    message: "删除失败："+res.msg
                                });
                            }
                        })
                        .catch(function (err) {
                            console.log(err.data)
                        })
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        },
        // 点击触发的回调函数，返回当前的页数也就是currentPage的值
        current_change: function (currentPage) {
            let _this = this;
            this.currentPage = currentPage;
            //获取最新文章
            this.axios
                .get("/api/v1/admin/auth/posts", {
                    params: {
                        page_num: _this.currentPage,
                        page_size: _this.pagesize
                    }
                })
                .then(function (res) {
                    if (res.code == 0) {
                        _this.tableData = res.data.posts;
                        _this.total = res.data.total;
                    } else {}
                });
        }
    }
};
</script>
