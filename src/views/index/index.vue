<template>
  <div>
    <car />
    <aMap />
    <router-view>
      <user></user>
    </router-view>
  </div>
</template>

<script>
import aMap from "@/views/aMap"
import user from "@/views/user"
import car from "@/views/car"
export default {
  name: "Index",
  components: { aMap, user, car },
  data () {
    return {}
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
