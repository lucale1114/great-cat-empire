package se.catclicker.great.cat.empire.data;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import se.catclicker.great.cat.empire.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    
}
