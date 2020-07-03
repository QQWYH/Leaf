$(() => {
    let name = window.localStorage.getItem("username") || [];
    if (name != "") {
        $(".name>a").css("display", "none");
        $(".name>span").text(name, +"欢迎您" + "<a href=''>注销</a>")
    } else {
        alert("请登录");
    }
})