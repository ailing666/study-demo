<template>
  <div>
    <!-- <Car /> -->
    <AMap />
    <Navbar />
    <router-view :class="{'show-user' : isShow}" />
  </div>
</template>

<script>
import AMap from "@/views/aMap"
import Car from "@/views/car"
import Navbar from '@/components/navBar'
export default {
  name: "Index",
  components: { AMap, Car, Navbar },
  data () {
    return {}
  },
  computed: {
    isShow () {
      console.log(this.$route.name)
      return this.$route.name === 'User'
    }
  },
  methods: {},
};
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
