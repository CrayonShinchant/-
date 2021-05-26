var curpro = window.location.protocol;

window.onload = function () {
    $("#search").click(searchHero);
    $("#search").blur(searchHeros);
    $(".types-ms>li").click(selectHero);
    $(".current").trigger('click');
    $("#wq").click(showWeiquan);
    $("#wx").click(showWeixin);
    $(".dia-close:eq(0)").click(hideWeiquan);
    $(".dia-close:eq(1)").click(hideWeixin);
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
    function searchHero() {
        $("#search").val("")
    }
    function searchHeros() {
        var tips = $("#search").val();
        if (tips == "") {
            $("#search").val("请输入您想要搜索的英雄名");
        }
    }

    $("#searchBtn").click(searchOneHero);

    function searchOneHero() {
        var heroname = $("#search").val();
        $.ajax({
            url: "../searchHero.do",
            type: "post",
            dataType: "json",
            data: {
                hero_Name: heroname
            },
            success: function (resp) {
                if (resp == null) {
                    $("#JErroTips").css("display", "block");
                }
                var herf;
                var src;
                var name;
                var hero_all = "";

                $.each(resp, function (i, dom) {
                    if (i == "hero_html") {
                        herf = dom;
                    } else if (i == "hero_Img") {
                        src = dom;
                    } else if (i == "hero_Name") {
                        name = dom;
                    }
                })
                hero_all += "<li>"
                    + "<a href='" + herf + "' target='_blank'>"
                    + "<img src='hero_img/" + src + "' width='91' height='91'>"
                    + name
                    + "</a>"
                    + "</li>"
                $(".herolist:eq(1)").html("")
                $(".herolist:eq(1)").append(hero_all);
            }
        })
    }


    function selectHero() {
        $(".i").css("background-color", "");
        $(this).find("span").find("i").css("background-color", "#0066FF");
        if ($(this).attr("data-ptype") == 10) {
            $.ajax({
                url: "../hero_all.do",
                type: "post",
                dataType: "json",
                async: true,
                success: function (resp) {
                    var hero_all = "";
                    $.each(resp, function (i, dom) {
                        $(".herolist:eq(1)").html("");
                        hero_all += "<li>"
                            + "<a href='" + dom.hero_html + "' target='_blank'>"
                            + "<img src='hero_img/" + dom.hero_Img + "' width='91' height='91'>"
                            + dom.hero_Name
                            + "</a>"
                            + "</li>"
                    })
                    $(".herolist:eq(1)").append(hero_all);

                }
            })
        }else if($(this).attr("data-ptype") == 3){
            $.ajax({
                url: "../tank.do",
                type: "post",
                dataType: "json",
                async: true,
                success: function (resp) {
                    var hero_all = "";
                    $.each(resp, function (i, dom) {
                        $(".herolist:eq(1)").html("");
                        hero_all += "<li>"
                            + "<a href='" + dom.hero_html + "' target='_blank'>"
                            + "<img src='hero_img/" + dom.hero_Img + "' width='91' height='91'>"
                            + dom.hero_Name
                            + "</a>"
                            + "</li>"
                    })
                    $(".herolist:eq(1)").append(hero_all);

                }
            })
        }
        else if($(this).attr("data-ptype") == 1){
            $.ajax({
                url: "../zhanshi.do",
                type: "post",
                dataType: "json",
                async: true,
                success: function (resp) {
                    var hero_all = "";
                    $.each(resp, function (i, dom) {
                        $(".herolist:eq(1)").html("");
                        hero_all += "<li>"
                            + "<a href='" + dom.hero_html + "' target='_blank'>"
                            + "<img src='hero_img/" + dom.hero_Img + "' width='91' height='91'>"
                            + dom.hero_Name
                            + "</a>"
                            + "</li>"
                    })
                    $(".herolist:eq(1)").append(hero_all);

                }
            })
        }
        else if($(this).attr("data-ptype") == 4){
            $.ajax({
                url: "../cike.do",
                type: "post",
                dataType: "json",
                async: true,
                success: function (resp) {
                    var hero_all = "";
                    $.each(resp, function (i, dom) {
                        $(".herolist:eq(1)").html("");
                        hero_all += "<li>"
                            + "<a href='" + dom.hero_html + "' target='_blank'>"
                            + "<img src='hero_img/" + dom.hero_Img + "' width='91' height='91'>"
                            + dom.hero_Name
                            + "</a>"
                            + "</li>"
                    })
                    $(".herolist:eq(1)").append(hero_all);

                }
            })
        }
        else if($(this).attr("data-ptype") == 2){
            $.ajax({
                url: "../fashi.do",
                type: "post",
                dataType: "json",
                async: true,
                success: function (resp) {
                    var hero_all = "";
                    $.each(resp, function (i, dom) {
                        $(".herolist:eq(1)").html("");
                        hero_all += "<li>"
                            + "<a href='" + dom.hero_html + "' target='_blank'>"
                            + "<img src='hero_img/" + dom.hero_Img + "' width='91' height='91'>"
                            + dom.hero_Name
                            + "</a>"
                            + "</li>"
                    })
                    $(".herolist:eq(1)").append(hero_all);

                }
            })
        }
        else if($(this).attr("data-ptype") == 5){
            $.ajax({
                url: "../sheshou.do",
                type: "post",
                dataType: "json",
                async: true,
                success: function (resp) {
                    var hero_all = "";
                    $.each(resp, function (i, dom) {
                        $(".herolist:eq(1)").html("");
                        hero_all += "<li>"
                            + "<a href='" + dom.hero_html + "' target='_blank'>"
                            + "<img src='hero_img/" + dom.hero_Img + "' width='91' height='91'>"
                            + dom.hero_Name
                            + "</a>"
                            + "</li>"
                    })
                    $(".herolist:eq(1)").append(hero_all);

                }
            })
        }
        else if($(this).attr("data-ptype") == 6){
            $.ajax({
                url: "../fuzhu.do",
                type: "post",
                dataType: "json",
                async: true,
                success: function (resp) {
                    var hero_all = "";
                    $.each(resp, function (i, dom) {
                        $(".herolist:eq(1)").html("");
                        hero_all += "<li>"
                            + "<a href='" + dom.hero_html + "' target='_blank'>"
                            + "<img src='hero_img/" + dom.hero_Img + "' width='91' height='91'>"
                            + dom.hero_Name
                            + "</a>"
                            + "</li>"
                    })
                    $(".herolist:eq(1)").append(hero_all);

                }
            })
        }
        else if($(this).attr("data-ptype") == 12){
            $.ajax({
                url: "../free.do",
                type: "post",
                dataType: "json",
                async: true,
                success: function (resp) {
                    var hero_all = "";
                    $.each(resp, function (i, dom) {
                        $(".herolist:eq(1)").html("");
                        hero_all += "<li>"
                            + "<a href='" + dom.hero_html + "' target='_blank'>"
                            + "<img src='hero_img/" + dom.hero_Img + "' width='91' height='91'>"
                            + dom.hero_Name
                            + "</a>"
                            + "</li>"
                    })
                    $(".herolist:eq(1)").append(hero_all);

                }
            })
        }
        else if($(this).attr("data-ptype") == 11){
            $.ajax({
                url: "../introduce.do",
                type: "post",
                dataType: "json",
                async: true,
                success: function (resp) {
                    var hero_all = "";
                    $.each(resp, function (i, dom) {
                        $(".herolist:eq(1)").html("");
                        hero_all += "<li>"
                            + "<a href='" + dom.hero_html + "' target='_blank'>"
                            + "<img src='hero_img/" + dom.hero_Img + "' width='91' height='91'>"
                            + dom.hero_Name
                            + "</a>"
                            + "</li>"
                    })
                    $(".herolist:eq(1)").append(hero_all);

                }
            })
        }
    }


}

