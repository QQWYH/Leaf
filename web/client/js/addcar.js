$(() => {
    /* 2、加入购物车的点击事件 */
    $(".p-conter-con").on("click", ".addCart", function () {
        console.log("++")
        // /* user_id user_name */
        // let user_id = localStorage.getItem("user_id") || "";
        // let user_name = localStorage.getItem("user_name") || "";
        // let good_id = $(this).parent().attr("data-id");

        // console.log(user_id, user_name);
        // if (user_id && user_name) {
        //     /* 发请求，执行添加到购物车 */
        //     $.ajax({
        //         url: "../server/addCart.php",
        //         data: { user_id, good_id }
        //     }).done(data => {
        //         console.log("返回值:", data);
        //     })

        // } else {
        //     /* 跳转去登录 */
        //     location.href = "./login.html"
        // }
    })

    /* 3、点击按钮的时候加入购物车 */
    $("#cart").click(function () {
        location.href = "./cart.html"
    })
})