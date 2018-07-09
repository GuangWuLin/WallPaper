import * as types from './mutation-types'

const mutations = {
  [types.SET_PRO_CENTER](state, data) {
    state.productCenter = data
  },
  [types.SET_PROJECTS](state, data) {
    state.projects = data
  },
  [types.SET_CURRENT_PRODUCT](state, data) {
    state.currentProduct = data
  },
  [types.SET_CURRENT_PROJECT](state, data) {
    state.currentProject = data
  },
}
export default mutations;