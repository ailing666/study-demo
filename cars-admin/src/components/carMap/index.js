/**
 * 获取鼠标点击的经纬度
 * @param {事件对象，不用传默认有} e 
 * @returns 返回经度，维度，和
 */
const getLngLat = (e) => {
  return {
    lng: e.lnglat.lng,
    lat: e.lnglat.lat,
    value: e.lnglat.lng + ',' + e.lnglat.lat
  }
}

/**
 * 
 * @param {要查询的中文地址} address 
 * @param {地图实例} map 
 */
const geoCode = (address, map) => {
  const geocoder = new AMap.Geocoder()
  geocoder.getLocation(address, (status, result) => {
    if (status === "complete" && result.info == "OK") {
      let lat = result.geocodes[0].location.lat
      let lng = result.geocodes[0].location.lng
      map.setCenter([lng, lat])
    } else {
      log.error('根据地址查询位置失败')
    }
  })
}

export { getLngLat, geoCode }