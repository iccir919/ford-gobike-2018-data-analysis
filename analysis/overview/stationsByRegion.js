const d3 = require("d3");
const _ = require("lodash");
const stationInformation = require("../data/stationInformation.js").stations;

/* ANALYSIS CODE GOES BELOW */

let regionStationCount = {};

stationInformation.forEach(station => {
  if (regionStationCount[station.region_id]) {
    regionStationCount[station.region_id]++;
  } else {
    regionStationCount[station.region_id] = 1;
  }
});

console.log(regionStationCount);
/* WANT TO MAKE A FILE? */
// fs.writeFile("file_name.json", result, function(err) {
//   console.log("File successfully written!");
// });
