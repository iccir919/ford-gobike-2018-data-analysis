const fs = require("fs");
const d3 = require("d3");
const _ = require("lodash");
const readFiles = require("read-files-promise");
const moment = require("moment");
const stations = require("../data/stationInformation.js").stations;
readFiles([
  "../data/201801.csv"
  // "../data/201802.csv",
  // "../data/201803.csv",
  // "../data/201804.csv",
  // "../data/201805.csv",
  // "../data/201806.csv",
  // "../data/201807.csv",
  // "../data/201808.csv"
]).then(onFulfilled, onRejected);

function onFulfilled(buffers) {
  buffers = buffers.map(buffer => {
    buffer = buffer.toString("utf8");
    return (buffer = d3.csvParse(buffer));
  });

  let data = _.concat(...buffers);

  /* ANALYSIS CODE GOES BELOW */
  // module.exports.regions = [
  //   { region_id: "3", name: "San Francisco" },
  //   { region_id: "5", name: "San Jose" },
  //   { region_id: "12", name: "Oakland" },
  //   { region_id: "13", name: "Emeryville" },
  //   { region_id: "14", name: "Berkeley" },
  //   { region_id: "23", name: "8D" }
  // ];

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
      } else if (result[0].region === 5) {
        regionName = "San Jose";
      }
    }
    trip.region = regionName !== undefined ? regionName : null;
  });

  var durationByBikeAndRegion = d3
    .nest()
    .key(function(d) {
      return d.region;
    })
    .key(function(d) {
      return d.bike_id;
    })
    .rollup(function(v) {
      return d3.sum(v, function(d) {
        return moment(d.end_time).diff(moment(d.start_time), "hours");
      });
    })
    .entries(data);

  var bikesInSanFrancisco = mapDataToGraph(
    durationByBikeAndRegion.filter(region => {
      return region.key === "San Francisco";
    })[0]["values"]
  );
  var bikesInEastBay = durationByBikeAndRegion.filter(region => {
    return region.key === "East Bay";
  })[0];
  var bikesInSanJose = durationByBikeAndRegion.filter(region => {
    return region.key === "San Jose";
  })[0];

  mapDataToGraph(bikesInSanFrancisco);

  function mapDataToGraph(arrayOfBikesAndValues) {
    var durationMap = {};
    arrayOfBikesAndValues.forEach(bike => {
      if (durationMap[bike.value]) {
        durationMap[bike.value]++;
      } else {
        durationMap[bike.value] = 1;
      }
    });

    var result = [];
    for (let hourDuration in durationMap) {
      result.push({
        x: hourDuration,
        y: durationMap[hourDuration]
      });
    }

    return result;
  }

  /* WANT TO MAKE A FILE? */
  // fs.writeFile("file_name.json", result, function(err) {
  //   console.log("File successfully written!");
  // });
}

function onRejected(err) {
  console.log("Cannot read the file: ", err);
}
