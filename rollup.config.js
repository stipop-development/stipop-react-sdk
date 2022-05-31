import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import svgr from '@svgr/rollup'

const packageJson = require('./package.json')

export default {
  input: {
    index: 'src/index.ts',
    SearchComponent: 'src/SearchComponent/index.tsx',
    PickerComponent: 'src/PickerComponent/index.tsx',
    StoreComponent: 'src/StoreComponent/index.tsx',
    Icon: 'src/Icon/index.tsx',
    LoadingSpinner: 'src/LoadingSpinner/index.tsx',
  },
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    svgr(),
  ],
}
