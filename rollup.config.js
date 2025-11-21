import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
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
  typescript({
    tsconfig: './tsconfig.json',
    declaration: false,
    declarationMap: false,
  }),
];

export default [
  // ESM build
  {
    input: 'src/index.ts',
    output: {
      file: './dist/index.mjs',
      format: 'esm',
      banner,
      sourcemap: true,
    },
    external,
    plugins,
  },
  // CommonJS build
  {
    input: 'src/index.ts',
    output: {
      file: './dist/index.cjs',
      format: 'cjs',
      banner,
      sourcemap: true,
      exports: 'auto',
    },
    external,
    plugins,
  },
  // UMD build
  {
    input: 'src/index.ts',
    output: {
      file: './dist/index.js',
      format: 'umd',
      name: 'EChartsChain',
      banner,
      sourcemap: true,
      globals: {
        echarts: 'echarts',
      },
    },
    external,
    plugins,
  },
  // UMD build (minified)
  {
    input: 'src/index.ts',
    output: {
      file: './dist/index.min.js',
      format: 'umd',
      name: 'EChartsChain',
      banner,
      sourcemap: true,
      globals: {
        echarts: 'echarts',
      },
    },
    external,
    plugins: [...plugins, terser()],
  },
  // Types build - using TypeScript compiler
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'esm',
    },
    external,
    plugins: [
      typescript({
        tsconfig: './tsconfig.types.json',
        declaration: true,
        declarationMap: true,
        declarationDir: 'dist',
        emitDeclarationOnly: true,
      }),
    ],
  },
];
