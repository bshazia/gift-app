DROP DATABASE IF EXISTS IGiftU;
CREATE DATABASE IGiftU;
Use IGiftU;

-- dimention tables
CREATE TABLE User (
    user_Id INT NOT NULL UNIQUE AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY (user_Id)
);

CREATE TABLE Category (
	category_Id INT NOT NULL UNIQUE AUTO_INCREMENT,
    category varchar(100) NOT NULL UNIQUE,
	PRIMARY KEY (category_Id)
);

CREATE TABLE Interests (
    interest_Id INT NOT NULL UNIQUE AUTO_INCREMENT,
    interest VARCHAR(100),
    PRIMARY KEY (interest_Id)
);

CREATE TABLE Event_Type (
	event_type_Id INT NOT NULL UNIQUE AUTO_INCREMENT,
    event_type VARCHAR(100),
    PRIMARY KEY (event_type_Id)
);

CREATE TABLE Gender (
    gender_Id INT NOT NULL AUTO_INCREMENT,
    gender VARCHAR(20),
    PRIMARY KEY (gender_Id)
);

-- Facts tables
CREATE TABLE Items (
    item_Id INT NOT NULL UNIQUE AUTO_INCREMENT,
    item_Name VARCHAR(500) NOT NULL,
    category_Id INT NOT NULL,
    lower_age_limit INT,
    high_age_limit INT,
    url TEXT, -- Add not null after being sucessful in fetching url
    PRIMARY KEY (item_Id),
    FOREIGN KEY (category_Id) REFERENCES Category(category_Id)
);

CREATE TABLE Person (
    person_Id INT UNIQUE NOT NULL AUTO_INCREMENT,
    user_Id INT NOT NULL,
    person_name VARCHAR(100),
    gender_Id INT NOT NULL,
    dob DATE,
    -- phonenumber
    PRIMARY KEY (person_Id),
    FOREIGN KEY (user_Id) REFERENCES User(user_Id),
    FOREIGN KEY (gender_Id) REFERENCES Gender(gender_Id)
);

CREATE TABLE Event (
    event_Id int NOT NULL AUTO_INCREMENT,
    event_type_Id INT NOT NULL,
    person_Id INT NOT NULL,
    FOREIGN KEY (person_Id) REFERENCES Person(person_Id),
    FOREIGN KEY (event_type_Id) REFERENCES Event_Type(event_type_Id),
    PRIMARY KEY (event_Id)
);

CREATE TABLE Favorites (
	item_Id INT NOT NULL,
    person_Id INT NOT NULL,
    PRIMARY KEY(item_Id, person_Id),
	FOREIGN KEY (item_Id) REFERENCES Items(item_Id),
    FOREIGN KEY (person_Id) REFERENCES Person(person_Id)
);

CREATE TABLE Preferences (
	person_Id INT NOT NULL,
    interest_Id INT NOT NULL,
	FOREIGN KEY (person_Id) REFERENCES Person(person_Id),
    FOREIGN KEY (interest_Id) REFERENCES Interests(interest_Id),
    PRIMARY KEY(person_Id, interest_Id)
);

INSERT INTO Gender(gender) VALUES('Male');
INSERT INTO Gender(gender) VALUES('Female');
INSERT INTO Gender(gender) VALUES('Other');
SELECT *
FROM gender;

-- Procedures
DELIMITER $$
CREATE PROCEDURE Create_Account(IN email_ VARCHAR(100), IN username_ VARCHAR(100), IN password_ VARCHAR(100))
	BEGIN
		INSERT INTO user(email, username, password) 
        VALUES (email_, username_, password_);
    END $$
DELIMITER ;
INSERT INTO user(email, username, password) 
        VALUES ("gyani", "Ananya", 123456);
     
-- login check whether values match


-- drop procedure Reset_Password;
-- DELIMITER $$
-- CREATE PROCEDURE Get_user_Id(IN _email VARCHAR(100), OUT req_user_Id INT)
--	BEGIN     
--        SELECT user_id into req_user_Id
--        FROM user
--        WHERE email = _email;
--    END $$
-- DELIMITER ;


   
-- phonenumber
DELIMITER $$
CREATE PROCEDURE Add_Person(IN user_Id INT, IN _person_name VARCHAR(100),IN _gender_Id int, IN _dob VARCHAR(10))
	BEGIN     
		INSERT INTO Person(user_Id, person_name, gender_Id, dob) VALUES(user_Id, _person_name, _gender_Id, _dob); -- dob in yyyy-mm-dd format
    END $$
