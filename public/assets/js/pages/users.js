window.chartColors = {
  red: "rgb(255, 99, 132)",
  blue: "rgb(54, 162, 235)",
  gray: "rgb(152, 157, 165)"
};

var fordGoBikeConfig = {
  type: "pie",
  data: {
    datasets: [
      {
        data: [119288, 345806],
        backgroundColor: [window.chartColors.red, window.chartColors.blue],
        label: "Ford GoBike share"
      }
    ],
    labels: ["Trips by women", "Trips by men"]
  },
  options: {
    legend: {
      display: false
    },
    responsive: true,
    tooltips: {
      mode: "index",
      callbacks: {
        label: function(tooltipItem, data) {
          return (
            data.labels[tooltipItem.index] +
            ": " +
            data.datasets[0].data[tooltipItem.index].toLocaleString()
          );
        }
      }
    }
  }
};

var citiConfig = {
  type: "pie",
  data: {
    datasets: [
      {
        data: [20874, 70833],
        backgroundColor: [window.chartColors.red, window.chartColors.blue],
        label: "Citi Bike share"
      }
    ],
    labels: ["Trips by women", "Trips by men"]
  },
  options: {
    legend: {
      display: false
    },
    responsive: true,
    tooltips: {
      mode: "index",
      callbacks: {
        label: function(tooltipItem, data) {
          return (
            data.labels[tooltipItem.index] +
            ": " +
            data.datasets[0].data[tooltipItem.index].toLocaleString()
          );
        }
      }
    }
  }
};

var divvyConfig = {
  type: "pie",
  data: {
    datasets: [
      {
        data: [221120, 641927],
        backgroundColor: [window.chartColors.red, window.chartColors.blue],
        label: "Divvy Bike share"
      }
    ],
    labels: ["Trips by women", "Trips by men"]
  },
  options: {
    legend: {
      display: false
    },
    responsive: true,
    tooltips: {
      mode: "index",
      callbacks: {
        label: function(tooltipItem, data) {
          return (
            data.labels[tooltipItem.index] +
            ": " +
            data.datasets[0].data[tooltipItem.index].toLocaleString()
          );
        }
      }
    }
  }
};

var blueBikesConfig = {
  type: "pie",
  data: {
    datasets: [
      {
        data: [105055, 305437],
        backgroundColor: [window.chartColors.red, window.chartColors.blue],
        label: "Blue Bike share"
      }
    ],
    labels: ["Trips by women", "Trips by men"]
  },
  options: {
    legend: {
      display: false
    },
    responsive: true,
    tooltips: {
      mode: "index",
      callbacks: {
        label: function(tooltipItem, data) {
          return (
            data.labels[tooltipItem.index] +
            ": " +
            data.datasets[0].data[tooltipItem.index].toLocaleString()
          );
        }
      }
    }
  }
};

window.onload = function() {
  var fordGoBikeCtx = document.getElementById("ford-go-bike").getContext("2d");
  window.fordGoBike = new Chart(fordGoBikeCtx, fordGoBikeConfig);
  var citiCtx = document.getElementById("citi").getContext("2d");
  window.citi = new Chart(citiCtx, citiConfig);
  var divvyCtx = document.getElementById("divvy").getContext("2d");
  window.divvy = new Chart(divvyCtx, divvyConfig);
  var blueBikesCtx = document.getElementById("blue-bikes").getContext("2d");
  window.blueBike = new Chart(blueBikesCtx, blueBikesConfig);
  var tripsByAgeAndGenderCtx = document
    .getElementById("age-and-gender")
    .getContext("2d");
  window.myBar = new Chart(tripsByAgeAndGenderCtx, tripsByAgeAndGenderConfig);
};

