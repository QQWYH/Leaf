$(() => {
    let name = window.localStorage.getItem("username") || [];
    if (name != "") {
        $(".name>a").css("display", "none");
        $(".name>span").text(name, '<a href = ""> 注销</a>').css("color", "#fff");
    } else {
        alert("请登录");
    }
})