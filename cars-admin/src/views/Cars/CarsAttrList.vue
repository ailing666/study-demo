<template>
  <div>
    <!-- 表格数据 -->
    <TableData ref="table" :tableConfig="tableConfig" :searchConfig="searchConfig">
      <!-- 属性插槽 -->
      <template v-slot:attr>
        <CarAttrItem @getTypeList="getTypeList" :isRequest="false" />
      </template>
    </TableData>
    <AddCarsAttrs :isVisible.sync="showDialog" :data="currentBasisAttrs" />
  </div>
</template>
<script>
import TableData from '@/components/TableData.vue'
import AddCarsAttrs from '@c/dialog/addCarsAttrs'
import CarAttrItem from '@c/CarsAttrItem.vue'
export default {
  name: 'CarsAttrList',
  components: { TableData, AddCarsAttrs, CarAttrItem },
  data() {
    return {
      // 弹窗标记
      showDialog: false,
      // 当前点击的基本属性
      currentBasisAttrs: {},
      // 表格配置
      tableConfig: {
        thead: [
          { label: '文本', prop: 'value' },
          { label: '字段', prop: 'key' }
        ],
        checkbox: false,
        isInitRequest: false,
        url: 'carsAttrList',
        data: {
          pageSize: 10,
          pageNumber: 1
        }
      },
      searchConfig: {
        formConfig: [
          {
            type: 'keyWord',
            label: '关键字',
            searchOptions: ['key', 'value']
          }
        ],
        formButton: [
          {
            label: '新增',
            prop: 'add',
            type: 'success',
            element: 'button',
            handler: () => this.carsTypeAddDialog()
          }
        ]
      }
    }
  },
  methods: {
    // 新增按钮打开弹窗
    carsTypeAddDialog() {
      // 没有选择自定义属性无法添加
      if (!this.currentBasisAttrs.id) {
        this.$message({
          message: '请选择车辆属性',
          type: 'error'
        })
        return false
      }
      this.showDialog = true
    },
    // 获取对应的属性列表
    getTypeList(data) {
      this.currentBasisAttrs = data
      this.$refs.table.requestData({ typeId: this.currentBasisAttrs.id })
    }
  }
}
</script>
<style lass="scss" scoped></style>
