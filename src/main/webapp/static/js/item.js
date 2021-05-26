window.onload = function () {
    $("#search").click(searchHero);
    $("#search").blur(searchHeros);
    $(".types-ms>li").click(selectHero);
    $(".current").trigger('click');
    $("#searchBtn").click(searchOneItem);
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
            $("#search").val("请输入您想要搜索的道具名");
        }
    }
    function clearBox() {
        $("#Jpic").attr("src", "");
        $("#Jpic").attr("alt", "");
        $("#Jname").html("");
        $("#Jprice").html("");
        $("#Jtprice").html("");
        $("#Jitem-desc1").html("");
        $("#Jitem-desc2").html("");
    }
    function showDetails() {
        $("#Jlist-details>li>a").mouseover(function (e) {
            clearBox();
            var name = $(this).text();
            // 鼠标经过时给div挂事件
            $("#Jlist-details>li").bind("mousemove", function (es) {
                //es.pageX,es.pageY:获取鼠标移动后的坐标
                var endx = es.pageX + 30;  //计算div的最终位置
                var endy = es.pageY - 30;
                //带上单位
                $("#popPupItem").css("left", endx + "px").css("top", endy + "px")
            });
            //获取装备详细信息
            $.ajax({
                url: "../detail.do",
                type: "post",
                dataType: "json",
                data: {
                    jname:name
                },
                async: true,
                success: function (resp) {
                    $.each(resp, function (i, dom) {
                        if (i == "jname") {
                            $("#Jpic").attr("alt", dom);
                            $("#Jname").html(dom);
                        }else if(i=="j_img"){
                            $("#Jpic").attr("src", "item_img/" + dom);
                        }else if(i=="jprice"){
                            $("#Jprice").html("售价：" + dom);
                        }else if(i=="jtprice"){
                            $("#Jtprice").html("总价：" + dom);
                        }else if(i=="j_desc1"){
                            $("#Jitem-desc1").html(dom);
                        }else if(i=="j_desc2"){
                            $("#Jitem-desc2").html(dom);
                        }
                    })
                }
            })
            $("#popPupItem").show();
        })
        $("#Jlist-details>li").mouseout(function () {
            $("#popPupItem").hide();
            //鼠标弹起时给div取消事件
            $("#popPupItem").unbind("mousemove")
        })
    }

    function selectHero() {
        $(".i").css("background-color", "");
        $(this).find("span").find("i").css("background-color", "#0066FF");
        $(".types-ms:eq(0)").find("span").find("i").css("background-color", "#0066FF");
        if ($(this).attr("data-ptype") == 10) {
            $.ajax({
                url: "../all.do",
                type: "post",
                dataType: "json",
                async: true,
                success: function (resp) {
                    var item_all = "";
                    $.each(resp, function (i, dom) {
                        $(".herolist:eq(1)").html("");
                        item_all += "<li>"
                            + "<a href='#none'>"
                            + "<img src='item_img/" + dom.j_img + "' width='91' height='91'>"
                            + dom.jname
                            + "</a>"
                            + "</li>"
                    })
                    $(".herolist:eq(1)").append(item_all);
                    showDetails();
                }
            })
        } else if ($(this).attr("data-ptype") == 3) {
            $.ajax({
                url: "../atack.do",
                type: "post",
                dataType: "json",
                async: true,
                success: function (resp) {
                    var item_all = "";
                    $.each(resp, function (i, dom) {
                        $(".herolist:eq(1)").html("");
                        item_all += "<li>"
                            + "<a href='javascript:void(0);'>"
                            + "<img src='item_img/" + dom.j_img + "' width='91' height='91'>"
                            + dom.jname
                            + "</a>"
                            + "</li>"

                    })
                    $(".herolist:eq(1)").append(item_all);
                    showDetails();
                }
            })
        } else if ($(this).attr("data-ptype") == 1) {
            $.ajax({
                url: "../magic.do",
                type: "post",
                dataType: "json",
                async: true,
                success: function (resp) {
                    var item_all = "";
                    $.each(resp, function (i, dom) {
                        $(".herolist:eq(1)").html("");
                        item_all += "<li>"
                            + "<a href='javascript:void(0);'>"
                            + "<img src='item_img/" + dom.j_img + "' width='91' height='91'>"
                            + dom.jname
                            + "</a>"
                            + "</li>"
                    })
                    $(".herolist:eq(1)").append(item_all);
                    showDetails();
                }
            })
        } else if ($(this).attr("data-ptype") == 4) {
            $.ajax({
                url: "../defend.do",
                type: "post",
                dataType: "json",
                async: true,
                success: function (resp) {
                    var item_all = "";
                    $.each(resp, function (i, dom) {
                        $(".herolist:eq(1)").html("");
                        item_all += "<li>"
                            + "<a href='javascript:void(0);'>"
                            + "<img src='item_img/" + dom.j_img + "' width='91' height='91'>"
                            + dom.jname
                            + "</a>"
                            + "</li>"
                    })
                    $(".herolist:eq(1)").append(item_all);
                    showDetails();
                }
            })
        } else if ($(this).attr("data-ptype") == 2) {
            $.ajax({
                url: "../move.do",
                type: "post",
                dataType: "json",
                async: true,
                success: function (resp) {
                    var item_all = "";
                    $.each(resp, function (i, dom) {
                        $(".herolist:eq(1)").html("");
                        item_all += "<li>"
                            + "<a href='javascript:void(0);'>"
                            + "<img src='item_img/" + dom.j_img + "' width='91' height='91'>"
                            + dom.jname
                            + "</a>"
                            + "</li>"
                    })
                    $(".herolist:eq(1)").append(item_all);
                    showDetails();
                }
            })
        } else if ($(this).attr("data-ptype") == 5) {
            $.ajax({
                url: "../dayeitem.do",
                type: "post",
                dataType: "json",
                async: true,
                success: function (resp) {
                    var item_all = "";
                    $.each(resp, function (i, dom) {
                        $(".herolist:eq(1)").html("");
                        item_all += "<li>"
                            + "<a href='javascript:void(0);'>"
                            + "<img src='item_img/" + dom.j_img + "' width='91' height='91'>"
                            + dom.jname
                            + "</a>"
                            + "</li>"
                    })
                    $(".herolist:eq(1)").append(item_all);
                    showDetails();
                }
            })
        } else if ($(this).attr("data-ptype") == 6) {
            $.ajax({
                url: "../fuzhuitem.do",
                type: "post",
                dataType: "json",
                async: true,
                success: function (resp) {
                    var item_all = "";
                    $.each(resp, function (i, dom) {
                        $(".herolist:eq(1)").html("");
                        item_all += "<li>"
                            + "<a href='javascript:void(0);'>"
                            + "<img src='item_img/" + dom.j_img + "' width='91' height='91'>"
                            + dom.jname
                            + "</a>"
                            + "</li>"
                    })
                    $(".herolist:eq(1)").append(item_all);
                    showDetails();
                }
            })
        }

    }
    function searchOneItem() {
        var itemname = $("#search").val();
        $.ajax({
            url: "../oneItem.do",
            type: "post",
            dataType: "json",
            data: {
                jname: itemname
            },
            success: function (resp) {
                var item_all = "";
                var herf;
                var name;
                $.each(resp, function (i, dom) {
                    $(".herolist:eq(1)").html("");
                    if(i=="j_img"){
                        herf = dom;
                    }else if(i=="jname"){
                        name = dom;
                    }
                })
                item_all += "<li>"
                    + "<a href='javascript:void(0);'>"
                    + "<img src='item_img/" + herf + "' width='91' height='91'>"
                    + name
                    + "</a>"
                    + "</li>"
                $(".herolist:eq(1)").append(item_all);
                showDetails();
            }
        })
    }


}
