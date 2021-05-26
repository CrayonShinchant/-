package com.tao.controller;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.tao.domain.ToPage;
import com.tao.domain.Video;
import com.tao.service.impl.ShowVideoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;

@Controller
public class VideoViewController {

    @Autowired
    private ShowVideoImpl show;


    @RequestMapping("/byPages.do")
    @ResponseBody
    public PageInfo<Video> showVideos(@RequestBody ToPage page) {
        Integer pageNo = page.getPageNo();
        Integer pageSize = page.getPageSize();
        PageInfo<Video> pageInfo = show.showVideos(pageNo, pageSize);
        return pageInfo;
    }


    //视频播放页
    @RequestMapping("/videoView.do")
    @ResponseBody
    public Video videoView(HttpServletRequest request,
                           HttpServletResponse response, HttpSession session) {
        System.out.println("进入videoView视频播放页控制层");
        // 获取上传的id
        int id = Integer.parseInt(request.getParameter("id"));
        Video video = show.selectVideos(id);
        return video;
    }

    //查找指定英雄名的视频
    @RequestMapping("/selectVideos.do")
    @ResponseBody
    public PageInfo<Video> getVideoByName(Integer pageNo, Integer pageSize, String video_title) {
        PageHelper.startPage(pageNo, pageSize);
        video_title = "%"+video_title+"%";
        ArrayList<Video> videos = show.selectVideosByName(video_title);
        PageInfo<Video> pageInfo = new PageInfo<>(videos);
        return pageInfo;
    }


}
