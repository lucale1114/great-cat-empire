package se.catclicker.great.cat.empire.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import se.catclicker.great.cat.empire.data.UserRepository;
import se.catclicker.great.cat.empire.entity.User;

@Service
public class UserService {
    @Autowired
    private UserRepository userrep;

    public List<User> getAllUsers(){
        return userrep.findAll();
    }

   public List<User> findUser(String username){
        return userrep.findByUsernameContaining(username);
   } 
}
