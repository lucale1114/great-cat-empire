package se.catclicker.great.cat.empire.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import se.catclicker.great.cat.empire.data.UserRep;
import se.catclicker.great.cat.empire.entity.User;

@RestController
@RequestMapping("/")
public class UserController {
    @Autowired
    private UserRep userrep;

    @RequestMapping("/users")
    public List<User> getUsers(){
        List<User> users = userrep.findAll();
        return users;
    }
}
