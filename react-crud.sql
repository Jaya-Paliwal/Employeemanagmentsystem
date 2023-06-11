-- Create database
CREATE DATABASE react_curd;

-- Create users table
CREATE TABLE `react_curd`.`users`
(
    `id` int NOT NULL auto_increment,
    `name` varchar(50),
    `email` varchar(60),
    `mobile` bigint(10),
    `create_at` timestamp,
    `updated_at` timestamp, PRIMARY KEY (id)
);
