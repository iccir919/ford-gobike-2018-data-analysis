// Promise.all([d3.csv("/data/2017_csv/2017_Q1Q2/Trips_Q1.csv")])
//   .then(function(results) {
//     var totalTrips = [];

//     var totalTrips = totalTrips.concat(results[0]);
//     console.log("Total trips: ", totalTrips.length);

//     var allSubscribers = d3
//       .nest()
//       .key(function(trip) {
//         return trip.usertype;
//       })
//       .object(totalTrips)["Subscriber"];

//     var subscribersByGender = d3
//       .nest()
//       .key(function(trip) {
//         return trip.gender;
//       })
//       .object(allSubscribers);

//     var maleSubscribersAges = subscribersByGender["Male"].reduce(function(
//       accum,
//       trip
//     ) {
//       var age = calculateAge(trip.birthyear);
//       if (accum[age]) {
//         accum[age]++;
//       } else {
//         accum[age] = 1;
//       }
//       return accum;
//     },
//     {});

//     var femaleSubscribersAges = subscribersByGender["Female"].reduce(function(
//       accum,
//       trip
//     ) {
//       var age = calculateAge(trip.birthyear);
//       if (accum[age]) {
//         accum[age]++;
//       } else {
//         accum[age] = 1;
//       }
//       return accum;
//     },
//     {});
//     console.log("Female", femaleSubscribersAges);
//     console.log("Male", maleSubscribersAges);

//     function subscribersAgesGrouped(subscribers) {
//       var ageGroupMap = {};
//       for (var i = 20; i <= 70; i += 5) {
//         for (var j = 0; j < 5; j++) {
//           if (ageGroupMap[i]) {
//             ageGroupMap[i] += subscribers[i + j];
//           } else {
//             ageGroupMap[i] = subscribers[i + j];
//           }
//         }
//       }
//       ageGroupMap[18] = subscribers[18] + subscribers[19];
//       return ageGroupMap;
//     }

//     var maleSusbcribersGroupedByAge = subscribersAgesGrouped(
//       maleSubscribersAges
//     );
//     var femaleSubscribersGroupedByAge = subscribersAgesGrouped(
//       femaleSubscribersAges
//     );

//     console.log("Female ages grouped: ", femaleSubscribersGroupedByAge);
//     console.log("Male ages grouped: ", maleSusbcribersGroupedByAge);

//     console.log("Labels: ", Object.keys(maleSusbcribersGroupedByAge));
//     console.log(
//       "Male ages array: ",
//       Object.values(maleSusbcribersGroupedByAge)
//     );
//     console.log(
//       "Female ages array: ",
//       Object.values(femaleSubscribersGroupedByAge)
//     );
//   })
//   .catch(function(err) {
//     console.log("Oops, we seem to have hit a snag --> " + err);
//   });

// function calculateAge(birthYear) {
//   if (!birthYear) return;
//   birthYear = Number(birthYear);
//   var today = new Date();
//   var year = today.getFullYear();
//   var age = year - birthYear;
//   return age;
// }
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
    .rollup(function(v) {
      return v.length;
    })
    .object(data);

  console.log(tripsByUserType);

  /* WANT TO MAKE A FILE? */
  // fs.writeFile("file_name.json", result, function(err) {
  //   console.log("File successfully written!");
  // });
}

function onRejected(err) {
  console.log("Cannot read the file: ", err);
}
