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

    private String chat;
    private String date;

    protected ChatDb(){}

    public ChatDb(Long id, String chat, String date) {
        this.id = id;
        this.chat = chat;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public String getChat() {
        return chat;
    }

    public String getDate() {
        return date;
    }
}
