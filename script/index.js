/**
 * Created by 白 on 2017/11/10.
 */
$(function () {
    // 控制器
    var controller = new ScrollMagic.Controller();
})
// 场景
var scene=new ScrollMagic.Scene({
    // 滚动到一百像素开始场景
    offset: 100,
    // 把元素钉在400像素
    duration: 400
});
// 添加场景到控制器
controller.addScene(scene);
