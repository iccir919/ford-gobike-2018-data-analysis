const fs = require("fs");
const d3 = require("d3");
const _ = require("lodash");
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

  let tripsByMonthByUserType = d3
    .nest()
    .key(function(d) {
      return d.start_time.split(" ")[0].split("-")[1];
    })
    .key(function(d) {
      return d.user_type;
    })
    .rollup(function(v) {
      return v.length;
    })
    .entries(data);

  let tripsByCustomers = [];
  let tripsBySubscribers = [];

  for (let i = 0; i < tripsByMonthByUserType.length; i++) {
    tripsByMonthByUserType[i].values.forEach(userType => {
      if (userType.key === "Subscriber") {
        tripsBySubscribers.push(userType.value);
      } else if (userType.key === "Customer") {
        tripsByCustomers.push(userType.value);
      }
    });
  }
  console.log("Subscribers", tripsBySubscribers);
  console.log("Customers", tripsByCustomers);

  /* ANALYSIS CODE GOES BELOW */

  /* WANT TO MAKE A FILE? */
  // fs.writeFile("file_name.json", result, function(err) {
  //   console.log("File successfully written!");
  // });
}

function onRejected(err) {
  console.log("Cannot read the file: ", err);
}
