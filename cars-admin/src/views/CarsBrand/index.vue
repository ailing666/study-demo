<template>
  <div>
    <div class="filter-form">
      <el-row>
        <el-col :span="18">
          <el-form :inline="true" :model="form" class="demo-form-inline" label-width="100px">
            <el-form-item label="车辆品牌：">
              <el-select v-model="form.type" placeholder="选择品牌">
                <el-option label="福特" value="shanghai"></el-option>
                <el-option label="红旗" value="shanghai"></el-option>
                <el-option label="奔驰" value="shanghai"></el-option>
                <el-option label="宝马" value="shanghai"></el-option>
                <el-option label="五菱宏光" value="shanghai"></el-option>
                <el-option label="林肯" value="shanghai"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="品牌型号：">
              <el-input v-model="form.parking_name" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="danger">搜索</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <div class="pull-right">
            <el-button type="danger" @click="showDialog = true">新增车辆品牌</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 表格数据 -->
    <TableData :tableConfig="tableConfig">
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
      <template v-slot:operation="slotData">
        <el-button type="danger" size="small" @click="editParking(slotData.data)">编辑</el-button>
        <el-button size="small" @click="delParking(slotData.data.id)">删除</el-button>
      </template>
    </TableData>
    <AddCarsBrand :isVisible.sync="showDialog" :data="brandData" />
  </div>
</template>
<script>
import AddCarsBrand from "@c/dialog/addCarsBrand"
import TableData from '@/components/TableData.vue'
import { BrandDelete, BrandStatus } from '@/api/brand'
export default {
  name: "CarBrand",
  components: { AddCarsBrand, TableData },
  data () {
    return {
      // 弹窗标记
      showDialog: false,
      brandData: {},
      form: {
        parking_name: "",
        area: "",
        type: ""
      },
      tableConfig: {
        thead: [
          {
            label: "LOGO",
            prop: "imgUrl",
            type: "image",
            width: 150,
          },
          {
            label: "车辆品牌",
            prop: "nameCh",
            type: "function",
            callback: (row, prop) => `${row.nameCh}/${row.nameEn}`
          },
          { prop: "status", label: "禁启用", type: 'slot', slotName: "status" },
          {
            label: "操作",
            type: "slot",
            width: 200,
            slotName: "operation"
          }
        ],
        url: "/brand/list/",
      },
      switchDisabled: ''
    }
  },
  methods: {
    // 删除
    delParking (id) {
      this.$confirm('确定删除此信息', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        BrandDelete({ id }).then(res => {
          this.$message({
            type: 'success',
            message: res.message
          })
          // 请求组件数据
          this.$refs.table.requestData()
        })
      }).catch(() => { })
    },

    // 编辑
    editParking (query) {
      this.brandData = JSON.parse(JSON.stringify(query))
      this.showDialog = true
    },

    // 修改状态
    switchStastus (data) {
      let requestData = {
        id: data.id,
        status: data.status
      }
      this.switchDisabled = data.id
      BrandStatus(requestData).then(res => {
        this.$message({
          type: 'success',
          message: res.message
        })
        this.switchDisabled = ''
      }).catch(() => {
        this.switchDisabled = ''
      })
    }
  },
};
</script>
<style lass="scss" scoped></style>