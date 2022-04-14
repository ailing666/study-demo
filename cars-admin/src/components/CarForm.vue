<template>
  <div>
    <el-form ref="form" label-width="120px">
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
          :disabled="item.disabled"
        ></el-input>
        <!-- 具名插槽，slotName要对应 ，data就是整行的数据-->
        <slot v-else-if="item.type === 'solt'" :name="item.slotName"></slot>
        <!-- 按钮 -->
        <el-radio-group v-if="item.type === 'radio'">
          <el-radio v-for="v in item.options" :key="v.value" :label="v.value">{{v.label}}</el-radio>
        </el-radio-group>
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
    }
  },
  data () {
    return {
    }
  },
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>