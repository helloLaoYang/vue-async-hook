# vue-async-hook

- 一个vue单页应用预处理数据的插件

- 使用vue-router全局钩子，在页面加载前就进行数据预处理。

- 支持异步组件

# Usage

- 安装依赖

```bash
# install
npm install --save vue-async-hook

# or
yarn add vue-async-hook

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


# Options

- *`options[router]`

> vue-router实例

- `options[store]`

> vuex实例，将会被加入`asyncData(context)`。

- `options[loading]`

> 自定义加载过渡组件, 必需包含[`start`, `fail`, `finish`]三个函数

# asyncData([context])

- context[route] 即将前往的路由对象

- context[store] 组件安装时传入的vuex实例

- context[bar] 加载进度组件，可自己调节进度样式

- context[isRender] 是否为加载期

- context[from] 来源路由，`isRender`为`true`时为空

# 错误处理

> 请抛出一个错误的Promise实例，如果抛出的错误中含有routeConfig，则会进行路由拦截跳转。


```js
export default {
  asyncData () {
    return Promise.reject({
      route: {
        name: 'NotFind'
      }
    })
  }
}
// or
export default {
  sasyncData () {
    const err = new Error('error msg')
    err.route = {
      name: 'NotFind'
    }
    return Promise.reject(err)
  }
}
```