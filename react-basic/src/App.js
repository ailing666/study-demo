import { Input, Table } from 'antd'
import React from 'react'
import './App.css'

const { Search } = Input

class App extends React.Component {
  state = {
    list: [],
    columns: [
      {
        title: '任务编号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '任务名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '任务描述',
        dataIndex: 'des',
        key: 'des',
      },
      {
        title: '操作',
        dataIndex: 'do',
        key: 'do',
      },
    ]
  }

  // 搜索
  onSearch = (value) => {
    console.log(value)
  }
  // 删除

  // 加载列表


  render () {
    return (
      <div className="container">
        <div className="search-box">
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={this.onSearch}
          />
        </div>
      </div>
    )
  }
}

export default App
