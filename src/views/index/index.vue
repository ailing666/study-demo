<template>
  <div>
    <!-- <Car /> -->
    <AMap />
    <Navbar />
    <div id="children-view" :class="{'show-user' : isShow}">
      <router-view />
    </div>
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
