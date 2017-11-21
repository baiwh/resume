/**
 * Created by 白 on 2017/11/10.
 */
$(function () {
    //点击头像跳回顶部
    $("#headImg").click(function () {
        scrollTo(0,0);
    })

    //轨迹函数
    var flightpath = {
        step1: {
            curviness: 1.25,
            autoRotate: true,
            values: [
                {x: 0,	y: 50}
            ]
        },
        step2: {
            curviness: 1.25,
            autoRotate: true,
            values: [
                {x: 0,	y: 100}
            ]
        },
        step3: {
            curviness: 1.25,
            autoRotate: true,
            values: [
                {x: 0,	y: "500vh"}
            ]
        }
    };

    // 控制器
    var controller = new ScrollMagic();

    //动画1：头像放大、移动
    var tween1 = TweenMax.to('#headImg',0.5, {
        scale:0.5,
        left:"5%",
        top:"10%"
    });
    var scene1 = new ScrollScene({
        triggerElement: '#headImgBox',
    }).setTween(tween1)
        .addTo(controller);

    //动画2：小飞机
    var tween = new TimelineMax()
        .add(TweenMax.to($("#airplane"), 1.2, {
            css:{bezier:flightpath.step1},
            ease:Power1.easeInOut
        }))
        .add(TweenMax.to($("#airplane"), 2, {
            css:{bezier:flightpath.step2},
            ease:Power1.easeInOut
        }))
        .add(TweenMax.to($("#airplane"), 1, {
            css:{bezier:flightpath.step3},
            ease:Power1.easeInOut
        }));

    var scene = new ScrollScene({
        triggerElement: "#headImgBox",
        duration: 500
    }).setTween(tween)
        .setPin("#airplane")
        .addTo(controller);




    // var tween = TweenMax.to('', , {
    //
    // });
    //
    // var scene = new ScrollScene({
    //     triggerElement: '#airplane',
    //     offset:
    // }).setTween(tween)
    //     .addTo(controller);

    //动画
    // var tween = TweenMax.to('', , {
    //
    // });
    //
    // var scene = new ScrollScene({
    //     triggerElement: '',
    //     offset:
    // }).setTween(tween)
    //     .addTo(controller);

    //动画
    // var tween = TweenMax.to('', , {
    //
    // });
    //
    // var scene = new ScrollScene({
    //     triggerElement: '',
    //     offset:
    // }).setTween(tween)
    //     .addTo(controller);

})


