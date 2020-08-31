$(function () {
    //    返回首页
    $("header img").click(function () {
        history.go(-1)
    });


    // 搜索追加
    $("header>div a").click(function () {
        //    获取搜索框的值
        setValue();
        getValue();
    })

    function setValue() {
        let value = $("header input").val()
        // 判断
        if (!value) return false;
        // 去本地存储拿值
        let todo = localStorage.getItem('todo')
        // 如果有值
        if (todo) {
            // 转为数组
            let arr = JSON.parse(todo);
            // 添加
            arr.unshift(value)
            // 转为字符串
            localStorage.setItem("todo", JSON.stringify(arr))

        } else {
            let arr = [value];
            localStorage.setItem("todo", JSON.stringify(arr))
        }
        $("header input").val('')
    }

    getValue();
    function getValue() {
        //  获取本地存储
        let todo = localStorage.getItem('todo');
        // 判断
        if (!todo) return false;
        // 有值
        let arr = JSON.parse(todo);
        // 定义一个空的字符串
        let vaStr = "";
        // 遍历
        for (let i = 0; i < arr.length; i++) {
            vaStr += `<li>${arr[i]}</li>`
        }
        // 渲染到页面中
        $("#va-list").html(vaStr)
    }


    // 删除记录
    $('.del').click(function () {


        if (confirm("你确定要删除了吗？")) {
            localStorage.removeItem('todo')
            $("#va-list").html('')
        }
    })
})