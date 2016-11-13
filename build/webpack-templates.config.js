// import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default (webpackConfig, config) => {
  const paths = config.utils_paths
  // const { __DEV__, __PROD__ } = config.globals

  // let CSS_LOADER = 'css?sourceMap'
  // if (__PROD__) {
  //   CSS_LOADER += '&minimize'
  // }
  // if (__DEV__) {
  //   CSS_LOADER += '&-minimize'
  // }

  webpackConfig.module.loaders.push({
    test : /\.(html)$/,
    loaders : ['file?name=t/[name].[ext]', 'html-minify', 'extract', 'html'],
    include : paths.client('templates')
  })

  // webpackConfig.module.loaders.push({
  //   test : /\.(scss)$/,
  //   loaders : ['file?name=t/[name].[ext]', 'extract-loader', 'html'],
  //   include : paths.client('templates')
  // })

  return webpackConfig
}
