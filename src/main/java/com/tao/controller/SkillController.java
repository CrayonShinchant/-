package com.tao.controller;


import com.tao.domain.Skill;
import com.tao.service.impl.GetSkillImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;



@Controller
public class SkillController {

    @Autowired
    private GetSkillImpl skill;

    @RequestMapping("/getSkill.do")
    @ResponseBody
    public Skill getSkill(String skill_name){
        Skill skills = skill.selectSkillByName(skill_name);
        return skills;
    }
}
