/*! file
 * 用于vue spa应用数据预加载
 * @使用vue-router全局钩子，对数据进行预加载。
 * @对reject进行特殊处理
 * @提供一个加载条组件
 * @提供两个钩子: before,after
 */
import ProgressBar from './components/progress-bar'

/**
 * 创建并返回加载条组件实例
 * 并将其挂在至documnet.body
 * @param {*} Vue
 * @param {Component} ProgressBar
 */
const createProgressBar = function (Vue, ProgressBar) {
  const bar = new Vue(ProgressBar).$mount()
  document.body.appendChild(bar.$el)
  return bar
}

/**
 * 移除钩子函数
 * 只需要执行，便可以移除钩子
 * 此功能只能在vue-router@2.5.0+使用
 */
let hook = function () {}

/**
 * 插件安装函数
 */
const install = function (Vue, options = {}) {
  
  // 获取配置
  const {
    router,
    store,
    loading = ProgressBar,
    before = function () {},
    after = function () {}
  } = options
  
  // 创建加载条
  const bar = Vue.prototype.$bar = createProgressBar(Vue, loading)

  // 添加全局钩子
  hook = router.beforeResolve(function (to, from, next) {
    // 调起before
    before(to, from)
    // 开启加载条
    bar.start()
    // 抓取当前路由的全部组件
    const matched = router.getMatchedComponents(to)
    // 抓取上一次路由的全部组件
    const prevMatched = router.getMatchedComponents(from)
    // 组件筛查
    const hooks = matched.filter(c => prevMatched.findIndex(_ => _ === c))
    // 处理组件asyn钩子进行
    const asyncHooks = hooks.map(({asyncData}) => asyncData && asyncData({
      route: to,
      store
    }))
    // 筛选执行钩子集
    Promise.all(asyncHooks).then(() => {
      bar.finish()
      next()
    }).catch(({error = false, url}) => {
      bar.fail().finish()
      // 错误处理
      if (error && url) {
        router.replace(url)
      }
      next()
    }).finally(r => after(r))
  })
}

export default {
  install,
  delete () {
    hook()
  },
  ProgressBar
}
