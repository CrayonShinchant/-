package com.tao.service.impl;

import com.tao.dao.SkillDao;
import com.tao.domain.Skill;
import com.tao.service.GetSkill;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
@Service
public class GetSkillImpl implements GetSkill {
    @Autowired
    private SkillDao skillDao;
    @Override
    public Skill selectSkillByName(String skill_name) {
       Skill skills = skillDao.selectSkill(skill_name);
        return skills;
    }
}
