$(() => {
    var code = document.querySelector(".code");
    function shang() {
        var arrays = new Array(
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
            'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
            'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z'
        );
        codes = " ";
        for (var i = 0; i < 4; i++) {

            var r = parseInt(Math.random() * arrays.length);

            codes += arrays[r]

        }
        code.value = codes;
        return codes;
    }
    shang();

    $(".code").click(function () {
        shang();
    });

    $("#btn").click(function () {
        var yanze = $.trim($("#yanze").val().toLowerCase());
        var codex = $.trim(codes.toLowerCase());
        var username = $("#usernameID").val();
        var password = $("#passwordID").val();
        if ($("#usernameID").val() == "") {
            alert("账号不能为空");
        }
        if ($("#passwordID").val() == "") {
            alert("密码不能为空");
        }
        if (yanze == codex) {
            $.ajax({
                type: "post",
                url: "../server/login.php",
                data: { username, password },
                dataType: "json",
                success: function (response) {
                    console.log(response)
                    if (response.status == "success") {
                        $(".name").css("display", "none");
                        $(".name").next().html(username, "欢迎您的到来")
                        localStorage.username = username;
                        localStorage.id = response.data.userId;
                        window.location.href = "./index.html"
                    } else {
                        alert(response.data.msg);
                    }

                }
            })
        } else {
            console.log(yanze, codex)
            alert("验证码错误");
            shang()
        }
    })






})