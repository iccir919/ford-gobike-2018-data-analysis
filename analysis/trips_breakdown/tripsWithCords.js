const fs = require("fs");
const d3 = require("d3");
const _ = require("lodash");
const readFiles = require("read-files-promise");
const stationInformation = require("../data/stationInformation.js").stations;

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

  let max = undefined;

  data = data.filter(trip => {
    return trip.start_station_id !== "NULL" && trip.end_station_id !== "NULL";
  });

  var tripCounts = d3
    .nest()
    .key(function(d) {
      return d.start_station_id;
    })
    .key(function(d) {
      return d.end_station_id;
    })
    .rollup(function(v) {
      if (max === undefined || max < v.length) max = v.length;
      if (v.length > 150) {
        return {
          start_lat: v[0].start_station_latitude,
          start_lng: v[0].start_station_longitude,
          end_lat: v[0].end_station_latitude,
          end_lng: v[0].end_station_longitude,
          value: v.length
        };
      }
    })
    .object(data);

  console.log(JSON.stringify(tripCounts));
  console.log(max);
  /* WANT TO MAKE A FILE? */
  // fs.writeFile("file_name.json", result, function(err) {
  //   console.log("File successfully written!");
  // });
}

function onRejected(err) {
  console.log("Cannot read the file: ", err);
}
