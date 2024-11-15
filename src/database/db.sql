CREATE TABLE users (

  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telegram VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  repeat_password VARCHAR(255) NOT NULL
);



CREATE TABLE filming_card (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255),
  category VARCHAR(255) NOT NULL,
  executor VARCHAR(255) NOT NULL,
  date_start VARCHAR(255) NOT NULL,
  date_end VARCHAR(255) NOT NULL,
  time_start VARCHAR(255),
  time_end VARCHAR(255),
  place VARCHAR(255),
  contact VARCHAR(255),
  description VARCHAR(1000),
  price VARCHAR(255),
  cloth VARCHAR(255),
  author VARCHAR(255),
  technical_specialist VARCHAR(255),
  sound_recording VARCHAR(255),
  createAt VARCHAR(255),
  changeAt VARCHAR(255)
);

