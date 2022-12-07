CREATE DATABASE catempire;
USE catempire;

CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(15), pass VARCHAR(100), meowllings INT); 
INSERT INTO users VALUES ("User", "Pass", 10);