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
              <el-button type="danger">搜索</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="2">
          <div class="pull-right">
            <router-link to="/carsAdd">
              <el-button type="danger">新增停车场</el-button>
            </router-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 表格数据 -->
    <TableData ref="table" :tableConfig="tableConfig">
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
  </div>
</template>
<script>
import { CarsStatus } from '@/api/cars'
import { yearCheckType, energyType, parkingAddress } from '@/utils/common'
import AreaCascader from '@/components/AreaCascader'
import TableData from '@/components/TableData.vue'
export default {
  name: 'CarIndex',
  components: { AreaCascader, TableData },
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
