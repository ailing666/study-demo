<template>
  <div id="login">
    <div class="form-wrap">
      <ul class="menu-tab">
        <li
          @click="toggleHigh(i)"
          :class="{'current': currentTab === item.type}"
          v-for="(item,i) in tabList"
          :key="item.type"
        >{{ item.label }}</li>
      </ul>
      <el-form ref="form" :model="form" :rules="form_rules">
        <el-form-item prop="name">
          <label class="form-label">用户名</label>
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <label class="form-label">密码</label>
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item prop="passwords" v-show="currentTab === 'register'">
          <label class="form-label">确认密码</label>
          <el-input type="password" v-model="form.passwords"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <label class="form-label">验证码</label>
          <el-row :gutter="10">
            <el-col :span="14">
              <el-input v-model="form.code"></el-input>
            </el-col>
            <el-col :span="10">
              <el-button
                type="success"
                class="el-button-block"
                @click="getCodeFn()"
                :disabled="code_disabled"
                :loading="code_loading"
              >{{ code_text }}</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button
            type="danger"
            class="el-button-block"
            :disabled="submit_disabled"
            @click="submitForm('form')"
          >{{ currentTab === "login" ? "登录": "注册"}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import sha1 from "js-sha1"
import { validate_email, validate_password } from "@/utils/validate"
import { GetCode, Register } from "@/api/login"

export default {
  name: "Login",
  data () {
    /**
     * 自定义检验规则
     */
    // 检验邮箱
    const validate_name_rules = (rule, value, callback) => {
      let regEmail = validate_email(value)
      if (value === "") {
        callback(new Error("请输入邮箱"))
      } else if (!regEmail) {
        callback(new Error("邮箱格式不正确"))
      } else {
        callback()
      }
    }
    // 检验密码
    const validate_password_rules = (rule, value, callback) => {
      let regPassword = validate_password(value)
      if (value === "") {
        callback(new Error("请输入密码"))
      } else if (!regPassword) {
        callback(new Error("请入 >=6 并且 <= 20 位的密码，包含数字、字母"))
      } else {
        callback()
      }
    }
    // 检验确认密码
    const validate_passwords_rules = (rule, value, callback) => {
      let password_value = this.form.password
      if (this.currentTab === "login") {
        callback()
        return false
      }
      if (value === "") {
        callback(new Error("请输入确认密码"))
      } else if (password_value !== value) {
        callback(new Error("两次密码不一致，请重新输入"))
      } else {
        callback()
      }
    }
    // 检验验证码
    const validate_code_rules = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"))
      } else if (value.length !== 6) {
        callback(new Error("请输入长度为6位数的验证码"))
      } else {
        callback()
      }
    }
    return {
      tabIndex: 0,
      tabList: [
        { type: "login", label: "登录" },
        { type: "register", label: "注册" }
      ],
      form: {
        name: "",
        password: "",
        passwords: "",
        code: ""
      },
      code_text: '获取验证码',
      code_disabled: false,
      code_loading: false,
      timer: null,
      submit_disabled: true,
      form_rules: {
        name: [
          { validator: validate_name_rules, trigger: 'blur' }
        ],
        password: [
          { validator: validate_password_rules, trigger: 'blur' }
        ],
        passwords: [
          { validator: validate_passwords_rules, trigger: 'blur' }
        ],
        code: [
          { validator: validate_code_rules, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    currentTab () {
      return this.tabList[this.tabIndex].type
    }
  },
  methods: {
    toggleHigh (type) {
      this.tabIndex = type
    },
    // 倒计时
    countdown (number) {
      let second = number
      // 禁用按钮
      this.code_disabled = true
      // 按钮文本
      this.code_text = `倒计进${second}秒`
      this.timer = setInterval(() => {
        second--
        this.code_text = `倒计进${second}秒`
        if (second < 0) {
          this.code_text = `重新获取`
          // 启用按钮
          this.code_disabled = false
          clearInterval(this.timer)
        }
      }, 1000)
    },
    // 获取验证码方法
    getCodeFn () {
      if (this.form.name === "") {
        this.$message.error("邮箱不能为空！！")
        return false
      }
      if (!validate_email(this.form.name)) {
        this.$message({
          message: "邮箱格式有误，请重新输入！！",
          type: "error"
        })
        return false
      }
      let requestData = {
        username: this.form.name,
        module: this.currentTab
      }
      this.code_text = "发送中"
      this.code_loading = true
      GetCode(requestData).then(response => {
        this.$message({
          message: response.message,
          type: "success"
        })
        // 激活按钮
        this.submit_disabled = false
        // 清除加载
        this.code_loading = false
        // 执行倒计时方法
        countdown(60)
      }).catch(error => {
        this.code_text = "重新获取"
        this.code_loading = false
      })
    },

    // 提交表单
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        // 表单验证通过
        if (valid) {
          // 三元运算
          this.currentTab === 'login' ? this.login() : this.register()
        } else {
          return false
        }
      })
    },
    // 登录
    login () {
      const requestData = {
        username: this.form.name,
        password: sha1(this.form.password),
        code: this.form.code
      }
      this.$store.dispatch('app/loginAction', requestData).then(response => {
        this.$message({
          message: response.message,
          type: "success"
        })
        // 页面跳转
        this.$router.push({ name: 'ConsoleIndex' })
      }).catch(error => {
        // 重置数据
        reset()
      })
    },
    // 注册
    register () {
      const requestData = {
        username: this.form.name,
        password: sha1(this.form.password),
        code: this.form.code
      }
      Register(requestData).then(response => {
        this.$message({
          message: response.message,
          type: "success"
        })
        // 重置数据
        reset()
      }).catch(error => {
        // 重置数据
        reset()
      })
    },

    // 重置
    reset () {
      // 重置表单
      this.$refs["form"].resetFields()
      // 修改模块
      this.currentTab = "login"
      // 判断定时器是否存在，存在则清除
      if (this.timer) { clearInterval(this.timer) }
      // 还原获取验码按钮状态
      this.code_disabled = false
      this.code_text = "获取验证码"
    }
  },
};
</script>
<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
}
.form-wrap {
  width: 300px;
  padding-top: 100px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    padding: 10px 24px;
    margin: 0 10px;
    color: #fff;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    &.current {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
.form-label {
  display: block;
  color: #fff;
  font-size: 14px;
}
</style>