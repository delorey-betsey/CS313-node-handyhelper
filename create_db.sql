CREATE TABLE cooks(
	userID SERIAL PRIMARY KEY NOT NULL,
	firstName VARCHAR(100) NOT NULL,
	lastName VARCHAR(100)
);
INSERT INTO cooks(firstName, lastName) 
VALUES  ('Betsey', 'Delorey'),
        ('Orion', 'Christensen'),
        ('Marvin', 'Enamorado');


CREATE TABLE recipes(
	recipeID SERIAL NOT NULL PRIMARY KEY,
	userID INT NOT NULL REFERENCES cooks(userID),
	title VARCHAR(100) NOT NULL,
	instructions TEXT,
	servings INT,
	recipeNotes TEXT
);
INSERT INTO recipes(recipeID,userID, title, instructions, servings, recipeNotes) 
VALUES  (200,1, 'Chow Mein', 
'Saute celery and Onion.  Add canned veggies. 
Mix soysauce, sugar, cornstarch, chicken brother.  
Stir into veggies. Heat medium-high until thickened.',
4,'Family Favorite!');


CREATE TABLE ingredients(
	ingredientID SERIAL NOT NULL PRIMARY KEY,
	recipeID INT NOT NULL REFERENCES recipes(recipeID),
	item VARCHAR(100),
	amount INT,
	measure VARCHAR(100),
	itemNotes TEXT
);
INSERT INTO ingredients(ingredientID,recipeID,item,amount,measure,itemNotes) 
VALUES  (500, 200, 'chow mein vegetables', 30, 'ounce',
              'Large LaChoy canned chow mein vegetables.');
INSERT INTO ingredients(recipeID,item,amount,measure) 
VALUES  (200, 'celery', 1.5, 'cup'),
		(200, 'onion', 1.5, 'cup'),
		(200, 'soy sauce', 3, 'tablespoon'),
		(200, 'sugar', 1, 'tablespoon'),
		(200, 'cornstarch', 3, 'tablespoon'),
		(200, 'chicken broth', 1.5, 'cup');
			  


CREATE TABLE measures(
	measuresID SERIAL NOT NULL PRIMARY KEY,
	measuresType VARCHAR(100)
);
INSERT INTO measures(measuresID,measuresType) 
VALUES (900, 'cup');
INSERT INTO measures(measuresType) 
VALUES ('cup'),
('tablespoon'),
('teaspoon'),
('pound'),
('ounce');

INSERT INTO person(first, last, birthdate) 
VALUES  ('Betsey', 'Delorey', '1878-08-28'),
        ('Orion', 'Christensen', '1847-10-01'),
        ('Marvin', 'Enamorado', '1849-08-06');

CREATE USER ta_user WITH PASSWORD 'ta_pass';
GRANT SELECT, INSERT, UPDATE ON person TO ta_user;
GRANT USAGE, SELECT ON SEQUENCE person_id_seq TO ta_user;