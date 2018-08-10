import VueRouter from 'vue-router'
import routes from './routes'

export default () => {
  return new VueRouter({
    routes,
    mode:'history',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
  })
}
