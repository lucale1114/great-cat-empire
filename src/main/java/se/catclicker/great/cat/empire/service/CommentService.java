package se.catclicker.great.cat.empire.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import se.catclicker.great.cat.empire.data.CommentRepository;
import se.catclicker.great.cat.empire.entity.Comment;

@Service
public class CommentService {
    
    @Autowired
    CommentRepository commentrep;

    public List<Comment> getAllComments(){
        return commentrep.findAll();
    }

    public Comment addNewComment(Comment newComment){
        return commentrep.save(newComment);
    }
}
