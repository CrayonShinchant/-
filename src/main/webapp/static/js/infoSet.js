$(function () {
        showInfo();
        showHeadImg();
        function showInfo() {
            $.ajax({
                url: "../creatorInfo.do",
                type: "post",
                async: true,
                dataType: "json",
                success: function (creator) {
                    $.each(creator, function (i, dom) {
                        if (i != "id") {
                            if (i == "author_Name") {
                                $(".S_txt2:eq(0)").text(dom);
                            } else if (i == "author_Nick") {
                                if (creator.author_Nick == null) {
                                    $(".S_txt2:eq(1)").text("请设置昵称");
                                    $(".w_lh30").text();
                                } else {
                                    $(".S_txt2:eq(1)").text(dom);
                                    $(".w_lh30").text(dom);
                                }
                            } else if (i == "author_Pwd") {
                                $(".S_txt2:eq(2)").text("******")
                            } else if (i == "head_Img") {
                                $("#head_Img").attr("src", "upload/"+dom);
                            }
                        }
                    })
                }
            })
        }
        function showHeadImg() {
            $.ajax({
                url: "../creatorInfo.do",
                type: "post",
                async: true,
                dataType: "json",
                success: function (creator) {
                    $.each(creator,function (i, dom) {
                        if(dom=="head_Img"){
                            if (dom == null) {
                                $("#head_Img").attr("src", "./img/logo.png");
                            }
                        }
                    })

                }
            })
        }


        $(".set_opt").click(reNickName);
        $(".W_btn_b").click(hideReName);
        $(".W_btn_a").click(updateNickName);


        $("#file").change(function () {
            $("#head_Img").attr("src", URL.createObjectURL($(this)[0].files[0]));
            upimg();
        });

        //开始通过ajax上传图片
        function upimg() {
            //该函数为储存表单数据的，而这里就头像一个文件，所以只需向该函数里添加一个数据
            var dropzFile = new FormData();
            //该函数采用Map的键值形式，键的名字需要和后台的接受的该值的名字一样，该值就为文件
            dropzFile.append("dropzFile", $('#file')[0].files[0]);
            $.ajax({
                url: "../uploadHead.do",
                type: 'POST',
                dataType: "",
                data: dropzFile,
                async: false,
                cache: false,
                contentType: false,
                processData: false,
                success: function (resp) {
                    console.log(resp);
                    $("#head_Img").attr("src", "upload/" + resp.fileName);
                    //上传成功后发送另一个请求，修改数据库的的图片路径
                    upSetImg(resp.fileName);
                },
                error: function () {
                    alert("失败");
                }
            })
        };

        //修改数据后台的图片路径
        function upSetImg(fileName) {
            $.ajax({
                url: "../upPersonageById.do",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: JSON.stringify({
                    "head_Img": fileName
                }),
                success: function (resp) {
                    $.messager.alert("修改头像提示", "修改成功！", "info");
                },
                error: function (resp) {
                    alert("修改失败")
                }
            })
        }


        function updateNickName() {
            if ($(".W_input").val() == "") {
                alert("昵称不能为空！");
            } else {
                $.ajax({
                    url: "../updateNick.do",
                    type: "post",
                    async: true,
                    data: {
                        author_Nick: $(".W_input").val(),
                        author_Name: $(".S_txt2:eq(0)").text(),
                    },
                    dataType: "json",
                    success: function (creator) {
                        $.messager.alert("修改昵称提示", "修改成功！", "info", function () {
                            window.location.reload();
                        });
                    }
                })
            }
        }

    }
)

function hideReName() {
    $(".set_opt").html("编辑");
    $(".unfold_content").hide();
    $(".S_txt2").show();
    $(".account_fold:eq(1)").attr("class", "account_fold SW_fun_bg")
}

function reNickName() {
    var data = $(".set_opt").html();
    if (data == "编辑") {
        $(".set_opt").html("收起");
        data = $(".set_opt").html();
    } else {
        $(".set_opt").html("编辑");
        data = $(".set_opt").html();
    }
    if (data == $(".set_opt").attr("action-data").substring(5, 7)) {
        $(".unfold_content").hide();
        $(".S_txt2:eq(1)").show();
        $(".account_fold:eq(1)").attr("class", "account_fold SW_fun_bg")
    } else {
        $(".unfold_content").show();
        $(".S_txt2:eq(1)").hide();
        $(".account_fold:eq(1)").attr("class", "account_fold account_unfold")
    }
}