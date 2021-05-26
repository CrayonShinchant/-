package com.tao.service;

import com.tao.domain.Skill;

import java.util.ArrayList;

public interface GetSkill {
    Skill selectSkillByName(String skill_name);
}
