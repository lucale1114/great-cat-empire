package se.catclicker.great.cat.empire.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import se.catclicker.great.cat.empire.entity.User;
import se.catclicker.great.cat.empire.service.UserService;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @CrossOrigin
    @RequestMapping("/users")
    public List<User> getUsers(){
        List<User> users = userService.getAllUsers();
        return users;
    }

    @CrossOrigin
    @RequestMapping("/topTenUsers")
    public List<User> getToUsers(){
        List<User> topTen = userService.getTopTenUsers();
        return topTen;
    }
}
