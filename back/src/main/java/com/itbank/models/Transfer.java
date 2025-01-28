package com.itbank.models;

import lombok.Data;

@Data
public class Transfer {
    private int debitAccountId;
    private int creditAccountId;
    private Operation operation;
}
