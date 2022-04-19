import Vue from 'vue'
import AMap from 'vue-amap'

Vue.use(AMap)
AMap.initAMapApiLoader({
  // 高德key
  key: '13b914a086c6e5af342dbd21eb67197e',
  // 插件集合 （插件按需引入）
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor',
    'AMap.Geolocation',
    'AMap.Walking'
  ],
  v: '1.4.4',
  uiVersion: '1.0.11' // ui版本号
})
