package com.tao.service.impl;

import com.tao.dao.RegisterCreatorDao;
import com.tao.domain.Creators;
import com.tao.domain.Hero;
import com.tao.service.RegisterCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegisterCreatorImpl implements RegisterCreator {
    @Autowired
    private RegisterCreatorDao creatorDao;
    @Override
    public int addCreator(Creators creators) {
        int num = creatorDao.insertCreator(creators);
        return num;
    }

    @Override
    public Creators signinCreator(Creators creators) {
        Creators creator = creatorDao.loginCreator(creators);
        return creator;
    }

    @Override
    public int updateNicks(Creators creators) {
        int i = creatorDao.updateNick(creators);
        return i;
    }

    @Override
    public int updateImg(Creators creators) {
        int i = creatorDao.updateHeadImg(creators);
        return i;
    }

    @Override
    public Creators check(String author_Name) {
        Creators c = creatorDao.checkCreator(author_Name);
        return c;
    }


}
