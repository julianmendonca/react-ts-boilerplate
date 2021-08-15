module.exports = {
   env: {
      browser: true,
      node: true,
      es2021: true,
   },
   extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
   },
   plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
   rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      quotes: ['error', 'single'],
      '@typescript-eslint/no-unused-vars': [
         'error',
         { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
      ],
      'jsx-quotes': ['error', 'prefer-single'],
      'prettier/prettier': [
         'error',
         {
            singleQuote: true,
            jsxSingleQuote: true,
            parser: 'flow',
            tabWidth: 3,
            semi: false,
         },
      ],
   },
}
