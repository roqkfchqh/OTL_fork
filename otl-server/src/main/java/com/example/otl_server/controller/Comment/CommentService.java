package com.example.otl_server.controller.Comment;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository){
        this.commentRepository = commentRepository;
    }

    public CommentDb saveComment(CommentDb commentDb){
        return commentRepository.save(commentDb);
    }

    public List<CommentDb> getAllComment(){
        return commentRepository.findAll();
    }

}
