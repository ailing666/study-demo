<template>
  <div class="amap-wrap">
    <el-amap vid="amapContainer"></el-amap>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap'
import { getLngLat, geoCode, addMarker, removeMarker } from './index'

export default {
  name: 'CarMap',
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      // 地图实例
      map: null,
      // 缩放，值范围[3-18]
      zoom: 18,
      lnglat: null
    }
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      this.mapCreate()
      this.map.on('click', e => {
        this.lnglat = getLngLat(e)
        this.setMarker()
        this.$emit('getLngLat', getLngLat(e))
      })
    })
  },
  methods: {
    // 创建地图
    mapCreate() {
      this.map = new AMap.Map('amapContainer', {
        center: [116.404765, 39.918052],
        zoom: this.zoom //初始化地图层级
      })

      this.map.on('complete', () => {
        this.mapLoad()
      })
    },

    // 地图加载完成
    mapLoad() {
      if (this.options && this.options.mapLoad) {
        this.$emit('mapLoad')
      }
    },

    // 销毁地图
    mapDestroy() {
      this.map && this.map.destroy()
    },

    // 设置地图中心点
    setMapCenter(address) {
      geoCode(address, this.map)
    },

    // 添加地图覆盖物
    setMarker(lnglat) {
      addMarker(lnglat || this.lnglat, this.map)
    },

    // 清除覆盖物
    delMarker() {
      removeMarker(this.map)
    }
  }
}
</script>
<style lang="scss" scoped>
.amap-wrap {
  height: 100%;
}
</style>
