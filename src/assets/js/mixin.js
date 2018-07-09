import {mapGetters, mapMutations} from 'vuex'

export const Navs = {
  computed: {
    ...mapGetters(['productCenter','projects','currentProject','currentProduct'])
  },
  methods: {
    ...mapMutations({SET_PRO_CENTER:'SET_PRO_CENTER',SET_PROJECTS:'SET_PROJECTS',SET_CURRENT_PRODUCT:'SET_CURRENT_PRODUCT',SET_CURRENT_PROJECT:'SET_CURRENT_PROJECT'})
  }
};