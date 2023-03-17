import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript' 

export default {
  input: 'src/index.ts',
  plugins: [
    typescript(),
    nodeResolve(),
    babel(),
    terser(), // uglifyjs alternative with es6 support
  ],
  output: {
    format: 'umd',
    name: 'VuePrlx',
    exports: 'named',
    file: 'dist/index.min.js',
  },
}