import service from '../utils/request'
/**
 * 获取停车场
 */
export function Parking (data = {}) {
  return service.request({
    method: 'post',
    url: `${process.env.VUE_APP_API_WEB}/parking/`,
    data
  })
}
