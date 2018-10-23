const fs = require("fs");
const d3 = require("d3");
const _ = require("lodash");
const moment = require("moment");
const readFiles = require("read-files-promise");

readFiles([
  "../data/201801.csv",
  "../data/201802.csv",
  "../data/201803.csv",
  "../data/201804.csv",
  "../data/201805.csv",
  "../data/201806.csv",
  "../data/201807.csv",
  "../data/201808.csv"
]).then(onFulfilled, onRejected);

function onFulfilled(buffers) {
  buffers = buffers.map(buffer => {
    buffer = buffer.toString("utf8");
    return (buffer = d3.csvParse(buffer));
  });

  let data = _.concat(...buffers);

  /* ANALYSIS CODE GOES BELOW */

  let bikeTripsOn3977 = data
    .filter(function(trip) {
      return (
        "2018-06-26" === trip.start_time.split(" ")[0] &&
        trip.bike_id === "3977"
      );
    })
    .sort(function(a, b) {
      if (moment(a.start_time).isAfter(moment(b.start_time))) {
        return 1;
      } else if (moment(a.start_time).isSame(moment(b.start_time))) {
        return 0;
      } else if (moment(a.start_time).isBefore(moment(b.start_time))) {
        return -1;
      }
    });
  let lastEntry = bikeTripsOn3977[bikeTripsOn3977.length - 1];
  let allCoordinates = bikeTripsOn3977.map(function(trip) {
    return [
      Number(trip.start_station_latitude),
      Number(trip.start_station_longitude)
    ];
  });
  allCoordinates.push([
    Number(lastEntry.end_station_latitude),
    Number(lastEntry.end_station_longitude)
  ]);

  console.log(JSON.stringify(allCoordinates));

  /* WANT TO MAKE A FILE? */
  // fs.writeFile("file_name.json", result, function(err) {
  //   console.log("File successfully written!");
  // });
}

function onRejected(err) {
  console.log("Cannot read the file: ", err);
}
