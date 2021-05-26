package com.tao.domain;

public class Skill {
    private int id;
    private String skill_pic;
    private String skill_name;
    private String skill_level;
    private String skill_desc;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSkill_pic() {
        return skill_pic;
    }

    public void setSkill_pic(String skill_pic) {
        this.skill_pic = skill_pic;
    }

    public String getSkill_name() {
        return skill_name;
    }

    public void setSkill_name(String skill_name) {
        this.skill_name = skill_name;
    }

    public String getSkill_level() {
        return skill_level;
    }

    public void setSkill_level(String skill_level) {
        this.skill_level = skill_level;
    }

    public String getSkill_desc() {
        return skill_desc;
    }

    public void setSkill_desc(String skill_desc) {
        this.skill_desc = skill_desc;
    }

    public Skill() {
    }

    public Skill(int id, String skill_pic, String skill_name, String skill_level, String skill_desc) {
        this.id = id;
        this.skill_pic = skill_pic;
        this.skill_name = skill_name;
        this.skill_level = skill_level;
        this.skill_desc = skill_desc;
    }

    @Override
    public String toString() {
        return "Skill{" +
                "id=" + id +
                ", skill_pic='" + skill_pic + '\'' +
                ", skill_name='" + skill_name + '\'' +
                ", skill_level='" + skill_level + '\'' +
                ", skill_desc='" + skill_desc + '\'' +
                '}';
    }
}
