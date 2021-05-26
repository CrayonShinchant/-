package com.tao.dao;

import com.tao.domain.Skill;

import java.util.ArrayList;

public interface SkillDao {
    Skill selectSkill(String skill_name);
}
