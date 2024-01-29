const prettierConfig = require('./.prettierrc.cjs');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'prettier',
    'unused-imports',
    'simple-import-sort',
    '@typescript-eslint',
  ],
  settings: {
    react: {
      version: '18.2',
    },
  },
  extends: [
    'prettier',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['**/*.scss'],
  rules: {
    'comma-dangle': 'off',
    'no-unused-vars': 'off',
    'multiline-ternary': 'off',
    'no-use-before-define': 'off',
    'space-before-function-paren': 'off',
    'unused-imports/no-unused-imports': 'error',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-inferrable-types': 'off',
    'prettier/prettier': ['warn', prettierConfig],
    'react/jsx-sort-props': [
      'warn',
      {
        ignoreCase: false,
        shorthandFirst: true,
        callbacksLast: true,
        multiline: 'last',
        noSortAlphabetically: true,
        reservedFirst: ['key', 'ref'],
        locale: 'auto',
      },
    ],
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-restricted-imports': [
      'warn',
      {
        name: 'react-redux',
        importNames: ['useSelector', 'useDispatch'],
        message:
          'Use typed hooks `useAppDispatch` and `useAppSelector` instead.',
      },
      'warn',
      {
        name: '@emotion/react',
        importNames: ['useTheme', 'Theme', 'ThemeContext', 'ThemeProvider'],
        message: 'Use import from @mui/material instead.',
      },
    ],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@|components)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],
  },
};
