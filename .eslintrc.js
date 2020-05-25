module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ['import', 'prettier', 'svelte3'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    'prettier/prettier': 'warn'
  },
  settings: {}
};
