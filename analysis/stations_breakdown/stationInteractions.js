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

  let stations = {};

  data.forEach(function(trip) {
    if (trip.start_station_id !== "NULL") {
      if (stations[trip.start_station_id]) {
        stations[trip.start_station_id].properties.interactions++;
      } else {
        stations[trip.start_station_id] = {
          type: "Feature",
          properties: {
            name: trip.start_station_name,
            id: trip.start_station_id,
            interactions: 1
          },
          geometry: {
            type: "Point",
            coordinates: [
              Number(trip.start_station_latitude),
              Number(trip.start_station_longitude)
            ]
          }
        };
      }
    }

    if (trip.end_station_id !== "NULL") {
      if (stations[trip.end_station_id]) {
        stations[trip.end_station_id].properties.interactions++;
      } else {
        stations[trip.end_station_id] = {
          type: "Feature",
          properties: {
            name: trip.end_station_name,
            id: trip.end_station_id,
            interactions: 1
          },
          geometry: {
            type: "Point",
            coordinates: [
              Number(trip.end_station_longitude),
              Number(trip.end_station_latitude)
            ]
          }
        };
      }
    }
  });

  var dataFeatures = [];

  for (var id in stations) {
    dataFeatures.push(stations[id]);
  }

  let results = dataFeatures.map(feature => feature.properties.interactions);
  console.log(Math.max(...results));

  let result = {};
  result.type = "FeatureCollection";
  result.features = dataFeatures;

  //   console.log(JSON.stringify(result));

  /* WANT TO MAKE A FILE? */
  // fs.writeFile("file_name.json", result, function(err) {
  //   console.log("File successfully written!");
  // });
}

function onRejected(err) {
  console.log("Cannot read the file: ", err);
}
