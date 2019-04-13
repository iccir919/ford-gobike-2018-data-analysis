COPY trips_2018 FROM '/Users/neilricci/Desktop/trips_2018/201806-fordgobike-tripdata.csv' with (FORMAT CSV, 
FORCE_NULL(member_birth_year), FORCE_NULL(start_station_id), HEADER);