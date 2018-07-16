# vue-async-hook

- 一个vue单页应用预处理数据的插件

- 使用vue-router全局钩子，在页面加载前就进行数据预处理。

- 支持异步组件

# Tips

- `delete`方法只适应于vue-router@2.5.0+。

- `options[router]`必须为vue-router实例。

# Usage

- 安装依赖

```bash
# install
npm install --save vue-async-hook
# or
yarn add vue-async-hook
# or
yarn add https://github.com/helloLaoYang/vue-async-hook.git
```

- 插件使用

```javascript
import Vue from 'vue'
import router from './router'
import VueAsyncHook from 'vue-async-hook'

Vue.use(VueAsyncHook, {
  router
})

```

- 移除钩子

```javascript

import VueAsyncHook from 'vue-async-hook'

const {delete} = VueAsyncHook

delete()

```

# Options

- *`options[router]`

> vue-router实例

- `options[store]`

> vuex实例，将会被加入`asyncData(context)`。

- `options[before]`

> 处理asyncData之前被执行的钩子。

- `options[after]`

> asyncData处理完全之后执行的钩子。


# asyncData([context])

- context[route] 即将前往的路由对象

- context[store] 组件安装时传入的vuex实例

# 错误处理

> 请抛出一个错误的Promise实例，如果抛出的错误中含有url以及error为true，则会进行路由拦截跳转。


```js
export default {
  asyncData () {
    return Promise.reject({
      error: true,
      url: '/404'
    })
  }
}
// or
export default {
  sasyncData () {
    const err = new Error('error msg')
    err.error = true
    err.url = '/404'
    return Promise.reject(err)
  }
}
```