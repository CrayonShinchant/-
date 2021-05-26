package com.tao.service.impl;

import com.tao.dao.ItemDao;
import com.tao.domain.Item;
import com.tao.service.GetItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class GetItemImpl implements GetItem {

    @Autowired
    private ItemDao dao;

    @Override
    public List<Item> getAll() {
        List<Item> items = dao.searchAllItem();
        return items;
    }

    @Override
    public List<Item> getAtack() {
        List<Item> items = dao.searchAttack();
        return items;
    }

    @Override
    public List<Item> getFashu() {
        List<Item> items = dao.searchFashu();
        return items;
    }

    @Override
    public List<Item> getDefend() {
        List<Item> items = dao.searchDefend();
        return items;
    }

    @Override
    public List<Item> getMove() {
        List<Item> items = dao.searchMove();

        return items;
    }

    @Override
    public List<Item> getDaye() {
        List<Item> items = dao.searchDaye();
        return items;
    }

    @Override
    public List<Item> getFuzhu() {
        List<Item> items = dao.searchFuzhu();

        return items;
    }

    @Override
    public Item getDetail(String jname) {
        Item item = dao.searchDetail(jname);
        return item;
    }

    @Override
    public Item getOneItem(String item) {
        Item item1 = dao.searchOneItem(item);
        return item1;
    }

    @Override
    public ArrayList<Item> getInfo(ArrayList<Item> items) {
        ArrayList<Item> item = dao.searchInfo(items);
        return item;
    }


}
