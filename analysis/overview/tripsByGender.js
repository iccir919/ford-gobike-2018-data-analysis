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

  var tripsByGender = d3
    .nest()
    // .key(function(d) {
    //   return d.start_time.split(" ")[0];
    // })
    // .sortKeys(function(a, b) {
    //   if (moment(a).isBefore(moment(b))) {
    //     return -1;
    //   } else if (moment(a).isSame(moment(b))) {
    //     return 0;
    //   } else {
    //     return 1;
    //   }
    // })
    // .key(function(d) {
    //   return moment(d.start_time.split(" ")[0]).week();
    // })
    .key(function(d) {
      return d.start_time.split(" ")[0].split("-")[1];
    })
    .sortKeys(function(a, b) {
      return a - b;
    })
    .key(function(d) {
      return d.member_gender;
    })
    .rollup(function(v) {
      return v.length;
    })
    .entries(data);

  console.log(JSON.stringify(tripsByGender));

  /* WANT TO MAKE A FILE? */
  // fs.writeFile("file_name.json", result, function(err) {
  //   console.log("File successfully written!");
  // });
}

function onRejected(err) {
  console.log("Cannot read the file: ", err);
}
