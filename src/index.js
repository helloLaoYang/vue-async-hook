/*! file
 * 用于vue spa应用数据预加载
 * @使用vue-router全局钩子，对数据进行预加载。
 * @对reject进行特殊处理
 * @提供设置标题的方法
 * @提供合并路由参数的功能
 * @提供两个钩子: before,after
 */
import {
  setTitle,
  createProgressBar,
  mergeArguments
} from './utils/index'
import ProgressBar from './components/progress-bar'

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
    title = false,
    merge = false, 
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
    // 进行参数合并
    if (merge) {
      mergeArguments(to, from)
    }
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
      store,
      bar
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
    }).finally(r => {
      // 进行标题处理
      if (title) {
        const {title: toTitle = null} = to.mata
        setTitle(toTitle)
      }
      // 调起钩子函数
      after(r)
    })
  })
}

// export set title
export const title = setTitle

// export default
export default {
  install,
  delete () {
    hook()
  }
}
