
export const setTitle = function (title = null) {
  // 验证参数
  if (title instanceof String) {
    return
  }
  // 设置标题
  document.title = title
  // 兼容ios
  const $iframe = document.createElement('iframe')
  // set attribute
  $iframe.style.display = 'none'
  $iframe.src = '/favicon.ico'
  // load func
  const load = function () {
    setTimeout(function() {
      $iframe.removeEventListener('load', load)
      document.body.removeChild($iframe)
    }, 10)
  }
  // add load
  $iframe.addEventListener('load', load)
  // add i
  document.body.appendChild($iframe)
}

/**
 * 创建并返回加载条组件实例
 * 并将其挂在至documnet.body
 * @param {*} Vue
 * @param {Component} ProgressBar
 */
export const createProgressBar = function (Vue, ProgressBar) {
  const bar = new Vue(ProgressBar).$mount()
  document.body.appendChild(bar.$el)
  return bar
}

export const mergeArguments = function (target, {query, params}) {
  target = Object.assign({
    query,
    params
  }, target)
}
