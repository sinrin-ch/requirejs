define("src/left",[],function(){return{template:"<el-date-picker></el-date-picker>"}}),define("lib/require-css/0.1.10/css!src/common",[],function(){}),define("src/right",["require","css!src/common"],function(e){return e("css!src/common"),{template:'<div class="right1"></div>'}}),define("app",["src/left","src/right"],function(e,t){return{template:"<div><left></left><right></right></div>",components:{Left:e,Right:t}}});const env="dev";require.config({baseUrl:"./",paths:{vue:"lib/vue/2.5.16/vue",app:"src/app",ELEMENT:"lib/element-ui/2.2.2/index",text:"lib/require-text/2.0.12/text"},map:{"*":{css:"lib/require-css/0.1.10/css"}},shim:{ELEMENT:["css!lib/element-ui/2.2.2/theme-chalk/index.css"]},config:{env:env}}),require(["vue","app","ELEMENT"],function(e,t,n){e.use(n);new e({el:"#app",render:function(e){return e(t)}})}),define("src/main",function(){}),function(e){var t=document,n="appendChild",i="styleSheet",r=t.createElement("style");r.type="text/css",t.getElementsByTagName("head")[0][n](r),r[i]?r[i].cssText=e:r[n](t.createTextNode(e))}(".right1 {\n    background-color: red;\n    width: 10rem;\n    height: 10rem;\n}");