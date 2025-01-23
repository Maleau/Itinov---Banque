package com.itbank.models;

import lombok.Data;

import java.util.List;

@Data
public class Account {
    private int id;
    private String name;
    private String type;
    private List<Operation> operations;
    private float total;
}
