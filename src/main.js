/**
 * main.js
 * require.js 入口
 * Created by sinrin on 2018/4/1.
 */
// const env = 'production';

require.config({
    baseUrl: './',
    paths: {
        'vue': 'lib/vue/2.5.16/vue.min',
        'app': 'src/app',
        'ELEMENT': 'lib/element-ui/2.2.2/index',
        'text': 'lib/require-text/2.0.12/text.min'
    },
    map: {
        '*': {
            'css': 'lib/require-css/0.1.10/css.min'
        }
    },
    shim: {
        'ELEMENT': ['css!lib/element-ui/2.2.2/theme-chalk/index.css']
    },
    // config: {'env': env}
});

require(['vue', 'app', 'ELEMENT'], function (Vue, App, ElementUI) {
    Vue.use(ElementUI);
    var vm = new Vue({
        el: '#app',
        render: function (h) {
            return h(App);
        }
    });
});

