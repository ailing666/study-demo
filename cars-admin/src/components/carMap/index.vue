<template>
  <div class="amap-wrap">
    <el-amap vid="amapContainer"></el-amap>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap'
import { getLngLat, geoCode } from './index'

export default {
  name: "CarMap",
  data () {
    return {
      // 地图实例
      map: null,
      // 缩放，值范围[3-18]
      zoom: 18,
    }
  },
  mounted () {
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map('amapContainer', {
        // 设置中心点
        center: [121.59996, 31.197646],
        // 设置缩放
        zoom: this.zoom
      })

      this.map.on('click', (e) => {
        this.$emit('getLngLat', getLngLat(e))
      })
    })
  },
  methods: {
    // 设置地图中心点
    setMapCenter (address) {
      // 传入中文地址和实例
      geoCode(address, this.map)
    }
  },
};
</script>
<style lang="scss" scoped>
.amap-wrap {
  height: 100%;
}
</style>
