const fs = require("fs");
const d3 = require("d3");
const _ = require("lodash");
const readFiles = require("read-files-promise");

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

  console.log("Data length is ", data.length);

  /* ANALYSIS CODE GOES BELOW */

  var tripsByAgeAndGender = d3
    .nest()
    .key(function(d) {
      return calculateAge(d.member_birth_year);
    })
    .sortKeys(function(a, b) {
      return Number(a) - Number(b);
    })
    .key(function(d) {
      return d.member_gender;
    })
    .rollup(function(v) {
      return v.length;
    })
    .entries(data);

  console.log(JSON.stringify(tripsByAgeAndGender));

  function calculateAge(birthYear) {
    if (!birthYear) return;
    birthYear = Number(birthYear);
    var today = new Date();
    var year = today.getFullYear();
    var age = year - birthYear;
    return age;
  }

  // console.log(JSON.stringify(subscriber_gender_ouput));

  /* WANT TO MAKE A FILE? */
  // fs.writeFile(
  //   "subscriber_gender_ouput.json",
  //   subscriber_gender_ouput,
  //   function(err) {
  //     console.log("File successfully written!");
  //   }
  // );
}

function onRejected(err) {
  console.log("Cannot read the file: ", err);
}

// const subscriber_gender_ouput = JSON.stringify({
//   males: subscribersAgesGrouped(tripsBySubscribersByGender["Male"]),
//   females: subscribersAgesGrouped(tripsBySubscribersByGender["Female"])
// });

// var maleSubscribersAges = tripsBySubscribersByGender["Male"].reduce(function(
//   accum,
//   trip
// ) {
//   var age = calculateAge(trip.member_birth_year);
//   if (age <= 70) {
//     if (accum[age]) {
//       accum[age]++;
//     } else {
//       accum[age] = 1;
//     }
//   }
//   return accum;
// },
// {});

// var femaleSubscribersAges = tripsBySubscribersByGender["Female"].reduce(
//   function(accum, trip) {
//     var age = calculateAge(trip.member_birth_year);
//     if (age <= 70) {
//       if (accum[age]) {
//         accum[age]++;
//       } else {
//         accum[age] = 1;
//       }
//     }
//     return accum;
//   },
//   {}
// );

// function subscribersAgesGrouped(subscribers) {
// var ageGroupMap = {};
// for (var i = 20; i <= 70; i += 5) {
//   for (var j = 0; j < 5; j++) {
//     if (gender.values[i + j].value) {
//       if (ageGroupMap[i]) {
//         ageGroupMap[i] += gender.values[i + j].value;
//       } else {
//         ageGroupMap[i] = gender.values[i + j].value;
//       }
//     }
//   }
// }
// return ageGroupMap;
// }
