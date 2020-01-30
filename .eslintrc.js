module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/standard', '@vue/typescript'],
    rules: {
        curly: 0,
        indent: 0,
        'arrow-parens': 0,
        'brace-style': 0,
        'comma-style': 0,
        'generator-star-spacing': 'off',
        'no-array-constructor': 0,
        'no-trailing-spaces': 0,
        'no-multiple-empty-lines': 0,
        'no-unused-vars': 0,
        'no-use-before-define': 0,
        'no-useless-escape': 0,
        'no-useless-constructor': 0,
        'no-undef': 0,
        'object-property-newline': 0,
        'prefer-const': 0,
        'space-before-function-paren': 0,
        'spaced-comment': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    }
}
