const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
      "@ogre-tools/injectable": "var global.Injectable",
      "kukkuu": "var global.trayMenuItemInjectionToken",
        mobx: "var global.Mobx",
      },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
     mainFields: ["main"]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
      libraryTarget: "commonjs2",
  },
      node: {
      __dirname: false,
      __filename: false
    },
};
