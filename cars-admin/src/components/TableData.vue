<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column v-if="configData.checkbox" type="selection" width="35"></el-table-column>
    <template v-for="item in tableConfig.thead">
      <!-- 渲染回调函数 -->
      <el-table-column
        v-if="item.type === 'function'"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
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
      >
        <template slot-scope="scope">
          <!-- 具名插槽，slotName要对应 ，data就是整行的数据-->
          <slot :name="item.slotName" :data="scope.row"></slot>
        </template>
      </el-table-column>
      <!-- 渲染文本 -->
      <el-table-column v-else :key="item.prop" :prop="item.prop" :label="item.label"></el-table-column>
    </template>
  </el-table>
</template>

<script>
import { ParkingList } from '@/api/common'
export default {
  name: 'TableData',
  props: {
    tableConfig: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      tableData: [],
      configData: {
        // 表格头部
        thead: [],
        // 是否显示前面的多选框
        checkbox: true,
      },
    }
  },
  watch: {
    tableConfig: {
      handler () {
        this.initConfig()
      },
      immediate: true
    }
  },
  methods: {
    // 初始化配置
    initConfig () {
      for (let key in this.tableConfig) {
        if (Object.keys(this.configData).includes(key)) {
          // 将组件传入的值覆盖
          this.configData[key] = this.tableConfig[key]
        }
      }
      this.loadData()
    },
    // 请求表格数据
    loadData () {
      let requestData = {
        pageSize: 10, pageNumber: 1
      }
      ParkingList(requestData).then(res => {
        this.tableData = res.data.data
      })
    }
  }
}

</script>
<style lang='scss' scoped>
</style>