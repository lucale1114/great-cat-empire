package se.catclicker.great.cat.empire.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Comment {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private int id;
    private String poster;
    private String content;
    private Date timePosted;

    public Date getTimePosted() {
        return timePosted;
    }
    public void setTimePosted(Date timePosted) {
        this.timePosted = timePosted;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getPoster() {
        return poster;
    }
    public void setPoster(String poster) {
        this.poster = poster;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
   

}
