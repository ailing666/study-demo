<template>
  <el-dialog
    :title="`新增${data.value}属性`"
    :visible.sync="dialogVisible"
    class="cars-dialog-center"
    @close="close"
    width="30%"
    @opened="opened"
    :close-on-click-modal="false"
  >
    <CarForm ref="carForm" :formConfig="formConfig" :formData="formData" :formButton="formButton"> </CarForm>
  </el-dialog>
</template>

<script>
import { CarsTypeAdd } from '@/api/carAttr.js'
import CarForm from '@/components/CarForm'
export default {
  name: 'addCarsAttrs',
  components: { CarForm },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      defult: () => ({})
    }
  },
  data () {
    return {
      // 弹窗显示/关闭标记
      dialogVisible: false,
      attrData: {},
      // 表单数据
      formData: {
        value: '',
        key: ''
      },
      // 表单配置
      formConfig: [
        {
          type: 'input',
          label: '文本',
          prop: 'value',
          required: true,
          rules: [{ min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }]
        },
        { type: 'input', label: '字段', prop: 'key', required: true }
      ],
      // 表单按钮
      formButton: [
        {
          label: '确定',
          key: 'submit',
          type: 'danger',
          handler: () => this.submit()
        }
      ]
    }
  },
  watch: {
    isVisible (newV) {
      this.dialogVisible = newV
    }
  },
  methods: {
    // 弹窗打开时
    opened () {},
    // 表单提交
    submit () {
      this.add()
    },

    // 添加
    add () {
      const requestData = {
        typeId: this.data.id,
        key: this.formData.key,
        value: this.formData.value
      }
      CarsTypeAdd(requestData).then(res => {
        console.log('res: ', res)
        this.$message({
          type: 'success',
          message: res.message
        })
        // 重置表单
        this.reset()
      })
    },

    // 重置表单
    reset () {
      this.$refs.carForm.reset()
    },

    // 弹窗关闭
    close () {
      this.$emit('update:isVisible', false)
      this.reset()
    }
  }
}
</script>
<style lang="scss" scoped></style>
