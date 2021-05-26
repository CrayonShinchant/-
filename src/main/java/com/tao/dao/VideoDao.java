package com.tao.dao;

import com.tao.domain.Video;

import java.util.ArrayList;

public interface VideoDao {
    int insertVideo(Video video);
    ArrayList<Video> showVideo();
    Video selectVideo(Integer id);
    ArrayList<Video> selectVideoByName(String video_title);


}
