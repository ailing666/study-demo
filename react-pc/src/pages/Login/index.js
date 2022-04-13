import { Card, Form, Input, Button, Checkbox } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import { useStore } from '@/store/index'
const Login = () => {
  const { loginStore } = useStore()
  const navigate = useNavigate()
  // 表单校验通过触发
  const onFinish = async (values) => {
    const { mobile, code } = values
    // 获取token
    await loginStore.getToken({ mobile, code })
    // 跳转到layout
    navigate('/', { replace: true })
  }
  // 表单校验失败触发
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form
          name="basic"
          initialValues={{ mobile: '13811111111', code: '246810', isChecked: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          validateTrigger={['onBlur']}
        >
          {/* pattern:匹配正则，validateTrigger：触发方式，需要在Form中添加该方式 */}
          <Form.Item
            name="mobile"
            rules={[{ required: true, message: '请输入手机号!' }, { pattern: /^1[3-9]\d{9}$/, message: '手机号格式有误!', validateTrigger: 'onBlur' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="code"
            rules={[{ required: true, message: '请输入密码!' }, { len: 6, message: '密码6个字符', validateTrigger: 'onBlur' }]}
          >
            <Input.Password maxLength={6} />
          </Form.Item>

          <Form.Item name="isChecked" valuePropName="checked">
            <Checkbox className="login-checkbox-label">我已阅读并同意「用户协议」和「隐私条款」</Checkbox>
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit" size="large" block>提交</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Login