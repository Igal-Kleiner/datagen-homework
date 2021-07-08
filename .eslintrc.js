module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    semi: ['error', 'never'],
    quotes: [
      'error', 'single', { allowTemplateLiterals: true, avoidEscape: true }
    ],
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-keywords': 'off',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-extra-parens': 'error',
    'no-import-assign': 'error',
    'no-template-curly-in-string': 'error',
    curly: 'error',
    camelcase: 'error',
    'dot-notation': ['error'],
    eqeqeq: [
      'error', 'always', {null: 'ignore'}
    ],
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'import/order': ['off'],

    /*'indent': ['error', 2, {
      'SwitchCase': 1
    }],*/
    'indent': 'off',
    'no-eq-null': 'error',
    'no-floating-decimal': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'warn',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'prefer-promise-reject-errors': ['error', {allowEmptyReject: true}],
    'require-await': 'error',
    'no-undef-init': 'error',
    'no-use-before-define': 'error',
    //'array-bracket-newline': ['error', { multiline: true, minItems: 3 }],
    'array-bracket-newline': ['off'],
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'never'],
    'brace-style': [
      'error', '1tbs', { allowSingleLine: true }
    ],
    'comma-dangle': ['off'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'func-style': ['error', 'expression'],
    'id-length': [
      'error', { exceptions: [
          'i', 'j', 'k', 'n'
        ], max: 50 }
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': [
      2,
      {
        singleLine: {
          beforeColon: false,
          afterColon: true
        },
        multiLine: {
          beforeColon: false,
          afterColon: true
        }
      }
    ],
    'keyword-spacing': [
      'error', {
        before: true,
        after: true,
        overrides: {
          'if': { after: true },
          'for': { after: true },
          'while': { after: true }
        }
      }
    ],

    // 'keyword-spacing': ['off'],
    'lines-around-comment': [
      'error', {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        allowArrayStart: true
      }
    ],
    'max-depth': ['error', 4],
    'max-len': [
      'error', {
        code: 120,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'max-lines-per-function': [
      'error', {
        max: 40,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-nested-callbacks': ['error', 3],
    'multiline-comment-style': ['error', 'bare-block'],
    'new-parens': 'error',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-bitwise': 'error',
    'no-mixed-operators': [
      'error',
      {
        groups: [
          [
            '+', '-', '*', '/', '%', '**'
          ],
          [
            '&', '|', '^', '~', '<<', '>>', '>>>'
          ],
          [
            '==', '!=', '===', '!==', '>', '>=', '<', '<='
          ],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: true
      }
    ],
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'no-multiple-empty-lines': 'error',
    'no-nested-ternary': 'error',
    'no-trailing-spaces': ['error', { skipBlankLines: true, ignoreComments: true }],
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',

    //'object-curly-newline': ['error', { multiline: true }],
    'object-curly-spacing': 'off',
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'prefer-exponentiation-operator': 'warn',
    'semi-spacing': 'error',
    'space-before-blocks': [
      'error', {
        functions: 'always',
        keywords: 'always',
        classes: 'always'
      }
    ],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'off',
    'switch-colon-spacing': 'error',
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': ['error', {destructuring: 'all'}],
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'vue/html-closing-bracket-newline': ['off'],
    'vue/html-self-closing': [
      'error', {
        html: {
          'void': 'always',
          'normal': 'always',
          'component': 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/attributes-order': [
      'error', {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
      }
    ],
    'vue/component-definition-name-casing': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      { registeredComponentsOnly: true }
    ],
    'vue/component-tags-order': [
      'error', {
        order: [
          'template', 'script', 'style'
        ]
      }
    ],
    'vue/eqeqeq': 'error',
    'vue/html-closing-bracket-spacing': [
      'error', {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }
    ],
    'vue/html-end-tags': 'error',
    'vue/html-indent': [
      'error', 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
      }
    ],
    'vue/html-quotes': [
      'error',
      'single',
      { avoidEscape: true }
    ],
    'vue/jsx-uses-vars': 'error',
    'vue/no-unused-vars': 'error',

    /*'vue/match-component-file-name': ['error', {
      extensions: ['vue'],
      shouldMatchCase: true
    }],*/
    'vue/max-attributes-per-line': [
      'error', {
        singleline: 4,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/max-len': [
      'error', {
        code: 120,
        template: 160,
        tabWidth: 2,
        comments: 120,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }
    ],
    'vue/multiline-html-element-content-newline': [
      'error', {
        ignoreWhenEmpty: true,
        ignores: [
          'pre', 'textarea', 'p'
        ],
      }
    ],
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-confusing-v-for-v-if': 'error',

    //'vue/no-custom-modifiers-on-v-model': 'error',
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-deprecated-slot-attribute': 'error',
    'vue/no-deprecated-slot-scope-attribute': 'error',
    'vue/no-dupe-keys': 'error',
    'vue/no-duplicate-attributes': 'error',
    'vue/no-irregular-whitespace': [
      'error', {
        skipComments: true,
      }
    ],
    'vue/no-multi-spaces': 'error',

    //'vue/no-multiple-template-root': 'error',
    'vue/no-parsing-error': 'error',

    //'vue/no-ref-as-operand': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/no-reserved-keys': 'error',
    'vue/no-static-inline-styles': [
      'error', {
        allowBinding: true
      }
    ],
    'vue/no-unsupported-features': [
      'error', {
        version: '^2.6.0',
      }
    ],
    'vue/no-unused-components': 'error',
    'vue/no-use-v-if-with-v-for': [
      'error', {
        allowUsingIterationVar: true
      }
    ],

    //'vue/no-v-model-argument': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/require-direct-export': 'error',
    'vue/script-indent': [
      'warn', 2, {
        'baseIndent': 1,
        'switchCase': 1
      }
    ],
    'vue/v-on-function-call': 'error',
  },
}
