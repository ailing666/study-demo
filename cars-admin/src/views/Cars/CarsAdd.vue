<template>
  <CarForm ref="vuForm" :formData="formData" :formConfig="formConfig" :formButton="formButton">
    <template v-slot:maintain>
      <el-row :gutter="30">
        <el-col :span="6">
          <el-date-picker
            v-model="formData.maintainDate"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-col>
        <el-col :span="6">下次保养日期：2020-12-12</el-col>
      </el-row>
    </template>
    <template v-slot:energy>
      <el-radio-group v-model="formData.energyType" @change="changeEnergyType">
        <el-radio :label="1">电</el-radio>
        <el-radio :label="2">油</el-radio>
        <el-radio :label="3">混合动力</el-radio>
      </el-radio-group>
      <div class="progress-bar-wrap" v-if="formData.energyType == 3 || formData.energyType == 1">
        <span class="label-text">电量：</span>

        <el-row :gutter="20">
          <el-col :span="10">
            <el-slider v-model="formData.electric" show-input></el-slider>
          </el-col>
        </el-row>
      </div>
      <div class="progress-bar-wrap" v-if="formData.energyType == 3 || formData.energyType == 2">
        <span class="label-text">油量：</span>
        <el-row :gutter="20">
          <el-col :span="10">
            <el-slider v-model="formData.oil" show-input></el-slider>
          </el-col>
        </el-row>
      </div>
    </template>
    <template v-slot:carsAttr>
      <el-button type="primary" @click="addCarsAttr">添加属性</el-button>
      <div class="cars-attr-list" v-for="item in carsAttrList" :key="item.key">
        <el-row :gutter="10">
          <el-col :span="2">
            <el-input v-model="item.attrKey"></el-input>
          </el-col>
          <el-col :span="3">
            <el-input v-model="item.attrValue"></el-input>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" @click="delCarsAttr(item.attrKey)">删除属性</el-button>
          </el-col>
        </el-row>
      </div>
    </template>
    <template v-slot:content>
      <div ref="editorDom" style="text-align: left;"></div>
    </template>
  </CarForm>
</template>
<script>
// 富文本编辑器
import E from 'wangeditor'
import CarForm from "@c/CarForm"
import { GetCarsBrand, GetParking } from "@/api/common"
import { CarsAdd } from "@/api/car"

export default {
  name: "CarsAdd",
  components: { CarForm },
  data () {
    return {
      // 富文本对象
      editor: null,
      carsAttrList: [],
      formConfig: [
        {
          type: "select",
          label: "车辆品牌",
          placeholder: "请选择车辆品牌",
          prop: "carsBrandId",
          select_vlaue: "id",   // 自有的私有属性
          select_label: "nameCh",
          options: []
        },
        {
          type: "select",
          label: "停车场",
          placeholder: "请选择停车场",
          select_vlaue: "id",   // 自有的私有属性
          select_label: "parkingName",
          prop: "parkingId",
          options: []
        },
        {
          type: "input",
          label: "车辆型号",
          placeholder: "请输入车辆型号",
          prop: "carsMode",
        },
        {
          type: "input",
          label: "车牌号",
          placeholder: "请输入车牌号",
          prop: "carsNumber",
        },
        {
          type: "input",
          label: "车架号",
          placeholder: "请输入车架号",
          prop: "carsFrameNumber",
        },
        {
          type: "input",
          label: "发动机号",
          placeholder: "请输入发动机号",
          prop: "engineNumber",
        },
        {
          type: "radio",
          label: "年检",
          placeholder: "请选择年检",
          prop: "yearCheck",
          options: this.$store.state.config.year_check
        },
        {
          type: "slot",
          slotName: "maintain",
          prop: "maintainDate",
          label: "保养日期"
        },
        {
          type: "radio",
          label: "档位",
          placeholder: "请选择档位",
          prop: "gear",
          options: this.$store.state.config.gear
        },
        {
          type: "slot",
          slotName: "energy",
          prop: "energyType",
          label: "能源类型"
        },
        {
          type: "disabled",
          label: "禁启用",
          placeholder: "请选择禁启用",
          prop: "status"
        },
        {
          type: "slot",
          slotName: "carsAttr",
          prop: "carsAttr",
          label: "车辆属性"
        },
        {
          type: "slot",
          slotName: "content",
          prop: "content",
          label: "车辆描述"
        },
      ],
      formButton: [
        { label: "确定", key: "submit", type: "danger", handler: () => this.formSubmit() },
        { label: "重置", key: "reset" },
      ],
      formData: {
        parkingId: "",
        carsBrandId: "",
        carsMode: "",
        carsNumber: "",
        carsFrameNumber: "",
        engineNumber: "",
        yearCheck: true,
        gear: 2,
        energyType: 2,
        electric: 0,
        oil: 0,
        carsAttr: {},
        content: "",
        maintainDate: "",
        status: true
      },
      // 车辆品牌列表
      carsBrandList: []
    }
  },
  beforeMount () {
    this.getCarsBrandList()
    this.getParkingList()
  },
  mounted () {
    this.createEditor()
  },
  methods: {
    // 提交表单
    async formSubmit () {
      this.setCarsAttr()
      const res = await CarsAdd(this.formData)
      this.$message({
        message: res.message,
        type: 'success'
      })
    },

    // 获取车辆品牌
    async getCarsBrandList () {
      const res = await GetCarsBrand()
      const data = res.data.data
      if (data && data.length > 0) {
        const carsBrand = this.formConfig.filter(item => item.prop == "carsBrandId")
        // 将品牌列表赋值给对应的options
        carsBrand.length > 0 && (carsBrand[0].options = data)
      }
    },

    // 获取停车场
    async getParkingList () {
      const res = await GetParking()
      const data = res.data.data
      if (data && data.length > 0) {
        const parking = this.formConfig.filter(item => item.prop == "parkingId")
        // 将停车场列表赋值给对应的options
        parking.length > 0 && (parking[0].options = data)
      }
    },

    // 设置carsAttr格式
    setCarsAttr () {
      const obj = {}
      this.carsAttrList.forEach(item => item.attrKey && (obj[item.attrKey] = item.attrValue))
      this.formData.carsAttr = JSON.stringify(obj)
    },

    // 添加车辆属性
    addCarsAttr () {
      this.carsAttrList.push({ attrKey: '', attrValue: '' })
    },

    // 删除属性
    delCarsAttr (key) {
      this.carsAttrList = this.carsAttrList.filter(item => item.attrKey !== key)
    },
    // 改变能源类型清空值
    changeEnergyType () {
      this.formData.electric = 0
      this.formData.oil = 0
    },
    // 富文本
    createEditor () {
      const editor = new E(this.$refs.editorDom)
      editor.customConfig.onchange = html => {
        this.formData.content = html
      }
      editor.create()
    },
  }
};
</script>
<style lang="scss">
.progress-bar-wrap {
  padding-left: 50px;
  margin-top: 10px;
  position: relative;
  .label-text {
    position: absolute;
    left: 0;
  }
}
.progress-bar {
  height: 10px;
  width: 100%;
  border-radius: 50px;
  background-color: #ccc;
  margin-top: 15px;
  span {
    position: relative;
    display: block;
    height: 100%;
    background-color: #409eff;
    border-radius: 50px;
  }
  label {
    position: absolute;
    right: 0;
    bottom: 10%;
  }
}
.cars-attr-list {
  margin-bottom: 15px;
  overflow: hidden;
}
</style>