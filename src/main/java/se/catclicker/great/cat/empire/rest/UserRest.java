package se.catclicker.great.cat.empire.rest;

import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

import se.catclicker.great.cat.empire.entity.User;

@XmlRootElement(name="users")
public class UserRest {
    private List<User> users;

    
}
