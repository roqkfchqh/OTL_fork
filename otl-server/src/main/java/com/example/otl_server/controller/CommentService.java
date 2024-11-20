package com.example.otl_server.controller;

import org.springframework.stereotype.Service;

@Service
public class CommentService {
    public void saveComment(CommentDto commentDto){
        System.out.println("댓글 저장: " + commentDto.getComment());
    }
}
