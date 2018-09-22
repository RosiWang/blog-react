const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

//“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {
    mode: 'development',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'front'),
        }
    },
    entry:  {
        bundle:'./front/main.js'//唯一入口文件
    },
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: 'bundle.js'
    },
    devServer: {
        contentBase:path.join(__dirname, 'build'),//本地服务器所加载的页面所在的目录
        inline:true,
        port: 8089
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /.(jpg|png)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[hash].[ext]',
                        publicPath: './'
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true,// 指定启用css modules
                            localIdentName: '[name]__[local]-[hash:base64:5]' // 指定css的类名格式
                        }
                    }
                ],
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究666'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + "/front/index.tmpl.html",//new 一个这个插件的实例，并传入相关的参数
            inject: false
        })
    ]
}
