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

  let avgDuration = d3
    .nest()
    .key(function(d) {
      return d.user_type;
    })
    .rollup(function(v) {
      return d3.mean(v, function(d) {
        return d.duration_sec;
      });
    })
    .object(data);

  console.log(JSON.stringify(avgDuration));

  /* WANT TO MAKE A FILE? */
  // fs.writeFile("file_name.json", result, function(err) {
  //   console.log("File successfully written!");
  // });
}

function onRejected(err) {
  console.log("Cannot read the file: ", err);
}
