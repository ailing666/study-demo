<template>
  <div>
    <el-button
      style="margin-bottom:25px"
      @click="attrClick(item)"
      :type="currentBasisAttrs.id === item.id ? 'danger' : ''"
      v-for="item in basisAttrsList"
      :key="item.id"
      size="samll"
      >{{ item.value }}</el-button
    >
  </div>
</template>
<script>
import { GetCarsTypeBasis, GetCarsTypeList } from '@/api/carAttr.js'
export default {
  name: 'CarAttrItem',
  props: {
    isRequest: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // 基础属性列表
      basisAttrsList: [],
      // 当前的基础属性
      currentBasisAttrs: {}
    }
  },
  mounted() {
    this.getCarsAttrs()
  },
  methods: {
    // 获取基础的属性列表
    async getCarsAttrs() {
      const res = await GetCarsTypeBasis()
      this.basisAttrsList = res.data.data
    },
    // 点击按钮触发
    attrClick(data) {
      this.currentBasisAttrs = data
      // 默认是请求数据，如果为false就调用父组件的方法即可
      this.isRequest ? this.getTypeList(data.id) : this.$emit('getTypeList', data)
    },
    // 获取对应的属性列表
    async getTypeList(typeId) {
      // 请求自定义属性
      const res = await GetCarsTypeList({ typeId })
      this.$emit('getAttrsData', {
        attrsList: res.data.data,
        currentBasisAttrs: this.currentBasisAttrs
      })
    }
  }
}
</script>
<style lass="scss" scoped></style>
