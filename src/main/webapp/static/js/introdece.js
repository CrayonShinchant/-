window.onload = function () {
    $(".game_sepecialstep>.sp").click(selectTese);
    function selectTese() {
        var collection = $(".game_sepecialstep>.sp")
        $.each(collection,function () {
            $(this).find("a").removeClass("step_current")
            $(this).find("i").removeClass("bcurrent")
        })
        $(this).find("a").removeClass("step_normal")
        $(this).find("a").addClass("step_current")
        $(this).find("i").addClass("bcurrent")
        var id = $(this).find("i").attr("data-id")
        var list = $(".game_desc:gt(1)>div");
        $.each(list,function (index,dom) {
            if(id == dom.id.substr(4,1)){
                $(this).css("display","block");
            }else {
                $(this).css("display","none");
            }
        })

    }
}