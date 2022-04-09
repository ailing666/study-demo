<template>
  <div>
    <Car />
    <AMap />
    <Navbar />
    <router-view>
      <User />
    </router-view>
  </div>
</template>

<script>
import AMap from "@/views/aMap"
import User from "@/views/user"
import Car from "@/views/car"
import Navbar from '@/components/navBar'
export default {
  name: "Index",
  components: { AMap, User, Car, Navbar },
  data () {
    return {}
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
