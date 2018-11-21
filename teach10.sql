CREATE TABLE person
 (
	id serial NOT NULL PRIMARY KEY,

	first_name varchar(80),

	last_name varchar(80),
	dob date);

CREATE TABLE parent (
	id serial NOT NULL PRIMARY KEY,
	father_id integer REFERENCES person (id),
	mother_id integer REFERENCES person (id),
	child_id integer REFERENCES person (id));


INSERT INTO person (first_name, last_name, dob) VALUES ('Shaun', 'Densley', '1987-12-28');
INSERT INTO person (first_name, last_name, dob) VALUES ('Jodie', 'Densley', '1995-08-02');
INSERT INTO person (first_name, last_name, dob) VALUES ('Darcie', 'Densley', '2013-02-23');
INSERT INTO person (first_name, last_name, dob) VALUES ('Melodie', 'Densley', '2018-08-31');
INSERT INTO person (first_name, last_name, dob) VALUES ('Laura', 'Chesshir', '1991-09-17');