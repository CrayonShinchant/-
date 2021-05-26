package com.tao.domain;

public class Video {
    private Integer id;
    private Integer author_Id;
    private String author_Nick;
    private String video_title;
    private String video_src;
    private String video_picture;
    private String video_descript;
    private String video_time;

    public Video() {
    }

    public Video(Integer id, Integer author_Id, String author_Nick, String video_title, String video_src, String video_picture, String video_descript, String video_time) {
        this.id = id;
        this.author_Id = author_Id;
        this.author_Nick = author_Nick;
        this.video_title = video_title;
        this.video_src = video_src;
        this.video_picture = video_picture;
        this.video_descript = video_descript;
        this.video_time = video_time;
    }

    public String getAuthor_Nick() {
        return author_Nick;
    }

    public void setAuthor_Nick(String author_Nick) {
        this.author_Nick = author_Nick;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAuthor_Id() {
        return author_Id;
    }

    public void setAuthor_Id(Integer author_Id) {
        this.author_Id = author_Id;
    }

    public String getVideo_title() {
        return video_title;
    }

    public void setVideo_title(String video_title) {
        this.video_title = video_title;
    }

    public String getVideo_src() {
        return video_src;
    }

    public void setVideo_src(String video_src) {
        this.video_src = video_src;
    }

    public String getVideo_picture() {
        return video_picture;
    }

    public void setVideo_picture(String video_pictrue) {
        this.video_picture = video_pictrue;
    }

    public String getVideo_descript() {
        return video_descript;
    }

    public void setVideo_descript(String video_descript) {
        this.video_descript = video_descript;
    }

    public String getVideo_time() {
        return video_time;
    }

    public void setVideo_time(String video_time) {
        this.video_time = video_time;
    }


    @Override
    public String toString() {
        return "Video{" +
                "id=" + id +
                ", author_Id=" + author_Id +
                ", video_title='" + video_title + '\'' +
                ", video_src='" + video_src + '\'' +
                ", video_picture='" + video_picture + '\'' +
                ", video_descript='" + video_descript + '\'' +
                ", video_time='" + video_time + '\'' +
                '}';
    }
}
