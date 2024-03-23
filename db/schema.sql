DROP DATABASE IF EXISTS techblog_db;
CREATE DATABASE techblog_db;

\c techblog_db;

CREATE TABLE user (
    id INTEGER, 
    username VARCHAR(30),
    password VARCHAR(30)
);

CREATE TABLE comment (
    id INTEGER,
    post_id INTEGER,
    user_id INTEGER,
    content VARCHAR(250)
);

CREATE TABLE post (
    id INTEGER, 
    user_id INTEGER,
    title VARCHAR(50),
    content VARCHAR(250)
)