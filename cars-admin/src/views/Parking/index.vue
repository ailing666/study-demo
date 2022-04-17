<template>
  <div>
    <div class="filter-form">
      <el-row>
        <el-col :span="22">
          <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="区域">
              <AreaCascader ref="areaCascader" :cityAreaValue.sync="form.area" />
            </el-form-item>
            <el-form-item label="类型">
              <el-select v-model="form.type" placeholder="活动区域">
                <el-option
                  v-for="item in $store.state.config.parking_type"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="禁启用">
              <el-select v-model="form.status" placeholder="活动区域">
                <el-option
                  v-for="item in $store.state.config.radio_disabled"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="关键字">
              <el-select v-model="keyWord" placeholder="请选择" style="width:110px">
                <el-option label="停车场名称" value="parkingName"></el-option>
                <el-option label="详细区域" value="address"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-input v-model="keyValue" placeholder="请输入关键字"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" @click="searchParking">搜索</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="2">
          <div class="pull-right">
            <router-link to="/parkingAdd">
              <el-button type="danger">新增停车场</el-button>
            </router-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 表格数据 -->
    <TableData ref="table" :tableConfig="tableConfig">
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
import AreaCascader from '@/components/AreaCascader'
import ShowMap from '@/components/dialog/showMap.vue'
import TableData from '@/components/TableData.vue'
export default {
  name: 'Parking',
  components: { AreaCascader, ShowMap, TableData },
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
      switchDisabled: ''
    }
  },
  methods: {
    changeDialogVisible(v) {
      this.parkingData = v
      this.isShowMap = true
    },

    // 搜索
    searchParking() {
      const requestData = {
        pageSize: 10,
        pageNumber: 1
      }

      let filterData = JSON.parse(JSON.stringify(this.form))

      // 如果筛选条件有变动再添加进来
      for (let key in filterData) {
        if (filterData[key] !== '') requestData[key] = filterData[key]
      }

      // 关键字
      if (this.keyWord && this.keyValue) requestData[this.keyWord] = this.keyValue
      // 将参数传入，请求组件数据
      this.$refs.table.requestData(requestData)
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
