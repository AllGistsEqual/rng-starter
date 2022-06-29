module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./'],
                    alias: {
                        '@Components': './src/components',
                        '@Screens': './src/screens',
                        '@Store': './src/redux',
                        '@Routing': './src/routing',
                        '@Assets': './assets',
                    },
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            ],
        ],
    }
}
