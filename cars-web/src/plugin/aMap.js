import Vue from "vue"
import AMap from "vue-amap"

Vue.use(AMap)
AMap.initAMapApiLoader({
  // 高德key
  key: "a7fa11f7d82f8a6a6b6fb63714cb3386",
  // 插件集合 （插件按需引入）
  plugin: ["AMap.Geolocation", "AMap.CircleEditor"],
  v: "1.4.4",
  uiVersion: "1.0.11", // ui版本号
})
