CREATE DATABASE popmedia;
USE popmedia;

CREATE TABLE `users` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `user_name` VARCHAR( 255) NOT NULL,
  `password` VARCHAR ( 255) NOT NULL,
  `category` VARCHAR ( 25) NOT NULL,
  `post` VARCHAR( 255) NOT NULL,
  `comments` VARCHAR( 255) NOT NULL,
  `posted_on` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);