var tripsByAgeAndGenderConfig = {
  type: "line",
  data: {
    labels: [
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
      "56",
      "57",
      "58",
      "59",
      "60",
      "61",
      "62",
      "63",
      "64",
      "65",
      "66",
      "67",
      "68",
      "69",
      "70",
      "71"
    ],
    datasets: [
      {
        label: "Trips by women",
        backgroundColor: window.chartColors.red,
        borderColor: window.chartColors.red,
        data: [
          2,
          57,
          90,
          100,
          185,
          454,
          487,
          683,
          646,
          1102,
          1092,
          1202,
          1247,
          1100,
          1048,
          1401,
          813,
          714,
          778,
          580,
          612,
          494,
          347,
          520,
          376,
          322,
          334,
          192,
          224,
          229,
          199,
          297,
          385,
          160,
          123,
          276,
          166,
          227,
          237,
          151,
          87,
          58,
          55,
          35,
          71,
          27,
          56,
          22,
          33,
          14,
          57,
          8,
          1,
          42
        ]
      },
      {
        label: "Trips by men",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [
          0,
          159,
          295,
          207,
          555,
          1089,
          1564,
          2298,
          1785,
          2652,
          2263,
          2881,
          3597,
          3054,
          2705,
          2901,
          2922,
          3076,
          3128,
          2140,
          2127,
          1701,
          1787,
          1645,
          1069,
          1703,
          1117,
          1453,
          849,
          1242,
          959,
          887,
          1205,
          885,
          519,
          1266,
          550,
          729,
          601,
          451,
          370,
          478,
          425,
          299,
          353,
          119,
          255,
          83,
          138,
          146,
          119,
          121,
          75,
          122
        ]
      }
    ]
  },
  options: {
    responsive: true,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        title: function(tooltipItems, data) {
          return "Age: " + tooltipItems[0].xLabel;
        },
        label: function(tooltipItem, data) {
          return (
            data.datasets[tooltipItem.datasetIndex].label +
            ": " +
            tooltipItem.yLabel.toLocaleString()
          );
        }
      }
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Age"
          },
          ticks: {
            stepSize: 3
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Value"
          }
        }
      ]
    }
  }
};

