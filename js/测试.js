
$("#btn").click(function () {
    //  获取值
    let value = $(this).siblings("input").val();
    if (!value) return false

    // 获取本地存储值
    let kw = localStorage.getItem("kw");
    // 判断
    if (kw) {
        let arr = JSON.parse(kw);
        arr.unshift(value)
        localStorage.setItem("kw", JSON.stringify(arr))
    } else {
        let arr = [value];

        localStorage.setItem("kw", JSON.stringify(arr))
    }
    // 渲染
    $('#text').prepend(`<p>${kw}</p>`)

})

function va1() {
    // 获得本地存储值
    let kw = localStorage.getItem("kw");
    // 判断
    if (!kw) return false
    // 有值
    let arr = JSON.parse(kw);
    // 定义一个空的字符串
    let str = "";
    // 遍历
    for (i = 0; i < arr.length; i++) {
        str += `<p>${arr[i]}</p>`
    }
    // 渲染
    $("#text").html(str)
}
va1()