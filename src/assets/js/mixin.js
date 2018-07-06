import {mapGetters, mapMutations} from 'vuex'

export const productCate = {
  computed: {
    ...mapGetters(['productCategory','productCenter'])
  },
  methods: {
    ...mapMutations({SET_PRO_CATEGORY: 'SET_PRO_CATEGORY',SET_PRO_CENTER:'SET_PRO_CENTER'})
  }
};