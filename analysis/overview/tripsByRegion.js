const fs = require("fs");
const d3 = require("d3");
const _ = require("lodash");
const readFiles = require("read-files-promise");
const stations = require("../data/stationInformation.js").stations;
const moment = require("moment");

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

  data.forEach(function(trip) {
    var result = stations.filter(function(station) {
      return trip.start_station_id === station.station_id;
    });
    var regionName;
    if (result[0]) {
      if (
        (result[0].region_id && result[0].region_id === 12) ||
        result[0].region_id === 13 ||
        result[0].region_id === 14
      ) {
        regionName = "East Bay";
      } else if (result[0].region_id === 3) {
        regionName = "San Francisco";
      } else if (result[0].region_id === 5) {
        regionName = "San Jose";
      }
    }
    trip.region = regionName !== undefined ? regionName : null;
  });

  var tripsByDayAndRegion = d3
    .nest()
    .key(function(d) {
      return d.start_time.split(" ")[0];
    })
    .sortKeys(function(a, b) {
      if (moment(a).isBefore(moment(b))) {
        return -1;
      } else if (moment(a).isSame(moment(b))) {
        return 0;
      } else {
        return 1;
      }
    })
    .key(function(d) {
      return d.region;
    })
    .rollup(function(v) {
      return v.length;
    })
    .entries(data);

  /* WANT TO MAKE A FILE? */
  // fs.writeFile("file_name.json", result, function(err) {
  //   console.log("File successfully written!");
  // });
}

function onRejected(err) {
  console.log("Cannot read the file: ", err);
}
