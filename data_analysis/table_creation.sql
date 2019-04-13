CREATE TABLE trips_2018
(
  duration_sec integer,
  start_time timestamp,
  end_time timestamp,
  start_station_id varchar(10),
  start_station_name varchar(250),
  start_station_latitude float,
  start_station_longitude float,
  end_station_id varchar(10),
  end_station_name varchar(250),
  end_station_latitude float,
  end_station_longitude float,
  bike_id integer,
  user_type varchar(15),
  member_birth_year integer null,
  member_gender varchar(10) null,
  bike_share_for_all_trip varchar(5)
);