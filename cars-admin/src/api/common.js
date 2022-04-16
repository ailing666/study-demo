import service from "../utils/request"
/**
 * 获取城市列表
 */
export function GetCity (data = {}) {
  return service.request({
    method: "post",
    url: "/cityPicker/",
    data
  })
}

/**
 * 获取车辆品牌
 */
export function GetCarsBrand (data = {}) {
  return service.request({
    method: "post",
    url: "/common/getCarsBrand/",
    data
  })
}

/**
 * 获取停车场
 */
export function GetParking (data = {}) {
  return service.request({
    method: "post",
    url: "/common/getParking/",
    data
  })
}