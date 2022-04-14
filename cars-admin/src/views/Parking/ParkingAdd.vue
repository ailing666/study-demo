<template>
  <div>
    <CarForm :formConfig="formConfig">
      <template v-slot:city>
        <AreaCascader ref="areaCascader" :cityAreaValue.sync="form.area" @getAddress="getAddress" />
      </template>
      <template v-slot:address>
        <div class="address-map">
          <CarMap ref="carMap" @getLngLat="getLngLat" :options="option_map" @mapLoad="mapLoad" />
        </div>
      </template>
    </CarForm>
    <!-- <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item prop="parkingName" label="停车场名称">
        <el-input v-model="form.parkingName"></el-input>
      </el-form-item>
      <el-form-item prop="area" label="区域">
        <AreaCascader ref="areaCascader" :cityAreaValue.sync="form.area" @getAddress="getAddress" />
      </el-form-item>
      <el-form-item prop="type" label="类型">
        <el-radio-group v-model.number="form.type">
          <el-radio
            v-for="item in $store.state.config.parking_type"
            :key="item.value"
            :label="item.value"
          >{{item.label}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item prop="carsNumber" label="可停放车辆">
        <el-input v-model.number="form.carsNumber"></el-input>
      </el-form-item>
      <el-form-item prop="status" label="禁启用">
        <el-radio-group v-model.number="form.status">
          <el-radio
            v-for="item in $store.state.config.radio_disabled"
            :key="item.value"
            :label="item.value"
          >{{item.label}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item prop="address" label="位置">
        <div class="address-map">
          <CarMap ref="carMap" @getLngLat="getLngLat" :options="option_map" @mapLoad="mapLoad" />
        </div>
      </el-form-item>
      <el-form-item prop="lnglat" label="经纬度">
        <el-input v-model="form.lnglat"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" :loading="submitLoading" @click="onSubmit">确定</el-button>
      </el-form-item>
    </el-form>-->
  </div>
</template>
<script>
import CarMap from '@/components/carMap/index.vue'
import AreaCascader from '@/components/AreaCascader'
import CarForm from '@/components/CarForm'
import { ParkingAdd, ParkingDetailed, ParkingEdit } from '@/api/parking'
export default {
  name: "ParkingAdd",
  components: { CarMap, AreaCascader, CarForm },
  data () {
    return {
      // 地图配置
      option_map: {
        mapLoad: true
      },
      formConfig: [
        { type: 'input', label: '停车场名称', prop: 'parkingName', placeholder: '请输入停车场名称', width: '200px' },
        { type: 'solt', slotName: 'city', label: '区域' },
        { type: 'radio', label: '类型', prop: 'type', options: this.$store.state.config.parking_type },
        { type: 'input', label: '可停放车辆', prop: 'carsNumber', placeholder: '可停放车辆数', width: '200px' },
        { type: 'radio', label: '禁启用', prop: 'status', options: this.$store.state.config.radio_disabled },
        { type: 'solt', slotName: 'address', label: '位置' },
        { type: 'input', label: '经纬度', prop: 'lnglat', width: '200px', disabled: true },
      ],
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
      submitLoading: false,
    }
  },
  methods: {
    // 地图加载完成再获取接口
    mapLoad () {
      this.getParkingDetailed()
    },
    // 获取详情
    getParkingDetailed () {
      // id不存在返回
      if (!this.id) return

      ParkingDetailed({ id: this.id }).then(res => {
        Object.keys(this.form).map(item => {
          this.form[item] = res.data[item]
        })

        // 设置覆盖物
        const splitLnglat = res.data.lnglat.split(",")
        const lnglat = {
          lng: splitLnglat[0],
          lat: splitLnglat[1]
        }
        this.$refs.carMap.setMarker(lnglat)

        // 初始化省市区
        this.$refs.areaCascader.initDefault(res.data.region)
      })
    },
    // 提交表单
    onSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.id ? this.editParking() : this.addParking()
        } else {
          return false
        }
      })
    },
    // 请求修改停车场接口
    editParking () {
      let requestData = JSON.parse(JSON.stringify(this.form))
      requestData.id = this.id
      this.submitLoading = true
      ParkingEdit(requestData).then(res => {
        // 重置表单
        this.resetForm()
        this.submitLoading = false
        this.$message({
          message: res.message,
          type: 'success'
        })
        this.$router.push({
          name: "parkingIndex"
        })
      }).catch(() => {
        this.submitLoading = false
      })
    },
    // 请求添加停车场接口
    addParking () {
      this.submitLoading = true
      ParkingAdd(this.form).then(res => {
        // 重置表单
        this.resetForm()
        this.submitLoading = false
        this.$message({
          message: res.message,
          type: 'success'
        })
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