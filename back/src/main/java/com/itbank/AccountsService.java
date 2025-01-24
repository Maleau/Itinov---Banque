package com.itbank;

import com.itbank.models.Account;
import com.itbank.models.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class AccountsService {
    @Autowired
    AccountsRepository repository;

    public List<Account> getAllAccounts() {
        return repository.findAll();
    }

    public List<Account> getBankAccounts() {
        List<Account> bankAccounts = new ArrayList<>();

        for (Account account : repository.findAll()) {
            if (account.getType().equals("bank")) {
                bankAccounts.add(account);
            }
        }

        return bankAccounts;
    }

    public List<Account> getSavingsAccounts() {
        List<Account> savingsAccounts = new ArrayList<>();

        for (Account account : repository.findAll()) {
            if (account.getType().equals("savings")) {
                savingsAccounts.add(account);
            }
        }

        return savingsAccounts;
    }

    public Account getAccountById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Account createAccount(Account account) {
        return repository.save(account);
    }

    public Account updateAccount(Account account) {
        return repository.update(account);
    }

    public Account doDeposit(Account account, Operation operation) {
        if (operation.getName() == null || operation.getName().isBlank()) {
            operation.setName("Dépôt");
        }

        operation.setDate(new Date());

        List<Operation> operations = account.getOperations();
        operations.add(operation);
        account.setOperations(operations);

        return repository.update(account);
    }

    public Account doWithdrawal(Account account, Operation operation) {
        if (operation.getName() == null || operation.getName().isBlank()) {
            operation.setName("Retrait");
        }

        operation.setDate(new Date());
        operation.setAmount(-operation.getAmount());

        List<Operation> operations = account.getOperations();
        operations.add(operation);
        account.setOperations(operations);

        return repository.update(account);
    }

    public void deleteAccountById(int id) {
        repository.deleteById(id);
    }
}
