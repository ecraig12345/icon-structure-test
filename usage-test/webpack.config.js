// @ts-check
const path = require('path');

/** @type {import('webpack').Configuration} */
const commonOptions = {
  // disable sourcemaps/etc since it doesn't matter here
  devtool: false,
  optimization: {
    // Terser is the minimizer used by default in production mode. Normally you wouldn't need to
    // mess with this, I just wanted to tweak the output for demo purposes (and for some reason
    // there's no simpler way to do this while preserving defaults)
    minimizer: [
      {
        apply: (compiler) => {
          const TerserPlugin = require('terser-webpack-plugin');
          new TerserPlugin({
            extractComments: false,
            terserOptions: { format: { max_line_len: 120 } },
          }).apply(compiler);
        },
      },
    ],
  },
};

/** @type {import('webpack').Configuration[]} */
module.exports = [
  {
    // note: path under "lib" assumes build has been run
    entry: './lib/index.js',
    // Tree-shake but don't minify.
    // Note: tree-shaking works because the package.json of fake react-icons has `"sideEffects": false`.
    // This tells webpack that none of the files in the package have side effects (like setting up
    // global state, e.g. calling initializeIcons() in fluent v8). So it will still parse all of the
    // files that are referenced by imports/exports, but it will only include things in the final
    // bundle if they're actually used.
    mode: 'development',
    output: {
      filename: 'webpack-individual.js',
      path: path.resolve(__dirname, 'dist'),
    },
    ...commonOptions,
  },
  {
    entry: './lib/index.js',
    // minify
    mode: 'production',
    output: {
      filename: 'webpack-individual.min.js',
      path: path.resolve(__dirname, 'dist'),
    },
    ...commonOptions,
  },
  {
    entry: './lib/combined.js',
    mode: 'development',
    output: {
      filename: 'webpack-combined.js',
      path: path.resolve(__dirname, 'dist'),
    },
    ...commonOptions,
  },
  {
    entry: './lib/combined.js',
    mode: 'production',
    output: {
      filename: 'webpack-combined.min.js',
      path: path.resolve(__dirname, 'dist'),
    },
    ...commonOptions,
  },
];
