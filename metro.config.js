const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')

const defaultConfig = getDefaultConfig(__dirname)

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    resolverMainFields: [
      'sbmodern',
      ...defaultConfig.resolver.resolverMainFields,
    ],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: process.env.APP_ENV === 'storybook' ? false : true,
      },
    }),
  },
}

module.exports = mergeConfig(defaultConfig, config)
