/*! 
 * 用于vue spa应用数据预加载
 * 
 * @author: helloLaoYang
 * 
 */
import ProgressBar from './components/progress-bar'
import { setTitle, createProgressBar } from './utils/index'

const install = function (Vue, options = {}) {

  const { router, store, loading = ProgressBar } = options

  // create loading bar
  const bar = Vue.prototype.$bar = createProgressBar(Vue, loading)


  // add lanuch hook
  router.beforeResolve(function (to, from, next) {
    bar.start()
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    const hooks = matched.filter(c => prevMatched.findIndex(_ => _ === c))
    const asyncHooks = hooks.map(({asyncData}) => asyncData && asyncData({
      route: to,
      store,
      bar,
      isRender: true
    }))
    Promise.all(asyncHooks).then(() => {
      bar.finish()
      next()
    }).catch(({ route }) => {
      bar.fail()
      bar.finish()
      if (route) {
        router.replace(route)
      }
      next()
    })
  })



  // add update hook
  Vue.mixin({
    beforeRouteUpdate (to, from, next) {
      const { asyncData = function () {} } = this.$options
      Promise.all([
        asyncData({
          route: to,
          from,
          store,
          bar,
          isRender: false
        })
      ]).then(r => {
        setTitle(this)
        next()
      }).catch(({ route }) => {
        if (route) {
          router.replace(route)
        }
        setTitle(this)
        next()
      })
    }
  })

}

export default {
  install
}
