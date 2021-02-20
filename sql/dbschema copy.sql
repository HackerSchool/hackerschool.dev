drop table if exists visit;


create table sessionVisit(
    id                          int not null auto_increment,
    starting_time               date,
	finishing_time              date,

	primary key (id)
);

create table pageVisit(
    id int not null auto_increment,
    visitId int not null,
    pageName varchar(255),
    starting_time   date,
	finishing_time  date,

    primary key (id),
    foreign key (visitId) references sessionVisit (id)
)