var tripsByAgeAndGender = [
  { key: "18", values: [{ key: "Female", value: 2 }] },
  {
    key: "19",
    values: [{ key: "Female", value: 57 }, { key: "Male", value: 159 }]
  },
  {
    key: "20",
    values: [
      { key: "Male", value: 295 },
      { key: "Female", value: 90 },
      { key: "Other", value: 1 }
    ]
  },
  {
    key: "21",
    values: [
      { key: "Female", value: 100 },
      { key: "Male", value: 207 },
      { key: "Other", value: 66 }
    ]
  },
  {
    key: "22",
    values: [
      { key: "Male", value: 555 },
      { key: "Female", value: 185 },
      { key: "Other", value: 1 }
    ]
  },
  {
    key: "23",
    values: [{ key: "Female", value: 454 }, { key: "Male", value: 1089 }]
  },
  {
    key: "24",
    values: [{ key: "Female", value: 487 }, { key: "Male", value: 1564 }]
  },
  {
    key: "25",
    values: [
      { key: "Male", value: 2298 },
      { key: "Female", value: 683 },
      { key: "Other", value: 8 }
    ]
  },
  {
    key: "26",
    values: [
      { key: "Male", value: 1785 },
      { key: "Female", value: 646 },
      { key: "Other", value: 54 }
    ]
  },
  {
    key: "27",
    values: [
      { key: "Male", value: 2652 },
      { key: "Female", value: 1102 },
      { key: "Other", value: 24 }
    ]
  },
  {
    key: "28",
    values: [
      { key: "Female", value: 1092 },
      { key: "Male", value: 2263 },
      { key: "Other", value: 55 }
    ]
  },
  {
    key: "29",
    values: [
      { key: "Female", value: 1202 },
      { key: "Male", value: 2881 },
      { key: "Other", value: 5 }
    ]
  },
  {
    key: "30",
    values: [
      { key: "Male", value: 3597 },
      { key: "Female", value: 1247 },
      { key: "Other", value: 96 }
    ]
  },
  {
    key: "31",
    values: [
      { key: "Male", value: 3054 },
      { key: "Female", value: 1100 },
      { key: "Other", value: 62 }
    ]
  },
  {
    key: "32",
    values: [
      { key: "Male", value: 2705 },
      { key: "Female", value: 1048 },
      { key: "Other", value: 14 }
    ]
  },
  {
    key: "33",
    values: [
      { key: "Male", value: 2901 },
      { key: "Female", value: 1401 },
      { key: "Other", value: 49 }
    ]
  },
  {
    key: "34",
    values: [
      { key: "Male", value: 2922 },
      { key: "Female", value: 813 },
      { key: "Other", value: 78 }
    ]
  },
  {
    key: "35",
    values: [
      { key: "Male", value: 3076 },
      { key: "Other", value: 86 },
      { key: "Female", value: 714 }
    ]
  },
  {
    key: "36",
    values: [
      { key: "Female", value: 778 },
      { key: "Male", value: 3128 },
      { key: "Other", value: 22 }
    ]
  },
  {
    key: "37",
    values: [
      { key: "Male", value: 2140 },
      { key: "Female", value: 580 },
      { key: "Other", value: 33 }
    ]
  },
  {
    key: "38",
    values: [
      { key: "Male", value: 2127 },
      { key: "Female", value: 612 },
      { key: "Other", value: 68 }
    ]
  },
  {
    key: "39",
    values: [
      { key: "Male", value: 1701 },
      { key: "Female", value: 494 },
      { key: "Other", value: 69 }
    ]
  },
  {
    key: "40",
    values: [
      { key: "Male", value: 1787 },
      { key: "Female", value: 347 },
      { key: "Other", value: 27 }
    ]
  },
  {
    key: "41",
    values: [
      { key: "Male", value: 1645 },
      { key: "Female", value: 520 },
      { key: "Other", value: 12 }
    ]
  },
  {
    key: "42",
    values: [
      { key: "Female", value: 376 },
      { key: "Male", value: 1069 },
      { key: "Other", value: 13 }
    ]
  },
  {
    key: "43",
    values: [
      { key: "Male", value: 1703 },
      { key: "Female", value: 322 },
      { key: "Other", value: 25 }
    ]
  },
  {
    key: "44",
    values: [
      { key: "Male", value: 1117 },
      { key: "Female", value: 334 },
      { key: "Other", value: 49 }
    ]
  },
  {
    key: "45",
    values: [
      { key: "Male", value: 1453 },
      { key: "Female", value: 192 },
      { key: "Other", value: 31 }
    ]
  },
  {
    key: "46",
    values: [
      { key: "Male", value: 849 },
      { key: "Female", value: 224 },
      { key: "Other", value: 3 }
    ]
  },
  {
    key: "47",
    values: [
      { key: "Male", value: 1242 },
      { key: "Female", value: 229 },
      { key: "Other", value: 6 }
    ]
  },
  {
    key: "48",
    values: [
      { key: "Female", value: 199 },
      { key: "Male", value: 959 },
      { key: "Other", value: 24 }
    ]
  },
  {
    key: "49",
    values: [
      { key: "Female", value: 297 },
      { key: "Male", value: 887 },
      { key: "Other", value: 2 }
    ]
  },
  {
    key: "50",
    values: [
      { key: "Male", value: 1205 },
      { key: "Female", value: 385 },
      { key: "Other", value: 46 }
    ]
  },
  {
    key: "51",
    values: [
      { key: "Female", value: 160 },
      { key: "Male", value: 885 },
      { key: "Other", value: 44 }
    ]
  },
  {
    key: "52",
    values: [
      { key: "Male", value: 519 },
      { key: "Female", value: 123 },
      { key: "Other", value: 2 }
    ]
  },
  {
    key: "53",
    values: [
      { key: "Male", value: 1266 },
      { key: "Female", value: 276 },
      { key: "Other", value: 1 }
    ]
  },
  {
    key: "54",
    values: [
      { key: "Female", value: 166 },
      { key: "Male", value: 550 },
      { key: "Other", value: 1 }
    ]
  },
  {
    key: "55",
    values: [
      { key: "Male", value: 729 },
      { key: "Female", value: 227 },
      { key: "Other", value: 2 }
    ]
  },
  {
    key: "56",
    values: [
      { key: "Female", value: 237 },
      { key: "Male", value: 601 },
      { key: "Other", value: 14 }
    ]
  },
  {
    key: "57",
    values: [{ key: "Male", value: 451 }, { key: "Female", value: 151 }]
  },
  {
    key: "58",
    values: [
      { key: "Male", value: 370 },
      { key: "Female", value: 87 },
      { key: "Other", value: 17 }
    ]
  },
  {
    key: "59",
    values: [{ key: "Male", value: 478 }, { key: "Female", value: 58 }]
  },
  {
    key: "60",
    values: [{ key: "Male", value: 425 }, { key: "Female", value: 55 }]
  },
  {
    key: "61",
    values: [
      { key: "Male", value: 299 },
      { key: "Female", value: 35 },
      { key: "Other", value: 10 }
    ]
  },
  {
    key: "62",
    values: [{ key: "Male", value: 353 }, { key: "Female", value: 71 }]
  },
  {
    key: "63",
    values: [{ key: "Male", value: 119 }, { key: "Female", value: 27 }]
  },
  {
    key: "64",
    values: [{ key: "Male", value: 255 }, { key: "Female", value: 56 }]
  },
  {
    key: "65",
    values: [{ key: "Male", value: 83 }, { key: "Female", value: 22 }]
  },
  {
    key: "66",
    values: [{ key: "Male", value: 138 }, { key: "Female", value: 33 }]
  },
  {
    key: "67",
    values: [{ key: "Male", value: 146 }, { key: "Female", value: 14 }]
  },
  {
    key: "68",
    values: [{ key: "Male", value: 119 }, { key: "Female", value: 57 }]
  },
  {
    key: "69",
    values: [{ key: "Male", value: 121 }, { key: "Female", value: 8 }]
  },
  {
    key: "70",
    values: [{ key: "Male", value: 75 }, { key: "Female", value: 1 }]
  },
  {
    key: "71",
    values: [{ key: "Female", value: 42 }, { key: "Male", value: 122 }]
  }
];
