module.exports = {
    'extends': [
        // 使用 Taro 插件推荐的规则
        'taro/react',
        // 使用 ESLint 推荐的规则
        'eslint:recommended',
        // 使用 React 插件推荐的规则
        'plugin:react/recommended',
        // 使用 React Hooks 插件推荐的规则
        'plugin:react-hooks/recommended',
        // 兼容 Prettier，避免格式化冲突
        'prettier',
    ],
    'rules': {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/no-commonjs': 'off',
        'react/jsx-boolean-value': 'always'
    }
}
