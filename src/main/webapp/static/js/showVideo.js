
window.onload = function () {
    watchVideo();
    //播放视频
    function watchVideo() {
        var html = window.location.href;
        html = html.substring(53);
        var url = html.split("?");
        id = url[0];
        $.ajax({
            url: "../videoView.do",
            type: "post",
            data: {
                id: id
            },
            success: function (resp) {
                $.each(resp, function (i, dom) {
                    var resource = "";
                    if (i == "video_title") {
                        $(".video_resource:eq(0)").html(dom)
                    } else if (i == "author_Nick") {
                        $(".video_resource:eq(1)").append(dom)
                    } else if (i == "video_time") {
                        $(".video_resource:eq(2)").append(dom)
                    } else if (i == "video_descript") {
                        $(".video_resource:eq(3)").append(dom)
                    } else if (i == "video_src") {
                        resource = $("<video id='my-video' class='video-js' controls preload='auto' data-setup='{}'>"
                            + "<source src='/file" + dom + "' type='video/mp4'>"
                            + "</video>")
                        $(".m").append(resource)

                    }
                })

            },
            error: function () {
                alert("获取视频错误")
            }

        })
    }
    setTimeout("fresh()",10);

}
function fresh(){
    if(location.href.indexOf("?reload=true")<0){
        location.href+="?reload=true";
    }
}


