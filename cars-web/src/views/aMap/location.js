let geolocation = null
const selfLocation = parmas => {
  if (!geolocation) {
    geolocation = new AMap.Geolocation({
      showMarker: false,
      showButton: false,
      enableHighAccuracy: true, //是否使用高精度定位，默认:true
      timeout: 10000, //超过10秒后停止定位，默认：5s
      zoomToAccuracy: true //定位成功后是否自动调整地图视野到定位点
    })
  }
  parmas.map.addControl(geolocation)
  geolocation.getCurrentPosition()

  if (parmas.complete && typeof parmas.complete === 'function') {
    AMap.event.addListener(geolocation, 'complete', parmas.complete)
  }
}

export { selfLocation }
