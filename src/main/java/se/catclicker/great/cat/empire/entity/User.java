package se.catclicker.great.cat.empire.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private int id;
    private String username;
    private String password;
    private int meowllings;
    
    private int robberCat = 0;
    private int pirateCat = 0;
    private int performerCat = 0;
	private int luckyCat = 0;
    private int ceoCat = 0;
    private int mafiaCat = 0;
    
	public int getMafiaCat() {
        return mafiaCat;
    }
    public void setMafiaCat(int mafiaCat) {
        this.mafiaCat = mafiaCat;
    }
    private int tomCat = 0;
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public int getMeowllings() {
        return meowllings;
    }
    public void setMeowllings(int meowllings) {
        this.meowllings = meowllings;
    }
    public int getRobberCat() {
		return robberCat;
	}
	public void setRobberCat(int robberCat) {
		this.robberCat = robberCat;
	}
	public int getPirateCat() {
		return pirateCat;
	}
	public void setPirateCat(int pirateCat) {
		this.pirateCat = pirateCat;
	}
	public int getPerformerCat() {
		return performerCat;
	}
	public void setPerformerCat(int performerCat) {
		this.performerCat = performerCat;
	}
	public int getLuckyCat() {
		return luckyCat;
	}
	public void setLuckyCat(int luckyCat) {
		this.luckyCat = luckyCat;
	}
	public int getCeoCat() {
		return ceoCat;
	}
	public void setCeoCat(int ceoCat) {
		this.ceoCat = ceoCat;
	}
    public int getTomCat() {
		return tomCat;
	}
	public void setTomCat(int tomCat) {
		this.tomCat = tomCat;
	}
   

}