DELIMITER ;
SELECT *
FROM Person;
CALL Add_Person(1, 'Maanya', 2, '2003-02-26');

DELIMITER $$
CREATE PROCEDURE Add_preferences(IN _person_Id INT, IN _interest_id INT)
	BEGIN     
		INSERT INTO Preferences(person_Id, interest_id) VALUES(_person_Id, _interest_id);
    END $$
DELIMITER ;

-- DELIMITER $$
-- CREATE PROCEDURE Add_preferences(IN _person_Id INT, IN _interest_id INT)
-- 	BEGIN     
-- 		INSERT INTO Preferences(person_Id, interest_id) VALUES(_person_Id, _interest_id);
--     END $$
-- DELIMITER ;

DELIMITER $$
CREATE PROCEDURE Add_favories(IN _person_Id INT, IN _item_Id INT)
	BEGIN     
		INSERT INTO Preferences(person_Id, item_Id) VALUES(_person_Id, _item_Id);
    END $$
DELIMITER ;

-- if the email doesn't exist
DELIMITER $$
CREATE PROCEDURE Reset_Password(IN _email VARCHAR(100), IN new_password VARCHAR(100))
	BEGIN     
		-- BEGIN TRY
		-- CALL Get_user_Id("gyani", @req_user_Id);
		UPDATE User
		SET password = new_password
		WHERE email = _email;
		-- END TRY
        -- BEGIN CATCH
		-- END CATCH
    END $$
DELIMITER ;
SELECT *
from user;
CALL Reset_Password("gyani", "omg");
-- forgot password
   -- send email
   
DELIMITER $$
CREATE PROCEDURE Change_person_dob(IN _person_Id INT, IN new_dob VARCHAR(10))
	BEGIN     
		UPDATE Person
		SET dob = new_dob
		WHERE person_id = _person_id;
    END $$
DELIMITER ;
CALL Change_person_dob(1, '1999-06-06');
SELECT *
FROM person;

DELIMITER $$
CREATE PROCEDURE Change_person_name(IN _person_Id INT, IN new_person_name VARCHAR(10))
	BEGIN     
		UPDATE Person
		SET person_name = new_person_name
		WHERE person_id = _person_id;
    END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE Change_person_gender(IN _person_Id INT, IN new_person_gender_Id INT)
	BEGIN     
		UPDATE Person
		SET gender_Id = new_person_gender_Id
		WHERE person_id = _person_id;
    END $$
DELIMITER ;
-- delete person
DELIMITER $$
CREATE PROCEDURE Delete_person(IN _person_Id INT)
	BEGIN     
        DELETE FROM Person 
        WHERE person_Id = _person_Id;
        DELETE FROM Preferences 
        WHERE person_Id = _person_Id;
        DELETE FROM Favorites
        WHERE person_Id = _person_Id;
        DELETE FROM Event
        WHERE person_Id = _person_Id;
    END $$
DELIMITER ;

SELECT * FROM USER;
SELECT * FROM USER WHERE user_id = 1 && email = "gyani";

DELIMITER $$
CREATE PROCEDURE Delete_preferences(IN _person_Id INT, IN _interest_id INT)
	BEGIN     
        DELETE FROM Preferences 
        WHERE person_Id = _person_Id && interest_id = _interest_id;
    END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE delete_favories(IN _person_Id INT, IN _item_Id INT)
	BEGIN     
        DELETE FROM Favorites
        WHERE person_Id = _person_Id && item_Id = _item_Id;
    END $$
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE user_id(IN _email VARCHAR(100), IN _password VARCHAR(100), OUT _user_id INT)
	BEGIN     
        SELECT user_id INTO _user_id
        FROM user
        WHERE email = _email && password = _password;
    END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE person_id(IN _user_id INT, IN _person_name VARCHAR(100), OUT _person_id INT)
	BEGIN     
        SELECT person_id INTO _person_id
        FROM person
        WHERE user_id = _user_id && person_name = _person_name;
    END $$
DELIMITER ;

select * from user;
-- CALL log_in('rex@gmail.com', 'rexakenji', @_user_id);
-- SELECT @_user_id;