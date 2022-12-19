package se.catclicker.great.cat.empire.data;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


import se.catclicker.great.cat.empire.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {



    <<<<<<< HEAD
   List<User> findByUsernameContaining(String username);


=======
>>>>>>> a445bc376d7c285b3e89ee3d6995cb43939b1b87
}
