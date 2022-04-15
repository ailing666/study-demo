<template>
  <div>
    <el-form ref="form" :model="formData" label-width="120px">
      <el-form-item
        v-for="item in formConfig"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        :rules="item.rules"
      >
        <!-- input框 -->
        <el-input
          v-if="item.type === 'input'"
          :placeholder="item.placeholder"
          :style="{width:item.width}"
          v-model.trim="formData[item.prop]"
          :disabled="item.disabled"
        ></el-input>
        <!-- 具名插槽，slotName要对应 ，data就是整行的数据-->
        <slot v-else-if="item.type === 'solt'" :name="item.slotName"></slot>
        <!-- 按钮 -->
        <el-radio-group v-if="item.type === 'radio'" v-model="formData[item.prop]">
          <el-radio v-for="v in item.options" :key="v.value" :label="v.value">{{v.label}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button
          v-for="item in formButton"
          :key="item.key"
          :type="item.type"
          @click="item.handler&&item.handler()"
        >{{item.label}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CarForm',
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
      default: () => { }
    }
  },
  data () {
    return {

    }
  },
  watch: {
    formConfig: {
      handler () {
        this.initFormData()
      }, immediate: true
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
        input: "请输入",
        radio: "请选择",
      }
      // 外部传入了就用外部的，否则就自己拼接
      const msg = item.rulesMsg || `${typeMsg[item.type]}${item.label}`
      const requiredRule = [{ required: true, message: msg, trigger: 'blur' }]
      // 如果有其他规则就拼接，否者就只有必填
      item.rules = item.rules ? requiredRule.concat(item.rules) : requiredRule
    }
  }
}

</script>
<style lang='scss' scoped>
</style>