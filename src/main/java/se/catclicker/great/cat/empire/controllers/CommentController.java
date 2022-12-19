package se.catclicker.great.cat.empire.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import se.catclicker.great.cat.empire.entity.Comment;
import se.catclicker.great.cat.empire.service.CommentService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class CommentController {
    @Autowired
    private CommentService commentService;

    @CrossOrigin
    @RequestMapping("/comments")
    public List<Comment> getComments() {
        return commentService.getAllComments();
    }
    
    @CrossOrigin
    @PostMapping("/addComment")
    public Comment newComment(@RequestBody Comment newComment) {
      return commentService.addNewComment(newComment);
    }
}
