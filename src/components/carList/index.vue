<template>
  <div class="cars-list">
    <!-- 头部 -->
    <header>
      <h4 class="car-logo fl fs-16">Mustang 2019款</h4>
      <p class="car-dec fr opacity-4">新能源汽车&nbsp; &nbsp;5座</p>
    </header>
    <!-- 中间内容 -->
    <main>
      <div class="car-info">
        <h5>粤 B745N8</h5>
        <section class="df">
          <ul class="car-electric active-8">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div class="car-mileage">
            <span>约</span>
            <strong class="mileage-number">600</strong>
            <span>KM</span>
          </div>
        </section>
      </div>
      <img src="../../assets/images/pic001.jpg" alt />
    </main>
    <!-- 底部 -->
    <footer>
      <a href="#" class="parking-link">某某停车场</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CarList',
  data () {
    return {
    }
  },
  methods: {}
}

</script>
<style lang='scss' scoped>
@import "./index.scss";
</style>

