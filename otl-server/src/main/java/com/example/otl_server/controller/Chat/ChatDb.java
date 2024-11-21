package com.example.otl_server.controller.Chat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ChatDb {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String message;
    private String date;

    protected ChatDb(){}

    public ChatDb(Long id, String message, String date) {
        this.id = id;
        this.message = message;
        this.date = date;
    }
}
