CREATE TABLE df_final
(
  id serial NOT NULL,
  url character varying(150),
  title character varying(100),
  tomatoScore float,
  popcornScore float,
  squidScore float, 
  PRIMARY KEY (id)
);
