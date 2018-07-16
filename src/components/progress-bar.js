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
  data () {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 3000,
      height: '2px',
      color: 'green',
      failedColor: 'red'
    }
  },
  methods: {
    start () {
      this.show = true;
      this.canSuccess = true;
      if (this.$timer) {
        clearInterval(this.$timer);
        this.percent = 0;
      }
      this.$cut = 10000 / Math.floor(this.duration);
      this.$timer = setInterval(() => {
        this.increase(this.$cut * Math.random());
        if (this.percent > 95) {
          this.finish();
        }
      }, 100);
      return this
    },
    set (num) {
      this.show = true;
      this.canSuccess = true;
      this.percent = Math.floor(num);
      return this
    },
    get () {
      return Math.floor(this.percent)
    },
    increase (num) {
      this.percent = this.percent + Math.floor(num);
      return this
    },
    decrease (num) {
      this.percent = this.percent - Math.floor(num);
      return this
    },
    finish () {
      this.percent = 100;
      this.hide();
      return this
    },
    pause () {
      clearInterval(this.$timer);
      return this
    },
    hide () {
      clearInterval(this.$timer);
      this.$timer = null;
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          setTimeout(() => {
            this.percent = 0;
          }, 200);
        });
      }, 500);
      return this
    },
    fail () {
      this.canSuccess = false;
      return this
    }
  }
};

/* script */
            const __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
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
  })
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-49756e96_0", { source: "\n.progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  -webkit-transition: width 0.2s, opacity 0.4s;\n  -moz-transition: width 0.2s, opacity 0.4s;\n  -o-transition: width 0.2s, opacity 0.4s;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n", map: {"version":3,"sources":["/Users/aaron/Workspace/github/vue-async-hook/src/components/progress-bar.vue"],"names":[],"mappings":";AAuFA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,6CAAA;EACA,0CAAA;EACA,wCAAA;EACA,qCAAA;EACA,WAAA;EACA,0BAAA;EACA,gBAAA;CACA","file":"progress-bar.vue","sourcesContent":["<template>\n  <div class=\"progress\" :style=\"{\n    'width': percent+'%',\n    'height': height,\n    'background-color': canSuccess? color : failedColor,\n    'opacity': show ? 1 : 0\n  }\"></div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      percent: 0,\n      show: false,\n      canSuccess: true,\n      duration: 3000,\n      height: '2px',\n      color: 'green',\n      failedColor: 'red'\n    }\n  },\n  methods: {\n    start () {\n      this.show = true\n      this.canSuccess = true\n      if (this.$timer) {\n        clearInterval(this.$timer)\n        this.percent = 0\n      }\n      this.$cut = 10000 / Math.floor(this.duration)\n      this.$timer = setInterval(() => {\n        this.increase(this.$cut * Math.random())\n        if (this.percent > 95) {\n          this.finish()\n        }\n      }, 100)\n      return this\n    },\n    set (num) {\n      this.show = true\n      this.canSuccess = true\n      this.percent = Math.floor(num)\n      return this\n    },\n    get () {\n      return Math.floor(this.percent)\n    },\n    increase (num) {\n      this.percent = this.percent + Math.floor(num)\n      return this\n    },\n    decrease (num) {\n      this.percent = this.percent - Math.floor(num)\n      return this\n    },\n    finish () {\n      this.percent = 100\n      this.hide()\n      return this\n    },\n    pause () {\n      clearInterval(this.$timer)\n      return this\n    },\n    hide () {\n      clearInterval(this.$timer)\n      this.$timer = null\n      setTimeout(() => {\n        this.show = false\n        this.$nextTick(() => {\n          setTimeout(() => {\n            this.percent = 0\n          }, 200)\n        })\n      }, 500)\n      return this\n    },\n    fail () {\n      this.canSuccess = false\n      return this\n    }\n  }\n}\n</script>\n\n<style>\n.progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  -webkit-transition: width 0.2s, opacity 0.4s;\n  -moz-transition: width 0.2s, opacity 0.4s;\n  -o-transition: width 0.2s, opacity 0.4s;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

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
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
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
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var progressBar = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

export default progressBar;
