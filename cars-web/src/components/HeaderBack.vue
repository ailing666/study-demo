
<template>
  <div class="header-back">
    <header class="nav-header">
      <div class="back" @click="goBack">
        <i class="icon"></i>
        <h4 class="title">{{ title }}</h4>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderBack',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}

</script>
<style lang="scss" scoped>
.header-back {
  position: relative;
  padding-bottom: 147px;
}
.nav-header {
  position: absolute;
  top: 21px;
  left: 0;
  right: 0;
  height: 40px;
  line-height: 40px;
}
.back {
  float: left;
}
.right-wrap {
  float: right;
}
.title {
  font-size: 16px;
  margin-left: 33px;
  color: #fff;
}
.icon {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 0;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 15px;
    display: block;
    width: 12px;
    height: 12px;
    border-left: 2px solid #00a3ff;
    border-top: 2px solid #00a3ff;
    @include webkitB(transform, rotate(-45deg));
    cursor: pointer;
  }
}
</style>
