package com.example.otl_server.controller.Chat;

import org.springframework.stereotype.Service;

@Service
public class ChatService {
    private final ChatRepository chatRepository;

    public ChatService(ChatRepository chatRepository) {
        this.chatRepository = chatRepository;
    }

    public ChatDb saveMessage(ChatDb chat) {
        return chatRepository.save(chat);
    }
}
