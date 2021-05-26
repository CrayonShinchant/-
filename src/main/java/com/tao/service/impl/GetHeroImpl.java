package com.tao.service.impl;

import com.tao.dao.HeroDao;
import com.tao.domain.Hero;
import com.tao.service.GetHero;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class GetHeroImpl implements GetHero {

    @Autowired
    private HeroDao dao;
    @Override
    public List<Hero> getHeros() {
        List<Hero> heros = dao.getAllHero();
        return heros;
    }

    @Override
    public Hero getOneHero(String hero_Name) {
        Hero hero = dao.searchHero(hero_Name);
        return hero;
    }

    @Override
    public List<Hero> getTank() {
        List<Hero> heroes = dao.searchTank();
        return heroes;
    }

    @Override
    public List<Hero> getZhan() {
        List<Hero> heroes = dao.searchZhan();
        return heroes;
    }

    @Override
    public List<Hero> getCi() {
        List<Hero> heroes = dao.searchCi();
        return heroes;
    }

    @Override
    public List<Hero> getFa() {
        List<Hero> heroes = dao.searchFa();
        return heroes;
    }

    @Override
    public List<Hero> getShe() {
        List<Hero> heroes = dao.searchShe();
        return heroes;
    }

    @Override
    public List<Hero> getFu() {
        List<Hero> heroes = dao.searchFu();
        return heroes;
    }

    @Override
    public List<Hero> getFree() {
        List<Hero> heroes = dao.searchFree();
        return heroes;
    }

    @Override
    public List<Hero> getIntroduce() {
        List<Hero> heroes = dao.serachIntroduce();
        return heroes;
    }


}
