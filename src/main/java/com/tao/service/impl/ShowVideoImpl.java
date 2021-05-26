package com.tao.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.tao.dao.VideoDao;
import com.tao.domain.Video;
import com.tao.service.ShowVideo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
@Service
public class ShowVideoImpl implements ShowVideo {
    @Autowired
    private VideoDao dao;
    @Override
    public PageInfo<Video> showVideos(int pageNum,int pageSize) {
        PageHelper.startPage(pageNum,pageSize);
        ArrayList<Video> videos = dao.showVideo();
        PageInfo pageInfo = new PageInfo(videos);
        return pageInfo;
    }

    @Override
    public Video selectVideos(Integer id) {
        Video video = dao.selectVideo(id);
        return video;
    }

    @Override
    public ArrayList<Video> selectVideosByName(String video_title) {
        ArrayList<Video> videos = dao.selectVideoByName(video_title);
        return videos;
    }



}
