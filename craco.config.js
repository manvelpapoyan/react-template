/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = () => {
  const isProductionBuild = process.env.NODE_ENV === 'production'
  const analyzerMode = process.env.REACT_APP_INTERACTIVE_ANALYZE ? 'server' : 'json'

  const plugins = []

  if (isProductionBuild) {
    plugins.push(new BundleAnalyzerPlugin({ analyzerMode }))
  }

  return {
    webpack: {
      plugins,
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@theme': path.resolve(__dirname, 'src/theme'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@layout': path.resolve(__dirname, 'src/layout')
      }
    }
  }
}
