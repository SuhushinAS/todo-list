const webpack = require('webpack');
const getIsProd = require('./get-is-prod');
const {parsed} = require('dotenv').config();

const customInterpolateName = (url) => {
  return url.toLowerCase();
};

const getPlugins = (options) => {
  const result = [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        ...parsed,
        NODE_ENV: options.mode,
      }),
    }),
    new webpack.IgnorePlugin({
      contextRegExp: /moment$/u,
      resourceRegExp: /^\.\/locale$/u,
    }),
  ];

  if (getIsProd(options.mode)) {
    result.push(
      new webpack.LoaderOptionsPlugin({
        debug: false,
        minimize: true,
        options: {customInterpolateName},
      })
    );
  }

  return result;
};

module.exports = (options) => {
  return {
    module: {
      rules: [
        {
          exclude: /node_modules/u,
          test: /\.(js|jsx|ts|tsx)$/u,
          use: [{loader: 'babel-loader', options: {cacheDirectory: true}}],
        },
      ],
    },
    plugins: getPlugins(options),
  };
};
