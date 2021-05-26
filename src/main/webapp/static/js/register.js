$(function () {

    // Checking for CSS 3D transformation support
    $.support.css3d = supportsCSS3D();

    var w3ls_form = $('#w3ls_form');

    $('.flipLink').click(function (e) {
        w3ls_form.toggleClass('flipped');
        if (!$.support.css3d) {
            $('#signin').toggle();
        }
        e.preventDefault();
    });

    function supportsCSS3D() {
        var props = [
            'perspectiveProperty', 'WebkitPerspective', 'MozPerspective'
        ], testDom = document.createElement('a');
        for (var i = 0; i < props.length; i++) {
            if (props[i] in testDom.style) {
                return true;
            }
        }
        return false;
    }


});

window.onload = function () {
    $("#eyes").click(hideEyes);
    $("#eyess").click(hideEyess);
    $("#eyesss").click(hideEyesss);
    $("#signup").submit(confirmData);
    $("#signin").submit(loginCreators);
    $("#registerUser").blur(checkUsername);
    if(location.href.indexOf("#reloaded")==-1){
        location.href=location.href+"#reloaded";
        location.reload();
    }

}
$(function () {

})

function fresh() {

}

function checkUsername() {
    var author_Name = $("#registerUser").val();
    $.ajax({
        url: "/kings/check.do",
        type: "post",
        data: {
            author_Name: author_Name
        },
        success: function (resp) {
            if (resp == "") {

            } else {
                $.messager.alert("用户名提示", "用户名存在", "error", function () {
                    location.reload();
                });
            }
        }
    })
}

function loginCreators() {
    var name = $("#loginUser").val();
    var password = $("#loginPwd").val();
    $.ajax({
        url: "/kings/login.do",
        type: "post",
        data: {
            author_Name: name,
            author_Pwd: password
        },
        success: function (resp) {
            if (resp != "") {
                $.messager.alert("登录提示", "登录成功！", "info", function () {
                    window.location.href = "static/registerSet.html"
                });
            } else {
                $.messager.alert("登录提示", "登陆失败，用户名或密码有误!", "error", function () {
                    location.reload();
                });

            }
        }
    })
}

function confirmData() {
    var name = $("#registerUser").val();
    var password = $("#registerPwd").val();
    var repassword = $("#pwdss").val();
    if (password.length < 6 || password.length > 16) {
        $.messager.alert("密码长度提示", "密码长度必须在6~16位之间！", "error");
    } else if (password != repassword) {
        $.messager.alert("密码错误提示", "两次密码输入不一致！", "error");
    } else {
        $.ajax({
            url: "/kings/register.do",
            type: "post",
            data: {
                author_Name: name,
                author_Pwd: password
            },
            success: function (resp) {
                if (resp == 1) {
                    $.messager.alert("注册提示", "注册成功！", "info", function () {
                        location.reload();
                    });
                } else {
                    $.messager.alert("注册提示", "注册失败！", "error", function () {
                        location.reload();
                    });
                }
            }
        })
    }

}

function hideEyes() {
    if ($(".pwd").attr("type") == "password") {
        $(".pwd").attr("type", "text");
        $("#eyes").attr("src", "/kings/static/img/eyes.png")

    } else {
        $(".pwd").attr("type", "password");
        $("#eyes").attr("src", "/kings/static/img/noeyes.png")
    }
}

function hideEyess() {
    if ($("#registerPwd").attr("type") == "password") {
        $("#registerPwd").attr("type", "text");
        $("#eyess").attr("src", "/kings/static/img/eyes.png")
    } else {
        $("#registerPwd").attr("type", "password");
        $("#eyess").attr("src", "/kings/static/img/noeyes.png")
    }
}

function hideEyesss() {
    if ($("#pwdss").attr("type") == "password") {
        $("#pwdss").attr("type", "text");
        $("#eyesss").attr("src", "./img/eyes.png")

    } else {
        $("#pwdss").attr("type", "password");
        $("#eyesss").attr("src", "./img/noeyes.png")
    }

}
