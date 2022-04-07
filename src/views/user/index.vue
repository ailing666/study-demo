<template>
  <div class="user" :class="{'show-user' : isShow}">user</div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
    }
  },
  computed: {
    isShow () {
      return this.$route.name === 'User'
    }
  },
  methods: {}
}

</script>
<style lang='scss' scoped>
.user {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 410px;
  z-index: 101;
  background-color: #32383c;
}

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