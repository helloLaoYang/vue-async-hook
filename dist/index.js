//
//
//
//
//
//
//
//
//

var script = {
  data: function data() {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 3000,
      height: '2px',
      color: 'green',
      failedColor: 'red'
    };
  },

  methods: {
    start: function start() {
      var _this = this;

      this.show = true;
      this.canSuccess = true;
      if (this.$timer) {
        clearInterval(this.$timer);
        this.percent = 0;
      }
      this.$cut = 10000 / Math.floor(this.duration);
      this.$timer = setInterval(function () {
        _this.increase(_this.$cut * Math.random());
        if (_this.percent > 95) {
          _this.finish();
        }
      }, 100);
      return this;
    },
    set: function set(num) {
      this.show = true;
      this.canSuccess = true;
      this.percent = Math.floor(num);
      return this;
    },
    get: function get() {
      return Math.floor(this.percent);
    },
    increase: function increase(num) {
      this.percent = this.percent + Math.floor(num);
      return this;
    },
    decrease: function decrease(num) {
      this.percent = this.percent - Math.floor(num);
      return this;
    },
    finish: function finish() {
      this.percent = 100;
      this.hide();
      return this;
    },
    pause: function pause() {
      clearInterval(this.$timer);
      return this;
    },
    hide: function hide() {
      var _this2 = this;

      clearInterval(this.$timer);
      this.$timer = null;
      setTimeout(function () {
        _this2.show = false;
        _this2.$nextTick(function () {
          setTimeout(function () {
            _this2.percent = 0;
          }, 200);
        });
      }, 500);
      return this;
    },
    fail: function fail() {
      this.canSuccess = false;
      return this;
    }
  }
};

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "progress",
    style: {
      width: _vm.percent + "%",
      height: _vm.height,
      "background-color": _vm.canSuccess ? _vm.color : _vm.failedColor,
      opacity: _vm.show ? 1 : 0
    }
  });
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-49756e96_0", { source: "\n.progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  -webkit-transition: width 0.2s, opacity 0.4s;\n  -moz-transition: width 0.2s, opacity 0.4s;\n  -o-transition: width 0.2s, opacity 0.4s;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n", map: { "version": 3, "sources": ["/Users/aaron/Workspace/github/vue-async-hook/src/components/progress-bar.vue"], "names": [], "mappings": ";AAuFA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,6CAAA;EACA,0CAAA;EACA,wCAAA;EACA,qCAAA;EACA,WAAA;EACA,0BAAA;EACA,gBAAA;CACA", "file": "progress-bar.vue", "sourcesContent": ["<template>\n  <div class=\"progress\" :style=\"{\n    'width': percent+'%',\n    'height': height,\n    'background-color': canSuccess? color : failedColor,\n    'opacity': show ? 1 : 0\n  }\"></div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      percent: 0,\n      show: false,\n      canSuccess: true,\n      duration: 3000,\n      height: '2px',\n      color: 'green',\n      failedColor: 'red'\n    }\n  },\n  methods: {\n    start () {\n      this.show = true\n      this.canSuccess = true\n      if (this.$timer) {\n        clearInterval(this.$timer)\n        this.percent = 0\n      }\n      this.$cut = 10000 / Math.floor(this.duration)\n      this.$timer = setInterval(() => {\n        this.increase(this.$cut * Math.random())\n        if (this.percent > 95) {\n          this.finish()\n        }\n      }, 100)\n      return this\n    },\n    set (num) {\n      this.show = true\n      this.canSuccess = true\n      this.percent = Math.floor(num)\n      return this\n    },\n    get () {\n      return Math.floor(this.percent)\n    },\n    increase (num) {\n      this.percent = this.percent + Math.floor(num)\n      return this\n    },\n    decrease (num) {\n      this.percent = this.percent - Math.floor(num)\n      return this\n    },\n    finish () {\n      this.percent = 100\n      this.hide()\n      return this\n    },\n    pause () {\n      clearInterval(this.$timer)\n      return this\n    },\n    hide () {\n      clearInterval(this.$timer)\n      this.$timer = null\n      setTimeout(() => {\n        this.show = false\n        this.$nextTick(() => {\n          setTimeout(() => {\n            this.percent = 0\n          }, 200)\n        })\n      }, 500)\n      return this\n    },\n    fail () {\n      this.canSuccess = false\n      return this\n    }\n  }\n}\n</script>\n\n<style>\n.progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  -webkit-transition: width 0.2s, opacity 0.4s;\n  -moz-transition: width 0.2s, opacity 0.4s;\n  -o-transition: width 0.2s, opacity 0.4s;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n</style>\n"] }, media: undefined });
};
/* scoped */
var __vue_scope_id__ = undefined;
/* module identifier */
var __vue_module_identifier__ = undefined;
/* functional template */
var __vue_is_functional_template__ = false;
/* component normalizer */
function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

  {
    component.__file = "/Users/aaron/Workspace/github/vue-async-hook/src/components/progress-bar.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    var hook = void 0;
    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        var originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var progressBar = __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

var setTitle = function setTitle(vm) {
  var title = vm.$options.title;

  if (title) {
    document.title = typeof title === 'function' ? title.call(vm) : title;
  }
};

var createProgressBar = function createProgressBar(Vue, ProgressBar) {
  var bar = new Vue(ProgressBar).$mount();
  document.body.appendChild(bar.$el);
  return bar;
};

/*! 
 * 用于vue spa应用数据预加载
 * 
 * @author: helloLaoYang
 * 
 */

var install = function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var router = options.router,
      store = options.store,
      _options$loading = options.loading,
      loading = _options$loading === undefined ? progressBar : _options$loading;

  // create loading bar

  var bar = Vue.prototype.$bar = createProgressBar(Vue, loading);

  // add lanuch hook
  router.beforeResolve(function (to, from, next) {
    var matched = router.getMatchedComponents(to);
    var prevMatched = router.getMatchedComponents(from);
    var diffed = false;
    var activated = matched.filter(function (c, i) {
      return diffed || (diffed = prevMatched[i] !== c);
    });
    var asyncDataHooks = activated.map(function (c) {
      return c.asyncData;
    }).filter(function (_) {
      return _;
    });
    if (!asyncDataHooks.length) {
      return next();
    }

    bar.start();
    Promise.all(asyncDataHooks.map(function (hook) {
      return hook({
        store: store,
        from: from,
        route: to,
        bar: bar,
        isRender: true
      });
    })).then(function () {
      if (redirect) {
        router.replace(redirect);
      }
      bar.finish();
      next();
    }).catch(function (_ref) {
      var redirect = _ref.redirect;

      if (redirect) {
        router.replace(redirect);
      }
      bar.fail();
      bar.finish();
      next();
    });
  });

  // add update hook
  Vue.mixin({
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
      var _this = this;

      var _$options$asyncData = this.$options.asyncData,
          asyncData = _$options$asyncData === undefined ? function () {} : _$options$asyncData;

      Promise.all([asyncData({
        route: to,
        from: from,
        store: store,
        bar: bar,
        isRender: false
      })]).then(function (r) {
        setTitle(_this);
        next();
      }).catch(function (_ref2) {
        var route = _ref2.route;

        if (route) {
          router.replace(route);
        }
        setTitle(_this);
        next();
      });
    }
  });
};

var index = {
  install: install
};

export default index;
