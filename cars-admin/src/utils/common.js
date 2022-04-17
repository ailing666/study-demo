import store from '@/store'
/**
 *
 * @param {有逗号表示有小区否者没有} value
 * @returns
 */
const parkingAddress = value => {
  let address = value
  let addressInfo = ''
  if (address) {
    let split = address.split(',')
    addressInfo += split[0]
    // 街道
    if (split[1]) {
      addressInfo += `<br/>${split[1]}`
    }
  }
  return addressInfo
}

/**
 * 停车场类型
 * @param {1:室内,2室外} value
 * @returns
 */
const parkingType = value => store.state.config.parking_type_json[value].label

/**
 * 是否年检
 * @param {1:已年检,0:未年检} value
 * @returns
 */
const yearCheckType = value => store.state.config.year_check.find(item => item.value === Boolean(value)).label

/**
 * 能源类型
 * @param {1:电,2:油,3:混合动力} value
 * @returns
 */
const energyType = value => store.state.config.energyType.find(item => item.value === parseInt(value)).label

export { parkingAddress, parkingType, yearCheckType, energyType }
