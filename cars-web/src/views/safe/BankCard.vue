<template>
  <div class="user">
    <HeaderBack title="添加银行卡" />
    <div class="cars-form-ui">
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.cardName" placeholder="开户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.bankName" placeholder="请选择开户银行"></el-input>
        </el-form-item>
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
  name: 'BankCard',
  data () {
    return {
      form: {
        cardName: '',
        bankName: '',
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