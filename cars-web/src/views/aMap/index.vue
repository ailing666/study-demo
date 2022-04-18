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
      center: [],
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
  methods: {
    initMap () {
      // 获取地图实例储存起来
      this.map = amapManager.getMap()
      var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 10000, //超过10秒后停止定位，默认：5s
        buttonPosition: 'RB', //定位按钮的停靠位置
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
        showCircle: false,
        markerOptions: { content: ' ' }
      })
      this.map.addControl(geolocation)
      geolocation.getCurrentPosition((status, result) => {
        if (status == 'complete') {
          const lat = result.position.lat
          const lng = result.position.lng
          this.circleData[0].center = [lng, lat]
        }
      })
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
