const fs = require("fs");
const d3 = require("d3");
const _ = require("lodash");
const readFiles = require("read-files-promise");

readFiles([
  "data/Q0.csv",
  "data/Q1.csv",
  "data/Q2.csv",
  "data/Q3.csv",
  "data/Q4.csv",
  "data/Q5.csv"
]).then(onFulfilled, onRejected);

function onFulfilled(buffers) {
  buffers = buffers.map(buffer => {
    buffer = buffer.toString("utf8");
    return (buffer = d3.csvParse(buffer));
  });

  let data = _.concat(...buffers);

  /* ANALYSIS CODE GOES BELOW */

  console.log("Data length is 1,142,896: ", 1142896 === data.length);

  let tripsByStartDate = d3
    .nest()
    .key(function(d) {
      return d.start_time.split(" ")[0];
    })
    .rollup(function(v) {
      return v.length;
    })
    .entries(data);

  let daily_total_ouput = JSON.stringify(tripsByStartDate);

  console.log(daily_total_ouput);

  // fs.writeFile("daily_total.json", daily_total_ouput, function(err) {
  //   console.log("File successfully written!");
  // });
}

function onRejected(err) {
  console.log("Cannot read the file.");
}
