import { Layout, Menu, Popconfirm } from 'antd'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { useStore } from '@/store/index'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.scss'

const { Header, Sider } = Layout
const GeekLayout = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { userStore, loginStore } = useStore()

  // 请求用户信息
  useEffect(() => {
    userStore.getUserInfo()
  }, [userStore])

  // 退出登录
  const onLogout = () => {
    loginStore.loginOut()
    navigate('/login')
  }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userStore.userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onLogout}>
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          {/* location.pathname就是当前路由地址 */}
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={pathname}
            selectedKeys={pathname}
            style={{ height: '100%', borderRight: 0 }}
          >
            {/* key匹配上就会高亮 */}
            <Menu.Item icon={<HomeOutlined />} key="/">
              <Link to={'/'}>数据概览</Link>
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="/article">
              <Link to={'/article'}>内容管理</Link>
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="/publish">
              <Link to={'/publish'}>发布文章</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/* 二级路由出口 */}
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default observer(GeekLayout)