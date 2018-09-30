window.chartColors = {
  red: "rgb(255, 99, 132)",
  blue: "rgb(54, 162, 235)"
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
    labels: ["Female", "Male"]
  },
  options: {
    responsive: true
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
    labels: ["Female", "Male"]
  },
  options: {
    responsive: true,
    tooltips: {
      mode: "index"
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
    labels: ["Female", "Male"]
  },
  options: {
    responsive: true,
    tooltips: {
      mode: "index"
    }
  }
};

window.onload = function() {
  var fordGoBikeCtx = document.getElementById("ford-go-bike").getContext("2d");
  window.myPie = new Chart(fordGoBikeCtx, fordGoBikeConfig);
  var citiCtx = document.getElementById("citi").getContext("2d");
  window.myPie = new Chart(citiCtx, citiConfig);
  var divvyCtx = document.getElementById("divvy").getContext("2d");
  window.myPie = new Chart(divvyCtx, divvyConfig);
};
