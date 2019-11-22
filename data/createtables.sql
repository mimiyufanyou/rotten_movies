CREATE TABLE df_final
(
  id serial NOT NULL,
  title character varying(100),
  genre character varying(100),
  cag_rating character varying(5),
  cag_release int,
  sScore float,
  sScore_qcut character varying(50),
  PRIMARY KEY (id)
);
