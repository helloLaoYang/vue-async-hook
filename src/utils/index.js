
export const setTitle =function  (vm) {
  const { title } = vm.$options
  if (title) {
    document.title = typeof title === 'function'
      ? title.call(vm)
      : title
  }
}


export const createProgressBar = function (Vue, ProgressBar) {
  const bar = new Vue(ProgressBar).$mount()
  document.body.appendChild(bar.$el)
  return bar
}

