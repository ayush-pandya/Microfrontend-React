const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {   // For navigation in our app
            index: 'index.html'
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',                  // This name should be unique across all the projects, its some kind of a global variable
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig) // devConfig takes priority over commonConfig