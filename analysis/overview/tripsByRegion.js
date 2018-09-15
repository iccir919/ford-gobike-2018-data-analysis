const fs = require("fs");
const d3 = require("d3");
const _ = require("lodash");
const readFiles = require("read-files-promise");
const stationInformation = require("../data/stationInformation.js").stations;

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

  let stationActivityById = data.reduce((accum, trip) => {
    if (accum[trip.start_station_id]) {
      accum[trip.start_station_id]++;
    } else {
      accum[trip.start_station_id] = 1;
    }

    if (accum[trip.end_station_id]) {
      accum[trip.end_station_id]++;
    } else {
      accum[trip.end_station_id] = 1;
    }

    return accum;
  }, {});

  var totalTripsByRegion = {};

  for (var stationId in stationActivityById) {
    if (stationActivityById.hasOwnProperty(stationId)) {
      var target = stationInformation.find(station => {
        return station.station_id === stationId;
      });

      if (target) {
        if (totalTripsByRegion[target.region_id]) {
          totalTripsByRegion[target.region_id] +=
            stationActivityById[target.station_id];
        } else {
          totalTripsByRegion[target.region_id] =
            stationActivityById[target.station_id];
        }
      }
    }
  }

  console.log(totalTripsByRegion);

  /* ANALYSIS CODE GOES BELOW */

  /* WANT TO MAKE A FILE? */
  // fs.writeFile("file_name.json", result, function(err) {
  //   console.log("File successfully written!");
  // });
}

function onRejected(err) {
  console.log("Cannot read the file: ", err);
}
