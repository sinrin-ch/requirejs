/**
 * app.js
 *
 * Created by sinrin on 2018/4/1.
 */
define(['src/left','src/right'], function (Left,Right) {
    return {
        template: '<div><left></left><right></right></div>',
        components: {
            Left: Left,
            Right: Right
        }
    };
});