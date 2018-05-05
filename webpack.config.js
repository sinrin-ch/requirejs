/**
 * webpack.config.js
 *
 * Created by sinrin on 2018/4/2.
 */

const path = require('path');


var config  = {
    //此处指明路口文件位置
    entry: './src/main.js',   //设置入口文件
    // 配置打包结果，
    // path配置定义了输出的文件位置
    // filename则定义了打包结果文件的名称
    devtool: 'inline-source-map',
    output: {//输出目录
        filename: 'bundle.js',//设置导出文件为index.js
        path: path.resolve(__dirname, 'dist')//打包后的js文件存放的地方
    },

    // resolve:影响对模块的解析，一个对象
    resolve: {
        alias: {
            'vue': __dirname + '/lib/vue/2.5.16/vue.js',
            'app': __dirname + '/src/app.js',
            'ELEMENT': __dirname + '/lib/element-ui/2.2.2/index.js',
            'text': __dirname + '/lib/require-text/2.0.12/text.js',
            'css': __dirname + '/lib/require-css/0.1.10/css.js'
        },

    },
    // extensions：自动补全识别后缀，是一个数组



};

module.exports = config;