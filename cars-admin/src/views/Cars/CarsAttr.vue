<template>
  <!-- 表格数据 -->
  <TableData ref="table" :tableConfig="tableConfig" :searchConfig="searchConfig"> </TableData>
</template>
<script>
import TableData from '@/components/TableData.vue'
export default {
  name: 'CarAttr',
  components: { TableData },
  data () {
    return {
      // 表格配置
      tableConfig: {
        thead: [
          { label: '字段', prop: 'key' },
          { label: '文本', prop: 'value' }
        ],
        checkbox: false,
        isInitRequest: false,
        url: 'carsList',
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
        ]
      },
      switchDisabled: ''
    }
  },
  methods: {}
}
</script>
<style lass="scss" scoped></style>
