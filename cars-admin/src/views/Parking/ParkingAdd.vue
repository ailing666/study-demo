<template>
  <div>
    <CarForm ref="carForm" :formConfig="formConfig" :formData="formData" :formButton="formButton">
      <template v-slot:city>
        <AreaCascader
          ref="areaCascader"
          :cityAreaValue.sync="formData.area"
          @getAddress="getAddress"
        />
      </template>
      <template v-slot:address>
        <div class="address-map">
          <CarMap ref="carMap" @getLngLat="getLngLat" :options="option_map" @mapLoad="mapLoad" />
        </div>
      </template>
    </CarForm>
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
    // 自定义校验
    const validateNumber = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入可停放车辆数量'))
      } else {
        if (!Number(value)) {
          callback(new Error('车辆必须是数字'))
        }
        callback()
      }
    }
    return {
      // 地图配置
      option_map: {
        mapLoad: true
      },
      formConfig: [
        { type: 'input', label: '停车场名称', prop: 'parkingName', placeholder: '请输入停车场名称', width: '200px', required: true, rules: [{ min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }] },
        { type: 'slot', slotName: 'city', label: '区域' },
        { type: 'radio', label: '类型', prop: 'type', options: this.$store.state.config.parking_type, required: true },
        { type: 'input', label: '可停放车辆', prop: 'carsNumber', placeholder: '可停放车辆数', width: '200px', required: true, validator: [{ validator: validateNumber, trigger: 'blur' }] },
        { type: 'radio', label: '禁启用', prop: 'status', options: this.$store.state.config.radio_disabled, required: true, rulesMsg: '请选择禁用或启用' },
        { type: 'slot', slotName: 'address', label: '位置' },
        { type: 'input', label: '经纬度', prop: 'lnglat', width: '200px', disabled: true },
      ],
      formButton: [
        {
          label: "确定",
          key: "submit",
          type: "danger",
          handler: () => this.formValidate()
        },
        { label: "重置", key: "reset" }
      ],
      formData: {
        parkingName: "",
        area: "",
        type: "",
        carsNumber: "",
        address: "",
        status: "",
        lnglat: ""
      },
      id: this.$route.query.id,
      submitLoading: false,
    }
  },
  methods: {
    // 提交表单
    formValidate () {
      this.$refs.carForm.$refs.form.validate((valid) => {
        if (valid) {
          this.id ? this.editParking() : this.addParking()
        } else {
          return false
        }
      })
    },

    // 地图加载完成再获取接口
    mapLoad () {
      this.getParkingDetailed()
    },

    // 获取详情
    getParkingDetailed () {
      // id不存在返回
      if (!this.id) return

      ParkingDetailed({ id: this.id }).then(res => {
        Object.keys(this.formData).map(item => {
          this.formData[item] = res.data[item]
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

    // 请求修改停车场接口
    editParking () {
      let requestData = JSON.parse(JSON.stringify(this.formData))
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
          name: "ParkingIndex"
        })
      }).catch(() => {
        this.submitLoading = false
      })
    },

    // 请求添加停车场接口
    addParking () {
      this.submitLoading = true
      ParkingAdd(this.formData).then(res => {
        // 重置表单
        this.resetForm()
        this.submitLoading = false
        this.$message({
          message: res.message,
          type: 'success'
        })
        this.$router.push({
          name: "ParkingIndex"
        })
      }).catch(() => {
        this.submitLoading = false
      })
    },

    // 修改areaValue
    cityAreaValue (v) {
      this.formData.areaValue = v
    },

    // 获取经纬度
    getLngLat (v) {
      this.formData.lnglat = v.value
    },

    // 获取中文地址
    getAddress (address) {
      this.formData.address = address
      // 触发carMap组件事件
      this.$refs.carMap.setMapCenter(address)
    },

    // 重置表单
    resetForm () {
      this.$refs.carForm.$refs.form.resetFields()
      // 清除 cityAray 的值
      this.$refs.areaCascader.clear()
      // 清除地图覆盖物
      this.$refs.carMap.delMarker()
    },
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