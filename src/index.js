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
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    let diffed = false
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c))
    })
    const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _)
    if (!asyncDataHooks.length) {
      return next()
    }

    bar.start()
    Promise.all(asyncDataHooks.map(hook => hook({
      store,
      from,
      route: to,
      bar,
      isRender: true
    }))).then(() => {
        bar.finish()
        next()
      }).catch(({ redirect }) => {
        if (redirect) {
          router.replace(redirect)
        }
        bar.fail()
        bar.finish()
        next()
      })
  })



  // add update hook
  Vue.mixin({
    mounted () {
      setTitle(this)
    },
    beforeRouteUpdate (to, from, next) {
      const { asyncData } = this.$options
      if (!(asyncData instanceof Function)) {
        next()
        return
      }
      bar.start()
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
      }).catch(next)
    }
  })
}

export default {
  install
}
