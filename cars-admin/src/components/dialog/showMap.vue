<template>
  <div>
    <el-dialog
      title="新增车辆品牌"
      :visible="dialogVisible"
      class="cars-dialog-center"
      @close="close"
      @opened="opened"
      :close-on-click-modal="false"
    >
      <div style="height: 500px;">
        <AMap ref="aMap" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import AMap from '@/components/carMap/index.vue'
export default {
  name: 'ShowMap',
  components: { AMap },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    parkingData: {
      type: Object,
      default: () => { }
    }
  },
  methods: {
    // 弹窗显示时触发
    opened () {
      // 创建地图
      this.$refs.aMap.mapCreate()
      this.$nextTick(() => {
        const splitLnglat = this.parkingData.lnglat.split(',')
        // 添覆盖物
        this.$refs.aMap.setMarker({ lng: splitLnglat[0], lat: splitLnglat[1] })
      })
    },
    // 弹窗关闭时触发
    close () {
      this.$emit('update:dialogVisible', false)
      // 销毁地图
      this.$refs.aMap.mapDestroy()
    },
  }
}

</script>
<style lang='scss' scoped>
</style>