const fs = require("fs");
const d3 = require("d3");
const _ = require("lodash");
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

  console.log("Data length is 1,142,896: ", 1142896 === data.length);

  /* ANALYSIS CODE GOES BELOW */

  var trips = d3
    .nest()
    .key(function(d) {
      var stationIDs = [];

      stationIDs.push(d.start_station_name);
      stationIDs.push(d.end_station_name);

      stationIDs.sort();

      return stationIDs.join(" - ");
    })
    .rollup(function(v) {
      return v.length;
    })
    .entries(data);

  var popularTrips = trips
    .sort(function(a, b) {
      return Number(b.value) - Number(a.value);
    })
    .slice(0, 11);

  console.log(JSON.stringify(popularTrips));

  /* WANT TO MAKE A FILE? */
  // fs.writeFile("file_name.json", result, function(err) {
  //   console.log("File successfully written!");
  // });
}

function onRejected(err) {
  console.log("Cannot read the file: ", err);
}
