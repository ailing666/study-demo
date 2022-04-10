<template>
  <div>
    <h1 class="logo">
      <img src="../../../assets/logo.png" alt :class="{'mini-logo': collapse}" />
    </h1>
    <el-menu
      :collapse="collapse"
      :default-active="defalutActive"
      class="el-menu-vertical-demo"
      background-color="#344a5f"
      text-color="#fff"
      active-text-color="#fff"
      router
      unique-opened
    >
      <template v-for="(item, index) in router">
        <el-submenu v-if="!item.hidden" :key="item.id" :index="index + ''">
          <template slot="title">
            <svg-icon :icon="item.meta.icon" :className="item.meta && item.meta.iconClass"></svg-icon>
            <span>{{ item.meta ? item.meta.title : "" }}</span>
          </template>
          <template v-if="item.children && item.children.length > 0">
            <el-menu-item
              v-for="sub in item.children"
              :key="sub.id"
              :index="sub.path"
            >{{ sub.meta ? sub.meta.title : ""}}</el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "LayoutAside",
  components: {},
  props: {},
  computed: {
    // 监听路由变化
    defalutActive () {
      const route = this.$route
      return route.path
    },
    // 菜单
    collapse () {
      return this.$store.state.app.collapse
    },
    router () {
      return this.$router.options.routes
    }

  }
}
</script>
<style lang="scss" scoped>
.logo {
  img {
    margin: auto;
    height: 113px;
    @include webkit(transition, all 0.3s ease 0s);
  }
  .mini-logo {
    height: 50px;
  }
}
</style>