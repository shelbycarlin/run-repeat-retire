CREATE TYPE type AS ENUM (
  'Daily',
  'Tempo',
  'Recovery',
  'Road Race',
  'Trail',
  'Track Spikes',
  'X Country Spikes'
);

CREATE TYPE status AS ENUM (
  'Current',
  'Retired'
);

CREATE TABLE Users (
  user_id serial PRIMARY KEY,
  first_name varchar NOT NULL,
  last_name varchar NOT NULL,
  username varchar UNIQUE NOT NULL,
  email varchar UNIQUE NOT NULL,
  hash_password varchar NOT NULL
);

CREATE TABLE Shoes (
  shoe_id serial PRIMARY KEY,
  model varchar NOT NULL,
  brand varchar NOT NULL,
  shoe_type type DEFAULT 'Daily',
  miles INT DEFAULT 0,
  life_left INT DEFAULT 0,
  shoe_status status DEFAULT 'Current',
  user_id INT
);