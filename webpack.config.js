const path = require('path');
const webpack = require('webpack');

// modeがdebugかを判定
var is_debug = process.env.NODE_ENV !== "production";

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [{
            // Reactの設定
            test: /\.js[x]?$/,
            // バンドル対象外のフォルダを記載
            exclude: /(node_modules|bower_components)/,
            use: [{
                // babel変換を行うローダー,es5のjavascriptへ変換してくれる
                loader: 'babel-loader',
                // reactを扱えるようにオプションを追加。順番はこのまま。
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env'],
                    // async-await を開発環境で使えるようにする
                    plugins: ['@babel/plugin-transform-runtime'],
                }
            }],
            
        },
            {
            test:/\.css$/,
            exclude: /(node_modules|bower_components)/,
            use:['style-loader','css-loader']
            }
        ]
    },
    devtool: is_debug ? 'source-map' : 'none',

    // webpack-dev-serverの設定
    devServer: {
        // webpack-dev-serverだとreact-router-domで下階層のリンクを叩くと404となる。
        // TODO: フォールバックする考慮が追加で必須
        // https://kmikmy.hatenablog.com/entry/2017/11/12/012641
        historyApiFallback: true,
        inline: true,
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true,
        port: 3000,
    },

    // プラグイン
    plugins: is_debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],
}