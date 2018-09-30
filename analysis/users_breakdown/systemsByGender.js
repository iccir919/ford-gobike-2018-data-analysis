const fs = require("fs");
const d3 = require("d3");
const _ = require("lodash");
const readFiles = require("read-files-promise");

readFiles([
  "../data/201804.csv",
  "../data/201805.csv",
  "../data/201806.csv",
  "../data/citi/201804.csv",
  "../data/citi/201805.csv",
  "../data/citi/201806.csv",
  "../data/divvy/2018_Q2.csv"
]).then(onFulfilled, onRejected);

function onFulfilled(buffers) {
  buffers = buffers.map(buffer => {
    buffer = buffer.toString("utf8");
    return (buffer = d3.csvParse(buffer));
  });

  let fordGoBike = buffers.slice(0, 3);
  fordGoBike = _.concat(...fordGoBike);

  let citi = buffers.slice(3, 6);
  citi = _.concat(...citi);

  let divvy = buffers[6];

  checkFordGoBikeData(fordGoBike);
  checkCitiData(citi);
  checkDivvyData(divvy);

  var fordGoBikeByGender = d3
    .nest()
    .key(function(d) {
      return d.member_gender;
    })
    .rollup(function(v) {
      return v.length;
    })
    .entries(fordGoBike);

  var citiByGender = d3
    .nest()
    .key(function(d) {
      return d.gender;
    })
    .rollup(function(v) {
      return v.length;
    })
    .entries(citi);

  var divvyByGender = d3
    .nest()
    .key(function(d) {
      return d.gender;
    })
    .rollup(function(v) {
      return v.length;
    })
    .entries(divvy);

  console.log("ford", fordGoBikeByGender);
  console.log("citi", citiByGender);
  console.log("divvy", divvyByGender);

  /* ANALYSIS CODE GOES BELOW */

  /* WANT TO MAKE A FILE? */
  // fs.writeFile("file_name.json", result, function(err) {
  //   console.log("File successfully written!");
  // });
}

function onRejected(err) {
  console.log("Cannot read the file: ", err);
}

function checkFordGoBikeData(data) {
  data.forEach(function(d) {
    var dString = JSON.stringify(d);
    assert(
      _.isString(d.member_gender),
      dString + " has a bad gender value - should be a string"
    );
    assert(
      d.member_gender === "Male" ||
        d.member_gender === "Female" ||
        d.member_gender === "" ||
        d.member_gender === "Other",
      dString + " has a bad gender - should be a Male or Female"
    );
  });
}

function checkCitiData(data) {
  data.forEach(function(d) {
    var dString = JSON.stringify(d);
    assert(
      _.isString(d.gender),
      dString + " has a bad gender - should be a number"
    );
    assert(
      d.gender === "0" || d.gender === "1" || d.gender === "2",
      dString + " has a bad gender - should be a 0 or 1 or 2"
    );
  });
}

function checkDivvyData(data) {
  data.forEach(function(d) {
    var dString = JSON.stringify(d);
    assert(
      _.isString(d.gender),
      dString + " has a bad gender value - should be a string"
    );
    assert(
      d.gender === "Male" || d.gender === "Female" || d.gender === "",
      dString + " has a bad gender - should be a Male or Female"
    );
  });
}

function assert(isTrue, message) {
  if (!isTrue) {
    console.log(message);
    return false;
  }
  return true;
}
