drop table if exists members;
drop table if exists projetos;


create table members(
    id                          int not null auto_increment,
    hackerId                    int not null unique,
	name	 					varchar(255),
    position                    varchar(255),
    imageName                   varchar(255),

	primary key (email)
);

create table directionMembers(
    id                      int not null auto_increment,
    memberId                int not null,

    primary key(id)

    foreign key(memberId) references members(id)
);


create table projetoMembers(
    id                      int not null auto_increment,
    projetoId               int not null,       
    memberId                int not null,

    primary key(id)

    foreign key(memberId) references members(id)
	foreign key (projetoId) references projetos(id)
);

create table projetos(
	id						int not null auto_increment,
	name	 					varchar(255),

	primary key(id)
);

insert into(members) (hackerId, name, position, imageName) 
values (1, "Hugo Marques", "Vice-Presidente", "hugoMarques.png")