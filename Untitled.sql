create dataBase Netflix;
use Netflix;

create table movies(
idMovie int auto_increment primary key not null, 
titleMovie varchar(45) not null,
genderMovie varchar(45) not null,
imageMovie varchar(1000) not null,
categoryMovie varchar(45) not null,
yearMovie year
);

create table Users (
idUser int auto_increment primary key not null, 
userUser varchar(45) not null,
passwordUser varchar(45) not null,
nameUser varchar(45) not null,
emailUser varchar(45) not null,
plan_detailsUser varchar(45) not null
);

create table Actor (
idActor int auto_increment primary key not null, 
nameActor varchar(45) not null,
lastnameActor varchar(45) not null,
countryActor varchar(45) not null,
birthdayActor date not null
);

insert into movies(titleMovie, genderMovie, imageMovie, categoryMovie, yearMovie) values (
"Pulp Fiction", "Crimen", "https://pics.filmaffinity.com/pulp_fiction-210382116-large.jpg", "Top 10", "1994");

insert into movies(titleMovie, genderMovie, imageMovie, categoryMovie, yearMovie) values (
"La vita è bella", "Comedia", "https://pics.filmaffinity.com/la_vita_e_bella-646167341-mmed.jpg", "Top 10", "1996"),
("Forrest Gump", "Comedia", "https://pics.filmaffinity.com/forrest_gump-212765827-mmed.jpg", "Top 10", "1994");


insert into Users (userUser, passwordUser, nameUser, emailUser, plan_detailsuser) values(
"laura_dev", "laura", "Laura", "laura@gmail.com", "Standard"),
("maria_dev", "maria", "Maria", "maria@gmail.com", "Standard"), 
("ester_dev", "ester", "Ester", "ester@gmail.com", "Standard");

insert into Actor (nameActor, lastnameActor, countryActor, birthdayActor) values (
"Tom", "Hanks", "Estados Unidos", "1956-06-09");

insert into Actor (nameActor, lastnameActor, countryActor, birthdayActor) values (
"Roberto", "Benigni", "Italia", "1952-10-27"),
("John", "Travolta", "Estados Unidos", "1954-02-18");

SELECT * FROM movies;
SELECT titleMovie, genderMovie,yearMovie FROM movies WHERE yearMovie > 1990;
SELECT titleMovie,categoryMovie FROM movies WHERE categoryMovie = "Top 10";
UPDATE movies SET yearMovie=1997 WHERE titleMovie="La vita è bella";
SELECT * FROM MOVIES;
UPDATE movies SET yearMovie=1997 WHERE idMovie=2;
SELECT * FROM ACTOR;
SELECT nameActor,birthdayActor from actor where birthdayActor between "1954-01-01" and "1960-01-01";
SELECT nameActor, lastnameActor, countryActor FROM actor WHERE countryActor="Estados Unidos";
SELECT userUser,plan_detailsUser FROM users WHERE plan_detailsUser="Standard";
SELECT userUSer from users WHERE userUser like "M%";
DELETE from Users WHERE idUser in (SELECT idUser from Users where userUser like "M%");
SELECT idUser from Users where userUser like "M%";
DELETE from Users WHERE idUser in (10,12);


DELETE from Users WHERE userUser like "M%";

