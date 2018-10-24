const allCoordinates = [
  [37.7730627, -122.4390777],
  [37.775946, -122.4377775],
  [37.775946, -122.4377775],
  [37.78014570345598, -122.40307085237873],
  [37.78014570345598, -122.40307085237873],
  [37.76704457969368, -122.39083349704742],
  [37.76704457969368, -122.39083349704742],
  [37.7650259, -122.3987734],
  [37.7650259, -122.3987734],
  [37.794231, -122.402923],
  [37.794231, -122.402923],
  [37.79539293725452, -122.4047702550888],
  [37.79539293725452, -122.4047702550888],
  [37.78499972833808, -122.39593561749642],
  [37.78499972833808, -122.39593561749642],
  [37.788975, -122.403452],
  [37.788975, -122.403452],
  [37.78487208436062, -122.40087568759917],
  [37.78487208436062, -122.40087568759917],
  [37.788975, -122.403452],
  [37.788975, -122.403452],
  [37.792251, -122.397086],
  [37.792251, -122.397086],
  [37.795392, -122.394203],
  [37.795392, -122.394203],
  [37.780526, -122.390288],
  [37.780526, -122.390288],
  [37.789756, -122.394643],
  [37.789756, -122.394643],
  [37.776598, -122.395282],
  [37.776598, -122.395282],
  [37.776598, -122.395282],
  [37.776598, -122.395282],
  [37.776598, -122.395282],
  [37.776598, -122.395282],
  [37.760299, -122.418892],
  [37.760299, -122.418892],
  [37.7524278, -122.4206278],
  [37.7524278, -122.4206278],
  [37.7913, -122.399051],
  [37.7913, -122.399051],
  [37.776598, -122.395282],
  [37.776598, -122.395282],
  [37.79857210846256, -122.40086898207666],
  [37.79857210846256, -122.40086898207666],
  [37.78716801474664, -122.38809792330358],
  [37.78716801474664, -122.38809792330358],
  [37.80477, -122.403234],
  [37.80477, -122.403234],
  [37.776598, -122.395282],
  [37.776598, -122.395282],
  [37.791464, -122.391034],
  [37.791464, -122.391034],
  [37.787521780456245, -122.39740490913391],
  [37.787521780456245, -122.39740490913391],
  [37.7770527, -122.4295585]
];

