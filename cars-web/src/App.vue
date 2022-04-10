<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    document.addEventListener('mouseup', (e) => {
      e.preventDefault()
      // 获取到user
      const UserDom = document.getElementById('children-view')
      if (UserDom && !UserDom.contains(e.target)) {
        const routerName = this.$route.name
        if (routerName === "Index") { return false }
        this.$router.push({
          name: "Index"
        })
      }
    })

  },
  methods: {}
}

</script>
<style lang='scss' scoped>
#app {
}
</style>