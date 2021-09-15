// Rollup apparently requires a lot of plugins to replicate what webpack does out-of-box...
// this one makes rollup understand node_module resolution
import resolve from '@rollup/plugin-node-resolve';
// for replacing process.env.NODE_ENV (webpack does this automatically)
import replace from '@rollup/plugin-replace';
// for handling imports from commonjs
import commonjs from '@rollup/plugin-commonjs';
// for minifying
import { terser } from 'rollup-plugin-terser';

// make new plugin instances for each config in case it matters
const plugins = (mode) => [
  replace({
    'process.env.NODE_ENV': JSON.stringify(mode),
    preventAssignment: true,
  }),
  resolve(),
  commonjs(),
];

// https://www.rollupjs.org/guide/en/#configuration-files
export default [
  {
    input: 'lib/index.js',
    output: {
      file: 'dist/rollup-individual.js',
      format: 'iife',
    },
    plugins: plugins('development'),
  },
  {
    input: 'lib/index.js',
    output: {
      file: 'dist/rollup-individual.min.js',
      format: 'iife',
      plugins: [terser({ format: { max_line_len: 120 } })],
    },
    plugins: plugins('production'),
  },
  {
    input: 'lib/combined.js',
    output: {
      file: 'dist/rollup-combined.js',
      format: 'iife',
    },
    plugins: plugins('development'),
  },
  {
    input: 'lib/combined.js',
    output: {
      file: 'dist/rollup-combined.min.js',
      format: 'iife',
      plugins: [terser({ format: { max_line_len: 120 } })],
    },
    plugins: plugins('production'),
  },
];
