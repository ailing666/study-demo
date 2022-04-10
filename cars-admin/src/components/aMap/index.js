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

export { getLngLat }