
$(function () {
    loadLogin()
    $("#eyes").click(hideEyes);
    $("#signindex").submit(loginCreators);
    $("#wq").click(showWeiquan);
    $("#wx").click(showWeixin);
    $(".dia-close:eq(0)").click(hideWeiquan);
    $(".dia-close:eq(1)").click(hideWeixin);

})
function loadLogin() {
    $.ajax({
        url:"./loginStyle.do",
        success:function (resp) {
            if(resp==""){
                $("body").append($(".main-w3l"))
            }else {
                $(".main-w3l").empty();
            }
        }
    })
}
function hideWeiquan() {
    $("#weiquan").css("display","none");
    $("#_overlay_").css("display","none");
}
function showWeiquan() {
    $("#weiquan").css("display","block");
    $("#_overlay_").css("display","block");
}
function showWeixin() {
    $("#weixin").css("display","block");
    $("#_overlay_").css("display","block");
}
function hideWeixin() {
    $("#weixin").css("display","none");
    $("#_overlay_").css("display","none");
}
function loginCreators() {
    var name = $("#user").val();
    var  password= $("#pwd").val();
    $.ajax({
        url:"./login.do",
        type:"post",
        data:{
            author_Name:name,
            author_Pwd:password
        },
        success:function (resp) {
            if(resp!=""){
                $.messager.alert("登录提示", "登录成功！", "info", function () {
                    window.location.href = "static/registerSet.html"
                });
            }else{
                $.messager.alert("登录提示", "登陆失败，用户名或密码有误!", "error", function () {
                    location.reload();
                });
            }
        }
    })
}
function hideEyes() {
    if ($("#pwd").attr("type") == "password") {
        $("#pwd").attr("type", "text");
        $("#eyes").attr("src", "static/img/eyes.png")

    } else {
        $("#pwd").attr("type", "password");
        $("#eyes").attr("src", "static/img/noeyes.png")
    }
}
