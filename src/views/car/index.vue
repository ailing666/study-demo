<template>
  <div>
    <div class="cars-wrap">
      <CarList />
    </div>
    <!-- <button @click="toUser">路由跳转</button> -->
  </div>
</template>

<script>
import CarList from '@/components/carList'
export default {
  name: 'Car',
  components: { CarList },
  data () {
    return {
    }
  },
  methods: {
    toUser () {
      console.log('this.$router: ', this.$route)
      this.$router.push(this.$route.name === 'Index' ? '/user' : '/')
    }
  }
}

</script>
<style lang='scss' scoped>
.cars-wrap {
  position: fixed;
  left: 0;
  bottom: 94px;
  right: 0;
  z-index: 11;
}
</style>