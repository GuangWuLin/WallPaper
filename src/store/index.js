import Vue from 'vue';
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
Vue.use(Vuex);
const state = {
    productCenter:[],
    projects:[],
    currentProduct:'',
    currentProject:''
}
export default new Vuex.Store({state, getters, mutations})
