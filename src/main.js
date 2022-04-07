import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// 引入地图配置
import "@/plugin/aMap.js"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
