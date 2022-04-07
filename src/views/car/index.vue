<template>
  <div>
    Car
    <button @click="toUser">路由跳转</button>
  </div>
</template>

<script>
export default {
  name: 'Car',
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
</style>