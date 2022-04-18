const state = {
  selfLocation: true
}
const mutations = {
  // selfLocation取反
  SELE_LOCATION (state) {
    state.selfLocation = !state.selfLocation
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
