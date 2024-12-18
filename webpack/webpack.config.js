const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')
const loader = require('sass-loader')

module.exports = {

    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.(sa|c|sc)ss$/,   // expressão regular
                use: [
                    MiniCssExtract.loader, 
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.(jpeg|jpg|png|svg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[name].[ext]'
                }
            }
        ]

    },

    plugins: [
        new HtmlWebpack({
            filename: 'index.html',
            template: './src/index.html'

        }),
        
        new MiniCssExtract({
            filename: 'style.css'
        })
    ]
}