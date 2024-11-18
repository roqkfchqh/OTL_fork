package com.example.otl_server.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {

    @GetMapping("/register")
    public String showRegisterPage() {
        return "register"; // templates/register.html을 렌더링
    }

    @PostMapping("/register")
    public String processRegister(@RequestParam String username, @RequestParam String email, @RequestParam String password) {
        System.out.println("회원가입 요청: " + username + ", " + email + ", " + password);

        // 회원가입 처리 후 다른 페이지로 리다이렉트
        return "redirect:/success"; // 성공 페이지로 이동
    }

    @GetMapping("/success")
    public String showSuccessPage() {
        return "success"; // templates/success.html 렌더링
    }
}
