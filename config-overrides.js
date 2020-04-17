//const rewireEslint = require('react-app-rewire-eslint')

//const { useEslintRc } = require('customize-cra')

module.exports = function override(config, env) {
   //config = rewireEslint(config, env)
   //console.log('ESLINT111: ' + (config.useEslintrc ? 'TRUE' : 'FALSE'))

   config.optimization.splitChunks = {
      cacheGroups: {
         default: false,
      },
   }
   config.optimization.runtimeChunk = false

   config.output.filename = 'static/[name].js'
   config.plugins[5].options.filename = 'static/[name].css'

   return config
}
