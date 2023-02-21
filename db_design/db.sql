CREATE DATABASE IF NOT EXISTS `hospital_db`;

USE `hospital_db`;

DROP TABLE IF EXISTS ``;


CREATE TABLE `User` (
    `user_id` INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    `first_name` VARCHAR(255) NOT NULL,
    `middle_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `sex` VARCHAR(15) NOT NULL,
    `age` INT NOT NULL,
    `race` VARCHAR(255),
    `hispanic_latino` BOOLEAN,
    -- `medical_record_number` VARCHAR(255)  TODO: FOREIGN KEY
);

CREATE TABLE `Facility` (
    `facility_id` INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    `facility_name` VARCHAR(255) NOT NULL,
    `facility_type` VARCHAR(255) NOT NULL,
    -- `address_id` TODO: FOREIGN KEY

);

CREATE TABLE `FacilityAddress` (
    `facility_address_id` INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    `street` VARCHAR(255),
    `city` VARCHAR(255),
    `county` VARCHAR(255),
    `state` VARCHAR(255),
    `phone` VARCHAR(255),
);