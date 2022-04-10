<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="停车场名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="区域">
      <el-cascader v-model="form.area" :options="options" :props="{ expandTrigger: 'hover' }"></el-cascader>
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
        <AMap />
      </div>
    </el-form-item>
    <el-form-item label="经纬度">
      <el-input v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="danger">确定</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import AMap from '@/components/aMap'
export default {
  name: "ParkingAdd",
  components: { AMap },
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      options: [
        {
          value: 1111,
          label: "广东省",
          children: [
            {
              value: 1111,
              label: "深圳市",
            },
            {
              value: 1111,
              label: "广州市",
            }
          ]
        },
        {
          value: 1111,
          label: "广西省",
          children: [
            {
              value: 1111,
              label: "南宁市",
              children: [
                {
                  value: "2222",
                  label: "八步镇"
                }
              ]
            }
          ]
        }
      ],
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
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