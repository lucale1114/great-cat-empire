package se.catclicker.great.cat.empire.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.security.auth.login.AccountNotFoundException;
//import javax.inject.Inject;
import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;

import se.catclicker.great.cat.empire.forms.UserId;


public class UserDao {
    private static Logger logger = LoggerFactory.getLogger(UserDao.class);
    private DataSource ds;

    //@InjectService
    UserDao(DataSource ds) {
        this.ds = ds;
    }

    public UserId validate(String user, String password) throws AccountNotFoundException {
        try (Connection conn = ds.getConnection();
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery(
                        "SELECT User, Pass FROM user WHERE user = '" + user + "'")) {
            while (rs.next()) {
                int id = rs.getInt("id");
                String passwordHash = rs.getString("password_hash");
                Argon2PasswordEncoder encoder = new Argon2PasswordEncoder();
                if (encoder.matches(password, passwordHash)) {
                    return UserId.of(id);
                }
            }
        } catch (SQLException ex) {
            throw new AccountNotFoundException();
        }

        throw new AccountNotFoundException("Unable to find user " + user);
    }

}
