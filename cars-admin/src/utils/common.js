import store from "@/store"
/**
 * 
 * @param {有,表示有小区否者没有} value 
 * @returns 
 */
const parkingAddress = (value) => {
  let address = value
  let addressInfo = ""
  if (address) {
    let split = address.split(",")
    addressInfo += split[0]
    // 街道
    if (split[1]) {
      addressInfo += `<br/>${split[1]}`
    }
  }
  return addressInfo
}

/**
 * 传入1返回室内，传入2返回室外
 * @param {1:室内,2室外} value 
 * @returns 
 */
const parkingType = (value) => {
  const data = store.state.config.parking_type_json[value]
  if (data) { return data.label }
}

export { parkingAddress, parkingType }