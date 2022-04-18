<template>
  <div>
    <div class="amap-wrapper">
      <el-amap
        vid="amapContainer"
        :amap-manager="amapManager"
        :center="center"
        :zoom="zoom"
        :events="events"
        class="amap-demo"
      >
        <!--覆盖物 - 圆-->
        <el-amap-circle
          v-for="item in circleData"
          :key="item.id"
          :center="item.center"
          :radius="item.radius"
          :fillColor="item.color"
          :strokeColor="item.color"
          :strokeOpacity="item.strokeOpacity"
          :strokeWeight="item.strokeWeight"
        ></el-amap-circle
      ></el-amap>
    </div>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from 'vue-amap'
import { selfLocation } from './location'
let amapManager = new AMapManager()
export default {
  name: 'AMap',
  data () {
    return {
      amapManager,
      // 地图实例
      map: null,
      // 缩放，值范围[3-18]
      zoom: 18,
      center: [114.085947, 22.547],
      events: {
        init: () => {
          lazyAMapApiLoaderInstance.load().then(() => {
            this.initMap()
          })
        }
      },
      circleData: [
        {
          center: [114.085947, 22.547],
          radius: 4,
          color: '#393e43',
          strokeOpacity: 0.2,
          strokeWeight: 30
        }
      ]
    }
  },
  watch: {
    '$store.state.location.selfLocation' () {
      this.setSelfLocation(this.map)
    }
  },
  methods: {
    // 初始化地图
    initMap () {
      // 获取地图实例储存起来
      this.map = amapManager.getMap()
      this.setSelfLocation(this.map)
    },
    // 设置自身定位
    setSelfLocation (map) {
      selfLocation({
        map,
        complete: val => this.onComplete(val)
      })
    },
    // 获取定位成功回调
    onComplete (data) {
      const { lng, lat } = data.position
      this.circleData[0].center = [lng, lat]
    }
  }
}
</script>
<style lang="scss" scoped>
.amap-wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
