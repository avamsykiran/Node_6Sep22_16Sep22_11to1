drop database expressBooksDB;

create database expressBooksDB;

use expressBooksDB;

create table Books(
    bookId int primary key,
    title varchar(100),
    price double
);

insert into Books values(101,'The Hound OF Baskervelli',1234);
insert into Books values(102,'The Wings OF Fire',5234);