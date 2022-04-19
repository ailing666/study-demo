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
        ></el-amap-circle>
        <!-- 覆盖物 - 停车场 -->
        <el-amap-marker
          v-for="(item, index) in parking"
          :key="item.id"
          :content="item.content"
          :offset="item.offset"
          :position="item.position"
          :vid="index"
        ></el-amap-marker>
        <!--覆盖物 - 停车场 - 可停放数量-->
        <el-amap-marker
          v-for="(item, index) in parking"
          :extData="item"
          :key="item.id + index"
          :content="item.text"
          :offset="item.offsetText"
          :position="item.position"
          :vid="index"
          :events="item.events"
        ></el-amap-marker>
        <!--覆盖物 - 停车场 - 距离信息-->
        <el-amap-marker
          v-for="(item, index) in parkingInfo"
          zIndex="10000"
          :key="item.id"
          :content="item.text"
          :offset="item.offset"
          :position="item.position"
          :vid="index"
        ></el-amap-marker
      ></el-amap>
    </div>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from 'vue-amap'
import { selfLocation } from './location'
import { getWalking } from '@/views/aMap/walking.js'
let amapManager = new AMapManager()
export default {
  name: 'AMap',
  props: {
    parking: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      amapManager,
      // 地图实例
      map: null,
      // 缩放，值范围[3-18]
      zoom: 18,
      selfLng: '',
      selfLat: '',
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
      ],
      parkingInfo: []
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
      this.map.on('complete', () => {
        // 地图渲染完成回调
        this.$emit('mapLoad')
        this.setSelfLocation(this.map)
      })
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
      this.selfLng = lng + ''
      this.selfLat = lat + ''
      this.circleData[0].center = [lng, lat]
    },
    // 父组件调用方法
    handlerWalking (data) {
      // 步行路线规划
      getWalking({
        map: this.map,
        startPosition: [this.selfLng, this.selfLat],
        endPosition: data.lnglat.split(','),
        complete: val => this.handlerWalkingComlete(val, data)
      })
    },
    // 路径规划成功执行的回调
    handlerWalkingComlete (val, data) {
      this.parkingInfo = [
        {
          position: data.lnglat.split(','),
          text: `<div style='color: white; border-radius: 100px; padding: 0 10px; font-size: 12px; background-color: #34393f; line-height: 44px; height: 47px; width: 160px;'>
                    <span style="font-size: 16px; margin-right: 5px;">${data.carsNumber}</span>
                    辆车<span style="display: inline-block; height: 15px; width: 1px; background-color: white; opacity: 0.3; margin: 0 10px -3px;"></span>距离您${val.routes[0].distance}米
                  </div>`,
          offset: [-15, -54]
        }
      ]
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
