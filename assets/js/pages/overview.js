window.chartColors = {
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  lightBlue: "rgb(14, 162, 249)",
  darkBlue: "rgb(7, 94, 145)",
  yellow: "rgb(191, 182, 30)",
  lightYellow: "rgb(242, 230, 38)",
  darkestGreen: "rgb(4, 124, 80)",
  lightDarkestGreen: "rgb(5, 181, 116)",
  darkerGreen: "rgb(6, 150, 8)",
  lightDarkerGreen: "rgb(8, 204, 11)",
  darkGreen: "rgb(109, 153, 7)",
  lightGreen: "rgb(166, 234, 9)"
};

window.onload = function() {
  var tripsByMonthCtx = document
    .getElementById("tripsByMonth")
    .getContext("2d");
  window.tripsByMonth = new Chart(tripsByMonthCtx, {
    type: "bar",
    data: tripsByMonthData,
    options: {
      tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: function(tooltipItems, data) {
            return tooltipItems.yLabel.toLocaleString() + " trips";
          }
        }
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            stacked: true,
            display: true,
            scaleLabel: {
              display: true,
              labelString: "2018"
            }
          }
        ],
        yAxes: [
          {
            stacked: true
          }
        ]
      }
    }
  });

  var regionalComparisonCtx = document
    .getElementById("regionalComparisonChart")
    .getContext("2d");
  window.regionalComparison = new Chart(
    regionalComparisonCtx,
    regionalComparisonConfig
  );

  var bikeUsageCtx = document.getElementById("bikeUsage").getContext("2d");
  window.bikeUsage = new Chart(bikeUsageCtx, {
    type: "horizontalBar",
    data: horizontalBarChartData,
    options: {
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide
      elements: {
        rectangle: {
          borderWidth: 2
        }
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Number of bikes"
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Hours"
            }
          }
        ]
      }
    }
  });
};

var tripsByMonthData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August"
  ],
  datasets: [
    {
      label: "Subscribers",
      backgroundColor: window.chartColors.blue,
      data: [82458, 91857, 95075, 109989, 149886, 163085, 165243, 161443]
    },
    {
      label: "Daily Customers",
      backgroundColor: window.chartColors.green,
      data: [12344, 14861, 16307, 21180, 29239, 32883, 33979, 30719]
    }
  ]
};

var regionsComparisonConfig = {
  type: "pie",
  data: regionsComparisonData,
  options: {
    responsive: true
  }
};

var regionsComparisonData = {
  labels: ["San Francisco", "San Jose", "Oakland", "Berkeley", "Emeryville"],
  datasets: [
    {
      label: "Station interactions",

      data: [1754607, 108146, 338834, 164217, 22834]
    },
    {
      label: "Number of stations",

      data: [144, 45, 80, 37, 10]
    }
  ]
};

var regionalComparisonConfig = {
  type: "pie",
  data: {
    datasets: [
      {
        label: "Station interactions",
        backgroundColor: [
          window.chartColors.darkBlue,
          window.chartColors.yellow,
          window.chartColors.darkestGreen,
          window.chartColors.darkerGreen,
          window.chartColors.darkGreen
        ],
        data: [1754607, 108146, 338834, 164217, 22834]
      },
      {
        label: "Number of stations",
        backgroundColor: [
          window.chartColors.lightBlue,
          window.chartColors.lightYellow,
          window.chartColors.lightDarkestGreen,
          window.chartColors.lightDarkerGreen,
          window.chartColors.lightGreen
        ],
        data: [144, 45, 80, 37, 10]
      }
    ],
    labels: ["San Francisco", "San Jose", "Oakland", "Berkeley", "Emeryville"]
  },
  options: {
    responsive: true,
    legend: {
      position: "right"
    },
    tooltips: {
      mode: "index",
      intersect: true,
      callbacks: {
        title: (tooltipItem, data) => {
          return data.labels[tooltipItem[0].index];
        },
        label: (tooltipItem, data) => {
          return (
            data.datasets[tooltipItem.datasetIndex].label +
            ": " +
            data.datasets[tooltipItem.datasetIndex].data[
              tooltipItem.index
            ].toLocaleString()
          );
        }
      }
    }
  }
};

var horizontalBarChartData = {
  labels: [
    "0-5",
    "6-10",
    "11-15",
    "16-20",
    "21-25",
    "26-30",
    "31-35",
    "36-40",
    "41-45",
    "46-50",
    "50+"
  ],
  datasets: [
    {
      label: "Duration of bike useage",
      backgroundColor: window.chartColors.darkerGreen,
      borderColor: window.chartColors.red,
      borderWidth: 1,
      data: [1302, 616, 406, 401, 370, 226, 208, 146, 108, 78, 148]
    }
  ]
};