const trips = [
  {
    startTime: "2:50:25 am",
    startStationName: "Broderick St at Oak St",
    endTime: "3:02:27 am",
    endStationName: "Grove St at Divisadero",
    memberAge: "26",
    memberType: "Subscriber",
    memberGender: "Female"
  },
  {
    startTime: "6:26:58 am",
    startStationName: "Grove St at Divisadero",
    endTime: "6:37:29 am",
    endStationName: "5th at Folsom",
    memberAge: "50",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "6:56:20 am",
    startStationName: "5th at Folsom",
    endTime: "7:03:21 am",
    endStationName: "4th St at 16th St",
    memberAge: "50",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "7:31:50 am",
    startStationName: "4th St at 16th St",
    endTime: "7:35:49 am",
    endStationName: "Jackson Playground",
    memberAge: "33",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "7:59:10 am",
    startStationName: "Jackson Playground",
    endTime: "8:15:44 am",
    endStationName: "Commercial St at Montgomery St",
    memberAge: "49",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "9:10:13 am",
    startStationName: "Commercial St at Montgomery St",
    endTime: "9:12:08 am",
    endStationName: "Washington St at Kearny St",
    memberAge: "28",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "9:21:26 am",
    startStationName: "Washington St at Kearny St",
    endTime: "9:29:38 am",
    endStationName: "2nd St at Folsom St",
    memberAge: "27",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "11:48:01 am",
    startStationName: "2nd St at Folsom St",
    endTime: "11:53:26 am",
    endStationName: "Post St at Kearny St",
    memberAge: "33",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "12:27:03 pm",
    startStationName: "Post St at Kearny St",
    endTime: "12:32:29 pm",
    endStationName: "Yerba Buena Center for the Arts (Howard St at 3rd St)",
    memberAge: "32",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "12:38:54 pm",
    startStationName: "Yerba Buena Center for the Arts (Howard St at 3rd St)",
    endTime: "12:44:54 pm",
    endStationName: "Post St at Kearny St",
    memberAge: "32",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "1:01:13 pm",
    startStationName: "Post St at Kearny St",
    endTime: "1:06:45 pm",
    endStationName: "Embarcadero BART Station (Beale St at Market St)",
    memberAge: "42",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "1:12:46 pm",
    startStationName: "Embarcadero BART Station (Beale St at Market St)",
    endTime: "1:15:13 pm",
    endStationName: "San Francisco Ferry Building (Harry Bridges Plaza)",
    memberAge: "41",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "1:33:25 pm",
    startStationName: "San Francisco Ferry Building (Harry Bridges Plaza)",
    endTime: "1:50:56 pm",
    endStationName: "2nd St at Townsend St",
    memberAge: "41",
    memberType: "Subscriber",
    memberGender: "Female"
  },
  {
    startTime: "2:30:09 pm",
    startStationName: "2nd St at Townsend St",
    endTime: "2:41:31 pm",
    endStationName: "Howard St at Beale St",
    memberAge: "55",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "3:43:15 pm",
    startStationName: "Howard St at Beale St",
    endTime: "3:54:46 pm",
    endStationName: "San Francisco Caltrain (Townsend St at 4th St)",
    memberAge: "46",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "3:55:14 pm",
    startStationName: "San Francisco Caltrain (Townsend St at 4th St)",
    endTime: "3:58:52 pm",
    endStationName: "San Francisco Caltrain (Townsend St at 4th St)",
    memberAge: "57",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "4:00:58 pm",
    startStationName: "San Francisco Caltrain (Townsend St at 4th St)",
    endTime: "4:04:55 pm",
    endStationName: "San Francisco Caltrain (Townsend St at 4th St)",
    memberAge: "57",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "4:05:44 pm",
    startStationName: "San Francisco Caltrain (Townsend St at 4th St)",
    endTime: "4:29:25 pm",
    endStationName: "19th St at Mission St",
    memberAge: "57",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "4:31:29 pm",
    startStationName: "19th St at Mission St",
    endTime: "4:35:44 pm",
    endStationName: "Valencia St at 24th St",
    memberAge: "57",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "5:00:32 pm",
    startStationName: "Valencia St at 24th St",
    endTime: "5:18:59 pm",
    endStationName: "Mechanics Monument Plaza (Market St at Bush St)",
    memberAge: "36",
    memberType: "Subscriber",
    memberGender: "Female"
  },
  {
    startTime: "5:28:39 pm",
    startStationName: "Mechanics Monument Plaza (Market St at Bush St)",
    endTime: "5:44:25 pm",
    endStationName: "San Francisco Caltrain (Townsend St at 4th St)",
    memberAge: "30",
    memberType: "Subscriber",
    memberGender: "Female"
  },
  {
    startTime: "5:44:36 pm",
    startStationName: "San Francisco Caltrain (Townsend St at 4th St)",
    endTime: "5:58:13 pm",
    endStationName: "Broadway at Battery St",
    memberAge: "33",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "6:01:18 pm",
    startStationName: "Broadway at Battery St",
    endTime: "6:07:51 pm",
    endStationName: "The Embarcadero at Bryant St",
    memberAge: "50",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "6:16:47 pm",
    startStationName: "The Embarcadero at Bryant St",
    endTime: "6:24:18 pm",
    endStationName: "The Embarcadero at Sansome St",
    memberAge: "26",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "6:30:33 pm",
    startStationName: "The Embarcadero at Sansome St",
    endTime: "6:45:16 pm",
    endStationName: "San Francisco Caltrain (Townsend St at 4th St)",
    memberAge: "46",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "6:45:45 pm",
    startStationName: "San Francisco Caltrain (Townsend St at 4th St)",
    endTime: "6:52:44 pm",
    endStationName: "The Embarcadero at Steuart St",
    memberAge: "30",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "6:54:58 pm",
    startStationName: "The Embarcadero at Steuart St",
    endTime: "6:58:44 pm",
    endStationName: "Howard St at 2nd St",
    memberAge: "30",
    memberType: "Subscriber",
    memberGender: "Male"
  },
  {
    startTime: "7:07:46 pm",
    startStationName: "Howard St at 2nd St",
    endTime: "7:22:53 pm",
    endStationName: "Webster St at Grove St",
    memberAge: "23",
    memberType: "Subscriber",
    memberGender: "Male"
  }
];

