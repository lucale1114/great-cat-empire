package se.catclicker.great.cat.empire.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import se.catclicker.great.cat.empire.entity.User;
import se.catclicker.great.cat.empire.service.UserService;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @CrossOrigin
    @RequestMapping("/users")
    public List<User> getUsers() {
        List<User> users = userService.getAllUsers();
        return users;
    }

    @CrossOrigin
    @RequestMapping("/topTenUsers")
    public Stream<User> getToUsers() {
        List<User> sortedList = userService.getTopTenUsers();
        List<User> topTenList = new ArrayList<User>(sortedList); 
        Stream<User> sl = topTenList.stream().limit(10);

        return sl;
    }

    @RequestMapping("/findusers")
    public List<User> getUserByName(@RequestParam(value = "search", required = false) String username) {
        return userService.findUser(username);
    }

}