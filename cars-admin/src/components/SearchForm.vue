<template>
  <el-form inline ref="form" :model="formData">
    <el-form-item v-for="item in formConfig" :key="item.prop" :label="item.label" :prop="item.prop">
      <!-- input框 -->
      <el-input
        v-if="item.type === 'input'"
        :placeholder="item.placeholder"
        :style="{ width: item.width }"
        v-model.trim="formData[item.prop]"
        :disabled="item.disabled"
      ></el-input>
      <!-- 下拉框 -->
      <el-select
        v-if="item.type === 'select'"
        v-model.trim="formData[item.prop]"
        :placeholder="item.placeholder"
        :style="{ width: item.width }"
        :disabled="item.disabled"
      >
        <el-option
          v-for="selectItem in item.options"
          :key="selectItem.value || selectItem[item.select_vlaue]"
          :value="selectItem.value || selectItem[item.select_vlaue]"
          :label="selectItem.label || selectItem[item.select_label]"
        ></el-option>
      </el-select>
      <!-- 具名插槽，slotName要对应 ，data就是整行的数据-->
      <slot v-else-if="item.type === 'slot'" :name="item.slotName"></slot>
      <!-- 城市 -->
      <div v-if="item.type === 'city'"><AreaCascader ref="city" :cityAreaValue.sync="cityValue"></AreaCascader></div>
      <!-- 城市 -->
      <div v-else-if="item.type === 'keyWord'">
        <KeyWord ref="keyWord" :value.sync="keyWord" :searchOptions="['parkingName', 'address']"></KeyWord>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button @click="search">搜索</el-button>
      <!-- 是否要重置按钮 -->
      <el-button v-if="config && config.resetButton" @click="reset">重置</el-button>
      <template v-for="item in formButton">
        <!-- 路由跳转按钮 -->
        <el-button v-if="item.element === 'link'" :key="item.key" :type="item.type">
          <router-link :to="item.router">
            <span style="color:#fff;">{{ item.label }}</span>
          </router-link>
        </el-button>
        <!-- 按钮 -->
        <el-button
          v-if="item.element === 'button'"
          :key="item.key"
          :type="item.type"
          @click="item.handler && item.handler()"
        >
          {{ item.label }}
        </el-button>
      </template>
    </el-form-item>
  </el-form>
</template>

<script>
import AreaCascader from '@/components/AreaCascader'
import KeyWord from '@/components/KeyWord'
export default {
  name: 'SearchForm',
  props: {
    formConfig: {
      type: Array,
      default: () => []
    },
    formButton: {
      type: Array,
      default: () => []
    },
    config: {
      type: Object,
      default: () => {}
    }
  },
  components: { AreaCascader, KeyWord },
  data() {
    return {
      formData: {},
      cityValue: '',
      keyWord: {}
    }
  },
  watch: {
    formConfig: {
      handler() {
        this.initFormData()
      },
      immediate: true
    }
  },
  methods: {
    // 搜索
    search() {
      const searchData = {}

      for (const key in this.formData) {
        // 剔除空值
        if (this.formData[key]) searchData[key] = this.formData[key]
      }
      // 关键字处理
      const { key, value } = this.keyWord
      if (this.$refs.keyWord && key && value) searchData[key] = value

      // 城市处理
      if (this.$refs.city && this.cityValue) searchData.area = this.cityValue

      this.$emit('search', searchData)
    },
    // 初始化form
    initFormData() {
      const felid = {}
      this.formConfig.forEach(item => {
        if (item.prop) {
          felid[item.prop] = ''
        }
        // 初始化下拉框值
        item.type === 'select' && (item.options = this.$store.state.config[item.options])
      })
      this.formData = felid
    },
    // 重置表单
    reset() {
      this.$refs.form.resetFields()
      // 关键字处理
      this.$refs.keyWord && this.$refs.keyWord[0].clear()

      // 城市处理
      this.$refs.city && this.$refs.city[0].clear()

      this.formData = {}
    }
  }
}
</script>
<style lang="scss" scoped></style>
