package se.catclicker.great.cat.empire.data;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import se.catclicker.great.cat.empire.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
}
