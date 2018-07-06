import Vue from 'vue';
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
Vue.use(Vuex);
const state = {
    productCategory:'提花挂画',
    productCenter:[]
}
export default new Vuex.Store({state, getters, mutations})
