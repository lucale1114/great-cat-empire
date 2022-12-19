package se.catclicker.great.cat.empire.data;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import se.catclicker.great.cat.empire.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByUsernameContaining(String username);

    @Query("SELECT u FROM User u WHERE u.username = ?1")
    public User findByUsername(String username);
}
