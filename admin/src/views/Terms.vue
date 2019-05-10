<template>
  <div>
    <div>
      <el-row :gutter="10">
        <el-col :span="4">
          <el-input placeholder="请输入内容"></el-input>
        </el-col>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" icon="el-icon-plus" 　@click="dialogVisible = true">添加分类</el-button>

        <el-dialog title="添加分类" :visible.sync="dialogVisible">
          <el-form :model="form" label-width="80px">
            <el-form-item label="分类名称" label-width="100px">
              <el-input v-model="form.term.termName" auto-complete="off" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="所属分类组" label-width="100px">
              <el-select v-model="form.term.taxonomyId" placeholder="请选择分组">
                <el-option
                  v-for="item　in form.taxonomy"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="addTerm">确 定</el-button>
          </div>
        </el-dialog>
      </el-row>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="term_taxonomy_id" label="分类ID" width="150"></el-table-column>
      <el-table-column prop="term_name" label="分类名" width="120"></el-table-column>
      <el-table-column prop="taxonomy" label="分类类型" width="120"></el-table-column>
      <el-table-column prop="description" label="分类描述" width="300"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="danger"
            　size="small"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pagesize"
      @current-change="current_page"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false, //添加分类弹框
      form: {
        term: {
          termName: "",
          taxonomyId: 0
        },
        taxonomy: [
          {
            id: 0,
            name: "default"
          },
          {
            id: 1,
            name: "article"
          },
          {
            id: 2,
            name: "link"
          },
          {
            id: 3,
            name: "menu"
          }
        ]
      },
      tableData: [],
      total: 0, //默认数据总数
      pagesize: 7, //每页的数据条数
      currentPage: 1 //默认开始页面
    };
  },
  created() {
    let _this = this;
    //获取所有分类列表
    this.axios
      .get("/api/v1/admin/auth/terms", {
        params: {
          page_num: _this.currentPage,
          page_size: _this.pagesize
        }
      })
      .then(function(res) {
        if (res.code == 0) {
          _this.tableData = res.data.terms;
          _this.total = res.data.total;
        } else {
        }
      });
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //删除
    deleteRow(index, rows) {
      let _this = this;
      // console.log("删除row_id:", rows[index].id, rows, _this.total);
      this.$confirm("是否真的删除这个分类及其所有文章？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          let __this = this;
          if (rows.length == 0) {
            return;
          }
          // 　发送数据后台删除
          this.axios
            .delete("/api/v1/admin/auth/term/" + rows[index].term_taxonomy_id)
            .then(function(res) {
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
                  message: "删除失败：" + res.msg
                });
              }
            })
            .catch(function(err) {
              console.log(err.data);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //添加分类
    addTerm: function() {
      //后台添加数据
      let __this = this;
      // 　发送数据后台添加
      const params = new URLSearchParams();
      params.append("term_name", this.form.term.termName);
      params.append("taxonomy_id", this.form.term.taxonomyId);

      this.axios.post("/api/v1/admin/auth/term", params).then(function(res) {
        if (res.code == 0) {
          __this.$message({
            type: "success",
            message: "添加成功!"
          });
          // 表格添加
          window.location.reload();
          __this.dialogVisible = false;
        } else {
          __this.$message({
            type: "info",
            message: "添加失败：" + res.msg
          });
        }
      });
      this.dialogVisible = false;
    },
    current_page: function(currentPage) {
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
        .then(function(res) {
          if (res.code == 0) {
            _this.tableData = res.data.posts;
            _this.total = res.data.total;
          } else {
          }
        });
    }
  }
};
</script>
