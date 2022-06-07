import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import svgr from '@svgr/rollup'

export default [
  {
    input: {
      index: 'src/index.ts',
      SearchComponent: 'src/SearchComponent/index.tsx',
      PickerComponent: 'src/PickerComponent/index.tsx',
      StoreComponent: 'src/StoreComponent/index.tsx',
      UnifiedComponent: 'src/UnifiedComponent/index.tsx',
      Icon: 'src/Icon/index.tsx',
      LoadingSpinner: 'src/LoadingSpinner/index.tsx',
    },
    output: [
      {
        dir: 'dist',
        format: 'esm',
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({ clean: true, sourceMap: false }),
      postcss(),
      svgr(),
    ],
  },
  {
    input: {
      index: 'src/index.ts',
    },
    output: [
      {
        dir: 'dist',
        format: 'cjs',
      },
    ],
    plugins: [dts()],
  },
]
