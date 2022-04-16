<template>
  <CarForm ref="vuForm" :formData="formData" :formConfig="formConfig" :formButton="formButton">
    <template v-slot:maintain>
      <el-row :gutter="30">
        <el-col :span="6">
          <el-input v-model="formData.maintainDate"></el-input>
        </el-col>
        <el-col :span="6">下次保养日期：2020-12-12</el-col>
      </el-row>
    </template>
    <template v-slot:energy>
      <el-radio-group v-model="formData.energyType">
        <el-radio :label="1">电</el-radio>
        <el-radio :label="2">油</el-radio>
        <el-radio :label="3">混合动力</el-radio>
      </el-radio-group>
      <div class="progress-bar-wrap" v-if="formData.energyType == 3 || formData.energyType == 1">
        <span class="label-text">电量：</span>
        <el-row :gutter="20">
          <el-col :span="5">
            <div class="progress-bar">
              <span style="width: 50%;">
                <label>{{formData.electric}}%</label>
              </span>
            </div>
          </el-col>
          <el-col :span="2">
            <el-input size="small" value="100" v-model="formData.electric"></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="progress-bar-wrap" v-if="formData.energyType == 3 || formData.energyType == 2">
        <span class="label-text">油量：</span>
        <el-row :gutter="20">
          <el-col :span="5">
            <div class="progress-bar">
              <span style="width: 50%;">
                <label>{{formData.oil}}%</label>
              </span>
            </div>
          </el-col>
          <el-col :span="2">
            <el-input size="small" value="100" v-model="formData.oil"></el-input>
          </el-col>
        </el-row>
      </div>
    </template>
    <template v-slot:carsAttr>
      <div class="cars-attr-list" v-for="(item, index) in carsAttrList" :key="item.key">
        <el-row :gutter="10">
          <el-col :span="2">
            <el-input value="100"></el-input>
          </el-col>
          <el-col :span="3">
            <el-input value="100"></el-input>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" v-if="index == 0" @click="addCarsAttr">+</el-button>
            <el-button v-else>-</el-button>
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

export default {
  name: "CarsAdd",
  components: { CarForm },
  data () {
    return {
      // 富文本对象
      editor: null,
      carsAttrList: [
        { key1: 111, value1: 222 },
        { key2: 111, value2: 222 },
        { key3: 111, value3: 222 },
        { key4: 111, value4: 222 }
      ],
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
        { label: "确定", key: "submit", type: "danger", handler: () => this.formValidate() },
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
        gear: true,
        energyType: "",
        electric: "",
        oil: "",
        carsAttr: "",
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
    formValidate () {
      console.log("submit!", this.formData)
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
    /** 添加车辆属性 */
    addCarsAttr () {
      this.carsAttrList.push({ key4: 111, value4: 222 })
    },
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