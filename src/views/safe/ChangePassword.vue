<template>
  <div class="user">
    <HeaderBack title="修改登录密码" />
    <div class="cars-form-ui">
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.oldPassword" placeholder="原始密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.newPassword" placeholder="新密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.confirmPassword" placeholder="确认密码"></el-input>
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
  name: 'ChangePassword',
  data () {
    return {
      form: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        vCode: '',
      }
    }
  },
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>