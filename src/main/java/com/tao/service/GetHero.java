package com.tao.service;

import com.tao.domain.Hero;

import java.util.List;

public interface GetHero {
    List<Hero> getHeros();
    Hero getOneHero(String hero_Name);
    List<Hero> getTank();
    List<Hero> getZhan();
    List<Hero> getCi();
    List<Hero> getFa();
    List<Hero> getShe();
    List<Hero> getFu();
    List<Hero> getFree();
    List<Hero> getIntroduce();
}
