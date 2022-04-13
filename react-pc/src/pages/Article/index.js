import 'moment/locale/zh-cn'
import { Link } from 'react-router-dom'
import { Card, Table, Tag, Space, Breadcrumb, Form, Button, Radio, DatePicker, Select } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import img404 from '@/assets/error.png'
import { useEffect, useState } from 'react'
import { http } from '@/utils'
import './index.scss'

const { Option } = Select
const { RangePicker } = DatePicker

const Article = () => {
  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      width: 120,
      render: cover => {
        return <img src={cover || img404} width={80} height={60} alt="" />
      }
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 220
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: data => <Tag color="green">审核通过</Tag>
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate'
    },
    {
      title: '阅读数',
      dataIndex: 'read_count'
    },
    {
      title: '评论数',
      dataIndex: 'comment_count'
    },
    {
      title: '点赞数',
      dataIndex: 'like_count'
    },
    {
      title: '操作',
      render: data => {
        return (
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />} />
            <Button
              type="primary"
              danger
              shape="circle"
              icon={<DeleteOutlined />}
            />
          </Space>
        )
      }
    }
  ]

  // 频道列表管理
  const [channelsList, setChannels] = useState([])

  // 文章列表数据管理
  const [articleList, setArticleList] = useState({
    list: [],
    count: 0
  })

  // 分页管理
  const [params, setParams] = useState({
    page: 1,
    per_page: 10
  })

  // 请求并设置频道列表
  const getChannels = async () => {
    let res = await http.get('/channels')
    setChannels(res.data.channels)
  }

  // 请求并设置文章列表
  const getArticleList = async (params) => {
    const res = await http.get('/mp/articles', { params })
    const { results, total_count } = res.data
    setArticleList({ list: results, count: total_count })
  }

  // 初始化时请求频道数据
  useEffect(() => { getChannels() }, [])

  // 请求文章数据，需要依赖 params 值
  useEffect(() => { getArticleList(params) }, [params])

  return (
    <div>
      <Card
        title={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="/">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>内容管理</Breadcrumb.Item>
          </Breadcrumb>
        }
        style={{ marginBottom: 20 }}
      >
        <Form initialValues={{ status: -1 }}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={-1}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={1}>待审核</Radio>
              <Radio value={2}>审核通过</Radio>
              <Radio value={3}>审核失败</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="channel_id">
            <Select
              placeholder="请选择文章频道"
              style={{ width: 120 }}
            >
              {channelsList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            {/* 传入locale属性 控制中文显示*/}
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 80 }}>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <div>
        <Card title={`根据筛选条件共查询到 ${articleList.count} 条结果：`}>
          <Table
            rowKey="article"
            dataSource={articleList.list}
            columns={columns}
          />
        </Card>
      </div>
    </div>
  )
}

export default Article