let dateFormat = "YYYY-MM-DD";
let daily_totals_data = daily_totals.map(dataObj => {
  return {
    x: moment(dataObj.key, "YYYY-MM-DD"),
    y: dataObj.value
  };
});

daily_totals_data.sort(function(a, b) {
  return a.x.valueOf() - b.x.valueOf();
});

function generateBar(date, value) {
  return {
    t: date.valueOf(),
    y: value
  };
}

let data = [];
let labels = [];

for (let i = 0; i < daily_totals_data.length; i++) {
  let dataObj = daily_totals_data[i];
  labels.push(dataObj.x);
  data.push(generateBar(dataObj.x, dataObj.y));
}

var ctx = document.getElementById("myChart").getContext("2d");

var cfg = {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Total (sum) number of trips per day",
        data: data,
        type: "line",
        pointRadius: 0,
        backgroundColor: "#009cde",
        borderColor: "#009cde",
        fill: false,
        lineTension: 0,
        borderWidth: 2
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            displayFormats: {
              quarter: "MMM YYYY"
            }
          }
        }
      ]
    }
  }
};
var chart = new Chart(ctx, cfg);
