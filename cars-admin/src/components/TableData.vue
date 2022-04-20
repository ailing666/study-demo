<template>
  <div>
    <SearchForm
      :formButton="searchConfig.formButton"
      :formConfig="searchConfig.formConfig"
      :config="searchConfig.config"
      @search="search"
    ></SearchForm>
    <el-table :data="tableData" v-loading="tableLoading" border style="width: 100%">
      <el-table-column v-if="configData.checkbox" type="selection" width="40"></el-table-column>
      <template v-for="item in tableConfig.thead">
        <!-- 渲染回调函数 -->
        <el-table-column
          v-if="item.type === 'function'"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
          <template slot-scope="scope">
            <span v-html="item.callback && item.callback(scope.row, item.prop)"></span>
          </template>
        </el-table-column>
        <!-- 渲染插槽 -->
        <el-table-column
          v-else-if="item.type === 'slot'"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
          <template slot-scope="scope">
            <!-- 具名插槽，slotName要对应 ，data就是整行的数据-->
            <slot :name="item.slotName" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <!-- 渲染图片 -->
        <el-table-column
          v-else-if="item.type === 'image'"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
          <template slot-scope="scope">
            <img :src="scope.row[item.prop]" :width="item.imgWidth || 50" :height="item.imgHeight || 50" alt />
          </template>
        </el-table-column>
        <!-- 按钮 -->
        <el-table-column
          v-else-if="item.type === 'operation'"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
          <template v-slot="scope">
            <!-- 删除 -->
            <el-button
              size="small"
              v-if="item.default && item.default.delButton"
              :loading="scope.row.id == rowId"
              @click="del(scope.row.id)"
              >删除</el-button
            >
            <!-- 路由跳转的修改 -->
            <el-button
              type="danger"
              size="small"
              v-if="item.default && item.default.editButton"
              @click="edit(scope.row[item.default.id || 'id'], item.default.editLink)"
              >编辑2</el-button
            >
            <!-- 额外的 -->
            <slot v-if="item.slotName" :name="item.slotName" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <!-- 渲染文本 -->
        <el-table-column
          v-else
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        ></el-table-column>
      </template>
    </el-table>
    <el-pagination
      class="parking-pagination"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="requestData.pageNumber"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="requestData.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm'
import { ParkingList, Delete } from '@/api/common'
export default {
  name: 'TableData',
  props: {
    // 接受外部传入的配置对象
    tableConfig: {
      type: Object,
      default: () => ({})
    },
    searchConfig: {
      type: Object,
      default: () => ({})
    }
  },
  components: { SearchForm },
  data () {
    return {
      // table数据
      tableData: [],
      // table的loading状态
      tableLoading: false,
      // table的配置
      configData: {
        // 是否初始化请求
        isInitRequest: true,
        // 表头
        thead: [],
        // 是否显示前面的多选框
        checkbox: true,
        // 请求url
        url: '',
        // 是否显示分页器
        pagination: true,
        // 外部传入的请求对象
        requestData: {
          pageSize: 10,
          pageNumber: 1
        }
      },
      total: 0,
      rowId: ''
    }
  },
  watch: {
    // 监听外部传入的配置对象，默认触发一次，有值就初始化表格
    tableConfig: {
      handler () {
        this.initConfig()
      },
      immediate: true
    }
  },
  methods: {
    // 初始化表格配置
    initConfig () {
      // 将组件传入的值覆盖
      for (let key in this.tableConfig) {
        if (this.tableConfig[key] !== '') {
          this.configData[key] = this.tableConfig[key]
        }
      }
      // 是否初始化加载表格数据
      this.configData.isInitRequest && this.loadData()
    },
    // 搜索
    search (data) {
      const searchData = {
        ...data,
        pageNumber: 1,
        pageSize: 10
      }
      this.requestData(searchData)
    },
    // 供外部组件调用的请求方法
    requestData (params = '') {
      // 如果外部组件传入params就用外部的，否则就用默认的
      if (params) {
        this.configData.requestData = params
      }
      this.loadData()
    },

    // 请求表格数据
    loadData () {
      let requestData = {
        url: this.configData.url,
        data: this.configData.requestData
      }
      this.tableLoading = true
      ParkingList(requestData)
        .then(res => {
          const { total, data } = res.data
          this.tableData = data
          this.total = total
          this.tableLoading = false
        })
        .catch(() => {
          this.tableLoading = false
        })
    },

    // 页容量改变
    handleSizeChange (val) {
      this.configData.requestData.pageSize = val
      this.loadData()
    },

    // 页码改变
    handleCurrentChange (val) {
      this.configData.requestData.pageNumber = val
      this.loadData()
    },

    // 删除
    del (id) {
      this.$confirm('确定删除此信息', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.rowId = id
        let requestData = {
          url: this.tableConfig.url + 'Delete',
          data: { id }
        }
        Delete(requestData)
          .then(res => {
            this.$message({
              type: 'success',
              message: res.message
            })
            this.rowId = ''
            // 请求组件数据
            this.requestData()
          })
          .catch(() => {
            this.rowId = ''
          })
      })
    },
    // 编辑
    edit (id, link) {
      this.$router.push({
        name: link,
        query: { id }
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
