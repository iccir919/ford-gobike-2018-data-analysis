SELECT extract(hour FROM start_time) AS date, 
COUNT(*) AS count 
FROM trips_2018 GROUP BY date ORDER BY count DESC LIMIT 2;