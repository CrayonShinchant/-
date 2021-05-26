package com.tao.controller;

import com.tao.domain.Hero;
import com.tao.domain.Item;
import com.tao.service.impl.GetHeroImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HeroController {
    @Autowired
    private GetHeroImpl hero;

    //显示所有英雄
    @RequestMapping(value = "/hero_all.do")
    @ResponseBody
    public List<Hero> getAllHeros() {
        List<Hero> heros = hero.getHeros();
        return heros;
    }

    //搜索英雄
    @RequestMapping(value = "/searchHero.do")
    @ResponseBody
    public Hero getHero(String hero_Name) {
        Hero oneHero = hero.getOneHero(hero_Name);
        return oneHero;
    }

    //坦克
    @RequestMapping(value = "/tank.do")
    @ResponseBody
    public List<Hero> getTanks() {
        List<Hero> tank = hero.getTank();
        return tank;
    }

    @RequestMapping(value = "/zhanshi.do")
    @ResponseBody
    public List<Hero> getZhans() {
        List<Hero> zhan = hero.getZhan();
        return zhan;
    }

    //刺客
    @RequestMapping(value = "/cike.do")
    @ResponseBody
    public List<Hero> getCis() {
        List<Hero> ci = hero.getCi();
        return ci;
    }

    //法师
    @RequestMapping(value = "/fashi.do")
    @ResponseBody
    public List<Hero> getFas() {
        List<Hero> fa = hero.getFa();
        return fa;
    }

    //射手
    @RequestMapping(value = "/sheshou.do")
    @ResponseBody
    public List<Hero> getShes() {
        List<Hero> she = hero.getShe();
        return she;
    }

    //辅助
    @RequestMapping(value = "/fuzhu.do")
    @ResponseBody
    public List<Hero> getFus() {
        List<Hero> fu = hero.getFu();
        return fu;
    }

    //免费
    @RequestMapping(value = "/free.do")
    @ResponseBody
    public List<Hero> getFrees() {
        List<Hero> free = hero.getFree();
        return free;
    }

    //新手推荐
    @RequestMapping(value = "/introduce.do")
    @ResponseBody
    public List<Hero> getIntroduces() {
        List<Hero> introduce = hero.getIntroduce();
        return introduce;
    }




}
