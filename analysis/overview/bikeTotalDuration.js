const fs = require("fs");
const d3 = require("d3");
const _ = require("lodash");
const readFiles = require("read-files-promise");
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

  var durationByBike = d3
    .nest()
    .key(function(d) {
      return d.bike_id;
    })
    .rollup(function(v) {
      return d3.sum(v, function(d) {
        return moment(d.end_time).diff(moment(d.start_time), "hours");
      });
    })
    .entries(data);

  var groups = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    "10": 0,
    "11": 0
  };

  durationByBike.forEach(bike => {
    if (bike.value <= 5) {
      groups["1"]++;
    } else if (bike.value <= 10) {
      groups["2"]++;
    } else if (bike.value <= 15) {
      groups["3"]++;
    } else if (bike.value <= 20) {
      groups["4"]++;
    } else if (bike.value <= 25) {
      groups["5"]++;
    } else if (bike.value <= 30) {
      groups["6"]++;
    } else if (bike.value <= 35) {
      groups["7"]++;
    } else if (bike.value <= 40) {
      groups["8"]++;
    } else if (bike.value <= 45) {
      groups["9"]++;
    } else if (bike.value <= 50) {
      groups["10"]++;
    } else {
      groups["11"]++;
    }
  });

  console.log(JSON.stringify(groups));

  /* WANT TO MAKE A FILE? */
  // fs.writeFile("file_name.json", result, function(err) {
  //   console.log("File successfully written!");
  // });
}

function onRejected(err) {
  console.log("Cannot read the file: ", err);
}
