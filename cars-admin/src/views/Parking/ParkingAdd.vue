<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="120px">
    <el-form-item prop="parkingName" label="停车场名称">
      <el-input v-model="form.parkingName"></el-input>
    </el-form-item>
    <el-form-item prop="area" label="区域">
      <AreaCascader ref="areaCascader" :cityAreaValue.sync="form.area" @getAddress="getAddress" />
    </el-form-item>
    <el-form-item prop="type" label="类型">
      <el-radio-group v-model.number="form.type">
        <el-radio v-for="item in parkingType" :key="item.value" :label="item.value">{{item.label}}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item prop="carsNumber" label="可停放车辆">
      <el-input v-model.number="form.carsNumber"></el-input>
    </el-form-item>
    <el-form-item prop="status" label="禁启用">
      <el-radio-group v-model.number="form.status">
        <el-radio v-for="item in parkingStatus" :key="item.value" :label="item.value">{{item.label}}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item prop="address" label="位置">
      <div class="address-map">
        <CarMap ref="carMap" @getLngLat="getLngLat" />
      </div>
    </el-form-item>
    <el-form-item prop="lnglat" label="经纬度">
      <el-input v-model="form.lnglat"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="danger" :loading="submitLoading" @click="onSubmit">确定</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import CarMap from '@/components/carMap/index.vue'
import AreaCascader from '@/components/AreaCascader'
import { ParkingAdd, ParkingDetailed } from '@/api/common'
export default {
  name: "ParkingAdd",
  components: { CarMap, AreaCascader },
  data () {
    return {
      form: {
        parkingName: "",
        area: "",
        type: "",
        carsNumber: "",
        address: "",
        status: "",
        lnglat: ""
      },
      id: this.$route.query.id,
      rules: {
        parkingName: { required: true, message: '请输入停车场名称', trigger: 'blur' },
        area: { required: true, message: '请选择区域', trigger: 'blur' },
        carsNumber: [
          { required: true, message: '请输入可停放车辆数量', trigger: 'change' },
          { type: 'number', message: '数量必须为数字' },
        ],
        lnglat: { required: true, message: '请点击地图获取经纬度', trigger: 'blur' },
      },
      submitLoading: false
    }
  },

  computed: {
    parkingStatus () {
      return this.$store.state.config.parking_status
    },
    parkingType () {
      return this.$store.state.config.parking_type
    }
  },

  methods: {
    // 获取详情
    getParkingDetailed () {
      ParkingDetailed({ id: this.id }).then(res => {
      })
    },
    // 提交表单
    onSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.addParking()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    // 请求接口
    addParking () {
      this.submitLoading = true
      ParkingAdd(this.form).then(res => {
        if (res.resCode === 0) {
          // 重置表单
          this.resetForm()
          this.submitLoading = false
          this.$message({
            message: res.message,
            type: 'success'
          })
        }
      }).catch(() => {
        this.submitLoading = false
      })
    },

    // 修改areaValue
    cityAreaValue (v) {
      this.form.areaValue = v
    },

    // 获取经纬度
    getLngLat (v) {
      this.form.lnglat = v.value
    },

    // 获取中文地址
    getAddress (address) {
      console.log('获取中文地址: ', address)
      this.form.address = address
      // 触发carMap组件事件
      this.$refs.carMap.setMapCenter(address)
    },

    // 重置表单
    resetForm () {
      this.form.address = ""
      this.$refs.carMap.delMarker()
      this.$refs.areaCascader.value = ''
      this.$refs.form.resetFields()
    }
  }
}
</script>
<style lass="scss" scoped>
.address-map {
  width: 100%;
  height: 550px;
  border: 1px solid #ccc;
}
</style>