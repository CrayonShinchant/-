package com.tao.domain;

public class Item {
    private Integer id;
    private String Jname;
    private Integer Jprice;
    private Integer Jtprice;
    private String J_desc1;
    private String J_desc2;
    private String J_img;

    public Item() {
    }

    public Item(Integer id, String jname, Integer jprice, Integer jtprice, String j_desc1, String j_desc2, String j_img) {
        this.id = id;
        Jname = jname;
        Jprice = jprice;
        Jtprice = jtprice;
        J_desc1 = j_desc1;
        J_desc2 = j_desc2;
        J_img = j_img;
    }

    public String getJ_img() {
        return J_img;
    }

    public void setJ_img(String j_img) {
        J_img = j_img;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getJname() {
        return Jname;
    }

    public void setJname(String jname) {
        Jname = jname;
    }

    public Integer getJprice() {
        return Jprice;
    }

    public void setJprice(Integer jprice) {
        Jprice = jprice;
    }

    public Integer getJtprice() {
        return Jtprice;
    }

    public void setJtprice(Integer jtprice) {
        Jtprice = jtprice;
    }

    public String getJ_desc1() {
        return J_desc1;
    }

    public void setJ_desc1(String j_desc1) {
        J_desc1 = j_desc1;
    }

    public String getJ_desc2() {
        return J_desc2;
    }

    public void setJ_desc2(String j_desc2) {
        J_desc2 = j_desc2;
    }

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", Jname='" + Jname + '\'' +
                ", Jprice=" + Jprice +
                ", Jtprice=" + Jtprice +
                ", J_desc1='" + J_desc1 + '\'' +
                ", J_desc2='" + J_desc2 + '\'' +
                ", J_img='" + J_img + '\'' +
                '}';
    }
}
