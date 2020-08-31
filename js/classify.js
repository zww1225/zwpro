$(function () {

    $("header input[type='search']").focus(function () {
        location.href = "./search.html"
    })


    $("header img").click(function () {
        location.href = "./index.html"
    })




    $('.left>li').click(function () {
        // 激活背景色
        $(this).addClass('active').siblings('.left>li').removeClass('active')
        // 激活字体颜色
        $(this).find('a').addClass('active1').closest('.left>li').siblings().find('a').removeClass('active1')
        // 获取当前索引
        let index = $(this).index();
        $('.right>div').eq(index).addClass('active2')
    })

})