<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item
        v-for="item in formConfig"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
      >
        <!-- input框 -->
        <el-input
          v-if="item.type === 'input'"
          :placeholder="item.placeholder"
          :style="{width:item.width}"
          v-model.trim="form[item.prop]"
          :disabled="item.disabled"
        ></el-input>
        <!-- 具名插槽，slotName要对应 ，data就是整行的数据-->
        <slot v-else-if="item.type === 'solt'" :name="item.slotName"></slot>
        <!-- 按钮 -->
        <el-radio-group v-if="item.type === 'radio'" v-model="form[item.prop]">
          <el-radio v-for="v in item.options" :key="v.value" :label="v.value">{{v.label}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button
          v-for="item in formButton"
          :key="item.key"
          :type="item.type"
          @click="item.handler"
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
    }
  },
  data () {
    return {
      form: {}
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
    initFormData () {
      const formData = {}
      this.formConfig.forEach(item => {
        if (item.prop) { formData[item.prop] = item.value || null }
      })
      this.form = formData
    }
  }
}

</script>
<style lang='scss' scoped>
</style>