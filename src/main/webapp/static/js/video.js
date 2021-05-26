var timeInfo = 0;
$(function () {
    //扩展Date函数传入指定格式字符串转换
    Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
            "H+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        var week = {
            "0": "/u65e5",
            "1": "/u4e00",
            "2": "/u4e8c",
            "3": "/u4e09",
            "4": "/u56db",
            "5": "/u4e94",
            "6": "/u516d"
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        if (/(E+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    };

    $("#file-selector").change(function () {
        $("#pdBar").css({"width": "0%"});
        $("#sucess").css("display", "none");
        $("#progress").css("display", "none");
    })
    $("#tijiao").click(function () {
        $("#_overlay_").css("display", "block");
        uploadVideo();
        $("#sucess").css("display", "none");
        $("#progress").css("display", "inline-block");
        timeInfo = setInterval(getUploadInfo, 10);
    });


});

function uploadVideoText() {
    var text = $(".video-tab1-intro-textarea").val();
    var title = $(".input-title").val();
    var data = new Date();
    var time = data.Format("yyyy-MM-dd HH:mm:ss")
    $.ajax({
        type: "post",
        url: "../addVideoText.do",
        data: {
            "text": text,
            "title": title,
            "time": time
        },
        dataType: "json",
        async: true,
        success: function (resp) {
            if (resp.tag == true) {
                $("#_overlay_").css("display", "none");
                $.messager.alert("视频上传提示", "投稿成功！", "info", function () {
                    window.location.reload();
                });
            } else {
                $("#_overlay_").css("display", "none");
                $.messager.alert("视频上传提示", "投稿失败！", "error", function () {
                    window.location.reload();
                });
            }
        },
        error: function () {
            $("#_overlay_").css("display", "none");
            $.messager.alert("视频上传提示", "视频投稿失败！", "error", function () {
                window.location.reload();
            });
        }
    })
}

function uploadVideo() {
    var dropzFile = new FormData();
    dropzFile.append("dropzFile", $("#file-selector")[0].files[0]);
    console.log("开始上传..." + dropzFile);
    $.ajax({
        type: "post",
        url: "../addVideo.do",
        data: dropzFile,
        dataType: "",
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        success: function (res) {
            if (res.tag === true) {
                uploadVideoText();
                clearInterval(timeInfo);
                getUploadInfo();//修正得到文件上传信息
                setPdWidth(100);
                $("#progress").css("display", "none");
                $("#sucess").css("display", "inline-block");
            } else {
                alert("上传失败!")
            }
        },
        error: function () {
            alert("上传错误!");
        }
    })

}

//得到上传文件进度信息
function getUploadInfo() {
    $.ajax({
        url: "../getInfo.do",
        data: {time: new Date()},
        type: "post",
        dataType: "json",
        cache: false,
        success: function (res) {
            if (res.percent == 100) {
                clearInterval(timeInfo);
                return;
            }
            console.log(res);
            setPdWidth(res.percent);
            setUploadInfo(res);
        },
        error: function () {
            clearInterval(timeInfo);
            console.log("得到上传文件信息出错!");
        }
    });
}

//设置上传文件进度信息
function setUploadInfo(res) {
    $("#percent").text(res.percent);
}

function setPdWidth(percent) {
    $("#pdBar").css({"width": percent + "%"});
}