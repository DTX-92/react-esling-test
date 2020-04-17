module.exports = {
   webpack: {
      configure: {
         optimization: {
            runtimeChunk: false,
            splitChunks: {
               cacheGroups: {
                  default: false,
               },
            },
         },
      },
   },
   eslint: {
      configure: {
         rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
         },
      },
   },
}
