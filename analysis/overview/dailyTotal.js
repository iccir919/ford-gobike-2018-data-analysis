const fs = require("fs");
const d3 = require("d3");
const _ = require("lodash");
const readFiles = require("read-files-promise");

let stations = require("../data/stationInformation.js").stations;

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

  /* ANALYSIS CODE GOES BELOW */

  data.forEach(function(trip) {
    var result = stations.filter(function(station) {
      return station.station_id === trip.start_station_id;
    });
    trip.region_id = result[0] !== undefined ? result[0].region_id : null;
  });

  let tripsByRegion = d3
    .nest()
    .key(function(d) {
      return d.region_id;
    })
    .key(function(d) {
      return d.start_time.split(" ")[0];
    })
    .rollup(function(v) {
      return v.length;
    })
    .object(data);

  let daily_total_ouput = JSON.stringify(tripsByRegion);
  console.log(daily_total_ouput);

  // fs.writeFile("daily_total.json", daily_total_ouput, function(err) {
  //   console.log("File successfully written!");
  // });
}

function onRejected(err) {
  console.log("Cannot read the file: ", err);
}

function assert(isTrue, message) {
  if (!isTrue) {
    console.log(message);
    return false;
  }
  return true;
}

function checkDataContent(data) {
  console.log("Checking data content...");
  data.forEach(function(d) {
    var dString = JSON.stringify(d);
    assert(
      _.isString(d.start_time),
      dString + " has a bad date - should be a string"
    );
    assert(
      _.isString(d.start_station_id),
      dString + " has a bad start station ID - should be a string"
    );
  });
  console.log("Finished checking data content");
}

function checkStationContent(data) {
  console.log("Checking station content");
  data.forEach(function(d) {
    var dString = JSON.stringify(d);
    assert(
      _.isNumber(d.region_id),
      dString + " has a bad region ID - should be a number"
    );
  });
  console.log("Finished checking data content");
}

function compareDataWithStationContent(data) {
  console.log("Comparing station and data content");
  let stationMap = {};
  stations.forEach(function(station) {
    stationMap[station.station_id] = station;
  });

  let innerStationMap = {};
  data.forEach(function(d) {
    if (!stationMap[d.start_station_id]) {
      if (!innerStationMap[d.start_station_id]) {
        let station = {};
        station.station_id = d.start_station_id;
        station.name = d.start_station_name;
        station.lat = Number(d.start_station_latitude);
        station.lon = Number(d.start_station_longitude);
        station.region_id = -1;
        innerStationMap[station.station_id] = station;
      }
    }
  });
  let missingStationInformation = [];
  for (var stationID in innerStationMap) {
    missingStationInformation.push(innerStationMap[stationID]);
  }
  console.log("Finished station and data content");
}
