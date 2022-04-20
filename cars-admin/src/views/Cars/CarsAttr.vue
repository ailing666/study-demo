<template>
  <div>
    <!-- 表格数据 -->
    <TableData ref="table" :tableConfig="tableConfig" :searchConfig="searchConfig">
      <!-- 属性插槽 -->
      <template v-slot:attr>
        <div>
          <el-button
            style="margin-bottom:25px"
            @click="attrClick(item)"
            :type="currentAttrsId === item.id ? 'danger' : ''"
            v-for="item in basisAttrsList"
            :key="item.id"
            size="samll"
            >{{ item.value }}</el-button
          >
        </div>
      </template>
    </TableData>
    <AddCarsAttrs :isVisible.sync="showDialog" :data="attrData" />
  </div>
</template>
<script>
import TableData from '@/components/TableData.vue'
import AddCarsAttrs from '@c/dialog/addCarsAttrs'
import { GetCarsTypeBasis } from '@/api/carAttr.js'
export default {
  name: 'CarAttr',
  components: { TableData, AddCarsAttrs },
  data () {
    return {
      // 弹窗标记
      showDialog: false,
      attrData: {},
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
      },
      basisAttrsList: [],
      currentAttrsId: ''
    }
  },
  mounted () {
    this.getCarsAttrs()
  },
  methods: {
    // 新增按钮打开弹窗
    carsTypeAddDialog () {
      if (!this.currentAttrsId) {
        this.$message({
          message: '请选择车辆属性',
          type: 'error'
        })
        return false
      }
      this.showDialog = true
    },
    // 获取基础的属性列表
    async getCarsAttrs () {
      const res = await GetCarsTypeBasis()
      this.basisAttrsList = res.data.data
    },
    // 点击按钮触发
    attrClick (data) {
      this.currentAttrsId = data.id
      this.attrData = data
      this.getTypeList(data.id)
    },
    // 获取对应的属性列表
    getTypeList (typeId) {
      this.$refs.table.requestData({ typeId })
    }
  }
}
</script>
<style lass="scss" scoped></style>
