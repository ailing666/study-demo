<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column v-if="configData.checkbox" type="selection" width="35"></el-table-column>
    <el-table-column
      v-for="item in tableConfig.thead"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
    ></el-table-column>
  </el-table>
</template>

<script>
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
    },
  }
}

</script>
<style lang='scss' scoped>
</style>