package com.tao.controller;

import com.tao.domain.Creators;
import com.tao.domain.Progress;
import com.tao.domain.Video;
import com.tao.service.impl.UploadVideoImpl;
import com.tao.util.ConverVideoUtils;
import com.tao.util.VideoTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Controller
public class VideoController {

    @Autowired
    private UploadVideoImpl videos;


    @RequestMapping(value = "/addVideo.do")
    @ResponseBody
    public Map<String, Object> uploadflie_Video(@RequestParam CommonsMultipartFile dropzFile, HttpServletRequest request, HttpSession session) throws FileNotFoundException {
        Map<String, Object> result = new HashMap<>();
        if (dropzFile.getSize() != 0) {
            //上传的多格式的视频文件-作为临时路径保存，转码以后删除-路径不能写//
            String path = "E:/Projectpicture/websiteimages/temp/";

            File TempFile = new File(path);
            if (TempFile.exists()) {
                if (TempFile.isDirectory()) {
                    System.out.println("该文件夹存在。");
                } else {
                    System.out.println("同名的文件存在，不能创建文件夹。");
                }
            } else {
                System.out.println("文件夹不存在，创建该文件夹。");
                TempFile.mkdir();
            }

            // 获取上传时候的文件名
            String filename = dropzFile.getOriginalFilename();

            // 获取文件后缀名
            String filename_extension = filename.substring(filename
                    .lastIndexOf(".") + 1);
            System.out.println("视频的后缀名:" + filename_extension);

            //时间戳做新的文件名，避免中文乱码-重新生成filename
            long filename1 = new Date().getTime();
            filename = Long.toString(filename1) + "." + filename_extension;

            //去掉后缀的文件名
            String filename2 = filename.substring(0, filename.lastIndexOf("."));
            System.out.println("视频名为:" + filename2);

            //源视频地址+重命名后的视频名+视频后缀
            String yuanPATH = (path + filename);

            System.out.println("视频的完整文件名1:" + filename);
            System.out.println("源视频路径为:" + yuanPATH);

            //上传到本地磁盘/服务器
            try {
                //临时文件写入
                System.out.println("写入本地磁盘/服务器");
                InputStream is = dropzFile.getInputStream();
                OutputStream os = new FileOutputStream(new File(path, filename));
                int len = 0;
                byte[] buffer = new byte[2048];

                while ((len = is.read(buffer)) != -1) {
                    os.write(buffer, 0, len);
                }
                os.close();
                os.flush();
                is.close();
            } catch (FileNotFoundException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            //获取转码后的mp4文件名
            String Mp4path = "E://Projectpicture/websiteimages/finshvideo/";
            System.out.println("========上传完成，开始调用转码工具类=======");
            //调用转码机制flv mp4 f4v m3u8 webm ogg放行直接播放，
            //asx，asf，mpg，wmv，3gp，mov，avi，wmv9，rm，rmvb等进行其他转码为mp4

            if (filename_extension.equals("avi") || filename_extension.equals("rm")
                    || filename_extension.equals("rmvb") || filename_extension.equals("wmv")
                    || filename_extension.equals("3gp") || filename_extension.equals("mov")
                    || filename_extension.equals("flv") || filename_extension.equals("ogg")

            ) {

                VideoTest c = new VideoTest();
                c.run(yuanPATH);   //调用转码
                System.out.println("=================转码过程彻底结束=====================");
            } else {
                try {
                    //mp4文件写入
                    InputStream is = dropzFile.getInputStream();
                    OutputStream os = new FileOutputStream(new File(Mp4path, filename));
                    int len = 0;
                    byte[] buffer = new byte[2048];

                    while ((len = is.read(buffer)) != -1) {
                        os.write(buffer, 0, len);
                    }
                    os.close();
                    os.flush();
                    is.close();
                } catch (FileNotFoundException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                } catch (IOException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
                System.out.println("===mp4格式开始截图===");
                ConverVideoUtils utils = new ConverVideoUtils();
                String mp4Picture = Mp4path + filename2 + ".mp4";
                utils.processImg(mp4Picture);
            }

            String filename3 = filename2;
            filename2 = filename2 + ".mp4";
            String NewVideopath = Mp4path + filename2;
            System.out.println("新视频的url:" + NewVideopath);


            //删除临时文件
            File file2 = new File(path);
            if (!file2.exists()) {
                System.out.println("没有该文件");
            }
            if (!file2.isDirectory()) {
                System.out.println("没有该文件夹");
            }
            String[] tempList = file2.list();
            File temp = null;
            for (int i = 0; i < tempList.length; i++) {
                if (path.endsWith(File.separator)) {
                    temp = new File(path + tempList[i]);
                } else {
                    temp = new File(path + File.separator + tempList[i]);
                }
                if (temp.isFile() || temp.isDirectory()) {
                    temp.delete();        //删除文件夹里面的文件
                }
            }
            File vid = new File(NewVideopath);
            String picture = filename3 + ".jpg";
            System.out.println("截图文件路径：" + picture);
            if (vid.length() > 0) {
                result.put("tag", true);
                session.setAttribute("video", NewVideopath);
                session.setAttribute("picture", picture);
            }
            System.out.println("所有的临时视频文件删除成功");
        }

        return result;
    }

    @RequestMapping("/addVideoText.do")
    @ResponseBody
    public Map<String, Object> uploadVideoText(String text, String title, String time, HttpSession session, HttpServletRequest request) {
        Map<String, Object> resp = new HashMap<>();
        Video video = new Video();
        String src = (String) session.getAttribute("video");
        src = src.substring(32);
        System.out.println(src);
        Creators create = (Creators) session.getAttribute("creator");

        //把图片地址存放在服务器里
        String picture = (String) session.getAttribute("picture");
        String tupian = "E:/Projectpicture/websiteimages/finshimg/" + picture;
        File pictures = new File(tupian);
        String filePath = request.getSession().getServletContext().getRealPath("static/videoPictures/");
        filePath += picture;
        File showPicture = new File(filePath);
        if (!showPicture.exists()) {
            try {
                showPicture.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        try {
            BufferedInputStream bis = new BufferedInputStream(new FileInputStream(pictures));
            BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(showPicture));
            byte[] bytes = new byte[1024];
            int len=0;
            while ((len = bis.read(bytes)) != -1) {
                bos.write(bytes, 0, len);
            }
            bis.close();
            bos.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        String author_nick = create.getAuthor_Nick();
        Integer id = create.getId();
        video.setVideo_src(src);
        video.setVideo_descript(text);
        video.setVideo_title(title);
        video.setAuthor_Id(id);
        video.setAuthor_Nick(author_nick);
        video.setVideo_time(time);
        video.setVideo_picture(picture);
        int i = videos.addVideo(video);
        if (i > 0) {
            resp.put("tag", true);
        }
        return resp;
    }


    @ResponseBody
    @RequestMapping("/getInfo.do")
    public Map<String, Object> getUploadInfo(HttpServletRequest request, HttpServletResponse response) {
        Map<String, Object> result = new HashMap<>();
        response.setHeader("Cache-Control", "no-store"); //禁止浏览器缓存
        response.setHeader("Pragrma", "no-cache");  //禁止浏览器缓存
        response.setDateHeader("Expires", 0);   //禁止浏览器缓存

        Progress status = (Progress) request.getSession(true).getAttribute("status");//从session中读取上传信息
        if (status == null) {
            result.put("error", "没发现上传文件!");
            return result;
        }
        int percent;
        long read = status.getBytesRead();
        long contentLength = status.getContentLength();
        percent = (int) ((read * 1.0 * 100) / contentLength);//百分比
        result.put("percent", percent);
        return result;
    }
}
