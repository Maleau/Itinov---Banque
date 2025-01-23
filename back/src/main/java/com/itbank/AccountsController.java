package com.itbank;

import com.itbank.models.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/accounts")
public class AccountsController {
    @Autowired
    AccountsService service;

    @GetMapping
    public ResponseEntity<List<Account>> getAllAccounts() {
        return new ResponseEntity<>(service.getAllAccounts(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Account> getAccountById(@PathVariable int id) {
        Account account = service.getAccountById(id);

        if (account == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "There is no account with the id " + id);
        } else {
            return new ResponseEntity<>(account, HttpStatus.OK);
        }
    }

    @PostMapping
    public ResponseEntity<Account> createAccount(@RequestBody Account account) {
        if (account.getName() == null || (account.getType() == null) || (!account.getType().equals("bank") && !account.getType().equals("savings"))) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Account name or type is incorrect");
        } else {
            return new ResponseEntity<>(service.createAccount(account), HttpStatus.CREATED);
        }
    }

    @PutMapping
    public ResponseEntity<Account> updateAccount(@RequestBody Account account) {
        if (service.getAccountById(account.getId()) == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "There is no account with the id " + account.getId());
        } else {
            return new ResponseEntity<>(service.updateAccount(account), HttpStatus.OK);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAccountById(@PathVariable int id) {
        if (service.getAccountById(id) == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "There is no account with the id " + id);
        } else {
            service.deleteAccountById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
