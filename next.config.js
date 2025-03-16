module.exports = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react']
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/',
          outputPath: 'static/'
        }
      }
    })
    return config
  }
}
