<template>
  <div>
    <TableData ref="table" :tableConfig="tableConfig" :searchConfig="searchConfig">
      <!-- status插槽名称要一样，slotData为整行数据，比scope.row多一层data -->
      <template v-slot:status="slotData">
        <!-- 当前id等于switchDisabled时禁用 -->
        <el-switch
          :disabled="slotData.data.id === switchDisabled"
          @change="switchStastus(slotData.data)"
          v-model="slotData.data.status"
          active-color="#13ce66"
          inactive-color="#ff4949"
        ></el-switch>
      </template>
      <template v-slot:lnglat="slotData">
        <el-button size="success" @click="changeDialogVisible(slotData.data)">点击查看地图</el-button>
      </template>
    </TableData>
    <ShowMap :dialogVisible.sync="isShowMap" :parkingData="parkingData" />
  </div>
</template>
<script>
import { ParkingStatus } from '@/api/parking'
import { parkingType, parkingAddress } from '@/utils/common'
import ShowMap from '@/components/dialog/showMap.vue'
import TableData from '@/components/TableData.vue'
export default {
  name: 'Parking',
  components: { ShowMap, TableData },
  data() {
    return {
      isShowMap: false,
      parkingData: {},
      // 表格配置
      tableConfig: {
        thead: [
          { prop: 'parkingName', label: '停车场名称' },
          {
            prop: 'type',
            label: '类型',
            type: 'function',
            callback: (row, prop) => parkingType(row[prop])
          },
          {
            prop: 'address',
            label: '区域',
            type: 'function',
            callback: (row, prop) => parkingAddress(row[prop])
          },
          { prop: 'carsNumber', label: '可停放车辆' },
          { prop: 'status', label: '禁启用', type: 'slot', slotName: 'status' },
          {
            prop: 'lnglat',
            label: '查看位置',
            type: 'slot',
            slotName: 'lnglat'
          },
          {
            label: '操作',
            type: 'operation',
            default: {
              delButton: true,
              editButton: true,
              editLink: 'ParkingAdd',
              editQuery: 'id'
            }
          }
        ],
        url: 'parkingList'
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
            router: '/ParkingAdd'
          }
        ]
      },
      switchDisabled: ''
    }
  },
  methods: {
    changeDialogVisible(v) {
      this.parkingData = v
      this.isShowMap = true
    },

    // 修改状态
    switchStastus(data) {
      let requestData = {
        id: data.id,
        status: data.status
      }
      this.switchDisabled = data.id
      ParkingStatus(requestData)
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
