'use strict';

const webpack = require('webpack');
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VendorChunkPlugin = require('webpack-vendor-chunk-plugin');
const autoprefixer = require('autoprefixer');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools-configuration');
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig);

const dirs = {
  root: path.resolve(__dirname, '../'),
  dist: path.resolve(__dirname, '../dist'),
  src: path.resolve(__dirname, '../src'),
  sass: path.resolve(__dirname, '../src/sass'),
  nodeModules: path.resolve(__dirname, '../node_modules')
};

const WebPackConfig = {
  entry: {
    main: [
      './src/client.js'
    ],
    vendor: ['react', 'react-dom', 'redux-connect', 'react-helmet', 'redux-thunk',
        'react-router-redux', 'react-router', 'react-i18next', 'classnames',
        'core-js', 'lodash', 'babel-polyfill', 'redux-logger', 'regenerator-runtime',
        'i18next', 'i18next-xhr-backend']
  },
  output: {
    path: dirs.dist,
    filename: 'js/[name]-[hash].js',
    chunkFilename: 'js/[name]-[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file'
      },
      {
        test: /.jsx?$/, // Match both .js and .jsx
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      // Why is the loader string style needed?
      // https://github.com/halt-hammerzeit/webpack-isomorphic-tools/issues/14
      // https://github.com/postcss/postcss-loader/issues/33
      // http://stackoverflow.com/questions/28223040/window-not-defined-error-when-using-extract-text-webpack-plugin-react
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style',
          'css!postcss!sass?indentedSyntax=true&sourceMap=true')
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?sourceMap=true')
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=10240'
      }
    ]
  },
  sassLoader: {
    includePaths: [dirs.sass, dirs.nodeModules]
  },
  postcss: function postcss() {
    return {
      defaults: [autoprefixer({ browsers: ['last 2 versions', 'ie >= 9', '> 2%'] })]
    };
  },
  plugins: [
    new CleanPlugin([dirs.dist], {
      root: dirs.root
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets/favicon.ico',
        to: 'favicon.ico'
      },
      {
        from: 'src/translations',
        to: 'locales'
      }
    ]),
    new ExtractTextPlugin('css/[name]-[chunkhash].css', {
      allChunks: true
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      failOnError: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name]-[hash].js',
      minChunks: Infinity
    }),
    new VendorChunkPlugin('vendor')
  ]
};

//
// DEVELOPMENT
//
if (process.env.NODE_ENV !== 'production') {
  WebPackConfig.devtool = 'source-map';
  WebPackConfig.plugins.push(new webpack.DefinePlugin({
    __CLIENT__: true,
    __DEVELOPMENT__: true,
    __DEVTOOLS__: true
  }));
  WebPackConfig.plugins.push(webpackIsomorphicToolsPlugin.development());
}

//
// PRODUCTION
//
if (process.env.NODE_ENV === 'production') {
  WebPackConfig.resolve.alias = {
    'react': 'react-lite',
    'react-dom': 'react-lite'
  };

  WebPackConfig.plugins.push(new webpack.optimize.DedupePlugin());
  WebPackConfig.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
  WebPackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
  WebPackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
    __CLIENT__: true,
    __DEVELOPMENT__: false,
    __DEVTOOLS__: false
  }));
  WebPackConfig.plugins.push(webpackIsomorphicToolsPlugin);
}

module.exports = WebPackConfig;