let canvas;
let myMap;
let tripsCoordinates;
let data;

let delta = 0;
let coordinate = 0;
let trip = 0;

let origin;
let originVector;
let destination;
let destinationVector;

let bikePosition;

let visitedRoutes = []; // A new array to hold all visited positions

const options = {
  lat: 37.7749,
  lng: -122.4194,
  zoom: 13,
  style: "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
};
const mappa = new Mappa("Leaflet");

function setup() {
  canvas = createCanvas(576, 400).parent("canvasContainer");
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  // Every time the map is zoomed or moved update the route
  myMap.onChange(drawRoute);
}

function draw() {
  if (coordinate % 2 === 0 && delta === 0) {
    let userInfo = "";
    userInfo += trips[trip].memberAge + " year old ";
    userInfo += trips[trip].memberGender + " ";
    userInfo += trips[trip].memberType + ".";

    $(".list-group-item:first-child").removeClass("active");
    $(
      '<div class="list-group-item list-group-item-action active">' +
        '<div class="d-flex w-100 justify-content-between">' +
        "<h6>Start</h6>" +
        "<small>" +
        trips[trip].startTime +
        "</small>" +
        "</div>" +
        '<h5 class="mb-1">' +
        trips[trip].startStationName +
        "</h5> <hr>" +
        '<div class="d-flex w-100 justify-content-between">' +
        "<h6>End</h6>" +
        "<small>" +
        trips[trip].endTime +
        "</small>" +
        "</div>" +
        '<h5 class="mb-1">' +
        trips[trip].endStationName +
        "</h5>" +
        "<p><small>" +
        userInfo +
        "</small></p>" +
        "</div>"
    ).prependTo("#routeList");

    trip++;
  }
  if (coordinate < allCoordinates.length - 2) {
    if (delta < 1) {
      delta += 0.01;
    } else {
      // Once it has arrived at its destination, add the origin as a visited location
      visitedRoutes.push(allCoordinates[coordinate]);
      delta = 0;
      coordinate++;
      // Call the drawRoute to update the route
      drawRoute();
    }

    origin = myMap.latLngToPixel(
      allCoordinates[coordinate][0],
      allCoordinates[coordinate][1]
    );
    originVector = createVector(origin.x, origin.y);
    destination = myMap.latLngToPixel(
      allCoordinates[coordinate + 1][0],
      allCoordinates[coordinate + 1][1]
    );
    destinationVector = createVector(destination.x, destination.y);

    bikePosition = originVector.lerp(destinationVector, delta);

    // remove the stroke from the route
    noStroke();
    fill(0, 156, 222);
    ellipse(bikePosition.x, bikePosition.y, 7, 7);
  }
}

function drawPoints() {
  clear();
  noStroke();
  fill(255);
  for (let i = 0; i < allCoordinates.length; i++) {
    let pos = myMap.latLngToPixel(allCoordinates[i][0], allCoordinates[i][1]);
    ellipse(pos.x, pos.y, 5, 5);
  }
}

// This functions draws a line with n-vertices where n = visited routes;
function drawRoute() {
  clear();
  // stroke color and width to see the route line
  stroke(0, 52, 120);
  strokeWeight(5);
  if (visitedRoutes.length > 0) {
    noFill();
    beginShape();
    visitedRoutes.forEach(function(e) {
      var pos = myMap.latLngToPixel(e[0], e[1]);
      vertex(pos.x, pos.y);
    });
    endShape();
  }
}
