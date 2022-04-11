<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="停车场名称">
      <el-input v-model="form.parkingName"></el-input>
    </el-form-item>
    <el-form-item label="区域">
      <AreaCascader :cityAreaValue.sync="form.area" @getAddress="getAddress" />
    </el-form-item>
    <el-form-item label="类型">
      <el-radio-group v-model="form.type">
        <el-radio v-for="item in parkingType" :key="item.value" :label="item.value">{{item.label}}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="可停放车辆">
      <el-input v-model="form.carsNumber"></el-input>
    </el-form-item>
    <el-form-item label="禁启用">
      <el-radio-group v-model="form.status">
        <el-radio v-for="item in parkingStatus" :key="item.value" :label="item.value">{{item.label}}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="位置">
      <div class="address-map">
        <CarMap ref="carMap" @getLngLat="getLngLat" />
      </div>
    </el-form-item>
    <el-form-item label="经纬度">
      <el-input v-model="form.lnglat"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="danger" @click="onSubmit">确定</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import CarMap from '@/components/carMap/index.vue'
import AreaCascader from '@/components/AreaCascader'
export default {
  name: "ParkingAdd",
  components: { CarMap, AreaCascader },
  data () {
    return {
      form: {
        parkingName: "",
        area: "",
        address: "",
        type: "",
        carsNumber: "",
        status: "",
        lnglat: ""
      },
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
    onSubmit () {
      console.log('submit!', this.form)
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