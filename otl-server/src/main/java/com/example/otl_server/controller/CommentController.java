package com.example.otl_server.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping
    public ResponseEntity<String> addComment(@RequestBody CommentDto commentDto){
        commentService.saveComment(commentDto);
        return ResponseEntity.ok("댓글 등록 성공");
    }
}
