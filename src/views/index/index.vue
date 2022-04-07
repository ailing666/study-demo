<template>
  <div>
    <Car />
    <AMap />
    <router-view>
      <User />
    </router-view>
  </div>
</template>

<script>
import AMap from "@/views/aMap"
import User from "@/views/user"
import Car from "@/views/car"
export default {
  name: "Index",
  components: { AMap, User, Car },
  data () {
    return {}
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
