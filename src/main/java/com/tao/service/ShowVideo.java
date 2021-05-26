package com.tao.service;

import com.github.pagehelper.PageInfo;
import com.tao.domain.Video;

import java.util.ArrayList;

public interface ShowVideo {
    PageInfo<Video> showVideos(int pageNum,int pageSize);
    Video selectVideos(Integer id);
    ArrayList<Video> selectVideosByName(String video_title);

}
