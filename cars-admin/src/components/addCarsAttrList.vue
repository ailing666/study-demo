<template>
  <div>
    <CarAttrItem @getAttrsData="getAttrsData" />
    <el-row :gutter="15">
      <el-col :span="6" style="margin-bottom:16px" v-for="item in attrsList" :key="item.id">
        <span style="float:left;">{{ item.value }}</span>
        <el-input
          style="float:right;width:230px"
          v-model="attrItem[currentBasisAttrs.key][item.key]"
          :placeholder="item.value"
        ></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CarAttrItem from '@c/CarsAttrItem.vue'
export default {
  name: 'AddCarsAttrList',
  components: { CarAttrItem },
  data() {
    return {
      // 自定义属性列表
      attrsList: [],
      // 基础属性列表
      currentBasisAttrs: [],
      // 将自定义属性列表和基础属性列表格式化后的对象
      attrItem: {}
    }
  },
  methods: {
    // 获取父组件来的属性数据
    getAttrsData(data) {
      this.attrsList = data.attrsList
      this.currentBasisAttrs = data.currentBasisAttrs
      this.attrFormat()
    },

    // 格式化属性
    attrFormat() {
      // 自定义属性为空时，不执行
      if (this.attrsList.length === 0) return false

      // 基础属性的 key
      const attrBasisKey = this.currentBasisAttrs.key

      // 判断属性集合是否存在 基础属性的key，存在则不处理
      if (this.attrItem[attrBasisKey]) return false

      // 处理自定义属性
      const attrJson = {}
      // 将自定义属性的key挂载到attrJson上，初始值为''
      this.attrsList.forEach(item => (attrJson[item.key] = ''))
      // 用$set将attrJson赋值给当前的基础属性上
      this.$set(this.attrItem, attrBasisKey, attrJson)
    },
    // 父组件调用，更新value
    setAttrList() {
      this.$emit('update:value', JSON.stringify(this.attrItem))
    }
  }
}
</script>
<style lang="scss" scoped></style>
