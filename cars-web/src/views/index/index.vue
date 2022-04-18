<template>
  <div>
    <!-- <Car /> -->
    <AMap :parking="parking" @mapLoad="mapLoad" />
    <Navbar />
    <div id="children-view" :class="{ 'show-user': isShow }">
      <router-view />
    </div>
    <!-- login -->
    <Login></Login>
  </div>
</template>

<script>
import AMap from '@/views/aMap'
import Car from '@/views/car'
import Navbar from '@/components/NavBar'
import { Parking } from '@/api/parking.js'
import Login from './Login.vue'
export default {
  name: 'Index',
  components: { AMap, Car, Navbar, Login },
  data () {
    return {
      parking: []
    }
  },
  computed: {
    isShow () {
      return this.$route.name === 'User'
    }
  },
  methods: {
    mapLoad () {
      this.getParking()
    },
    async getParking () {
      const res = await Parking()
      const data = res.data.data
      data.forEach(item => {
        // 定位
        item.position = item.lnglat.split(',')
        // 覆盖物内容
        item.content = `<img src="${require('@/assets/images/parking_location_img.png')}"/>`
        // 覆盖物偏移量
        item.offset = [-35, -60]
        // 覆盖文字偏移量
        item.offsetText = [-30, -55]
        // 覆盖文字样式
        item.text = `<div style="width: 60px; font-size: 20px; color: #fff; text-align: center;line-height: 50px; height: 60px;">${item.carsNumber}</div>`
      })
      this.parking = data
      console.log('this.patking: ', this.patking)
    }
  }
}
</script>
<style lang="scss" scoped>
.show-user {
  animation: userSlide 0.5s;
}

// userSlide 滑动动画
@keyframes userSlide {
  from {
    right: -410px;
  }
  to {
    right: 0;
  }
}
</style>
