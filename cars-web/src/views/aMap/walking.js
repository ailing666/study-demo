let walking = null
/**
 * 步行路径规划
 * @param {startPosition:开始的经纬度，endPosition结束的经纬度，complete路径获取成功执行的回调} parmas
 */
const getWalking = parmas => {
  if (!walking) {
    walking = new AMap.Walking({
      map: parmas.map
    })
  }
  //根据起终点坐标规划步行路线
  walking.search(parmas.startPosition, parmas.endPosition, (status, result) => {
    if (
      status === 'complete' &&
      parmas.complete &&
      typeof parmas.complete === 'function'
    ) {
      // 定位成功执行回调
      parmas.complete(result)
    }
  })
}
export { getWalking }
