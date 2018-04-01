/**
 * build.js
 * r.js打包配置
 * Created by sinrin on 2018/4/1.
 */

module.exports = ({
    // baseUrl: './',  // 如果build.js不在根目录,需要在执行r.js时指定. node lib/r.js -o src/build.js baseUrl='./'
    name: 'src/main',
    out: 'main-min.js',
    // paths: {  // 这里要从main.js复制出来
    //     'vue': 'lib/vue/2.5.16/vue',
    //     'app': 'src/app',
    //     'ELEMENT': 'lib/element-ui/2.2.2/index',
    // },
    // map: {
    //     '*': {
    //         'css': 'empty:'
    //     }
    // },
    // // shim: {
    // //     'ELEMENT': ['css!lib/element-ui/2.2.2/theme-chalk/index.css']
    // // },
    exclude: ['ELEMENT'],//不打包,
    mainConfigFile: 'main.js',
    // optimizeCss: "none",
})