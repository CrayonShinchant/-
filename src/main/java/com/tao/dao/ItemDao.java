package com.tao.dao;

import com.tao.domain.Item;

import java.util.ArrayList;
import java.util.List;

public interface ItemDao {
    List<Item> searchAllItem();
    List<Item> searchAttack();
    List<Item> searchFashu();
    List<Item> searchDefend();
    List<Item> searchMove();
    List<Item> searchDaye();
    List<Item> searchFuzhu();
    Item searchDetail(String jname);
    Item searchOneItem(String jname);
    ArrayList<Item> searchInfo(ArrayList<Item> items);
}
