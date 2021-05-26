package com.tao.service.impl;

import com.tao.dao.VideoDao;
import com.tao.domain.Video;
import com.tao.service.UploadVideo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UploadVideoImpl implements UploadVideo {
    @Autowired
    private VideoDao dao;
    @Override
    public int addVideo(Video video) {
        int i = dao.insertVideo(video);
        return i;
    }
}
