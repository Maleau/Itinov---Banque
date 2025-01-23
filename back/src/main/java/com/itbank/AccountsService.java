package com.itbank;

import com.itbank.models.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountsService {
    @Autowired
    AccountsRepository repository;

    public List<Account> getAllAccounts() {
        return repository.findAll();
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

    public void deleteAccountById(int id) {
        repository.deleteById(id);
    }
}
