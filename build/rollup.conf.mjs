import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  plugins: [
    typescript(),
    nodeResolve(),
    babel(),
  ],
  output: [
    {
      format: 'umd',
      name: 'VuePrlx',
      exports: 'named',
      file: 'dist/index.js',
    },
    {
      format: 'esm',
      file: 'dist/index.esm.js',
    },
  ],
}