<template>
  <div>
    <el-cascader v-model="value" :props="props" @change="areaChange"></el-cascader>
  </div>
</template>

<script>
import { GetCity } from '@/api/common'
export default {
  name: 'areaCascader',
  data () {
    return {
      value: '',
      // 请求到的区域对象
      areaData: {
        area: '',
        city: '',
        procince: ''
      },
      // 选中的中文地址
      address: [],
      props: {
        lazy: true,
        // 初始化就会执行一次
        lazyLoad: (node, resolve) => {
          // node 是点击的元素，value是值，level是第几层
          const { level, value } = node

          // 定义区域的Json
          const areaJson = {
            0: { type: 'province' },
            1: { type: 'city', keyName: 'province', },
            2: { type: 'area', keyName: 'city' },
          }
          const { type, keyName } = areaJson[level]

          // 定义请求数据
          let requestData = {}
          requestData.type = type
          // 省不需要传code,市和区需要
          level !== 0 && (requestData[`${keyName}_code`] = value)

          // 发送请求
          GetCity(requestData).then(res => {
            // 只有键名为value，label才能显示
            // leaf ：level >= 2 表示一共有三级
            let result = res.data.data.map(item => {
              return {
                value: item[`${type.toUpperCase()}_CODE`],
                label: item[`${type.toUpperCase()}_NAME`],
                leaf: level >= 2
              }
            })
            // 储存area值
            this.areaData[type] = result

            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve(result)
          })

          level !== 0 && this.getAddress(node)
        }
      }
    }
  },
  methods: {
    // 级联选择器改变时触发
    areaChange (v) {
      this.$emit("update:cityAreaValue", v.join())
      // 最后一个节点
      const lastNode = this.areaData.area.find(item => item.value === v[v.length - 1])
      this.getAddress(lastNode)
    },

    // 获取选中的中文地址
    getAddress (node) {
      this.address.push(node.label)
      if (this.address.length === 3) {
        this.$emit('getAddress', this.address.join(''))
        this.address = []
      }
    }
  }
}

</script>
<style lang='scss' scoped>
</style>