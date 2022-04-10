<template>
  <div class="user">
    <HeaderBack title="绑定手机号" />
    <div class="cars-form-ui">
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.phoneNumber" placeholder="预留手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="v-code">获取验证码</div>
          <el-input v-model="form.vCode" placeholder="手机验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPhone',
  data () {
    return {
      form: {
        phoneNumber: '',
        vCode: '',
      }
    }
  },
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>