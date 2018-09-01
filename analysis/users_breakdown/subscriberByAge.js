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

  let tripsByUserType = d3
    .nest()
    .key(function(trip) {
      return trip.user_type;
    })
    .object(data);

  let tripsBySubscribers = tripsByUserType["Subscriber"];

  var tripsBySubscribersByGender = d3
    .nest()
    .key(function(trip) {
      return trip.member_gender;
    })
    .object(tripsBySubscribers);

  var maleSubscribersAges = tripsBySubscribersByGender["Male"].reduce(function(
    accum,
    trip
  ) {
    var age = calculateAge(trip.member_birth_year);
    if (age <= 70) {
      if (accum[age]) {
        accum[age]++;
      } else {
        accum[age] = 1;
      }
    }
    return accum;
  },
  {});

  var femaleSubscribersAges = tripsBySubscribersByGender["Female"].reduce(
    function(accum, trip) {
      var age = calculateAge(trip.member_birth_year);
      if (age <= 70) {
        if (accum[age]) {
          accum[age]++;
        } else {
          accum[age] = 1;
        }
      }
      return accum;
    },
    {}
  );

  function subscribersAgesGrouped(subscribers) {
    var ageGroupMap = {};
    for (var i = 20; i <= subscribers.length; i += 5) {
      for (var j = 0; j < 5; j++) {
        if (subscribers[i + j]) {
          if (ageGroupMap[i]) {
            ageGroupMap[i] += subscribers[i + j];
          } else {
            ageGroupMap[i] = subscribers[i + j];
          }
        }
      }
    }
    return ageGroupMap;
  }

  function calculateAge(birthYear) {
    if (!birthYear) return;
    birthYear = Number(birthYear);
    var today = new Date();
    var year = today.getFullYear();
    var age = year - birthYear;
    return age;
  }

  // function subscribersAgesGrouped(subscribers) {
  //   var ageGroupMap = {};
  //   for (var i = 20; i <= 70; i += 5) {
  //     for (var j = 0; j < 5; j++) {
  //       var idx = i + j + "";
  //       if (ageGroupMap[i]) {
  //         ageGroupMap[i + ""] += subscribers[idx];
  //       } else {
  //         ageGroupMap[i + ""] = subscribers[idx];
  //       }
  //     }
  //   }
  //   return ageGroupMap;
  // }

  // console.log(
  //   "Female subscribers grouped by age",
  //   subscribersAgesGrouped(femaleSubscribersAges)
  // );
  // console.log(
  //   "Male subscribers grouped by age",
  //   subscribersAgesGrouped(maleSubscribersAges)
  // );

  const subscriber_gender_ouput = JSON.stringify({
    males: maleSubscribersAges,
    females: femaleSubscribersAges
  });

  /* WANT TO MAKE A FILE? */
  fs.writeFile(
    "subscriber_gender_ouput.json",
    subscriber_gender_ouput,
    function(err) {
      console.log("File successfully written!");
    }
  );
}

function onRejected(err) {
  console.log("Cannot read the file: ", err);
}
