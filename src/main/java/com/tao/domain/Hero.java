package com.tao.domain;

public class Hero {
    private Integer id;
    private String hero_Name;
    private String hero_Img;
    private String hero_html;
    private String hero_item;

    public Hero() {
    }

    public Hero(Integer id, String hero_Name, String hero_Img, String hero_html, String hero_item) {
        this.id = id;
        this.hero_Name = hero_Name;
        this.hero_Img = hero_Img;
        this.hero_html = hero_html;
        this.hero_item = hero_item;
    }

    public Hero(Integer id, String hero_Name, String hero_Img, String hero_html) {
        this.id = id;
        this.hero_Name = hero_Name;
        this.hero_Img = hero_Img;
        this.hero_html = hero_html;
    }

    public String getHero_item() {
        return hero_item;
    }

    public void setHero_item(String hero_item) {
        this.hero_item = hero_item;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getHero_Name() {
        return hero_Name;
    }

    public void setHero_Name(String hero_Name) {
        this.hero_Name = hero_Name;
    }

    public String getHero_Img() {
        return hero_Img;
    }

    public void setHero_Img(String hero_Img) {
        this.hero_Img = hero_Img;
    }

    public String getHero_html() {
        return hero_html;
    }

    public void setHero_html(String hero_html) {
        this.hero_html = hero_html;
    }

    @Override
    public String toString() {
        return "Hero{" +
                "id=" + id +
                ", hero_Name='" + hero_Name + '\'' +
                ", hero_Img='" + hero_Img + '\'' +
                ", hero_html='" + hero_html + '\'' +
                '}';
    }
}
