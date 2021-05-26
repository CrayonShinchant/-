package com.tao.controller;

import com.fasterxml.jackson.databind.introspect.AnnotatedClass;
import com.tao.domain.Creators;
import com.tao.service.impl.RegisterCreatorImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

@Controller
public class CreatorController {




    @Autowired
    private RegisterCreatorImpl creator;

    //注册
    @RequestMapping(value = "/register.do")
    @ResponseBody
    public Integer addCreators(Creators creators) {
        int num = creator.addCreator(creators);
        return num;
    }
    //检查用户名
    @RequestMapping(value = "/check.do")
    @ResponseBody
    public Creators checkCreator(String author_Name){
        System.out.println(author_Name);
        Creators check = creator.check(author_Name);
        return check;
    }

    //登录
    @RequestMapping(value = "/login.do")
    @ResponseBody
    public Creators signinCreators(Creators creators, HttpSession session) {
        Creators creator = this.creator.signinCreator(creators);
        if (creator != null) {
            session.setAttribute("creator", creator);
        }
        return creator;
    }

    @RequestMapping("/toLogin.do")
    public String toLogin(){
        return "forward:static/register.html";
    }

    //显示个人信息
    @RequestMapping(value = "/creatorInfo.do")
    @ResponseBody
    public Creators creatorInfo(HttpSession session) {
        Creators creators = (Creators) session.getAttribute("creator");
        return creators;
    }

    //修改昵称]
    @RequestMapping(value = "/updateNick.do")
    @ResponseBody
    public Creators updateNickName(Creators creators, HttpSession session) {
        Creators create = (Creators) session.getAttribute("creator");
        String author_nick = creators.getAuthor_Nick();
        create.setAuthor_Nick(author_nick);
        int i = creator.updateNicks(create);
        return create;
    }

    //头像修改
    @RequestMapping(value = "/uploadHead.do", method = RequestMethod.POST)
    @ResponseBody
    public Object upload(MultipartFile dropzFile, HttpServletRequest request) {
        Map<String, Object> result = new HashMap<String, Object>();
        //获取该文件的名字
        String fileName = dropzFile.getOriginalFilename();
        System.out.println(fileName);
        //获取服务器的绝对路径
        String filePath = request.getSession().getServletContext().getRealPath("static/upload");
        System.out.println(filePath);
        //切割文件的后缀，获取文件的类型
        String fileSuffix = fileName.substring(fileName.lastIndexOf("."), fileName.length());
        System.out.println(fileSuffix);
        //创建文件对象，把服务器的路径放进去
        File file = new File(filePath);
        //判断路径是否存在，不在创建
        if (!file.exists()) {
            file.mkdirs();
        }
        //拼接文件名  使用uuid防重名和文件的后缀，
        file = new File(filePath, UUID.randomUUID() + fileSuffix);
        System.out.println(file.getName());
        if (!file.exists()) {
            try {
                //创建文件
                file.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        try {
            //开始搬运文件
            dropzFile.transferTo(file);
            System.out.println("1111111");
        } catch (IOException e) {
            e.printStackTrace();
        }
        result.put("fileName", file.getName());
        //最后返回值，该值为上传后文件的名字
        return result;
    }


    @RequestMapping(value = "/upPersonageById", method = RequestMethod.POST)
    @ResponseBody
    public Object upPersonageById(@RequestBody Creators creators, HttpSession session) {
        //前端传id和修改后图片的名字之后修改用户信息头像的路径（图片的名字）
        Creators create = (Creators) session.getAttribute("creator");
        String head_img = creators.getHead_Img();
        System.out.println(head_img);
        create.setHead_Img(head_img);
        int i = creator.updateImg(create);
        return create;
    }

    //根据是否登录来移除或添加登录框
    @RequestMapping("/loginStyle.do")
    @ResponseBody
    public Creators getCreator(HttpSession session){
        Creators creator = (Creators)session.getAttribute("creator");
        return creator;
    }
    //退出登录
    @RequestMapping("/removeCreator.do")
    @ResponseBody
    public Creators removeCreator(HttpSession session){
        session.removeAttribute("creator");
        Creators creators = (Creators) session.getAttribute("creator");
        return creators;
    }




}
