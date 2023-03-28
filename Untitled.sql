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
SELECT titleMovie, genderMovie FROM movies WHERE yearMovie > 1990;
SELECT titleMovie FROM movies WHERE categoryMovie = "Top 10";