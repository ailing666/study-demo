<template>
  <el-row :gutter="8">
    <el-col :span="8">
      <el-select v-model="searchKey" placeholder="请选择" @change="setKeyWord">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-col>
    <el-col :span="16">
      <el-input v-model="searchValue" placeholder="请输入关键字" @input="setKeyWord"></el-input>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'KeyWord',
  props: {
    searchOptions: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    searchOptions: {
      handler() {
        this.initOptions()
      },
      immediate: true
    }
  },
  data() {
    return {
      searchKey: '',
      searchValue: '',
      options: []
    }
  },
  methods: {
    // 初始化配置项
    initOptions() {
      let optionsItem = []
      this.searchOptions.forEach(item => {
        // 匹配传入的options字段
        const data = this.$store.state.config.keyword_options.filter(elem => elem.value == item)
        optionsItem = optionsItem.concat(data)
      })
      this.options = optionsItem
    },

    // 设置关键字
    setKeyWord() {
      this.$emit('update:value', {
        key: this.searchKey,
        value: this.searchValue
      })
    },

    // 清空关键字
    clear() {
      this.searchKey = ''
      this.searchValue = ''
    }
  }
}
</script>
<style lang="scss" scoped></style>
