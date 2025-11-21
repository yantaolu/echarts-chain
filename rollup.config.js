import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import * as fs from 'node:fs';

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
  commonjs(),
  terser(),
];

export default [
  {
    input: 'es/index.js',
    output: {
      file: './dist/index.min.js',
      format: 'umd',
      name: 'EChartsChain',
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
