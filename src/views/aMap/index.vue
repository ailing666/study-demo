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
      map: null,
      zoom: 18,
    }
  },
  mounted () {
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map('amapContainer', {
        center: new AMap.LngLat(121.59996, 31.197646)
      })
    })
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.amap-wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
