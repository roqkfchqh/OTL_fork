package com.example.otl_server.controller.Comment;

import jakarta.persistence.*;

@Entity
@Table(name = "comment_db")
public class CommentDb {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    private String nickname;
    private String comment;

    protected CommentDb() {}

    public CommentDb(Long id, Long userId, String nickname, String comment) {
        this.id = id;
        this.userId = userId;
        this.nickname = nickname;
        this.comment = comment;
    }

    public Long getId() {
        return id;
    }

    public Long getUserId() {
        return userId;
    }

    public String getNickname() {
        return nickname;
    }

    public String getComment() {
        return comment;
    }
}
