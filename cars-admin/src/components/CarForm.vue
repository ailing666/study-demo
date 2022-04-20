<template>
  <el-form ref="form" v-loading="loading" element-loading-text="提交中..." :model="formData" label-width="120px">
    <el-form-item v-for="item in formConfig" :key="item.prop" :label="item.label" :prop="item.prop" :rules="item.rules">
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
        :aaaa="item.options"
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
      <!-- 禁启用 -->
      <el-radio-group v-if="item.type === 'disabled'" v-model="formData[item.prop]">
        <el-radio v-for="radio in radio_disabled" :label="radio.value" :key="radio.value">{{ radio.label }}</el-radio>
      </el-radio-group>
      <!-- 图片上传 -->
      <UpLoad v-else-if="item.type === 'upLoad'" :imgUrl="formData[item.prop]" :value.sync="formData[item.prop]" />
      <!-- 具名插槽，slotName要对应 ，data就是整行的数据-->
      <slot v-else-if="item.type === 'slot'" :name="item.slotName"></slot>
      <!-- 文本编辑器 -->
      <Wangeditor
        ref="editor"
        v-else-if="item.type === 'editor'"
        :context.sync="formData[item.prop]"
        v-model="formData[item.prop]"
      ></Wangeditor>
      <!-- 按钮 -->
      <el-radio-group v-if="item.type === 'radio'" v-model="formData[item.prop]">
        <el-radio v-for="v in item.options" :key="v.value" :label="v.value">{{ v.label }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button v-for="item in formButton" :key="item.key" :type="item.type" @click="item.handler && item.handler()">{{
        item.label
      }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import UpLoad from '@/components/upLoad'
import Wangeditor from '@/components/CarWangeditor.vue'
export default {
  name: 'CarForm',
  components: { Wangeditor, UpLoad },
  props: {
    formConfig: {
      type: Array,
      default: () => []
    },
    formButton: {
      type: Array,
      default: () => []
    },
    formData: {
      type: Object,
      default: () => {}
    },
    formLoading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      loading: false,
      // 禁启用数据
      radio_disabled: this.$store.state.config.radio_disabled
    }
  },
  watch: {
    formConfig: {
      handler () {
        this.initFormData()
      },
      immediate: true
    },
    formLoading (newV) {
      this.loading = newV
    }
  },
  methods: {
    // 初始化form
    initFormData () {
      this.formConfig.forEach(item => {
        // 传入必填就添加到rules
        if (item.required) this.rules(item)

        // 如果有自定义校验
        if (item.validator) item.rules = item.validator
      })
    },
    // 校验规则
    rules (item) {
      const typeMsg = {
        input: '请输入',
        radio: '请选择'
      }
      // 外部传入了就用外部的，否则就自己拼接
      const msg = item.rulesMsg || `${typeMsg[item.type]}${item.label}`
      const requiredRule = [{ required: true, message: msg, trigger: 'blur' }]
      // 如果有其他规则就拼接，否者就只有必填
      item.rules = item.rules ? requiredRule.concat(item.rules) : requiredRule
    },
    // 重置表单
    reset () {
      this.$refs.form.resetFields()
      this.$refs.editor && this.$refs.editor[0].clear()
    }
  }
}
</script>
<style lang="scss" scoped></style>
