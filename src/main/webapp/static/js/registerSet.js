window.onload = function () {
    loadPage('infoSet.html');
    $("#wq").click(showWeiquan);
    $("#wx").click(showWeixin);
    $(".dia-close:eq(0)").click(hideWeiquan);
    $(".dia-close:eq(1)").click(hideWeixin);
}

function removeCreator() {
    $.messager.confirm("退出提示", "是否退出登录？", function (r) {
        if (r) {
            $.ajax({
                url: "../removeCreator.do",
                success: function (resp) {
                    if (resp == "") {
                       window.location.href = "/kings"
                    } else {
                        $.messager.alert("退出提示", "退出失败！", "error");
                    }
                }
            })
        }


    })

}

function hideWeiquan() {
    $("#weiquan").css("display", "none");
    $("#_overlay_").css("display", "none");
}

function showWeiquan() {
    $("#weiquan").css("display", "block");
    $("#_overlay_").css("display", "block");
}

function showWeixin() {
    $("#weixin").css("display", "block");
    $("#_overlay_").css("display", "block");
}

function hideWeixin() {
    $("#weixin").css("display", "none");
    $("#_overlay_").css("display", "none");
}

function loadPage(url) {
    $(".page-set").html("")
    $.ajax({
        type: "get",
        url: url,
        async: true,
        dataType: "html",
        contentType: "application/json;charset=utf-8",
        success: function (html) {
            $(".page-set").html(html);
        }
    })
}