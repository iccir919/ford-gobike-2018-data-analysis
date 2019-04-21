SELECT
 start_station_name, COUNT(*)
FROM
 trips_2018
UNION
SELECT
 end_station_name, COUNT(*)
FROM
 trips_2018;