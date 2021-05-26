package com.tao.controller;


import com.tao.domain.Item;
import com.tao.service.impl.GetItemImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class ItemController {

    @Autowired
    private GetItemImpl item;

    //全部
    @RequestMapping(value = "/all.do")
    @ResponseBody
    public List<Item> getAllItem(){
        List<Item> all = item.getAll();
        return all;
    }
    //攻击
    @RequestMapping(value = "/atack.do")
    @ResponseBody
    public List<Item> getAtacks(){
        List<Item> atack = item.getAtack();
        return atack;
    }
    //法术
    @RequestMapping(value = "/magic.do")
    @ResponseBody
    public List<Item> getFashus(){
        List<Item> fashu = item.getFashu();
        return fashu;
    }
    //防御
    @RequestMapping(value = "/defend.do")
    @ResponseBody
    public List<Item> getDefends(){
        List<Item> defend = item.getDefend();
        return defend;
    }
    //移动
    @RequestMapping(value = "/move.do")
    @ResponseBody
    public List<Item> getMoves(){
        List<Item> move = item.getMove();
        return move;
    }
    //打野
    @RequestMapping(value = "/dayeitem.do")
    @ResponseBody
    public List<Item> getDayes(){
        List<Item> daye = item.getDaye();

        return daye;
    }
    //辅助
    @RequestMapping(value = "/fuzhuitem.do")
    @ResponseBody
    public List<Item> getFuzhus(){
        List<Item> fuzhu = item.getFuzhu();
        return fuzhu;
    }
    //显示装备详情
    @ResponseBody
    @RequestMapping(value = "/detail.do")
    public Item getDetails(String jname){
        Item detail = item.getDetail(jname);
        return detail;
    }
    //搜索单个装备
    @ResponseBody
    @RequestMapping(value = "/oneItem.do")
    public Item getOneItems(String jname){
        Item oneItem = item.getOneItem(jname);
        return oneItem;
    }
    //显示英雄详情信息
    @RequestMapping("/searHeroInfo.do")
    @ResponseBody
    public ArrayList<Item> getItem(String hero_item) {
        String[] split = hero_item.split(",");
        ArrayList<Item> items = new ArrayList<>();
        Item it = new Item();
        for (String s : split) {
            it.setJname(s);
            items.add(it);
            it = new Item();
        }
        ArrayList<Item> info = item.getInfo(items);
        return info;
    }
}
