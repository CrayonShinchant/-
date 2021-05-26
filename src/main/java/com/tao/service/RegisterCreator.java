package com.tao.service;

import com.tao.domain.Creators;
import com.tao.domain.Hero;

import java.util.List;

public interface RegisterCreator {
    int addCreator(Creators creators);
    Creators signinCreator(Creators creators);
    int updateNicks(Creators creators);
    int updateImg(Creators creators);
    Creators check(String name);

}
