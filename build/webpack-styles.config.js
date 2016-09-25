import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default (webpackConfig, config) => {
  const paths = config.utils_paths
  const { __DEV__, __PROD__ } = config.globals

  let CSS_LOADER = 'css?sourceMap'
  if (__PROD__) {
    CSS_LOADER += '&minimize'
  }
  if (__DEV__) {
    CSS_LOADER += '&-minimize'
  }

  webpackConfig.module.loaders.push({
    test    : /\.(css|pcss)$/,
    loaders : [
      'style',
      CSS_LOADER,
      'postcss'
    ]
  })
  //
  // webpackConfig.module.loaders.push({
  //   test    : /\.scss$/,
  //   loaders : [
  //     'style',
  //     CSS_LOADER,
  //     'postcss',
  //     'sass'
  //   ]
  // })

  webpackConfig.sassLoader = {
    includePaths : paths.client('styles')
  }

  webpackConfig.postcss = (webpack) => {
    return [
      require('precss')(),
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('postcss-cssnext')(),
      require('postcss-mixins')(),
      // add your 'plugins' here
      // ...
      // and if you want to compress,
      // just use css-loader option that already use cssnano under the hood
      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ]
  }

  if (!__DEV__) {
    webpackConfig.plugins.push(
      new ExtractTextPlugin('[name].[contenthash].css', {
        allChunks : true
      })
    )
  }

  return webpackConfig
}
