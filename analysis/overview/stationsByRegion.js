const fs = require("fs");
const d3 = require("d3");
const _ = require("lodash");

let stations = require("../data/stationInformation.js").stations;
let regions = require("../data/regionInformation.js").regions;

stations.forEach(function(station) {
  var result = regions.filter(function(region) {
    return station.region_id === Number(region.region_id);
  });
  station.region = result[0] !== undefined ? result[0].name : null;
});
console.log(stations);

var stationsByRegions = d3
  .nest()
  .key(function(d) {
    return d.region;
  })
  .rollup(function(v) {
    return v.length;
  })
  .entries(stations);

console.log(JSON.stringify(stationsByRegions));
