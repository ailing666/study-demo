<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="停车场名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="区域">
      <AreaCascader @cityAreaValue="cityAreaValue" />
    </el-form-item>
    <el-form-item label="类型">
      <el-radio-group v-model="form.resource">
        <el-radio label="室内"></el-radio>
        <el-radio label="室外"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="可停放车辆">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="禁启用">
      <el-radio-group v-model="form.resource">
        <el-radio label="禁用"></el-radio>
        <el-radio label="启用"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="位置">
      <div class="address-map">
        <AMap @getLngLat="getLngLat" />
      </div>
    </el-form-item>
    <el-form-item label="经纬度">
      <el-input v-model="form.lngLat"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="danger" @click="onSubmit">确定</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import AMap from '@/components/aMap'
import AreaCascader from '@/components/AreaCascader'
export default {
  name: "ParkingAdd",
  components: { AMap, AreaCascader },
  data () {
    return {
      form: {
        name: '',
        region: '',
        areaValue: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        lngLat: ''
      },

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
      this.form.lngLat = v.value
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