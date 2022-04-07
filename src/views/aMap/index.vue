<template>
  <div>
    <div class='amap-wrapper'>
      <el-amap vid='amapContainer'></el-amap>
    </div>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap'
export default {
  name: "AMap",
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
    })
  },
};
</script>
<style lang="scss" scoped>
.amap-wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
