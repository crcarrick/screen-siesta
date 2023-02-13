// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)

module.exports = {
  ...config,
  transformer: {
    ...config.transformer,
    minifierConfig: {
      ...config.transformer.minifierConfig,
      topLevel: false,
      keep_classnames: true,
      keep_fnames: true,
      mangle: {
        ...config.transformer.minifierConfig.mangle,
        keep_classnames: true,
        keep_fnames: true,
      },
      output: {
        ...config.transformer.minifierConfig.output,
        ascii_only: true,
        quote_style: 3,
        wrap_iife: true,
      },
      sourceMap: {
        ...config.transformer.minifierConfig.sourceMap,
        includeSources: true,
      },
      compress: {
        ...config.transformer.minifierConfig.compress,
        reduce_funcs: false,
      },
    },
  },
}
