<template>
  <!-- 表格数据 -->
  <TableData ref="table" :tableConfig="tableConfig" :searchConfig="searchConfig">
    <!--禁启用-->
    <template v-slot:status="slotData">
      <el-switch
        :disabled="slotData.data.id === switchDisabled"
        @change="switchStastus(slotData.data)"
        v-model="slotData.data.status"
        active-color="#13ce66"
        inactive-color="#ff4949"
      ></el-switch>
    </template>
    <!-- 操作 -->
    <template v-slot:operation="slotData">
      <el-button type="danger" size="small" @click="editCars(slotData.data)">编辑</el-button>
    </template>
  </TableData>
</template>
<script>
import { CarsStatus } from '@/api/cars'
import { yearCheckType, energyType, parkingAddress } from '@/utils/common'
import TableData from '@/components/TableData.vue'
export default {
  name: 'CarIndex',
  components: { TableData },
  data() {
    return {
      form: {
        area: '',
        status: '',
        type: ''
      },
      // 关键字
      keyWord: '',
      keyValue: '',
      parkingData: {},
      // 表格配置
      tableConfig: {
        thead: [
          { label: '车牌号', prop: 'carsMode' },
          { label: '车辆品牌', prop: 'nameCh' },
          {
            label: '车辆LOGO',
            prop: 'imgUrl',
            type: 'image'
          },
          {
            label: '年检',
            prop: 'yearCheck',
            type: 'function',
            callback: (row, prop) => yearCheckType(row[prop]),
            width: '100px'
          },
          {
            label: '能源类型',
            prop: 'energyType',
            type: 'function',
            callback: (row, prop) => energyType(row[prop]),
            width: '100px'
          },
          {
            label: '禁启用',
            prop: 'status',
            type: 'slot',
            slotName: 'status',
            width: '100px'
          },
          { label: '停车场', prop: 'parkingName' },
          {
            label: '区域',
            prop: 'address',
            type: 'function',
            callback: (row, prop) => parkingAddress(row[prop])
          },
          {
            label: '操作',
            type: 'operation',
            default: {
              delButton: true,
              editButton: true,
              editLink: 'CarsAdd',
              editQuery: 'id'
            }
          }
        ],
        url: 'carsList',
        data: {
          pageSize: 10,
          pageNumber: 1
        }
      },
      searchConfig: {
        formConfig: [
          {
            type: 'city',
            label: '区域'
          },
          {
            type: 'select',
            label: '类型',
            prop: 'type',
            options: 'parking_type'
          },
          {
            type: 'select',
            label: '禁启用',
            prop: 'status',
            options: 'radio_disabled'
          },
          {
            type: 'keyWord',
            label: '关键字'
          }
        ],
        formButton: [
          {
            label: '新增',
            prop: 'add',
            type: 'success',
            element: 'link',
            router: '/CarsAdd'
          }
        ]
      },
      switchDisabled: ''
    }
  },
  methods: {
    // 修改状态
    switchStastus(data) {
      let requestData = {
        id: data.id,
        status: data.status
      }
      this.switchDisabled = data.id
      CarsStatus(requestData)
        .then(res => {
          this.$message({
            type: 'success',
            message: res.message
          })
          this.switchDisabled = ''
        })
        .catch(() => {
          this.switchDisabled = ''
        })
    }
  }
}
</script>
<style lass="scss" scoped></style>
