package com.example.otl_server.controller.Chat;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }
    /*
    @MessageMapping("/chat.register")
    @SendTo("/topic/public")
    public ChatDb register(
            @Payload ChatDb chatDb,
            SimpMessageHeaderAccessor headerAccessor
    ){
        return chatDb;
    }
    */

    @MessageMapping("/chat.sendChat")
    @SendTo("/topic/public")
    public ChatDb sendChat(ChatDb chat){
        return chatService.sendChat(chat);
    }
}
