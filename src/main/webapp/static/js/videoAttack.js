$(function () {
    $("#searchBtn").click(showType);
    $(".v-select-roles-all>li").click(heroType);
    $(".soso-go:eq(1)").click(showType);

    showList(1, 12)

    //遍历显示视频
    function showList(pageNo, pageSize) {
        var data = {
            pageNo: pageNo,
            pageSize: pageSize
        }
        $.ajax({
            url: "../byPages.do",
            method: 'POST',
            contentType: 'application/json;charset=utf-8',
            data: JSON.stringify(data),
            dataType: 'json',
            success: function (json) {
                if (json.list) {
                    var video = "";
                    json.list.forEach(function (dom, i) {
                        video += "<li>"
                            + "<div class='itemImg'>"
                            + "<a href='showVideo.html?id=" + dom.id + "'>"
                            + "<img src='videoPictures/" + dom.video_picture + "'>"
                            + "<div class=' cfix vList-views'>"
                            + "<i class='f1 vspr vicon-views'>"
                            + "<img src='//game.gtimg.cn/images/yxzj/web201605/page/icon_play.png' class='show'>"
                            + "&nbsp;"
                            + "</i>"
                            + "<span class='fr'>"
                            + (dom.video_time).substring(0, 10)
                            + "</span>"
                            + "<i class='fr vspr vicon-time'>"
                            + "&nbsp;"
                            + "</i>"
                            + "</div>"
                            + "</a>"
                            + "<div class='vlist-desc'>"
                            + "<a href='showVideo.html?id=" + dom.id + "' class='txtcol' target='_blank'>"
                            + dom.video_title
                            + "</a>"
                            + "</div>"
                            + "</div>"
                            + "</li>"
                    });
                    $("#heroVideoList").html(video);
                }
                var total = 0;
                if (json) total = json.total;
                $("#page").Paging({
                    current: pageNo,
                    pagesize: pageSize,
                    count: total,
                    callback: function (page, size, count) {
                        showList(page, pageSize);
                    }
                });

            }
        })
    }

    function showType() {
        $(".v-select-roles-all").css("display", "block");
    }

    function heroVideo() {
        var heroName = $(this).html();
        $("#v-selectHeros").val(heroName);
        $(".v-select-hero-all").css("display", "none");
    }

    function heroType() {
        var type = $(this).html();
        $("#v-selectRoles").val(type);
        $(".v-select-roles-all").css("display", "none");
        var hero = "";
        if (type == "坦克") {
            $(".v-select-hero-all").html("");
            $.ajax({
                url: "../tank.do",
                type: "post",
                success: function (resp) {
                    $.each(resp, function (i, dom) {
                        hero += "<li>"
                            + dom.hero_Name
                            + "</li>"
                    })
                    $(".v-select-hero-all").append(hero)
                    $("#allHero>li").click(heroVideo);
                    $(".v-select-hero-all>li").bind("click", {"pageNo": "1", "pageSize": "12"}, selectVideo)
                }
            })

        } else if (type == "战士") {
            $(".v-select-hero-all").html("");
            $.ajax({
                url: "../zhanshi.do",
                type: "post",
                success: function (resp) {
                    $.each(resp, function (i, dom) {
                        hero += "<li>"
                            + dom.hero_Name
                            + "</li>"
                    })
                    $(".v-select-hero-all").append(hero)
                    $("#allHero>li").click(heroVideo);
                    $(".v-select-hero-all>li").bind("click", {"pageNo": "1", "pageSize": "12"}, selectVideo)
                }
            })

        } else if (type == "法师") {
            $(".v-select-hero-all").html("");
            $.ajax({
                url: "../fashi.do",
                type: "post",
                success: function (resp) {
                    $.each(resp, function (i, dom) {
                        hero += "<li>"
                            + dom.hero_Name
                            + "</li>"
                    })
                    $(".v-select-hero-all").append(hero)
                    $("#allHero>li").click(heroVideo);
                    $(".v-select-hero-all>li").bind("click", {"pageNo": "1", "pageSize": "12"}, selectVideo)
                }
            })

        } else if (type == "射手") {
            $(".v-select-hero-all").html("");
            $.ajax({
                url: "../sheshou.do",
                type: "post",
                success: function (resp) {
                    $.each(resp, function (i, dom) {
                        hero += "<li>"
                            + dom.hero_Name
                            + "</li>"
                    })
                    $(".v-select-hero-all").append(hero)
                    $("#allHero>li").click(heroVideo);
                    $(".v-select-hero-all>li").bind("click", {"pageNo": "1", "pageSize": "12"}, selectVideo)
                }
            })

        } else if (type == "辅助") {
            $(".v-select-hero-all").html("");
            $.ajax({
                url: "../fuzhu.do",
                type: "post",
                success: function (resp) {
                    $.each(resp, function (i, dom) {
                        hero += "<li>"
                            + dom.hero_Name
                            + "</li>"
                    })
                    $(".v-select-hero-all").append(hero)
                    $("#allHero>li").click(heroVideo);
                    $(".v-select-hero-all>li").bind("click", {"pageNo": "1", "pageSize": "12"}, selectVideo)
                }
            })

        } else if (type == "刺客") {
            $(".v-select-hero-all").html("");
            $.ajax({
                url: "../cike.do",
                type: "post",
                success: function (resp) {
                    $.each(resp, function (i, dom) {
                        hero += "<li>"
                            + dom.hero_Name
                            + "</li>"
                    })
                    $(".v-select-hero-all").append(hero)
                    $("#allHero>li").click(heroVideo);
                    $(".v-select-hero-all>li").bind("click", {"pageNo": "1", "pageSize": "12"}, selectVideo)

                }
            })

        }
        $(".v-select-hero-all").css("display", "block");
    }

    //查找指定英雄的视频
    function selectVideo(event, pageNum) {
        var hero_Name = $("#v-selectHeros").val();
        var pageNo;
        if (pageNum == undefined) {
            pageNo = event.data.pageNo
        } else {
            pageNo = pageNum;
        }
        var pageSize = event.data.pageSize
        $.ajax({
            url: "../selectVideos.do",
            method: 'POST',
            data: {
                pageNo: pageNo,
                pageSize: pageSize,
                video_title: hero_Name
            },
            success: function (resp) {
                if (resp.list) {
                    var video = "";
                    resp.list.forEach(function (dom, i) {
                        video += "<li>"
                            + "<div class='itemImg'>"
                            + "<a href='showVideo.html?id=" + dom.id + "'>"
                            + "<img src='videoPictures/" + dom.video_picture + "'>"
                            + "<div class=' cfix vList-views'>"
                            + "<i class='f1 vspr vicon-views'>"
                            + "<img src='//game.gtimg.cn/images/yxzj/web201605/page/icon_play.png' class='show'>"
                            + "&nbsp;"
                            + "</i>"
                            + "<span class='fr'>"
                            + (dom.video_time).substring(0, 10)
                            + "</span>"
                            + "<i class='fr vspr vicon-time'>"
                            + "&nbsp;"
                            + "</i>"
                            + "</div>"
                            + "</a>"
                            + "<div class='vlist-desc'>"
                            + "<a href='showVideo.html?id=" + dom.id + "' class='txtcol' target='_blank'>"
                            + dom.video_title
                            + "</a>"
                            + "</div>"
                            + "</div>"
                            + "</li>"
                    });
                    $("#heroVideoList").html(video);
                }
                var total = 0;
                if (resp) total = resp.total;
                $("#page").Paging({
                    current: pageNo,
                    pagesize: pageSize,
                    count: total,
                    callback: function (page, size, count) {
                        selectVideo(event, page)
                    }
                });
            }
        })
    }


})