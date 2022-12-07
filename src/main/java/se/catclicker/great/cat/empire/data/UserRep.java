package se.catclicker.great.cat.empire.data;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import se.catclicker.great.cat.empire.entity.User;

public interface UserRep extends JpaRepository<User, Long> {
        public User getUser();
}
