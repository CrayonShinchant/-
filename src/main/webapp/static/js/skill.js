$(function () {
    $("#spellList>li").click(getSkill);
    $("#80104").click()
    function getSkill() {
        var skill_name = $(this).find("p").html();
        $.ajax({
            url: "../getSkill.do",
            type:"post",
            dataType: "json",
            data:{
                skill_name:skill_name
            },
            success: function (resp) {
                var skill = "";
                var skill_pic;
                var skill_name;
                var skill_level;
                var skill_desc;
                $.each(resp, function (i, dom) {
                    if (i == "skill_pic") {
                        skill_pic = dom;
                    } else if (i == "skill_name") {
                        skill_name = dom;
                    } else if (i == "skill_level") {
                        skill_level = dom;
                    } else if (i == "skill_desc") {
                        skill_desc = dom;
                    }
                })
                skill += "<div class='spell-title'>"
                    + "<img src='skill/" + skill_pic + "'>"
                    + "<h4>" + skill_name + "</h4>"
                    + "<p class='cons'>" + skill_level
                    + "</p></div>"
                    + "<div class='spell-desc'>"
                    + skill_desc + "</div>"
                $("#spellDefail").html("")
                $("#spellDefail").html(skill);
            }
        })
    }
})