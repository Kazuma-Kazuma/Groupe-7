create database pokemonsite;

create table pokemonsite.item
(
    id_item int not null auto_increment primary key,
    item_name varchar(255) not null,
    effect varchar(255) not null
);

create table pokemonsite.move
(
    id_move int not null auto_increment primary key,
    move_name varchar(255) not null,
    movetype varchar(255) not null,
    PP int not null,
    Power int not null,
    Accuracy int not null,
    Effect varchar(255) not null
);

create table pokemonsite.pokemon
(
    id_poke int not null auto_increment primary key,
    poke_name varchar(255) not null,
    poke_type varchar(255) not null,
    poke_type2 varchar(255) not null,
    poke_hp int not null,
    poke_attack int not null,
    poke_defense int not null,
    poke_spattack int not null,
    poke_spdefense int not null,
    poke_speed int not null,
    talent varchar(255) not null,
    poke_ability1 varchar(255) not null,
    poke_ability2 varchar(255) not null,
    poke_ability3 varchar(255) not null,
    poke_ability4 varchar(255) not null,
    id_move int not null,
    id_item int not null,
    constraint pokemon__id_move_fk foreign key (id_move) references pokemonsite.move (id_move),
    constraint pokemon__id_item_fk foreign key (id_item) references pokemonsite.item (id_item)
);

create table pokemonsite.user
(
    id_user int not null auto_increment primary key,
    username varchar(255) not null,
    password varchar(255) not null,
    email varchar(255) not null,
    isAdmin boolean not null,
);

create table pokemonsite.team
(
    id_team int not null auto_increment primary key,
    team_name varchar(255) not null,
    id_user int not null,
    description varchar(255) not null,
    id_poke int not null,
    pokemon1 varchar(255) not null,
    pokemon2 varchar(255) not null,
    pokemon3 varchar(255) not null,
    pokemon4 varchar(255) not null,
    pokemon5 varchar(255) not null,
    pokemon6 varchar(255) not null,
    constraint team__id_poke_fk foreign key (id_poke) references pokemonsite.pokemon (id_poke),
    constraint team__id_user_fk foreign key (id_user) references pokemonsite.user (id_user)
);

Insert into pokemonsite.item (id_item, item_name, effect) 
values  ('1','Ceinture force', 'Permet de résister à 1hp si le pokémon a 100% de ses HP'),
        ('2','Bandeau choix', "Multiplie l'attaque par x1,5 mais bloque l'utilisateur sur une attaque."),
        ('3','Lunettes choix', "Multiplie l'attaque spé par x1,5 mais bloque l'utilisateur sur une attaque"),
        ('4', 'Restes', "Restaure 6,5% des HP à la fin de chaque tour.");

Insert into pokemonsite.move (id_move, move_name, movetype, PP, Power, Accuracy, Effect)
values  ('1','Draco-meteor','Dragon','8','120','95',"Une pluie de météorite s'abat sur l'ennemi. Baisse l'Atk spéciale de 2 cran après utilisation"),
        ('2','Lame feuille','Plante','24','90','100',"Cette capacité a plus de chance (12,5% soit 1/8) d'infliger un coup critique."),
        ('3','Mach punch','Combat','32','40','100',"Cette attaque est prioritaire (+1)"),
        ('4','Lame de roc','Roche','16','100','95',"Cette attaque a plus de chance (12,5% soit 1/8) d'infliger un coup critique.");
        
Insert into pokemonsite.pokemon (id_poke, poke_name, poke_type, poke_type2, poke_hp, poke_attack, poke_defense, poke_spattack, poke_spdefense, poke_speed, talent, poke_ability1, poke_ability2, poke_ability3, poke_ability4, id_move, id_item)
values  ('1','Lanssorien','Dragon','Spectre','88','120','75','100','75','142', 'Infiltration','Draco Meteor',"Ball'ombre",'Demi-tour','Déflagration','1','3'),
        ('2','Katagami','Acier','Plante','59','181','131','59','31','109', 'Boost chimère', 'Lame feuille','Sabotage','Lame sainte','Estocorne','2','2'),
        ('3','Chapignon','Plante','Combat','60','120','80','60','60','70', 'Technicien','Mach punch','tomberoche','spore','balle graine','3','1'),
        ('4','Gigansel','Roche',NULL,'100','100','130','45','90','35', 'Sel purificateur', 'Lame de roc','Mur de fer','Big splash','Soin','4','4');

Insert into pokemonsite.user (id_user, username, password, email, isAdmin)
values  ('1','BEnoit','chapignon','ben@test.com','1'),
        ('2','Pierre','katagami','pierre@gmail.com','0'),
        ('3','Paul','gigansel','Paulvaucluze@test.com','0'),
        ('4','Roman','lanssorien','Romangivannone@test.com','1'),

Insert into pokemonsite.team (id_team, team_name, id_user, description, id_poke, pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6)
values  ('1','Team chapignon','1','Cette équipe se repose sur chapignon pour endormir et tabasser tout le monde','3','Chapignon','Gromago','Flâmigator','Dracolosse','Superdofin','CLéopsytra'),
        ('2','Team lanssorien','2','Cette équipe se repose sur lanssorien pour fracasser des têtes','1','Lanssorien','Heatran','Zapdos','Noacier','Leuphorie','Mouscoto'),
        ('3','Team gigansel','3','Cette équipe se repose sur gigansel pour être raciste','4','Gromago','Famignol','yuyu','Gigansel','baojian','Pyrax'),
        ('4','Team Katagami','4','Cette équipe se repose sur katagami pour briser des rêves','2','katagami','Magnézone','Tokopiyon','Prédastérie','Vaututrice','Déméteros');






