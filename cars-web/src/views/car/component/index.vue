<template>
  <div>
    <!-- 车辆卡片 -->
    <section class="cars-item">
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
        <img src="../../../assets/images/pic001.jpg" alt />
      </main>
      <!-- 底部 -->
      <footer>
        <a href="#" class="parking-link">某某停车场</a>
      </footer>
    </section>
    <!-- 车辆详情 -->
    <section class="cars-item cars-detailed" :style="'height:' + height">
      <div>
        <h4 class="cars-detailed-parking">某某停车场</h4>
        <i class="close"></i>
      </div>
      <header>
        <h4 class="car-logo fl fs-16">Mustang 2019款</h4>
        <p class="car-dec fr opacity-4">新能源汽车&nbsp; &nbsp;5座</p>
      </header>
      <img src="../../../assets/images/pic001.jpg" width="100%" alt />
      <div class="car-info clearfix">
        <h5 class="fl" style="fontSize:24px">粤 B745N8</h5>
        <section class="df fr">
          <div class="car-mileage">
            <span>约</span>
            <strong class="mileage-number">600</strong>
            <span>KM</span>
          </div>
        </section>
      </div>
      <div class="cars-electric-warp">
        <div class="cars-electric-bg">
          <div class="cars-electric-high" style="width:80%"></div>
        </div>
      </div>
      <p class="info">取车约支付12.0元停车费，实际补贴12.0元</p>
      <ul class="car-rental-time">
        <li>
          <span>日租车</span>
          <span>￥300/1天</span>
        </li>
        <li>
          <span>3日租车</span>
          <span>￥499.00/3天</span>
        </li>
        <li>
          <span>5日租车</span>
          <span>￥799.00/5天</span>
        </li>
        <li>
          <span>小时租车</span>
          <span>￥99.00/1小时</span>
        </li>
      </ul>
      <div class="car-insurance clearfix">
        <p class="fl">参保《全面保障服务》用车更放心</p>
        <!-- 激活：current -->
        <i class="current"></i>
      </div>
      <a href="javascript: void(0);" class="select-car-btn">预约用车</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CarList',
  props: {
    height: {
      type: String,
      default: "257px"
    }
  },
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

