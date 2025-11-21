import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('./package.json'));

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * (c) 2023-${new Date().getFullYear()}
 * @license ${pkg.license}
 */`;

const external = [...Object.keys(pkg.peerDependencies || {})];

const plugins = [
  resolve({
    preferBuiltins: true,
  }),
  typescript(),
  commonjs(),
  terser(),
];

export default [
  {
    input: 'src/index.ts',
    output: {
      file: './dist/index.min.js',
      format: 'umd',
      name: 'EChartsChain',
      exports: 'named',
      banner,
      sourcemap: false,
      globals: {
        echarts: 'echarts',
      },
    },
    external,
    plugins,
  },
];
