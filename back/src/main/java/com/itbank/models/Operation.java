package com.itbank.models;

import lombok.Data;

import java.util.Date;

@Data
public class Operation {
    private Date date;
    private String name;
    private float amount;
}
