package com.itbank;

import com.itbank.models.Account;
import com.itbank.models.Operation;
import com.itbank.models.Transfer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/accounts")
public class AccountsController {
    @Autowired
    AccountsService service;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public ResponseEntity<List<Account>> getAllAccounts() {
        return new ResponseEntity<>(service.getAllAccounts(), HttpStatus.OK);
    }

    @GetMapping("/bank")
    public ResponseEntity<List<Account>> getBankAccounts() {
        return new ResponseEntity<>(service.getBankAccounts(), HttpStatus.OK);
    }

    @GetMapping("/savings")
    public ResponseEntity<List<Account>> getSavingsAccounts() {
        return new ResponseEntity<>(service.getSavingsAccounts(), HttpStatus.OK);
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

    @PutMapping("/deposit/{id}")
    public ResponseEntity<Account> doDeposit(@PathVariable int id, @RequestBody Operation operation) {
        Account account = service.getAccountById(id);

        if (account == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "There is no account with the id " + id);
        } else if (operation.getAmount() <= 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The operation's amount must be positive");
        } else {
            return new ResponseEntity<>(service.doDeposit(account, operation), HttpStatus.OK);
        }
    }

    @PutMapping("/withdrawal/{id}")
    public ResponseEntity<Account> doWithdrawal(@PathVariable int id, @RequestBody Operation operation) {
        Account account = service.getAccountById(id);

        if (account == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "There is no account with the id " + id);
        } else if (operation.getAmount() <= 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The operation's amount must be positive");
        } else if ((account.getTotal() - operation.getAmount()) < 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "a withdrawal cannot exceed the overdraft threshold");
        } else {
            return new ResponseEntity<>(service.doWithdrawal(account, operation), HttpStatus.OK);
        }
    }

    @PutMapping("/transfer")
    public ResponseEntity<List<Account>> doTransfer(@RequestBody Transfer transfer) {
        Account debitAccount = service.getAccountById(transfer.getDebitAccountId());
        Account creditAccount = service.getAccountById(transfer.getCreditAccountId());
        Operation operation = transfer.getOperation();

        if (debitAccount == null || creditAccount == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "There is no account with specified id ");
        } else if (operation == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Transfer's operation shouldn't be null ");
        } else if (operation.getAmount() <= 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The transfer's amount must be positive");
        } else if ((debitAccount.getTotal() - operation.getAmount()) < 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "a transfer cannot exceed the overdraft threshold of the debit account");
        } else {
            return new ResponseEntity<>(service.doTransfer(debitAccount, creditAccount, operation), HttpStatus.OK);
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
