import babel from 'rollup-plugin-babel'
import VuePlugin from 'rollup-plugin-vue'

export default [{
  input: 'package/progress-bar.vue',
  output: {
    file: 'src/components/progress-bar.js',
    format: 'es'
  },
  plugins: [
    VuePlugin()
  ]
}, {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'es'
  },
  external: [],
  plugins: [
    babel(),
    VuePlugin()
  ]
}]
