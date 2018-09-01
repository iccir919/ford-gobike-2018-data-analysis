"use strict";

window.chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)"
};

(function(global) {
  var COLORS = [
    "#4dc9f6",
    "#f67019",
    "#f53794",
    "#537bc4",
    "#acc236",
    "#166a8f",
    "#00a950",
    "#58595b",
    "#8549ba"
  ];

  var Color = global.Color;

  /* eslint-enable */
})(this);

/* 
  Susbcribers grouped by age and gender
*/

var AGES = Object.keys(subscriber_gender_age_totals.males);

var color = Chart.helpers.color;
var barChartData = {
  labels: AGES,
  datasets: [
    {
      label: "Trips by Females",
      backgroundColor: color(window.chartColors.red)
        .alpha(0.5)
        .rgbString(),
      borderColor: window.chartColors.red,
      borderWidth: 1,
      data: Object.values(subscriber_gender_age_totals.females)
    },
    {
      label: "Trips by Males",
      backgroundColor: color(window.chartColors.blue)
        .alpha(0.5)
        .rgbString(),
      borderColor: window.chartColors.blue,
      borderWidth: 1,
      data: Object.values(subscriber_gender_age_totals.males)
    }
  ]
};

window.onload = function() {
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: barChartData,
    options: {
      responsive: true,
      legend: {
        position: "top"
      },
      title: {
        display: false,
        text: "Trips by subscribers by identified age and gender"
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Age of Subscriber"
            }
          }
        ]
      }
    }
  });
};
