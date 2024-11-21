package com.example.otl_server.controller.Comment;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping
    public CommentDb addComment(@RequestBody CommentDb commentDb){
        return commentService.saveComment(commentDb);
    }

    @GetMapping
    public List<CommentDb> getAllComments(){
        return commentService.getAllComment();
    }
}
