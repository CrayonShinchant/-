$(function () {
    $(".story").click(showStory)
    $(".skill-u1>li").mouseover(showSkill);
    $(".hero-hd>li").mouseover(showDadang);
    $(".hero-relate-list>ul>li").mouseover(showDetail)

    function showDetail() {
        $(".hero-relate-list>ul>li").attr("class", "");
        $(this).attr("class", "cur");
        var nums = $(this).index();
        var html = $(".cur").html();
        html = html.substring(0, 4);
        if (html == "最佳搭档") {
            nums = nums;
        } else if (html == "压制英雄") {
            nums = nums + 2;
        } else if (html == "被压制英") {
            nums = nums + 4;
        }
        $(".hero-list-desc>p").css("display", "none");
        $(".hero-list-desc>p:eq('" + nums + "')").css("display", "block")
    }

    function showDadang() {
        $(".hero-hd>li").attr("class", "");
        $(this).attr("class", "curr cur");
        var num = $(this).index();
        $(".hero-info").css("display", "none");
        $(".hero-info:eq('" + num + "')").css("display", "block");
        if (num == 0) {
            $(".hero-relate-list>ul>li").attr("class", "")
            $(".hero-relate-list>ul>li:eq(0)").attr("class", "cur");
            $(".hero-list-desc>p:eq(0)").css("display","block");
        } else if (num == 1) {
            $(".hero-relate-list>ul>li").attr("class", "")
            $(".hero-relate-list>ul>li:eq(2)").attr("class", "cur")
            $(".hero-list-desc>p:eq(2)").css("display","block");
        } else if (num == 2) {
            $(".hero-relate-list>ul>li").attr("class", "")
            $(".hero-relate-list>ul>li:eq(4)").attr("class", "cur")
            $(".hero-list-desc>p:eq(4)").css("display","block");
        }
    }

    function showSkill() {
        $(".skill-u1>li").attr("class", "");
        $(this).attr("class", "curr");
        var num = $(this).index();
        $(".show-list").css("display", "none")
        $(".show-list:eq('" + num + "')").css("display", "block");

    }

    function showStory() {
        $("#_overlay_").show();
        $("#hero-story").show();
    }

    $(".close").click(hideStory)

    function hideStory() {
        $("#_overlay_").hide();
        $("#hero-story").hide();
    }

    detail();

    function detail() {
        var hero_Name = $(".cover-name").html();
        var hero_item;
        $.ajax({
            url: "/kings/searchHero.do",
            type: "post",
            async: false,
            data: {
                hero_Name: hero_Name
            },
            success: function (resp) {
                $.each(resp, function (i, dom) {
                    if (i == "hero_item") {
                        hero_item = dom;
                        $.ajax({
                            url: "/kings/searHeroInfo.do",
                            type: "post",
                            async: false,
                            data: {
                                hero_item: hero_item
                            },
                            success: function (resp) {
                                var item = ""
                                $.each(resp, function (i, dom) {
                                    item += "<li>"
                                        + "<a href='javascript:void(0)'>"
                                        + "<img src='../item_img/" + dom.j_img + "'>"
                                        + "<div class='itemFromTop'>"
                                        + "<div class='item-title clearfix'>"
                                        + "<img src='../item_img/" + dom.j_img + "' id='Jpic'>"
                                        + "<div class='cons'>"
                                        + "<h4 id='Jname'>" + dom.jname + "</h4>"
                                        + "<p id='Jprice'>售价：" + dom.jprice + "</p>"
                                        + "<p id='Jtprice'>总价：" + dom.jtprice + "</p>"
                                        + "</div>"
                                        + "</div>"
                                        + "<div class='item-desc'>"
                                        + "<p>" + dom.j_desc1 + "</p>"
                                        + "<p>" + dom.j_desc2 + "</p>"
                                        + "</div>"
                                        + "</div>"
                                        + "</a>"
                                        + "</li>"
                                })
                                $("#item1").append(item);
                            }
                        })
                    }
                })

            }
        })

    }
})