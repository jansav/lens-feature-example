const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    entry: './src/main.ts',
    externals: [
      { '@k8slens/extensions': 'var global.LensExtensions' },
      nodeExternals({ modulesDir: path.resolve(__dirname, '..', '..', 'node_modules') }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      mainFields: ['main']
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'commonjs2',
    },
    node: {
      __dirname: false,
      __filename: false
    },
  }
];
