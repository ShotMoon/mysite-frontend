const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base')
const webpackMerge = require('webpack-merge')
const HTMLPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = webpackMerge(baseConfig, {
    entry: {
        index: path.join(__dirname, '../src/app.js')
    },
    output: {
        filename: '[name].[hash].js',
    },
    plugins: [
        new HTMLPlugin({
            template: path.join(__dirname, '../src/template.html')
        }),
        new HTMLPlugin({
            template: '!!ejs-compiled-loader!' + path.join(__dirname, '../src/server.template.ejs'),
            filename: 'server.ejs'
        })
    ]
})

if( isDev ){
    config.devtool = '#cheap-module-eval-source-map'
    config.entry = {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, '../src/app.js')
        ]
    }
    config.devServer = {
        host: '0.0.0.0',//任何方式进行访问
        port: 8888,
        // contentBase: path.join(__dirname, '../dist'),
        hot: true,//启动hot modul replacemen
        overlay: {
            errors: true//报错网页上显示
        },
        publicPath: '/public/',
        historyApiFallback: {
            index: '/public/index.html',//所有404都返回这个

        }

    }
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config