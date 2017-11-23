/**
 * Created by 白 on 2017/11/10.
 */
$(function () {
    //点击头像跳回顶部
    $("#headImg").click(function () {
        scrollTo(0,0);
    })


    var w=$(window).width();
    var h=$(window).height();
    var l=0;
    var s=0;
    if(w>h){
        // 横屏
        l=w;
        s=h;
    }else {
        // 竖屏
        l=h;
        s=w;
    }

    //轨迹函数
    var flightpath = {

        step1: {
            //飞到第二页
            curviness: 1.25,
            autoRotate: true,
            values: [
                {x:w*0.2,	y:h*0.1},
                {x:w*0.3,	y:h*0.2},
                {x:w*0.35,	y:h*0.3},
                {x:w*0.4,	y:h*0.4},
                {x:w*0.3,	y:h*0.5},
                {x:w*0.2,    y:h*0.6},
                {x:w*0,    y:h*0.8},
            ]
        },
        step2: {
            //转圈
            curviness: 1.25,
            autoRotate: true,
            values: [
                {x:-s*0.08,    y:h*0.8+s*0.1},
                {x:-s*0.15,    y:h*0.8+s*0.2},
                {x:-s*0.2,    y:h*0.8+s*0.3},
                {x:-s*0.22,    y:h*0.8+s*0.4},
                {x:-s*0.2,    y:h*0.8+s*0.5},
                {x:-s*0.15,    y:h*0.8+s*0.55},
            ]
        },
        step3: {
            //飞机的另外半圈
            curviness: 1.25,
            autoRotate: true,
            values: [
                {x:-s*0.1,    y:h*0.8+s*0.55},
                {x:s*0.05,    y:h*0.8+s*0.55},
                {x:s*0.08,    y:h*0.8+s*0.5},
                {x:s*0.1,    y:h*0.8+s*0.4},
                {x:s*0.08,    y:h*0.8+s*0.3},
            ]
        },
        step4: {
            //飞机飞走了
            curviness: 1.25,
            autoRotate: true,
            values: [
                {x:s*0,    y:h*0.8+s*0.25},
                {x:-s*0.1,    y:h*0.8+s*0.25},
                {x:-s*0.2,    y:h*0.8+s*0.3},
                {x:-s*0.25,    y:h*0.8+s*0.4},
                {x:-w*0.2,    y:h*1.4},
                {x:-w*0.24,    y:h*1.5},
                {x:-w*0.26,    y:h*1.6},
                {x:-w*0.33,    y:h*1.8},
                {x:-w*0.33,    y:h*1.9},
            ]
        },
        step5: {
            //飞到3屏2
            curviness: 1.25,
            autoRotate: true,
            values: [
                {x:-w*0.33,    y:h*2.05},
            ]
        },
        step6: {
            //飞到3屏3
            curviness: 1.25,
            autoRotate: true,
            values: [
                {x:-w*0.33,    y:h*2.2},
            ]
        },
        step7: {
            //飞到3屏4
            curviness: 1.25,
            autoRotate: true,
            values: [
                {x:-w*0.33,    y:h*2.4},
            ]
        },
        step8: {
            //飞到3屏5
            curviness: 1.25,
            autoRotate: true,
            values: [
                {x:-w*0.33,    y:h*2.55},
            ]
        },
        step9: {
            //飞到4
            curviness: 1.25,
            autoRotate: true,
            values: [
                {x:-w*0.25,    y:h*2.6},
                {x:-w*0.2,    y:h*2.7},
                {x:-w*0.05,    y:h*2.8},
            ]
        },
        step10: {
            //飞到终点
            curviness: 1.25,
            autoRotate: true,
            values: [
                {x:-w*0.05,    y:h*2.8},
                {x:w*0.05,    y:h*2.9},
            ]
        }
    };

    // 控制器
    var controller = new ScrollMagic();

    //动画1：头像放大、移动
    var tween1 = TweenMax.to('#headImg',0.5, {
        scale:0.5,
        left:l*0.07,
        top:l*0.07
    });
    var scene1 = new ScrollScene({
        triggerElement: '#information'
    }).setTween(tween1)
        .addTo(controller);


    // 动画2：小飞机出现
    var tween2 = new TimelineMax()
        .add(TweenMax.to($("#airplane"), 2, {
            css:{bezier:flightpath.step1},
            ease:Power1.easeInOut
        }));
    var scene2 = new ScrollScene({
        triggerElement: "#information",
    }).setTween(tween2)
        .addTo(controller);


    //动画3:飞机前半圈
    var tween3 = new TimelineMax()
        .add(TweenMax.to($("#airplane"),1, {
                css:{bezier:flightpath.step2},
                ease:Power1.easeInOut
            }));
    var scene3 = new ScrollScene({
        triggerElement: "#circle",
    }).setTween(tween3)
        .addTo(controller);


    // 4：lift显示
    var tween4 = TweenMax.to('#lift',2, {
        opacity: 1
    });
    var scene4 = new ScrollScene({
        triggerElement: '#circle',
    }).setTween(tween4)
        .addTo(controller);

    //5：飞机后半圈
    var tween5 = new TimelineMax()
        .add(TweenMax.to($("#airplane"),1, {
            css:{bezier:flightpath.step3},
            ease:Power1.easeInOut
        }));
    var scene5 = new ScrollScene({
        triggerElement: "#firstCircle",
    }).setTween(tween5)
        .addTo(controller);

    //6：web显示
    var tween6 = TweenMax.to('#myweb',2, {
        opacity: 1
    });
    var scene6 = new ScrollScene({
        triggerElement: '#firstCircle',
    }).setTween(tween6)
        .addTo(controller);

    // 7：飞走飞到3屏1
    var tween7 = new TimelineMax()
        .add(TweenMax.to($("#airplane"),1, {
            css:{bezier:flightpath.step4},
            ease:Power1.easeInOut
        }));
    var scene7 = new ScrollScene({
        triggerElement: "#thirdStart",
    }).setTween(tween7)
        .addTo(controller);

    // 8：3屏1显示
    var tween8 = TweenMax.from('#thirdLi1',0.5, {
        opacity: 0,
        left:-w
    });
    var scene8 = new ScrollScene({
        triggerElement: '#thirdStart',
    }).setTween(tween8)
        .addTo(controller);

    // 9：飞到3屏2
    var tween9 = new TimelineMax()
        .add(TweenMax.to($("#airplane"),1, {
            css:{bezier:flightpath.step5},
            ease:Power1.easeInOut
        }));
    var scene9 = new ScrollScene({
        triggerElement: "#thirdImg2",
    }).setTween(tween9)
        .addTo(controller);

    // 10：3屏2显示
    var tween10 = TweenMax.from('#thirdLi2',0.5, {
        opacity: 0,
        left:-w
    });
    var scene10 = new ScrollScene({
        triggerElement: '#thirdImg2',
    }).setTween(tween10)
        .addTo(controller);

    // 11：飞到3屏3
    var tween11 = new TimelineMax()
        .add(TweenMax.to($("#airplane"),1, {
            css:{bezier:flightpath.step6},
            ease:Power1.easeInOut
        }));
    var scene11 = new ScrollScene({
        triggerElement: "#thirdImg3",
    }).setTween(tween11)
        .addTo(controller);

    // 12：3屏3显示
    var tween12 = TweenMax.from('#thirdLi3',0.5, {
        opacity: 0,
        left:-w
    });
    var scene12 = new ScrollScene({
        triggerElement: '#thirdImg3',
    }).setTween(tween12)
        .addTo(controller);

    // 13：飞到3屏4
    var tween13 = new TimelineMax()
        .add(TweenMax.to($("#airplane"),1, {
            css:{bezier:flightpath.step7},
            ease:Power1.easeInOut
        }));
    var scene13 = new ScrollScene({
        triggerElement: "#thirdImg4",
    }).setTween(tween13)
        .addTo(controller);

    // 14：3屏4显示
    var tween14 = TweenMax.from('#thirdLi4',0.5, {
        opacity: 0,
        left:-w
    });
    var scene14 = new ScrollScene({
        triggerElement: '#thirdImg4',
    }).setTween(tween14)
        .addTo(controller);

    // 15：飞到3屏5
    var tween14 = new TimelineMax()
        .add(TweenMax.to($("#airplane"),1, {
            css:{bezier:flightpath.step8},
            ease:Power1.easeInOut
        }));
    var scene14 = new ScrollScene({
        triggerElement: "#thirdImg5",
    }).setTween(tween14)
        .addTo(controller);

    // 16：3屏5显示
    var tween16 = TweenMax.from('#thirdLi5',0.5, {
        opacity: 0,
        left:-w
    });
    var scene16 = new ScrollScene({
        triggerElement: '#thirdImg5',
    }).setTween(tween16)
        .addTo(controller);

    // 17：飞到4屏
    var tween17 = new TimelineMax()
        .add(TweenMax.to($("#airplane"),1, {
            css:{bezier:flightpath.step9},
            ease:Power1.easeInOut
        }));
    var scene17 = new ScrollScene({
        triggerElement: "#fourthStart",
    }).setTween(tween17)
        .addTo(controller);


    // 18:技能出现
    var tween18 = TweenMax.from('#skill',1, {
        opacity: 0,
        rotation:360,
        scale:0.1
    });
    var scene18 = new ScrollScene({
        triggerElement: '#skillImg',
    }).setTween(tween18)
        .addTo(controller);

    // 19：飞到终点
    var tween19 = new TimelineMax()
        .add(TweenMax.to($("#airplane"),1, {
            css:{bezier:flightpath.step10},
            ease:Power1.easeInOut
        }));
    var scene19 = new ScrollScene({
        triggerElement: "#skill",
    }).setTween(tween19)
        .addTo(controller);

    // 20：期望工作出现
    var tween20 = TweenMax.from('#work',2, {
        opacity: 0,
        top:h
    });
    var scene20 = new ScrollScene({
        triggerElement: '#skill',
    }).setTween(tween20)
        .addTo(controller);


})


