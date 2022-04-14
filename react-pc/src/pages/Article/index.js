import 'moment/locale/zh-cn'
import { Link } from 'react-router-dom'
import { Card, Table, Tag, Space, Breadcrumb, Form, Button, Radio, DatePicker, Select, Popconfirm } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import img404 from '@/assets/error.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { http } from '@/utils'
import { useStore } from '@/store/index'
import './index.scss'

const { Option } = Select
const { RangePicker } = DatePicker

const Article = () => {
  const navigate = useNavigate()
  const { channelStore } = useStore()
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
      render: () => <Tag color="green">审核通过</Tag>
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
            <Button type="primary" shape="circle" onClick={() => navigate(`/publish?id=${data.id}`)} icon={<EditOutlined />} />
            <Popconfirm
              title="确认删除该条文章吗?"
              onConfirm={() => delArticle(data)}
              okText="确认"
              cancelText="取消"
            >
              <Button
                type="primary"
                danger
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </Space>
        )
      }
    }
  ]

  // 文章列表数据管理
  const [articleList, setArticleList] = useState({ list: [], count: 0 })

  // 分页管理
  const [params, setParams] = useState({ page: 1, per_page: 10 })

  // 表格加载状态管理
  const [loading, setLoading] = useState(false)

  // 请求并设置文章列表
  const getArticleList = async (params) => {
    setLoading(true)
    const res = await http.get('/mp/articles', { params })
    setLoading(false)
    const { results, total_count } = res.data
    setArticleList({ list: results, count: total_count })
  }

  // 请求文章数据，需要依赖 params 值
  useEffect(() => { getArticleList(params) }, [params])

  // 表单提交
  const onFinish = (values) => {
    const { status, channel_id, date } = values
    const data = {
      ...params,
      status: status !== -1 && status,
      channel_id: channel_id,
      begin_pubdate: date && date[0].format('YYYY-MM-DD'),
      end_pubdate: date && date[1].format('YYYY-MM-DD')
    }
    setParams(data)
  }

  // 分页器
  const pageChange = (page) => {
    setParams({
      ...params,
      page
    })
  }

  // 删除文章
  const delArticle = async (data) => {
    await http.delete(`/mp/articles/${data.id}`)
    // 更新列表
    setParams({
      page: 1,
      per_page: 10
    })
  }
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
        <Form initialValues={{ status: -1 }} onFinish={onFinish}>
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
              {channelStore.channelList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
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
            rowKey="id"
            dataSource={articleList.list}
            columns={columns}
            loading={loading}
            pagination={{
              position: ['bottomRight'],
              current: params.page,
              pageSize: params.per_page,
              onChange: pageChange,
              total: articleList.count,
            }}
          />
        </Card>
      </div>
    </div>
  )
}

export default Article