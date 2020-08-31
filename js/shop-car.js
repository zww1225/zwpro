$(function () {

    /*  获取全选框的状态
        把这个状态给其他的单个选框
    */


    $("footer .all input").change(function () {
        let bool = $(this).prop('checked')
        $("main .check-box input").prop("checked", bool)
        if (bool) {
            let countsig = $('main .check-box input').length;
            $('#all-count').text(countsig);



        }
        else {
            $('#all-count').text(0);
            $('#totalPrice').text(0);
        }
        all()


    })

    // 计算总价
    function all() {
        let tatolPrice = 0;
        //    获取单个input
        let shu=0;
        //    遍历

        $('main .check-box input:checked').each(function () {

            let thisPrice = $(this).closest("label").closest(".check-box").siblings(".shop-cont").find(".price").text()

            let thisCount = $(this).closest("label").closest(".check-box").siblings(".shop-cont").find("input").val()
            thisSubtotal = thisPrice * thisCount

            tatolPrice += thisSubtotal;

           
            shu++

        });
        //设置商品的总价
        $('#totalPrice').text(tatolPrice);
        $('#all-count').html(shu)

    }

    // 总数量
    // function counts() {
    //     $("main .check-box input:checked").each(function () {
    //         let thisCount = $(this).closest('label').closest('div').siblings('.shop-cont').find("input").val();
    //         selectCount += parseInt(thisCount)
    //     })
    //     $('#all-count').html(selectCount)
    // }










    //已选中数量
    let selectCount = 0;
    //商品总价
    let tatolPrice = 0;

    $("main .check-box input").click(function () {
        let thisPrice;
        let thisCount;
        let thisTatolPrice;
        // 判断是否被选中
        if ($(this).is(':checked')) {
            //添加计数器
            selectCount++
            //计算价格
            thisPrice = $(this).closest('label').closest('div').siblings('.shop-cont').find(".price").text();
            //获取数量
            thisCount = $(this).closest('label').closest('div').siblings('.shop-cont').find("input").val();
            //计算当前选中商品的总价
            thisTatolPrice = (thisPrice * thisCount).toFixed(2);
            //计算全部商品的总价
            tatolPrice = (parseFloat(tatolPrice) + parseFloat(thisTatolPrice)).toFixed(2);
        } else {
            if (selectCount > 0) {
                selectCount--
                //计算价格
                thisPrice = $(this).closest('label').closest('div').siblings('.shop-cont').find(".price").text();
                //获取数量
                thisCount = $(this).closest('label').closest('div').siblings('.shop-cont').find("input").val();
                //计算当前选中商品的总价
                thisTatolPrice = (thisPrice * thisCount).toFixed(2);
                //计算全部商品的总价
                tatolPrice = (parseFloat(tatolPrice) - parseFloat(thisTatolPrice)).toFixed(2);
            }
        }
        if (selectCount <= 0) {
            $(".check2").prop("checked", false);
        } else {
            $(".check2").prop("checked", true);
        }
        // 渲染到页面
        $('#all-count').html(selectCount)
        $('#totalPrice').html(tatolPrice)

        all()

    })

    // 增
    $('.add').click(function () {
        //  获取input的值
        let value = Number($(this).siblings('input').val());
        value++;
        // 渲染到页面
        $(this).siblings('input').val(value);
        //判断该商品是否选中
        let check = $(this).closest("div").closest(".shop-cont").siblings(".check-box").find('.check').is(":checked")
        //如果选中累加总价
        if (check) {
            //获取单价
            let thisPrice = $(this).closest('div').siblings('div').find(".price").text();
            //计算总价
            tatolPrice = (parseFloat(tatolPrice) + parseFloat(thisPrice)).toFixed(2);
            //重新赋值
            $('#totalPrice').html(tatolPrice)

        }
        all()

    })

    // 减
    $('.re').click(function () {

        //  获取input的值
        let value = Number($(this).siblings('input').val());
        if (value > 1) {
            value--;

            //判断该商品是否选中
            let check = $(this).closest("div").closest(".shop-cont").siblings(".check-box").find('.check').is(":checked")
            //如果选中累加总价
            if (check) {
                //获取单价
                let thisPrice = $(this).closest('div').siblings('div').find(".price").text();
                //计算总价
                tatolPrice = (parseFloat(tatolPrice) - parseFloat(thisPrice)).toFixed(2);
                //重新赋值
                $('#totalPrice').html(tatolPrice)

            }
        }
        // 渲染到页面
        $(this).siblings('input').val(value);
        all()

    })
})