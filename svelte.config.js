const sveltePreprocess = require("svelte-preprocess");

module.exports.preprocess = sveltePreprocess({
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          // No need for babel to resolve modules
          modules: false,
          targets: {
            // ! Very important. Target es6+
            esmodules: true
          }
        }
      ]
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      [
        '@babel/plugin-transform-runtime',
        {
          useESModules: true
        }
      ]
    ]
  },
  postcss: {
    plugins: [
      require('postcss-import'),
      require('autoprefixer')({
        flexbox: 'no-2009'
      }),
      require('postcss-flexbugs-fixes')()
    ]
  }
});