

$(function () {



    //banner
    new Swiper('.swiper1', {
        loop: true, // 循环模式选项
        autoplay: {
            delay: 3000,//1秒切换一次
            disableOnInteraction: false,//触摸之后不停止
        },
        // 分页器
        pagination: {
            el: '.swiper-pagination',
        },
    })
    //内容导航
    new Swiper('.swiper2', {
        // loop: true, // 循环模式选项
        autoplay: {
            delay: 3000,//1秒切换一次
            disableOnInteraction: false,//触摸之后不停止
        },
        // 分页器
        pagination: {
            el: '.swiper-pagination',
        },
    })
    //乐购快报
    new Swiper('.swiper3', {
        direction: 'vertical',// 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
            delay: 1000,//1秒切换一次
            disableOnInteraction: false,//触摸之后不停止
        }

    })


    //  跳转到搜索
    $("header input[type='search']").focus(function () {
        location.href = "./search.html"
    })



})