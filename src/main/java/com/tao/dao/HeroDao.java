package com.tao.dao;

import com.tao.domain.Hero;

import java.util.List;

public interface HeroDao {
    List<Hero> getAllHero();
    Hero searchHero(String hero_Name);
    List<Hero> searchTank();
    List<Hero> searchZhan();
    List<Hero> searchCi();
    List<Hero> searchFa();
    List<Hero> searchShe();
    List<Hero> searchFu();
    List<Hero> searchFree();
    List<Hero> serachIntroduce();

}
