package com.tao.service;

import com.tao.domain.Item;

import java.util.ArrayList;
import java.util.List;

public interface GetItem {
    List<Item> getAll();
    List<Item> getAtack();
    List<Item> getFashu();
    List<Item> getDefend();
    List<Item> getMove();
    List<Item> getDaye();
    List<Item> getFuzhu();
    Item getDetail(String jname);
    Item getOneItem(String item);
    ArrayList<Item> getInfo(ArrayList<Item> items);
}
