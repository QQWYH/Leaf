$(() => {
    $("#userID").blur(function () {
        if ($("#userID").val() == "") {
            alert("用户名不能为空")
            return;
        }
        let reg = /^[a-zA-Z]\d{5,8}$/;
        let val = $.trim($(this).val());
        if (reg.test(val)) {
            $(this).next().text("");
        } else {
            $(this).next().text("格式不正确");
            $(this).next().css("color", "red");
        }
    });

    $("#passID").blur(function () {
        if ($("#passID").val() == "") {
            alert("密码不能为空")
            return;
        }
        let reg = /^[a-z0-9]{6,9}$/;
        let val = $.trim($(this).val());
        if (reg.test(val)) {
            $(this).next().text("");
        } else {
            $(this).next().text("格式不正确");
            $(this).next().css("color", "red");
        }
    })

    $("#emailID").blur(function () {
        if ($("#emailID").val() == "") {
            alert("email不能为空")
            return;
        }
        let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        let val = $.trim($(this).val());
        if (reg.test(val)) {
            $(this).next().text("");
        } else {
            $(this).next().text("格式不正确");
            $(this).next().css("color", "red");
        }
    })

    $("#zcbtn").click(function () {
        if ($("#userID,#passID,#emailID").val() == "") {
            alert("输入信息")
            return;
        }
        if ($("#userID,#passID,#emailID").next().text() != "") {
            alert("验证失败")
            return;
        } else {
            let data = {
                username: $.trim($("#userID").val()),
                password: $.trim($("#passID").val()),
                email: $.trim($("#emailID").val())
            }

            $.ajax({
                type: "post",
                dataType: "json",
                url: "../server/register.php",
                data,
                success(response) {
                    JSON.stringify(response);
                    if (response.status == "success") {
                        alert(response.msg);
                    } else {
                        alert(response.msg);
                    }
                }


            });


        }

    });

})