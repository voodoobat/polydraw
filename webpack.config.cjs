const path = require('path')
const externals = require('webpack-node-externals')

module.exports = {
    entry: './src/index.ts',
    externals: [externals()],
    externalsPresets: {
        node: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    output: {
        libraryTarget: 'commonjs',
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
}
