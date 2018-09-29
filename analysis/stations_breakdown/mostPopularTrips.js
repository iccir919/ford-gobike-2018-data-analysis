const fs = require("fs");
const d3 = require("d3");
const _ = require("lodash");
const readFiles = require("read-files-promise");

readFiles([
  "../data/Q0.csv",
  "../data/Q1.csv",
  "../data/Q2.csv",
  "../data/Q3.csv",
  "../data/Q4.csv",
  "../data/Q5.csv"
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
      return d.user_type;
    })
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

  var popularCustomerTrips1 = trips
    .find(t => t.key === "Subscriber")
    .values.sort(function(a, b) {
      return b.value - a.value;
    })
    .slice(0, 11);

  var popularCustomerTrips2 = trips
    .find(t => t.key === "Customer")
    .values.sort(function(a, b) {
      return b.value - a.value;
    })
    .slice(0, 11);

  console.log(JSON.stringify(popularCustomerTrips1));
  console.log(JSON.stringify(popularCustomerTrips2));

  /* WANT TO MAKE A FILE? */
  // fs.writeFile("file_name.json", result, function(err) {
  //   console.log("File successfully written!");
  // });
}

function onRejected(err) {
  console.log("Cannot read the file: ", err);
}
