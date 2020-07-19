create database ThinkBridgeDB;
use ThinkBridgeDB;

create table Item (itemid int, itemname nvarchar(50), price Decimal(10, 2), description nvarchar(150), primary key(itemid));


insert into Item values (1, 'mobile', 8000, 'new Model');
insert into Item values (2, 'charger', 9000, 'mobile charger');
insert into Item values (3, 'tv', 10000, 'new Model');
insert into Item values (4, 'ipad', 52000, 'new Model');
insert into Item values (5, 'laptop', 50000, 'new Model');

select * from Item;