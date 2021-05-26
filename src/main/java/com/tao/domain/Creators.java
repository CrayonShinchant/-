package com.tao.domain;

public class Creators {
    private Integer id;
    private String author_Name;
    private String author_Pwd;
    private String author_Nick;
    private String head_Img;

    public Creators() {
    }

    public Creators(Integer id, String author_Name, String author_Pwd, String author_Nick, String head_Img) {
        this.id = id;
        this.author_Name = author_Name;
        this.author_Pwd = author_Pwd;
        this.author_Nick = author_Nick;
        this.head_Img = head_Img;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAuthor_Name() {
        return author_Name;
    }

    public void setAuthor_Name(String author_Name) {
        this.author_Name = author_Name;
    }

    public String getAuthor_Pwd() {
        return author_Pwd;
    }

    public void setAuthor_Pwd(String authro_Pwd) {
        this.author_Pwd = authro_Pwd;
    }

    public String getAuthor_Nick() {
        return author_Nick;
    }

    public void setAuthor_Nick(String author_Nick) {
        this.author_Nick = author_Nick;
    }

    public String getHead_Img() {
        return head_Img;
    }

    public void setHead_Img(String head_Img) {
        this.head_Img = head_Img;
    }

    @Override
    public String toString() {
        return "Creators{" +
                "id=" + id +
                ", author_Name='" + author_Name + '\'' +
                ", authro_Pwd='" + author_Pwd + '\'' +
                ", author_Nick='" + author_Nick + '\'' +
                ", head_Img='" + head_Img + '\'' +
                '}';
    }
}
