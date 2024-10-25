create table users (
  id serial primary key,
  email text not null unique,
  password text not null,
  date timestamp default now()
);

create table task(
  id serial primary key,
  title text not null,
  content text not null,
  date timestamp default now()
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

insert into users (email,password) values ('lucas@gmail.com', '123456') 