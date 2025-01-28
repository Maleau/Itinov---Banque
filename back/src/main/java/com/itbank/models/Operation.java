package com.itbank.models;

import lombok.Data;

import java.util.Date;

@Data
public class Operation implements Cloneable {
    private Date date;
    private String name;
    private float amount;

    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}
