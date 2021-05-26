package com.tao.util;

public class VideoTest {

    //web调用
    public void run(String yuanPATH) {
        try {
            // 转码和截图功能开始
            String filePath = yuanPATH;				//web传入的源视频
            System.out.println("ConverVideoTest说:传入工具类的源视频为:"+filePath);

            ConverVideoUtils zout = new ConverVideoUtils(filePath);  //传入path
            String targetExtension = ".mp4";  				//设置转换的格式
            boolean isDelSourseFile = true;

            //删除源文件
            boolean beginConver = zout.beginConver(targetExtension,isDelSourseFile);
            System.out.println(beginConver);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
