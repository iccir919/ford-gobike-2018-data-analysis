select start_station_name, end_station_name, count(*) as count
from trips_2018
group by start_station_name, end_station_name
order by count DESC;