import * as types from './mutation-types'

const mutations = {
    [types.SET_PRO_CATEGORY](state, data) {
    state.productCategory = data
  },
  [types.SET_PRO_CENTER](state, data) {
    state.productCenter = data
  },
}
export default mutations;