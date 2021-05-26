package com.tao.dao;

import com.tao.domain.Creators;
import com.tao.domain.Hero;

import java.util.List;


public interface RegisterCreatorDao {
    Creators checkCreator(String author_Name);
    int insertCreator(Creators creators);
    Creators  loginCreator(Creators creators);
    int updateNick(Creators creators);
    int updateHeadImg(Creators creators);

}
