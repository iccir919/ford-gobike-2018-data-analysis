SELECT extract(month FROM start_time) AS month, 
COUNT(*) AS count 
FROM trips_2018 GROUP BY month ORDER BY month;