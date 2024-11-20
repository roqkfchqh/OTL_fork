package com.example.otl_server.controller;

public class CommentDto {
    private final String id;

    private final String nickname;

    private final String comment;

    public CommentDto(String id, String nickname, String comment) {
        this.id = id;
        this.nickname = nickname;
        this.comment = comment;
    }

    public String getId() {
        return id;
    }

    public String getNickname() {
        return nickname;
    }

    public String getComment() {
        return comment;
    }
}
