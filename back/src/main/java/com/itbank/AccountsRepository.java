package com.itbank;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.itbank.models.Account;
import com.itbank.models.Operation;
import org.springframework.stereotype.Repository;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.List;
import java.util.Optional;

@Repository
public class AccountsRepository {
    private final String path = "src/main/resources/accounts.json";
    private List<Account> accounts = readJSONFile(this.path);

    private List<Account> readJSONFile(String path) {
        Gson gson = new Gson();

        try (FileReader reader = new FileReader(path)) {
            Type listType = new TypeToken<List<Account>>() {
            }.getType();

            return gson.fromJson(reader, listType);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    private void writeJsonFile(List<Account> accounts, String path) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        try (FileWriter writer = new FileWriter(path)) {
            gson.toJson(accounts, writer);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

    private int findLastId() {
        int lastId = 0;

        for (Account account : this.accounts) {
            if (account.getId() > lastId) {
                lastId = account.getId();
            }
        }

        return lastId;
    }

    private float findTotal(List<Operation> operations) {
        float total = 0;

        if (operations != null) {
            for (Operation operation : operations) {
                total = total + operation.getAmount();
            }
        }

        return total;
    }


    public List<Account> findAll() {
        return accounts;
    }

    public Optional<Account> findById(int id) {
        Account accountById = null;

        for (Account account : this.accounts) {
            if (account.getId() == id) {
                accountById = account;
                break;
            }
        }

        return Optional.ofNullable(accountById);
    }

    public Account save(Account account) {
        account.setId(this.findLastId() + 1);
        account.setTotal(findTotal(account.getOperations()));

        this.accounts.add(account);
        writeJsonFile(this.accounts, this.path);

        return account;
    }

    public Account update(Account account) {
        Account accountToUpdate = this.findById(account.getId()).orElse(null);

        if (accountToUpdate != null) {
            if (account.getName() != null) {
                accountToUpdate.setName(account.getName());
            }

            if (account.getType() != null && (account.getType().equals("bank") || account.getType().equals("savings"))) {
                accountToUpdate.setType(account.getType());
            }

            if (account.getOperations() != null) {
                accountToUpdate.setOperations(account.getOperations());
                accountToUpdate.setTotal(findTotal(account.getOperations()));
            }
        }

        writeJsonFile(this.accounts, this.path);

        return accountToUpdate;
    }

    public void deleteById(int id) {
        for (int i = 0; i < accounts.size(); i = i + 1) {
            if (accounts.get(i).getId() == id) {
                accounts.remove(i);
                break;
            }
        }

        writeJsonFile(this.accounts, this.path);
    }
}
