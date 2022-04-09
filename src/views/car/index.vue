<template>
  <div>
    <div class="cars-wrap">
      <swiper class="cars-swiper-container" :options="swiperOption">
        <swiper-slide>
          <CarList />
        </swiper-slide>
        <swiper-slide>
          <CarList />
        </swiper-slide>
        <swiper-slide>
          <CarList />
        </swiper-slide>
        <swiper-slide>
          <CarList />
        </swiper-slide>
        <swiper-slide>
          <CarList />
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import CarList from '@/components/carList'
export default {
  name: 'Car',
  components: { CarList, Swiper, SwiperSlide },
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
