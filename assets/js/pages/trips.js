var map;
var sanFrancisco = { lat: 37.783726, lng: -122.408945 };
var berkeley = { lat: 37.864677, lng: -122.270469 };
var oakland = { lat: 37.81926, lng: -122.275241 };
var sanJose = { lat: 37.333959, lng: -121.889189 };

// window.chartColors = {
//   green: "rgb(75, 192, 192)",
//   blue: "rgb(54, 162, 235)"
// };

// var tripsByDayAndUserTypeChartData = {
//   labels: [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
//   ],
//   datasets: [
//     {
//       label: "Subscribers",
//       backgroundColor: window.chartColors.blue,
//       borderColor: window.chartColors.blue,
//       borderWidth: 1,
//       data: [67404, 165831, 185622, 181258, 179738, 163043, 76140]
//     },
//     {
//       label: "Customers",
//       backgroundColor: window.chartColors.green,
//       borderColor: window.chartColors.green,
//       borderWidth: 1,
//       data: [31080, 22709, 23030, 24287, 25151, 28678, 36577]
//     }
//   ]
// };

// window.onload = function() {
//   var tripsByDayAndUserTypeCtx = document
//     .getElementById("trips-by-day-and-user-type")
//     .getContext("2d");
//   window.tripsByDayAndUserType = new Chart(tripsByDayAndUserTypeCtx, {
//     type: "bar",
//     data: tripsByDayAndUserTypeChartData,
//     options: {
//       responsive: true,
//       legend: {
//         position: "top"
//       }
//     }
//   });
// };

function initGoogleMaps() {
  var mapOptions = {
    zoom: 13.5,
    center: sanFrancisco,
    streetViewControl: false,
    mapTypeControl: false,
    scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
    styles: [
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#e9e9e9"
          },
          {
            lightness: 17
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5"
          },
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff"
          },
          {
            lightness: 17
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#ffffff"
          },
          {
            lightness: 29
          },
          {
            weight: 0.2
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff"
          },
          {
            lightness: 18
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff"
          },
          {
            lightness: 16
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5"
          },
          {
            lightness: 21
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#dedede"
          },
          {
            lightness: 21
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "on"
          },
          {
            color: "#ffffff"
          },
          {
            lightness: 16
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36
          },
          {
            color: "#333333"
          },
          {
            lightness: 40
          }
        ]
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#f2f2f2"
          },
          {
            lightness: 25
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#fefefe"
          },
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#fefefe"
          },
          {
            lightness: 17
          },
          {
            weight: 1.2
          }
        ]
      }
    ]
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  for (var startId in tripValues) {
    for (var endId in tripValues[startId]) {
      if (tripValues[startId][endId].value) {
        var bikeTrip = new google.maps.Polyline({
          path: [
            {
              lat: Number(tripValues[startId][endId].start_lat),
              lng: Number(tripValues[startId][endId].start_lon)
            },
            {
              lat: Number(tripValues[startId][endId].end_lat),
              lng: Number(tripValues[startId][endId].end_lon)
            }
          ],
          geodesic: true,
          strokeColor: "#003478",
          strokeOpacity:
            ((tripValues[startId][endId].value - 150) * (0.6 - 0.1)) /
              (5684 - 150) +
            0.1,
          strokeWeight:
            ((tripValues[startId][endId].value - 150) * (9 - 1)) /
              (5684 - 150) +
            1
        });

        bikeTrip.setMap(map);
      }
    }
  }

  function AreaControl(controlDiv, map, cityName, cords) {
    // Set CSS for the control border.
    var controlUI = document.createElement("div");
    controlUI.style.backgroundColor = "#009cde";
    controlUI.style.border = "2px solid #009cde";
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginBottom = "22px";
    controlUI.style.textAlign = "center";
    controlUI.title = "Click to recenter the map to " + cityName;
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement("div");
    controlText.style.color = "#fff";
    controlText.style.fontFamily = "Roboto,Arial,sans-serif";
    controlText.style.fontSize = "16px";
    controlText.style.lineHeight = "38px";
    controlText.style.paddingLeft = "5px";
    controlText.style.paddingRight = "5px";
    controlText.innerHTML = cityName;
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener("click", function() {
      map.setCenter(cords);
      if (cityName === "San Francisco") map.setZoom(13.5);
      if (cityName === "Oakland") map.setZoom(13.65);
      if (cityName === "San Jose") map.setZoom(14.75);
      if (cityName === "Berkeley") map.setZoom(14.25);
    });
  }

  // Create the DIV to hold the control and call the CenterControl()
  // constructor passing in this DIV.

  var sanFranciscoControlDiv = document.createElement("div");
  var sanFranciscoControl = new AreaControl(
    sanFranciscoControlDiv,
    map,
    "San Francisco",
    sanFrancisco
  );

  sanFranciscoControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(
    sanFranciscoControlDiv
  );

  var berkeleyControlDiv = document.createElement("div");
  var berkeleyControl = new AreaControl(
    berkeleyControlDiv,
    map,
    "Berkeley",
    berkeley
  );

  berkeleyControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(berkeleyControlDiv);

  var oaklandControlDiv = document.createElement("div");
  var oaklandControl = new AreaControl(
    oaklandControlDiv,
    map,
    "Oakland",
    oakland
  );

  oaklandControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(oaklandControlDiv);

  var sanJoseControlDiv = document.createElement("div");
  var sanJoseControl = new AreaControl(
    sanJoseControlDiv,
    map,
    "San Jose",
    sanJose
  );

  sanJoseControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(sanJoseControlDiv);
}

const stations = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Powell St BART Station (Market St at 4th St)",
        id: "3",
        interactions: 41488
      },
      geometry: {
        type: "Point",
        coordinates: [37.78637526861584, -122.40490436553954]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Cyril Magnin St at Ellis St",
        id: "4",
        interactions: 7697
      },
      geometry: {
        type: "Point",
        coordinates: [-122.4089150084319, 37.78588062694133]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Powell St BART Station (Market St at 5th St)",
        id: "5",
        interactions: 33489
      },
      geometry: {
        type: "Point",
        coordinates: [-122.40844488143921, 37.783899357084934]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "The Embarcadero at Sansome St",
        id: "6",
        interactions: 49516
      },
      geometry: { type: "Point", coordinates: [-122.403234, 37.80477] }
    },
    {
      type: "Feature",
      properties: { name: "Frank H Ogawa Plaza", id: "7", interactions: 11985 },
      geometry: {
        type: "Point",
        coordinates: [37.8045623549303, -122.27173805236816]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "The Embarcadero at Vallejo St",
        id: "8",
        interactions: 15853
      },
      geometry: { type: "Point", coordinates: [37.799953, -122.398525] }
    },
    {
      type: "Feature",
      properties: {
        name: "Broadway at Battery St",
        id: "9",
        interactions: 12641
      },
      geometry: {
        type: "Point",
        coordinates: [-122.40086898207666, 37.79857210846256]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Washington St at Kearny St",
        id: "10",
        interactions: 10245
      },
      geometry: {
        type: "Point",
        coordinates: [37.79539293725452, -122.4047702550888]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Davis St at Jackson St",
        id: "11",
        interactions: 12952
      },
      geometry: { type: "Point", coordinates: [37.79728, -122.398436] }
    },
    {
      type: "Feature",
      properties: {
        name: "Commercial St at Montgomery St",
        id: "13",
        interactions: 11429
      },
      geometry: { type: "Point", coordinates: [37.794231, -122.402923] }
    },
    {
      type: "Feature",
      properties: {
        name: "Clay St at Battery St",
        id: "14",
        interactions: 16039
      },
      geometry: { type: "Point", coordinates: [37.795001, -122.39997] }
    },
    {
      type: "Feature",
      properties: {
        name: "San Francisco Ferry Building (Harry Bridges Plaza)",
        id: "15",
        interactions: 55840
      },
      geometry: { type: "Point", coordinates: [37.795392, -122.394203] }
    },
    {
      type: "Feature",
      properties: {
        name: "Steuart St at Market St",
        id: "16",
        interactions: 37473
      },
      geometry: { type: "Point", coordinates: [-122.39443, 37.79413] }
    },
    {
      type: "Feature",
      properties: {
        name: "Embarcadero BART Station (Beale St at Market St)",
        id: "17",
        interactions: 26985
      },
      geometry: { type: "Point", coordinates: [37.792251, -122.397086] }
    },
    {
      type: "Feature",
      properties: {
        name: "Telegraph Ave at Alcatraz Ave",
        id: "18",
        interactions: 3055
      },
      geometry: {
        type: "Point",
        coordinates: [-122.26017236709595, 37.85022187449679]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Post St at Kearny St",
        id: "19",
        interactions: 20918
      },
      geometry: { type: "Point", coordinates: [-122.403452, 37.788975] }
    },
    {
      type: "Feature",
      properties: {
        name: "Mechanics Monument Plaza (Market St at Bush St)",
        id: "20",
        interactions: 16556
      },
      geometry: { type: "Point", coordinates: [37.7913, -122.399051] }
    },
    {
      type: "Feature",
      properties: {
        name: "Montgomery St BART Station (Market St at 2nd St)",
        id: "21",
        interactions: 45934
      },
      geometry: { type: "Point", coordinates: [37.7896254, -122.400811] }
    },
    {
      type: "Feature",
      properties: {
        name: "Howard St at Beale St",
        id: "22",
        interactions: 33143
      },
      geometry: { type: "Point", coordinates: [37.789756, -122.394643] }
    },
    {
      type: "Feature",
      properties: {
        name: "The Embarcadero at Steuart St",
        id: "23",
        interactions: 20729
      },
      geometry: { type: "Point", coordinates: [37.791464, -122.391034] }
    },
    {
      type: "Feature",
      properties: {
        name: "Spear St at Folsom St",
        id: "24",
        interactions: 17305
      },
      geometry: { type: "Point", coordinates: [37.7896767, -122.3904285] }
    },
    {
      type: "Feature",
      properties: {
        name: "Howard St at 2nd St",
        id: "25",
        interactions: 14604
      },
      geometry: {
        type: "Point",
        coordinates: [37.787521780456245, -122.39740490913391]
      }
    },
    {
      type: "Feature",
      properties: { name: "1st St at Folsom St", id: "26", interactions: 8976 },
      geometry: { type: "Point", coordinates: [-122.39438, 37.78729] }
    },
    {
      type: "Feature",
      properties: {
        name: "Beale St at Harrison St",
        id: "27",
        interactions: 22827
      },
      geometry: { type: "Point", coordinates: [-122.3918648, 37.7880593] }
    },
    {
      type: "Feature",
      properties: {
        name: "The Embarcadero at Bryant St",
        id: "28",
        interactions: 15881
      },
      geometry: {
        type: "Point",
        coordinates: [-122.38809792330358, 37.78716801474664]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "O'Farrell St at Divisadero St",
        id: "29",
        interactions: 4904
      },
      geometry: {
        type: "Point",
        coordinates: [37.782404601934104, -122.43944585323335]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "San Francisco Caltrain (Townsend St at 4th St)",
        id: "30",
        interactions: 53902
      },
      geometry: { type: "Point", coordinates: [37.776598, -122.395282] }
    },
    {
      type: "Feature",
      properties: {
        name: "Raymond Kimbell Playground",
        id: "31",
        interactions: 6577
      },
      geometry: {
        type: "Point",
        coordinates: [37.78381270927812, -122.43455886840819]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Golden Gate Ave at Hyde St",
        id: "33",
        interactions: 5035
      },
      geometry: { type: "Point", coordinates: [-122.4154077, 37.7816495] }
    },
    {
      type: "Feature",
      properties: {
        name: "Father Alfred E Boeddeker Park",
        id: "34",
        interactions: 5272
      },
      geometry: { type: "Point", coordinates: [-122.412408, 37.7839879] }
    },
    {
      type: "Feature",
      properties: { name: "Cahill Park", id: "35", interactions: 2057 },
      geometry: {
        type: "Point",
        coordinates: [37.32911866814779, -121.90457582473755]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Folsom St at 3rd St",
        id: "36",
        interactions: 15652
      },
      geometry: { type: "Point", coordinates: [-122.39887, 37.78383] }
    },
    {
      type: "Feature",
      properties: {
        name: "2nd St at Folsom St",
        id: "37",
        interactions: 17383
      },
      geometry: {
        type: "Point",
        coordinates: [37.78499972833808, -122.39593561749642]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Scott St at Golden Gate Ave",
        id: "39",
        interactions: 3584
      },
      geometry: { type: "Point", coordinates: [37.7789994, -122.4368608] }
    },
    {
      type: "Feature",
      properties: {
        name: "Laguna St at McAllister St",
        id: "40",
        interactions: 215
      },
      geometry: { type: "Point", coordinates: [37.7792082, -122.4268287] }
    },
    {
      type: "Feature",
      properties: {
        name: "Golden Gate Ave at Polk St",
        id: "41",
        interactions: 15717
      },
      geometry: { type: "Point", coordinates: [37.78127, -122.41874] }
    },
    {
      type: "Feature",
      properties: {
        name: "San Francisco City Hall (Polk St at Grove St)",
        id: "42",
        interactions: 9535
      },
      geometry: { type: "Point", coordinates: [-122.41823, 37.77865] }
    },
    {
      type: "Feature",
      properties: {
        name: "San Francisco Public Library (Grove St at Hyde St)",
        id: "43",
        interactions: 15229
      },
      geometry: { type: "Point", coordinates: [-122.4159292, 37.7787677] }
    },
    {
      type: "Feature",
      properties: {
        name: "Civic Center/UN Plaza BART Station (Market St at McAllister St)",
        id: "44",
        interactions: 23524
      },
      geometry: { type: "Point", coordinates: [37.7810737, -122.4117382] }
    },
    {
      type: "Feature",
      properties: { name: "5th St at Howard St", id: "45", interactions: 8643 },
      geometry: { type: "Point", coordinates: [-122.405127, 37.781752] }
    },
    {
      type: "Feature",
      properties: { name: "San Antonio Park", id: "46", interactions: 903 },
      geometry: {
        type: "Point",
        coordinates: [-122.24237322807312, 37.79013985185364]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "4th St at Harrison St",
        id: "47",
        interactions: 14552
      },
      geometry: {
        type: "Point",
        coordinates: [-122.39974915981291, 37.78095459960753]
      }
    },
    {
      type: "Feature",
      properties: { name: "2nd St at S Park St", id: "48", interactions: 44 },
      geometry: {
        type: "Point",
        coordinates: [37.782411189735896, -122.39270595839115]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "S Park St at 3rd St",
        id: "49",
        interactions: 17141
      },
      geometry: { type: "Point", coordinates: [-122.3949894, 37.7807601] }
    },
    {
      type: "Feature",
      properties: {
        name: "2nd St at Townsend St",
        id: "50",
        interactions: 21449
      },
      geometry: { type: "Point", coordinates: [37.780526, -122.390288] }
    },
    {
      type: "Feature",
      properties: {
        name: "McAllister St at Baker St",
        id: "52",
        interactions: 5789
      },
      geometry: { type: "Point", coordinates: [-122.4418376, 37.7774157] }
    },
    {
      type: "Feature",
      properties: {
        name: "Grove St at Divisadero",
        id: "53",
        interactions: 7424
      },
      geometry: { type: "Point", coordinates: [-122.4377775, 37.775946] }
    },
    {
      type: "Feature",
      properties: {
        name: "Webster St at Grove St",
        id: "55",
        interactions: 7419
      },
      geometry: { type: "Point", coordinates: [-122.4295585, 37.7770527] }
    },
    {
      type: "Feature",
      properties: { name: "Koshland Park", id: "56", interactions: 5128 },
      geometry: {
        type: "Point",
        coordinates: [-122.42731690406801, 37.77341396997343]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Market St at 10th St",
        id: "58",
        interactions: 43657
      },
      geometry: { type: "Point", coordinates: [37.776619, -122.417385] }
    },
    {
      type: "Feature",
      properties: {
        name: "S Van Ness Ave at Market St",
        id: "59",
        interactions: 14401
      },
      geometry: { type: "Point", coordinates: [-122.418954, 37.774814] }
    },
    {
      type: "Feature",
      properties: {
        name: "8th St at Ringold St",
        id: "60",
        interactions: 14382
      },
      geometry: {
        type: "Point",
        coordinates: [37.77452040113685, -122.4094493687153]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Howard St at 8th St",
        id: "61",
        interactions: 15728
      },
      geometry: { type: "Point", coordinates: [-122.4113061, 37.7765126] }
    },
    {
      type: "Feature",
      properties: {
        name: "Victoria Manalo Draves Park",
        id: "62",
        interactions: 12049
      },
      geometry: {
        type: "Point",
        coordinates: [-122.40643188357353, 37.77779057034257]
      }
    },
    {
      type: "Feature",
      properties: { name: "Bryant St at 6th St", id: "63", interactions: 4138 },
      geometry: {
        type: "Point",
        coordinates: [37.775910222333366, -122.40257500673577]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "5th St at Brannan St",
        id: "64",
        interactions: 11655
      },
      geometry: { type: "Point", coordinates: [37.7767539, -122.3990176] }
    },
    {
      type: "Feature",
      properties: {
        name: "3rd St at Townsend St",
        id: "66",
        interactions: 30114
      },
      geometry: {
        type: "Point",
        coordinates: [37.77874161153677, -122.39274082710836]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "San Francisco Caltrain Station 2  (Townsend St at 4th St)",
        id: "67",
        interactions: 54294
      },
      geometry: { type: "Point", coordinates: [37.7766392, -122.3955263] }
    },
    {
      type: "Feature",
      properties: {
        name: "Central Ave at Fell St",
        id: "70",
        interactions: 16171
      },
      geometry: {
        type: "Point",
        coordinates: [-122.44429260492325, 37.77331087889723]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Broderick St at Oak St",
        id: "71",
        interactions: 5984
      },
      geometry: { type: "Point", coordinates: [-122.4390777, 37.7730627] }
    },
    {
      type: "Feature",
      properties: { name: "Page St at Scott St", id: "72", interactions: 7764 },
      geometry: { type: "Point", coordinates: [-122.4356498, 37.772406] }
    },
    {
      type: "Feature",
      properties: {
        name: "Pierce St at Haight St",
        id: "73",
        interactions: 5473
      },
      geometry: { type: "Point", coordinates: [-122.4337079, 37.7717933] }
    },
    {
      type: "Feature",
      properties: {
        name: "Laguna St at Hayes St",
        id: "74",
        interactions: 14417
      },
      geometry: {
        type: "Point",
        coordinates: [37.776434819204745, -122.42624402046204]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Market St at Franklin St",
        id: "75",
        interactions: 12384
      },
      geometry: {
        type: "Point",
        coordinates: [37.7737932060887, -122.42123901844025]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "McCoppin St at Valencia St",
        id: "76",
        interactions: 11031
      },
      geometry: {
        type: "Point",
        coordinates: [-122.42242321372034, 37.77166246221617]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "11th St at Natoma St",
        id: "77",
        interactions: 10613
      },
      geometry: { type: "Point", coordinates: [37.7735069, -122.4160402] }
    },
    {
      type: "Feature",
      properties: {
        name: "Folsom St at 9th St",
        id: "78",
        interactions: 10937
      },
      geometry: { type: "Point", coordinates: [-122.4116467, 37.7737172] }
    },
    {
      type: "Feature",
      properties: {
        name: "7th St at Brannan St",
        id: "79",
        interactions: 11013
      },
      geometry: { type: "Point", coordinates: [-122.4036725, 37.7734919] }
    },
    {
      type: "Feature",
      properties: {
        name: "Townsend St at 5th St",
        id: "80",
        interactions: 11835
      },
      geometry: { type: "Point", coordinates: [37.7753058, -122.39738] }
    },
    {
      type: "Feature",
      properties: { name: "Berry St at 4th St", id: "81", interactions: 44928 },
      geometry: { type: "Point", coordinates: [37.77588, -122.39317] }
    },
    {
      type: "Feature",
      properties: { name: "Duboce Park", id: "84", interactions: 4915 },
      geometry: { type: "Point", coordinates: [-122.4338119, 37.7692005] }
    },
    {
      type: "Feature",
      properties: {
        name: "Church St at Duboce Ave",
        id: "85",
        interactions: 6954
      },
      geometry: { type: "Point", coordinates: [37.7700831, -122.4291557] }
    },
    {
      type: "Feature",
      properties: {
        name: "Market St at Dolores St",
        id: "86",
        interactions: 11088
      },
      geometry: { type: "Point", coordinates: [-122.4268256, 37.7693053] }
    },
    {
      type: "Feature",
      properties: {
        name: "Folsom St at 13th St",
        id: "87",
        interactions: 1872
      },
      geometry: { type: "Point", coordinates: [37.769757, -122.415674] }
    },
    {
      type: "Feature",
      properties: {
        name: "11th St at Bryant St",
        id: "88",
        interactions: 13434
      },
      geometry: { type: "Point", coordinates: [37.7700298, -122.4117258] }
    },
    {
      type: "Feature",
      properties: {
        name: "Division St at Potrero Ave",
        id: "89",
        interactions: 14935
      },
      geometry: {
        type: "Point",
        coordinates: [37.76921786152374, -122.40764558315276]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Townsend St at 7th St",
        id: "90",
        interactions: 25214
      },
      geometry: { type: "Point", coordinates: [-122.402717, 37.771058] }
    },
    {
      type: "Feature",
      properties: { name: "Berry St at King St", id: "91", interactions: 2260 },
      geometry: {
        type: "Point",
        coordinates: [37.771762110313176, -122.39843755960464]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Mission Bay Kids Park",
        id: "92",
        interactions: 4553
      },
      geometry: {
        type: "Point",
        coordinates: [-122.39302754402159, 37.772300631747626]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "4th St at Mission Bay Blvd S",
        id: "93",
        interactions: 24791
      },
      geometry: { type: "Point", coordinates: [-122.3911984, 37.7704074] }
    },
    {
      type: "Feature",
      properties: {
        name: "Sanchez St at 15th St",
        id: "95",
        interactions: 7977
      },
      geometry: { type: "Point", coordinates: [-122.4310597, 37.7662185] }
    },
    {
      type: "Feature",
      properties: {
        name: "Dolores St at 15th St",
        id: "96",
        interactions: 8105
      },
      geometry: { type: "Point", coordinates: [-122.4266136, 37.7662102] }
    },
    {
      type: "Feature",
      properties: {
        name: "14th St at Mission St",
        id: "97",
        interactions: 8985
      },
      geometry: { type: "Point", coordinates: [37.7682646, -122.4201102] }
    },
    {
      type: "Feature",
      properties: {
        name: "Valencia St at 16th St",
        id: "98",
        interactions: 14809
      },
      geometry: { type: "Point", coordinates: [37.765052, -122.4218661] }
    },
    {
      type: "Feature",
      properties: {
        name: "Folsom St at 15th St",
        id: "99",
        interactions: 7604
      },
      geometry: { type: "Point", coordinates: [37.7670373, -122.4154425] }
    },
    {
      type: "Feature",
      properties: {
        name: "Bryant St at 15th St",
        id: "100",
        interactions: 7909
      },
      geometry: { type: "Point", coordinates: [37.7671004, -122.410662] }
    },
    {
      type: "Feature",
      properties: {
        name: "San Bruno Ave at 16th St",
        id: "101",
        interactions: 6066
      },
      geometry: {
        type: "Point",
        coordinates: [37.76600774273675, -122.40567684173583]
      }
    },
    {
      type: "Feature",
      properties: { name: "Irwin St at 8th St", id: "102", interactions: 4683 },
      geometry: { type: "Point", coordinates: [37.7668828, -122.3995794] }
    },
    {
      type: "Feature",
      properties: { name: "4th St at 16th St", id: "104", interactions: 6542 },
      geometry: {
        type: "Point",
        coordinates: [37.76704457969368, -122.39083349704742]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "16th St at Prosper St",
        id: "105",
        interactions: 5161
      },
      geometry: { type: "Point", coordinates: [-122.4318042, 37.764285] }
    },
    {
      type: "Feature",
      properties: {
        name: "Sanchez St at 17th St",
        id: "106",
        interactions: 3928
      },
      geometry: { type: "Point", coordinates: [-122.4306746, 37.7632417] }
    },
    {
      type: "Feature",
      properties: {
        name: "17th St at Dolores St",
        id: "107",
        interactions: 6428
      },
      geometry: { type: "Point", coordinates: [-122.4264968, 37.7630152] }
    },
    {
      type: "Feature",
      properties: {
        name: "16th St Mission BART",
        id: "108",
        interactions: 7516
      },
      geometry: {
        type: "Point",
        coordinates: [37.76471008581914, -122.41995692253113]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "17th St at Valencia St",
        id: "109",
        interactions: 12662
      },
      geometry: { type: "Point", coordinates: [37.7633158, -122.4219039] }
    },
    {
      type: "Feature",
      properties: {
        name: "17th & Folsom Street Park (17th St at Folsom St)",
        id: "110",
        interactions: 6452
      },
      geometry: { type: "Point", coordinates: [37.7637085, -122.4152042] }
    },
    {
      type: "Feature",
      properties: {
        name: "Harrison St at 17th St",
        id: "112",
        interactions: 10174
      },
      geometry: { type: "Point", coordinates: [37.7638471, -122.4130036] }
    },
    {
      type: "Feature",
      properties: { name: "Franklin Square", id: "113", interactions: 4425 },
      geometry: { type: "Point", coordinates: [37.764555, -122.410345] }
    },
    {
      type: "Feature",
      properties: {
        name: "Rhode Island St at 17th St",
        id: "114",
        interactions: 14608
      },
      geometry: { type: "Point", coordinates: [37.7644783, -122.4025701] }
    },
    {
      type: "Feature",
      properties: { name: "Jackson Playground", id: "115", interactions: 8008 },
      geometry: { type: "Point", coordinates: [-122.3987734, 37.7650259] }
    },
    {
      type: "Feature",
      properties: {
        name: "Mississippi St at 17th St",
        id: "116",
        interactions: 8344
      },
      geometry: { type: "Point", coordinates: [37.7648022, -122.3947713] }
    },
    {
      type: "Feature",
      properties: {
        name: "Eureka Valley Recreation Center",
        id: "118",
        interactions: 4350
      },
      geometry: { type: "Point", coordinates: [-122.4369431, 37.7591769] }
    },
    {
      type: "Feature",
      properties: { name: "18th St at Noe St", id: "119", interactions: 7825 },
      geometry: { type: "Point", coordinates: [37.7610471, -122.4326417] }
    },
    {
      type: "Feature",
      properties: {
        name: "Mission Dolores Park",
        id: "120",
        interactions: 10750
      },
      geometry: { type: "Point", coordinates: [37.7614205, -122.4264353] }
    },
    {
      type: "Feature",
      properties: {
        name: "Mission Playground",
        id: "121",
        interactions: 12712
      },
      geometry: { type: "Point", coordinates: [-122.4213392, 37.7592103] }
    },
    {
      type: "Feature",
      properties: {
        name: "19th St at Mission St",
        id: "122",
        interactions: 7663
      },
      geometry: { type: "Point", coordinates: [-122.418892, 37.760299] }
    },
    {
      type: "Feature",
      properties: {
        name: "Folsom St at 19th St",
        id: "123",
        interactions: 8741
      },
      geometry: { type: "Point", coordinates: [37.7605936, -122.4148171] }
    },
    {
      type: "Feature",
      properties: {
        name: "19th St at Florida St",
        id: "124",
        interactions: 7596
      },
      geometry: { type: "Point", coordinates: [-122.410807, 37.7604469] }
    },
    {
      type: "Feature",
      properties: {
        name: "20th St at Bryant St",
        id: "125",
        interactions: 7718
      },
      geometry: { type: "Point", coordinates: [-122.409851, 37.7592005] }
    },
    {
      type: "Feature",
      properties: { name: "Esprit Park", id: "126", interactions: 16783 },
      geometry: { type: "Point", coordinates: [-122.3906477, 37.7616343] }
    },
    {
      type: "Feature",
      properties: {
        name: "Valencia St at 21st St",
        id: "127",
        interactions: 10275
      },
      geometry: { type: "Point", coordinates: [-122.421025, 37.7567083] }
    },
    {
      type: "Feature",
      properties: {
        name: "Harrison St at 20th St",
        id: "129",
        interactions: 9637
      },
      geometry: { type: "Point", coordinates: [37.758862, -122.412544] }
    },
    {
      type: "Feature",
      properties: {
        name: "22nd St Caltrain Station",
        id: "130",
        interactions: 10237
      },
      geometry: {
        type: "Point",
        coordinates: [-122.3920565843582, 37.75736899005735]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "24th St at Chattanooga St",
        id: "132",
        interactions: 4768
      },
      geometry: { type: "Point", coordinates: [-122.4266139, 37.7518194] }
    },
    {
      type: "Feature",
      properties: {
        name: "Valencia St at 22nd St",
        id: "133",
        interactions: 9483
      },
      geometry: { type: "Point", coordinates: [-122.4209752, 37.7552126] }
    },
    {
      type: "Feature",
      properties: {
        name: "Valencia St at 24th St",
        id: "134",
        interactions: 18206
      },
      geometry: { type: "Point", coordinates: [-122.4206278, 37.7524278] }
    },
    {
      type: "Feature",
      properties: {
        name: "Jersey St at Castro St",
        id: "137",
        interactions: 4907
      },
      geometry: { type: "Point", coordinates: [37.750506, -122.4339496] }
    },
    {
      type: "Feature",
      properties: {
        name: "Jersey St at Church St",
        id: "138",
        interactions: 3425
      },
      geometry: { type: "Point", coordinates: [-122.4274114, 37.7509004] }
    },
    {
      type: "Feature",
      properties: {
        name: "Garfield Square (25th St at Harrison St)",
        id: "139",
        interactions: 8711
      },
      geometry: { type: "Point", coordinates: [-122.4119009, 37.7510171] }
    },
    {
      type: "Feature",
      properties: {
        name: "Cesar Chavez St at Dolores St",
        id: "140",
        interactions: 1880
      },
      geometry: { type: "Point", coordinates: [-122.4249863, 37.7478584] }
    },
    {
      type: "Feature",
      properties: {
        name: "Valencia St at Cesar Chavez St",
        id: "141",
        interactions: 8557
      },
      geometry: { type: "Point", coordinates: [37.7479981, -122.4202187] }
    },
    {
      type: "Feature",
      properties: { name: "Precita Park", id: "144", interactions: 6306 },
      geometry: { type: "Point", coordinates: [-122.4114029, 37.7472996] }
    },
    {
      type: "Feature",
      properties: {
        name: "29th St at Church St",
        id: "145",
        interactions: 5626
      },
      geometry: { type: "Point", coordinates: [-122.4268059, 37.7436839] }
    },
    {
      type: "Feature",
      properties: {
        name: "30th St at San Jose Ave",
        id: "146",
        interactions: 3104
      },
      geometry: { type: "Point", coordinates: [37.7423139, -122.4231805] }
    },
    {
      type: "Feature",
      properties: {
        name: "29th St at Tiffany Ave",
        id: "147",
        interactions: 6891
      },
      geometry: { type: "Point", coordinates: [-122.4214722, 37.7440667] }
    },
    {
      type: "Feature",
      properties: {
        name: "Horton St at 40th St",
        id: "148",
        interactions: 2952
      },
      geometry: { type: "Point", coordinates: [37.8297046, -122.2876102] }
    },
    {
      type: "Feature",
      properties: {
        name: "Emeryville Town Hall",
        id: "149",
        interactions: 2063
      },
      geometry: { type: "Point", coordinates: [37.8312752, -122.2856333] }
    },
    {
      type: "Feature",
      properties: {
        name: "Adeline St at 40th St",
        id: "150",
        interactions: 2758
      },
      geometry: { type: "Point", coordinates: [-122.2782669, 37.8312769] }
    },
    {
      type: "Feature",
      properties: {
        name: "53rd St at Hollis St",
        id: "151",
        interactions: 896
      },
      geometry: { type: "Point", coordinates: [-122.2871801, 37.8361823] }
    },
    {
      type: "Feature",
      properties: {
        name: "47th St at San Pablo Ave",
        id: "152",
        interactions: 1890
      },
      geometry: {
        type: "Point",
        coordinates: [-122.28105068206787, 37.83563220458518]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "59th St at Horton St",
        id: "153",
        interactions: 2373
      },
      geometry: { type: "Point", coordinates: [37.8409452, -122.2913604] }
    },
    {
      type: "Feature",
      properties: {
        name: "Doyle St at 59th St",
        id: "154",
        interactions: 1801
      },
      geometry: { type: "Point", coordinates: [-122.2880451, 37.8419238] }
    },
    {
      type: "Feature",
      properties: {
        name: "Emeryville Public Market",
        id: "155",
        interactions: 2370
      },
      geometry: {
        type: "Point",
        coordinates: [-122.29352831840515, 37.84052116694969]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Stanford Ave at Hollis St",
        id: "156",
        interactions: 1821
      },
      geometry: { type: "Point", coordinates: [37.8384435, -122.2886647] }
    },
    {
      type: "Feature",
      properties: {
        name: "65th St at Hollis St",
        id: "157",
        interactions: 3910
      },
      geometry: { type: "Point", coordinates: [-122.2913761, 37.8467842] }
    },
    {
      type: "Feature",
      properties: {
        name: "Shattuck Ave at Telegraph Ave",
        id: "158",
        interactions: 3642
      },
      geometry: { type: "Point", coordinates: [37.8332786, -122.2634901] }
    },
    {
      type: "Feature",
      properties: {
        name: "24th St at Market St",
        id: "159",
        interactions: 2442
      },
      geometry: { type: "Point", coordinates: [-122.2782444, 37.8160598] }
    },
    {
      type: "Feature",
      properties: {
        name: "West Oakland BART Station",
        id: "160",
        interactions: 12108
      },
      geometry: { type: "Point", coordinates: [-122.2948365, 37.8053183] }
    },
    {
      type: "Feature",
      properties: {
        name: "Franklin St at 9th St",
        id: "162",
        interactions: 3787
      },
      geometry: { type: "Point", coordinates: [37.8005161, -122.2720799] }
    },
    {
      type: "Feature",
      properties: {
        name: "Lake Merritt BART Station",
        id: "163",
        interactions: 12434
      },
      geometry: { type: "Point", coordinates: [-122.2653199, 37.7973195] }
    },
    {
      type: "Feature",
      properties: {
        name: "Isabella St at San Pablo Ave",
        id: "164",
        interactions: 1367
      },
      geometry: {
        type: "Point",
        coordinates: [37.814988230424156, -122.27484405040741]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "College Ave at Alcatraz Ave",
        id: "166",
        interactions: 4442
      },
      geometry: { type: "Point", coordinates: [-122.2525233, 37.8513755] }
    },
    {
      type: "Feature",
      properties: {
        name: "College Ave at Harwood Ave",
        id: "167",
        interactions: 2860
      },
      geometry: { type: "Point", coordinates: [-122.2521599, 37.848152] }
    },
    {
      type: "Feature",
      properties: {
        name: "Alcatraz Ave at Shattuck Ave",
        id: "168",
        interactions: 1433
      },
      geometry: {
        type: "Point",
        coordinates: [37.849594967776646, -122.26556897163393]
      }
    },
    {
      type: "Feature",
      properties: { name: "Bushrod Park", id: "169", interactions: 1504 },
      geometry: { type: "Point", coordinates: [-122.2653043, 37.8465156] }
    },
    {
      type: "Feature",
      properties: {
        name: "Telegraph Ave at 58th St",
        id: "170",
        interactions: 1367
      },
      geometry: { type: "Point", coordinates: [-122.261351, 37.8444927] }
    },
    {
      type: "Feature",
      properties: {
        name: "Rockridge BART Station",
        id: "171",
        interactions: 9589
      },
      geometry: {
        type: "Point",
        coordinates: [37.84427875399067, -122.251900434494]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "College Ave at Taft Ave",
        id: "172",
        interactions: 1679
      },
      geometry: { type: "Point", coordinates: [37.8417999, -122.2515349] }
    },
    {
      type: "Feature",
      properties: {
        name: "Shattuck Ave at 55th Ave",
        id: "173",
        interactions: 2679
      },
      geometry: { type: "Point", coordinates: [-122.2644881, 37.8403643] }
    },
    {
      type: "Feature",
      properties: {
        name: "Shattuck Ave at 51st St",
        id: "174",
        interactions: 1430
      },
      geometry: { type: "Point", coordinates: [-122.2640037, 37.8368013] }
    },
    {
      type: "Feature",
      properties: {
        name: "49th St at Telegraph Ave",
        id: "175",
        interactions: 4356
      },
      geometry: { type: "Point", coordinates: [37.8359455, -122.2623663] }
    },
    {
      type: "Feature",
      properties: {
        name: "MacArthur BART Station",
        id: "176",
        interactions: 20096
      },
      geometry: {
        type: "Point",
        coordinates: [37.82840997305853, -122.26631462574005]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "MacArthur Blvd at Telegraph Ave",
        id: "177",
        interactions: 2033
      },
      geometry: { type: "Point", coordinates: [37.8262863, -122.2651002] }
    },
    {
      type: "Feature",
      properties: {
        name: "Broadway at 30th St",
        id: "178",
        interactions: 5467
      },
      geometry: { type: "Point", coordinates: [37.8193814, -122.2619284] }
    },
    {
      type: "Feature",
      properties: {
        name: "Telegraph Ave at 27th St",
        id: "179",
        interactions: 5933
      },
      geometry: {
        type: "Point",
        coordinates: [37.816073115011406, -122.26788640022278]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Telegraph Ave at 23rd St",
        id: "180",
        interactions: 6487
      },
      geometry: { type: "Point", coordinates: [-122.2687726, 37.8126783] }
    },
    {
      type: "Feature",
      properties: {
        name: "Grand Ave at Webster St",
        id: "181",
        interactions: 11358
      },
      geometry: { type: "Point", coordinates: [37.8113768, -122.2651925] }
    },
    {
      type: "Feature",
      properties: {
        name: "19th Street BART Station",
        id: "182",
        interactions: 24555
      },
      geometry: { type: "Point", coordinates: [37.8090126, -122.2682473] }
    },
    {
      type: "Feature",
      properties: {
        name: "Telegraph Ave at 19th St",
        id: "183",
        interactions: 8912
      },
      geometry: { type: "Point", coordinates: [-122.2699271, 37.8087021] }
    },
    {
      type: "Feature",
      properties: {
        name: "Lakeside Dr at 14th St",
        id: "186",
        interactions: 8246
      },
      geometry: { type: "Point", coordinates: [-122.2626418, 37.8013189] }
    },
    {
      type: "Feature",
      properties: { name: "Jack London Square", id: "187", interactions: 2911 },
      geometry: { type: "Point", coordinates: [37.796248, -122.279352] }
    },
    {
      type: "Feature",
      properties: {
        name: "Dover St at 57th St",
        id: "188",
        interactions: 2646
      },
      geometry: { type: "Point", coordinates: [-122.267738, 37.8426295] }
    },
    {
      type: "Feature",
      properties: {
        name: "Genoa St at 55th St",
        id: "189",
        interactions: 4764
      },
      geometry: { type: "Point", coordinates: [-122.2717561, 37.8396488] }
    },
    {
      type: "Feature",
      properties: { name: "West St at 40th St", id: "190", interactions: 2146 },
      geometry: { type: "Point", coordinates: [-122.2709501, 37.8302232] }
    },
    {
      type: "Feature",
      properties: {
        name: "Market St at 40th St",
        id: "191",
        interactions: 1252
      },
      geometry: { type: "Point", coordinates: [-122.2739367, 37.8305452] }
    },
    {
      type: "Feature",
      properties: { name: "37th St at West St", id: "192", interactions: 1373 },
      geometry: { type: "Point", coordinates: [-122.2717955, 37.8266962] }
    },
    {
      type: "Feature",
      properties: {
        name: "Grand Ave at Santa Clara Ave",
        id: "193",
        interactions: 5960
      },
      geometry: { type: "Point", coordinates: [-122.2472152, 37.8127441] }
    },
    {
      type: "Feature",
      properties: {
        name: "Lakeshore Ave at Trestle Glen Rd",
        id: "194",
        interactions: 5050
      },
      geometry: { type: "Point", coordinates: [-122.2432677, 37.8110807] }
    },
    {
      type: "Feature",
      properties: {
        name: "Bay Pl at Vernon St",
        id: "195",
        interactions: 11952
      },
      geometry: {
        type: "Point",
        coordinates: [-122.26077854633331, 37.81231409135146]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Grand Ave at Perkins St",
        id: "196",
        interactions: 13533
      },
      geometry: {
        type: "Point",
        coordinates: [-122.25646018981932, 37.80889393398715]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "El Embarcadero at Grand Ave",
        id: "197",
        interactions: 13719
      },
      geometry: { type: "Point", coordinates: [37.8088479, -122.2496799] }
    },
    {
      type: "Feature",
      properties: { name: "Snow Park", id: "198", interactions: 4118 },
      geometry: {
        type: "Point",
        coordinates: [37.80781318217903, -122.26449608802795]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "2nd Ave at E 18th St",
        id: "200",
        interactions: 11628
      },
      geometry: {
        type: "Point",
        coordinates: [-122.25381016731262, 37.800213566969795]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "10th St at Fallon St",
        id: "201",
        interactions: 4967
      },
      geometry: { type: "Point", coordinates: [37.7976728, -122.2629973] }
    },
    {
      type: "Feature",
      properties: {
        name: "Washington St at 8th St",
        id: "202",
        interactions: 4444
      },
      geometry: { type: "Point", coordinates: [37.8007544, -122.2748943] }
    },
    {
      type: "Feature",
      properties: {
        name: "Webster St at 2nd St",
        id: "203",
        interactions: 5644
      },
      geometry: {
        type: "Point",
        coordinates: [37.795194764385954, -122.27396965026855]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "55th St at Telegraph Ave",
        id: "204",
        interactions: 2091
      },
      geometry: { type: "Point", coordinates: [-122.2618225, 37.8401858] }
    },
    {
      type: "Feature",
      properties: {
        name: "Shafter Ave at Cavour St",
        id: "205",
        interactions: 2426
      },
      geometry: { type: "Point", coordinates: [-122.2572427, 37.8379469] }
    },
    {
      type: "Feature",
      properties: {
        name: "College Ave at Bryant Ave",
        id: "206",
        interactions: 1240
      },
      geometry: { type: "Point", coordinates: [-122.2512714, 37.8381269] }
    },
    {
      type: "Feature",
      properties: {
        name: "Broadway at Coronado Ave",
        id: "207",
        interactions: 1497
      },
      geometry: { type: "Point", coordinates: [37.8357883, -122.2516207] }
    },
    {
      type: "Feature",
      properties: {
        name: "S. 4th St at San Carlos St",
        id: "208",
        interactions: 2592
      },
      geometry: {
        type: "Point",
        coordinates: [37.33283577967246, -121.88391208648682]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "45th St at MLK Jr Way",
        id: "209",
        interactions: 1048
      },
      geometry: { type: "Point", coordinates: [-122.2674183, 37.8335577] }
    },
    {
      type: "Feature",
      properties: { name: "45th St at Manila", id: "210", interactions: 4115 },
      geometry: {
        type: "Point",
        coordinates: [-122.25622415542603, 37.8332935222321]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Broadway at 40th St",
        id: "211",
        interactions: 6256
      },
      geometry: { type: "Point", coordinates: [-122.2567156, 37.8277573] }
    },
    {
      type: "Feature",
      properties: { name: "Mosswood Park", id: "212", interactions: 5281 },
      geometry: { type: "Point", coordinates: [-122.2604787, 37.8249311] }
    },
    {
      type: "Feature",
      properties: {
        name: "32nd St at Adeline St",
        id: "213",
        interactions: 2546
      },
      geometry: { type: "Point", coordinates: [-122.2811926, 37.8238474] }
    },
    {
      type: "Feature",
      properties: {
        name: "Market St at Brockhurst St",
        id: "214",
        interactions: 3025
      },
      geometry: { type: "Point", coordinates: [-122.2757325, 37.8233214] }
    },
    {
      type: "Feature",
      properties: {
        name: "34th St at Telegraph Ave",
        id: "215",
        interactions: 2671
      },
      geometry: { type: "Point", coordinates: [-122.2663179, 37.8225475] }
    },
    {
      type: "Feature",
      properties: {
        name: "San Pablo Ave at 27th St",
        id: "216",
        interactions: 1115
      },
      geometry: { type: "Point", coordinates: [-122.2756976, 37.8178269] }
    },
    {
      type: "Feature",
      properties: {
        name: "27th St at MLK Jr Way",
        id: "217",
        interactions: 634
      },
      geometry: { type: "Point", coordinates: [37.8170154, -122.2717615] }
    },
    {
      type: "Feature",
      properties: { name: "DeFremery Park", id: "218", interactions: 2538 },
      geometry: { type: "Point", coordinates: [-122.2851712, 37.8123315] }
    },
    {
      type: "Feature",
      properties: {
        name: "Marston Campbell Park",
        id: "219",
        interactions: 1219
      },
      geometry: { type: "Point", coordinates: [-122.2801923, 37.8098236] }
    },
    {
      type: "Feature",
      properties: {
        name: "San Pablo Ave at MLK Jr Way",
        id: "220",
        interactions: 1952
      },
      geometry: { type: "Point", coordinates: [37.8113514, -122.2734217] }
    },
    {
      type: "Feature",
      properties: { name: "12th St at 6th Ave", id: "221", interactions: 1147 },
      geometry: { type: "Point", coordinates: [37.7943532, -122.2538745] }
    },
    {
      type: "Feature",
      properties: {
        name: "10th Ave at E 15th St",
        id: "222",
        interactions: 960
      },
      geometry: { type: "Point", coordinates: [-122.2487796, 37.7927143] }
    },
    {
      type: "Feature",
      properties: {
        name: "16th St Mission BART Station 2",
        id: "223",
        interactions: 13401
      },
      geometry: {
        type: "Point",
        coordinates: [37.7647652154977, -122.42009103298186]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "21st Ave at International Blvd",
        id: "224",
        interactions: 193
      },
      geometry: { type: "Point", coordinates: [-122.2389151, 37.7851566] }
    },
    {
      type: "Feature",
      properties: {
        name: "23rd Ave at Foothill Blvd",
        id: "225",
        interactions: 589
      },
      geometry: { type: "Point", coordinates: [-122.2343822, 37.7851915] }
    },
    {
      type: "Feature",
      properties: {
        name: "26th Ave at International Blvd",
        id: "226",
        interactions: 319
      },
      geometry: { type: "Point", coordinates: [37.781123, -122.2329915] }
    },
    {
      type: "Feature",
      properties: {
        name: "Foothill Blvd at Fruitvale Ave",
        id: "227",
        interactions: 966
      },
      geometry: { type: "Point", coordinates: [37.7837569, -122.2226033] }
    },
    {
      type: "Feature",
      properties: {
        name: "Foothill Blvd at Harrington Ave",
        id: "228",
        interactions: 389
      },
      geometry: { type: "Point", coordinates: [37.77993, -122.2177284] }
    },
    {
      type: "Feature",
      properties: {
        name: "Foothill Blvd at 42nd Ave",
        id: "229",
        interactions: 217
      },
      geometry: { type: "Point", coordinates: [37.7757452, -122.2130372] }
    },
    {
      type: "Feature",
      properties: {
        name: "14th St at Mandela Pkwy",
        id: "230",
        interactions: 3884
      },
      geometry: { type: "Point", coordinates: [37.8107432, -122.2914153] }
    },
    {
      type: "Feature",
      properties: {
        name: "14th St at Filbert St",
        id: "231",
        interactions: 1323
      },
      geometry: {
        type: "Point",
        coordinates: [-122.28328227996825, 37.80874983465997]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "MLK Jr Way at 14th St",
        id: "232",
        interactions: 1827
      },
      geometry: { type: "Point", coordinates: [-122.2760402, 37.8061628] }
    },
    {
      type: "Feature",
      properties: { name: "12th St at 4th Ave", id: "233", interactions: 3538 },
      geometry: { type: "Point", coordinates: [-122.2555549, 37.7958125] }
    },
    {
      type: "Feature",
      properties: {
        name: "Fruitvale Ave at International Blvd",
        id: "234",
        interactions: 278
      },
      geometry: { type: "Point", coordinates: [37.7776818, -122.225771] }
    },
    {
      type: "Feature",
      properties: {
        name: "Union St at 10th St",
        id: "235",
        interactions: 2069
      },
      geometry: { type: "Point", coordinates: [37.8072393, -122.2893702] }
    },
    {
      type: "Feature",
      properties: { name: "Market St at 8th St", id: "236", interactions: 897 },
      geometry: { type: "Point", coordinates: [37.8036865, -122.282497] }
    },
    {
      type: "Feature",
      properties: {
        name: "Fruitvale BART Station",
        id: "237",
        interactions: 1632
      },
      geometry: { type: "Point", coordinates: [37.7752321, -122.2244982] }
    },
    {
      type: "Feature",
      properties: {
        name: "MLK Jr Way at University Ave",
        id: "238",
        interactions: 5320
      },
      geometry: { type: "Point", coordinates: [37.8717192, -122.2730677] }
    },
    {
      type: "Feature",
      properties: {
        name: "Bancroft Way at Telegraph Ave",
        id: "239",
        interactions: 12630
      },
      geometry: { type: "Point", coordinates: [37.8688126, -122.258764] }
    },
    {
      type: "Feature",
      properties: {
        name: "Haste St at Telegraph Ave",
        id: "240",
        interactions: 6827
      },
      geometry: { type: "Point", coordinates: [37.8660431, -122.2588044] }
    },
    {
      type: "Feature",
      properties: {
        name: "Ashby BART Station",
        id: "241",
        interactions: 10097
      },
      geometry: { type: "Point", coordinates: [37.8524766, -122.2702132] }
    },
    {
      type: "Feature",
      properties: {
        name: "Milvia St at Derby St",
        id: "242",
        interactions: 3033
      },
      geometry: {
        type: "Point",
        coordinates: [37.86012459911685, -122.2693844139576]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Bancroft Way at College Ave",
        id: "243",
        interactions: 11207
      },
      geometry: { type: "Point", coordinates: [37.8693603, -122.2543374] }
    },
    {
      type: "Feature",
      properties: {
        name: "Shattuck Ave at Hearst Ave",
        id: "244",
        interactions: 3004
      },
      geometry: { type: "Point", coordinates: [-122.2686176, 37.8737917] }
    },
    {
      type: "Feature",
      properties: {
        name: "Downtown Berkeley BART",
        id: "245",
        interactions: 13399
      },
      geometry: { type: "Point", coordinates: [37.8703477, -122.2677637] }
    },
    {
      type: "Feature",
      properties: {
        name: "Berkeley Civic Center",
        id: "246",
        interactions: 6680
      },
      geometry: { type: "Point", coordinates: [37.8690599, -122.270556] }
    },
    {
      type: "Feature",
      properties: {
        name: "Fulton St at Bancroft Way",
        id: "247",
        interactions: 4796
      },
      geometry: { type: "Point", coordinates: [37.8677892, -122.2658964] }
    },
    {
      type: "Feature",
      properties: {
        name: "Telegraph Ave at Ashby Ave",
        id: "248",
        interactions: 4940
      },
      geometry: { type: "Point", coordinates: [-122.2597949, 37.8559558] }
    },
    {
      type: "Feature",
      properties: {
        name: "Russell St at College Ave",
        id: "249",
        interactions: 4388
      },
      geometry: { type: "Point", coordinates: [37.8584732, -122.2532529] }
    },
    {
      type: "Feature",
      properties: {
        name: "North Berkeley BART Station",
        id: "250",
        interactions: 4058
      },
      geometry: { type: "Point", coordinates: [37.8740141, -122.283019] }
    },
    {
      type: "Feature",
      properties: {
        name: "California St at University Ave",
        id: "251",
        interactions: 3100
      },
      geometry: {
        type: "Point",
        coordinates: [37.87055532905745, -122.27972030639648]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Channing Way at Shattuck Ave",
        id: "252",
        interactions: 3424
      },
      geometry: { type: "Point", coordinates: [37.8658466, -122.2674431] }
    },
    {
      type: "Feature",
      properties: {
        name: "Haste St at College Ave",
        id: "253",
        interactions: 2636
      },
      geometry: {
        type: "Point",
        coordinates: [37.86641794050319, -122.25379943847655]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Vine St at Shattuck Ave",
        id: "254",
        interactions: 3970
      },
      geometry: {
        type: "Point",
        coordinates: [37.88022244590679, -122.26959228515624]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Virginia St at Shattuck Ave",
        id: "255",
        interactions: 1335
      },
      geometry: {
        type: "Point",
        coordinates: [37.876572549106854, -122.26952791213989]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Hearst Ave at Euclid Ave",
        id: "256",
        interactions: 4913
      },
      geometry: {
        type: "Point",
        coordinates: [37.875111692864444, -122.26055324077606]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Fifth St at Delaware St",
        id: "257",
        interactions: 427
      },
      geometry: {
        type: "Point",
        coordinates: [37.870407115465376, -122.29967594146727]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "University Ave at Oxford St",
        id: "258",
        interactions: 4810
      },
      geometry: { type: "Point", coordinates: [37.8723555, -122.2664467] }
    },
    {
      type: "Feature",
      properties: {
        name: "Addison St at Fourth St",
        id: "259",
        interactions: 5329
      },
      geometry: { type: "Point", coordinates: [-122.2993708, 37.866249] }
    },
    {
      type: "Feature",
      properties: {
        name: "West St at University Ave",
        id: "262",
        interactions: 297
      },
      geometry: {
        type: "Point",
        coordinates: [-122.28653311729431, 37.869966707604036]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Channing Way at San Pablo Ave",
        id: "263",
        interactions: 2539
      },
      geometry: { type: "Point", coordinates: [37.8628271, -122.2902305] }
    },
    {
      type: "Feature",
      properties: {
        name: "Ninth St at Parker St",
        id: "265",
        interactions: 2400
      },
      geometry: { type: "Point", coordinates: [-122.2912095, 37.8588682] }
    },
    {
      type: "Feature",
      properties: {
        name: "Parker St at Fulton St",
        id: "266",
        interactions: 7973
      },
      geometry: { type: "Point", coordinates: [-122.2647911, 37.8624644] }
    },
    {
      type: "Feature",
      properties: {
        name: "Derby St at College Ave",
        id: "267",
        interactions: 5123
      },
      geometry: { type: "Point", coordinates: [-122.2535687, 37.8618037] }
    },
    {
      type: "Feature",
      properties: {
        name: "Ellsworth St at Russell St",
        id: "268",
        interactions: 2202
      },
      geometry: {
        type: "Point",
        coordinates: [37.85749021457153, -122.26157784461977]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Telegraph Ave at Carleton St",
        id: "269",
        interactions: 2689
      },
      geometry: { type: "Point", coordinates: [-122.258801, 37.8623199] }
    },
    {
      type: "Feature",
      properties: {
        name: "Ninth St at Heinz Ave",
        id: "270",
        interactions: 3385
      },
      geometry: { type: "Point", coordinates: [-122.2894154, 37.8534894] }
    },
    {
      type: "Feature",
      properties: { name: "San Pablo Park", id: "271", interactions: 1184 },
      geometry: {
        type: "Point",
        coordinates: [37.85578332030199, -122.28312671184538]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Woolsey St at Sacramento St",
        id: "272",
        interactions: 3108
      },
      geometry: {
        type: "Point",
        coordinates: [-122.27817535400389, 37.850577684047856]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Fulton St at Ashby Ave",
        id: "273",
        interactions: 1607
      },
      geometry: {
        type: "Point",
        coordinates: [37.855573661828785, -122.26356536149979]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Oregon St at Adeline St",
        id: "274",
        interactions: 4932
      },
      geometry: { type: "Point", coordinates: [-122.2675583, 37.8575672] }
    },
    {
      type: "Feature",
      properties: {
        name: "Julian St at 6th St",
        id: "275",
        interactions: 1547
      },
      geometry: { type: "Point", coordinates: [-121.8888891, 37.3429973] }
    },
    {
      type: "Feature",
      properties: {
        name: "Julian St at The Alameda",
        id: "276",
        interactions: 3949
      },
      geometry: { type: "Point", coordinates: [37.3322326, -121.9125165] }
    },
    {
      type: "Feature",
      properties: {
        name: "Morrison Ave at Julian St",
        id: "277",
        interactions: 1701
      },
      geometry: { type: "Point", coordinates: [-121.9085859, 37.3336577] }
    },
    {
      type: "Feature",
      properties: {
        name: "The Alameda at Bush St",
        id: "278",
        interactions: 3708
      },
      geometry: { type: "Point", coordinates: [-121.9048882, 37.3319323] }
    },
    {
      type: "Feature",
      properties: {
        name: "Santa Clara St at 7th St",
        id: "279",
        interactions: 1996
      },
      geometry: { type: "Point", coordinates: [37.3391456, -121.8841054] }
    },
    {
      type: "Feature",
      properties: {
        name: "San Fernando at 7th St",
        id: "280",
        interactions: 6458
      },
      geometry: { type: "Point", coordinates: [37.337246, -121.8830739] }
    },
    {
      type: "Feature",
      properties: {
        name: "9th St at San Fernando",
        id: "281",
        interactions: 2249
      },
      geometry: { type: "Point", coordinates: [37.3383952, -121.8807965] }
    },
    {
      type: "Feature",
      properties: {
        name: "Market St at Park St",
        id: "282",
        interactions: 1504
      },
      geometry: {
        type: "Point",
        coordinates: [37.332426301252056, -121.89034938812256]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Delmas Ave and San Fernando St",
        id: "283",
        interactions: 647
      },
      geometry: { type: "Point", coordinates: [-121.8977018, 37.3302641] }
    },
    {
      type: "Feature",
      properties: {
        name: "Yerba Buena Center for the Arts (Howard St at 3rd St)",
        id: "284",
        interactions: 15914
      },
      geometry: {
        type: "Point",
        coordinates: [37.78487208436062, -122.40087568759917]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Webster St at O'Farrell St",
        id: "285",
        interactions: 8547
      },
      geometry: {
        type: "Point",
        coordinates: [-122.43115782737732, 37.78352083526095]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "San Carlos St at 11th St",
        id: "286",
        interactions: 2275
      },
      geometry: { type: "Point", coordinates: [-121.8766132, 37.3364659] }
    },
    {
      type: "Feature",
      properties: {
        name: "Almaden Blvd at Balbach St",
        id: "287",
        interactions: 476
      },
      geometry: { type: "Point", coordinates: [37.32673, -121.8892731] }
    },
    {
      type: "Feature",
      properties: {
        name: "Mission St at 1st St",
        id: "288",
        interactions: 827
      },
      geometry: { type: "Point", coordinates: [37.3509643, -121.9020161] }
    },
    {
      type: "Feature",
      properties: {
        name: "5th St at Taylor St",
        id: "289",
        interactions: 1205
      },
      geometry: { type: "Point", coordinates: [-121.8959209, 37.3510173] }
    },
    {
      type: "Feature",
      properties: { name: "George St at 1st St", id: "290", interactions: 850 },
      geometry: { type: "Point", coordinates: [-121.899464, 37.3477319] }
    },
    {
      type: "Feature",
      properties: {
        name: "Autumn Parkway at Coleman Ave",
        id: "291",
        interactions: 1994
      },
      geometry: { type: "Point", coordinates: [37.3413348, -121.9031829] }
    },
    {
      type: "Feature",
      properties: { name: "Empire St at 1st St", id: "292", interactions: 810 },
      geometry: { type: "Point", coordinates: [37.3448821, -121.8969655] }
    },
    {
      type: "Feature",
      properties: {
        name: "W St John St at Guadalupe River Trail",
        id: "293",
        interactions: 353
      },
      geometry: { type: "Point", coordinates: [37.3353879, -121.8979205] }
    },
    {
      type: "Feature",
      properties: {
        name: "Pierce Ave at Market St",
        id: "294",
        interactions: 1950
      },
      geometry: { type: "Point", coordinates: [-121.884559, 37.327581] }
    },
    {
      type: "Feature",
      properties: {
        name: "William St at 10th St",
        id: "295",
        interactions: 1926
      },
      geometry: { type: "Point", coordinates: [37.3327938, -121.8759263] }
    },
    {
      type: "Feature",
      properties: {
        name: "5th St at Virginia St",
        id: "296",
        interactions: 6506
      },
      geometry: { type: "Point", coordinates: [-121.87712, 37.3259984] }
    },
    {
      type: "Feature",
      properties: {
        name: "Locust St at Grant St",
        id: "297",
        interactions: 743
      },
      geometry: { type: "Point", coordinates: [-121.8879312, 37.3229796] }
    },
    {
      type: "Feature",
      properties: { name: "Oak St at 1st St", id: "298", interactions: 242 },
      geometry: {
        type: "Point",
        coordinates: [-121.88109040260315, 37.322124625448566]
      }
    },
    {
      type: "Feature",
      properties: { name: "Bestor Art Park", id: "299", interactions: 576 },
      geometry: { type: "Point", coordinates: [37.3236779, -121.8741186] }
    },
    {
      type: "Feature",
      properties: {
        name: "Palm St at Willow St",
        id: "300",
        interactions: 260
      },
      geometry: { type: "Point", coordinates: [-121.884995, 37.3172979] }
    },
    {
      type: "Feature",
      properties: {
        name: "Willow St at Vine St",
        id: "301",
        interactions: 106
      },
      geometry: { type: "Point", coordinates: [37.3184498, -121.8831724] }
    },
    {
      type: "Feature",
      properties: { name: "Tamien Station", id: "302", interactions: 317 },
      geometry: {
        type: "Point",
        coordinates: [-121.88294112682343, 37.312854042932614]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "San Pedro St at Hedding St",
        id: "303",
        interactions: 393
      },
      geometry: { type: "Point", coordinates: [-121.905733, 37.352601] }
    },
    {
      type: "Feature",
      properties: {
        name: "Jackson St at 5th St",
        id: "304",
        interactions: 1942
      },
      geometry: {
        type: "Point",
        coordinates: [37.3487586867448, -121.89479783177376]
      }
    },
    {
      type: "Feature",
      properties: { name: "Ryland Park", id: "305", interactions: 6109 },
      geometry: { type: "Point", coordinates: [37.342725, -121.895617] }
    },
    {
      type: "Feature",
      properties: { name: "Saint James Park", id: "306", interactions: 1341 },
      geometry: { type: "Point", coordinates: [37.339301, -121.889937] }
    },
    {
      type: "Feature",
      properties: { name: "SAP Center", id: "307", interactions: 1156 },
      geometry: { type: "Point", coordinates: [-121.900084, 37.332692] }
    },
    {
      type: "Feature",
      properties: { name: "San Pedro Square", id: "308", interactions: 4307 },
      geometry: { type: "Point", coordinates: [37.336802, -121.8940901] }
    },
    {
      type: "Feature",
      properties: { name: "San Jose City Hall", id: "309", interactions: 2987 },
      geometry: { type: "Point", coordinates: [-121.886995, 37.337391] }
    },
    {
      type: "Feature",
      properties: {
        name: "San Fernando St at 4th St",
        id: "310",
        interactions: 8187
      },
      geometry: { type: "Point", coordinates: [-121.88566, 37.335885] }
    },
    {
      type: "Feature",
      properties: {
        name: "Paseo De San Antonio at 2nd St",
        id: "311",
        interactions: 4372
      },
      geometry: { type: "Point", coordinates: [37.333798, -121.886943] }
    },
    {
      type: "Feature",
      properties: {
        name: "San Jose Diridon Station",
        id: "312",
        interactions: 8142
      },
      geometry: { type: "Point", coordinates: [37.329732, -121.901782] }
    },
    {
      type: "Feature",
      properties: {
        name: "Almaden Blvd at San Fernando St",
        id: "313",
        interactions: 2292
      },
      geometry: { type: "Point", coordinates: [37.331415, -121.8932] }
    },
    {
      type: "Feature",
      properties: {
        name: "Santa Clara St at Almaden Blvd",
        id: "314",
        interactions: 2216
      },
      geometry: { type: "Point", coordinates: [37.333988, -121.894902] }
    },
    {
      type: "Feature",
      properties: {
        name: "Market St at 45th St",
        id: "315",
        interactions: 1313
      },
      geometry: { type: "Point", coordinates: [-122.272968, 37.834174] }
    },
    {
      type: "Feature",
      properties: {
        name: "San Salvador St at 1st St",
        id: "316",
        interactions: 2223
      },
      geometry: { type: "Point", coordinates: [-121.885831, 37.330165] }
    },
    {
      type: "Feature",
      properties: {
        name: "San Salvador St at 9th St",
        id: "317",
        interactions: 4879
      },
      geometry: { type: "Point", coordinates: [-121.877349, 37.333955] }
    },
    {
      type: "Feature",
      properties: {
        name: "San Carlos St at Market St",
        id: "318",
        interactions: 1551
      },
      geometry: { type: "Point", coordinates: [37.330698, -121.888979] }
    },
    {
      type: "Feature",
      properties: { name: "5th at Folsom", id: "321", interactions: 13800 },
      geometry: {
        type: "Point",
        coordinates: [37.78014570345598, -122.40307085237873]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Broadway at Kearny",
        id: "323",
        interactions: 13115
      },
      geometry: {
        type: "Point",
        coordinates: [37.79801364395978, -122.40595042705534]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Union Square (Powell St at Post St)",
        id: "324",
        interactions: 15395
      },
      geometry: {
        type: "Point",
        coordinates: [37.788299978150825, -122.40853071212767]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "5th St at San Salvador St",
        id: "327",
        interactions: 2526
      },
      geometry: {
        type: "Point",
        coordinates: [37.33203868095132, -121.8817663192749]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Potrero Ave and Mariposa St",
        id: "336",
        interactions: 3058
      },
      geometry: {
        type: "Point",
        coordinates: [-122.4073773622513, 37.76328094058097]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Webster St at 19th St",
        id: "337",
        interactions: 3744
      },
      geometry: {
        type: "Point",
        coordinates: [37.80696976095594, -122.26658821105957]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "13th St at Franklin St",
        id: "338",
        interactions: 3503
      },
      geometry: {
        type: "Point",
        coordinates: [37.80318908113163, -122.27057933807373]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Jackson St at 11th St",
        id: "339",
        interactions: 2578
      },
      geometry: {
        type: "Point",
        coordinates: [37.80000163118878, -122.26643800735472]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Harmon St at Adeline St",
        id: "340",
        interactions: 1468
      },
      geometry: { type: "Point", coordinates: [-122.270582, 37.849735] }
    },
    {
      type: "Feature",
      properties: {
        name: "Fountain Alley at S 2nd St",
        id: "341",
        interactions: 3318
      },
      geometry: {
        type: "Point",
        coordinates: [-121.88927650451659, 37.33618830029063]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Colin P Kelly Jr St at Townsend St (Temporary Site)",
        id: "342",
        interactions: 5349
      },
      geometry: {
        type: "Point",
        coordinates: [-122.3898410797119, 37.781382819628725]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Bryant St at 2nd St",
        id: "343",
        interactions: 10217
      },
      geometry: {
        type: "Point",
        coordinates: [37.783171989315306, -122.39357203245163]
      }
    },
    {
      type: "Feature",
      properties: { name: "16th St Depot", id: "344", interactions: 199 },
      geometry: { type: "Point", coordinates: [37.766349, -122.396289] }
    },
    {
      type: "Feature",
      properties: {
        name: "Hubbell St at 16th St",
        id: "345",
        interactions: 4894
      },
      geometry: {
        type: "Point",
        coordinates: [37.76647421515012, -122.39829540252686]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "23rd St and San Bruno Ave",
        id: "347",
        interactions: 861
      },
      geometry: {
        type: "Point",
        coordinates: [-122.40436390042304, 37.75443563479177]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Howard St at Mary St",
        id: "349",
        interactions: 7218
      },
      geometry: {
        type: "Point",
        coordinates: [37.78100971717512, -122.40566611289978]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "8th St at Brannan St",
        id: "350",
        interactions: 8074
      },
      geometry: {
        type: "Point",
        coordinates: [-122.40578681230545, 37.771431362921085]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "10th St at University Ave",
        id: "351",
        interactions: 545
      },
      geometry: {
        type: "Point",
        coordinates: [-122.29339957237242, 37.86906047545393]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "23rd St at Tennessee St",
        id: "355",
        interactions: 2366
      },
      geometry: {
        type: "Point",
        coordinates: [37.755367132158526, -122.38879501819609]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Valencia St at Clinton Park",
        id: "356",
        interactions: 2900
      },
      geometry: {
        type: "Point",
        coordinates: [-122.42228507995605, 37.769188178104585]
      }
    },
    {
      type: "Feature",
      properties: { name: "2nd St at Julian St", id: "357", interactions: 734 },
      geometry: {
        type: "Point",
        coordinates: [-121.89284384250641, 37.34113203547954]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Salesforce Transit Center (Natoma St at 2nd St)",
        id: "363",
        interactions: 1642
      },
      geometry: {
        type: "Point",
        coordinates: [37.78749210438603, -122.3982846736908]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Mission Rock St at 3rd St",
        id: "364",
        interactions: 605
      },
      geometry: {
        type: "Point",
        coordinates: [37.77288579232439, -122.38994032144547]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Turk St at Fillmore St",
        id: "365",
        interactions: 204
      },
      geometry: {
        type: "Point",
        coordinates: [-122.43194639682768, 37.78045005996349]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Outside Lands 2018 (Temporary Station)",
        id: "367",
        interactions: 480
      },
      geometry: { type: "Point", coordinates: [37.771104, -122.473658] }
    }
  ]
};

const tripValues = {
  "3": {
    "3": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 455
    },
    "5": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 314
    },
    "6": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 728
    },
    "8": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.799953",
      end_lon: "-122.398525",
      value: 172
    },
    "10": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.79539293725452",
      end_lon: "-122.4047702550888",
      value: 248
    },
    "11": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.79728",
      end_lon: "-122.398436",
      value: 351
    },
    "13": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.794231",
      end_lon: "-122.402923",
      value: 170
    },
    "14": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.795001",
      end_lon: "-122.39997",
      value: 229
    },
    "15": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 527
    },
    "16": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 452
    },
    "17": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 299
    },
    "20": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.7913",
      end_lon: "-122.399051",
      value: 283
    },
    "21": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 339
    },
    "22": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 285
    },
    "24": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.7896767",
      end_lon: "-122.3904285",
      value: 204
    },
    "27": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.7880593",
      end_lon: "-122.3918648",
      value: 179
    },
    "30": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 1222
    },
    "33": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.7816495",
      end_lon: "-122.4154077",
      value: 159
    },
    "41": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.78127",
      end_lon: "-122.41874",
      value: 271
    },
    "42": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.77865",
      end_lon: "-122.41823",
      value: 222
    },
    "43": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.7787677",
      end_lon: "-122.4159292",
      value: 198
    },
    "44": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 391
    },
    "47": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.78095459960753",
      end_lon: "-122.39974915981291",
      value: 1218
    },
    "49": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.7807601",
      end_lon: "-122.3949894",
      value: 237
    },
    "50": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.780526",
      end_lon: "-122.390288",
      value: 219
    },
    "55": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.7770527",
      end_lon: "-122.4295585",
      value: 208
    },
    "58": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 1071
    },
    "60": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.77452040113685",
      end_lon: "-122.4094493687153",
      value: 265
    },
    "61": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.7765126",
      end_lon: "-122.4113061",
      value: 194
    },
    "62": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.77779057034257",
      end_lon: "-122.40643188357353",
      value: 185
    },
    "64": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.7767539",
      end_lon: "-122.3990176",
      value: 215
    },
    "66": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 253
    },
    "67": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 594
    },
    "70": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.77331087889723",
      end_lon: "-122.44429260492325",
      value: 166
    },
    "74": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.776434819204745",
      end_lon: "-122.42624402046204",
      value: 408
    },
    "75": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.7737932060887",
      end_lon: "-122.42123901844025",
      value: 331
    },
    "81": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 628
    },
    "86": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.7693053",
      end_lon: "-122.4268256",
      value: 154
    },
    "123": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.7605936",
      end_lon: "-122.4148171",
      value: 176
    },
    "323": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.79801364395978",
      end_lon: "-122.40595042705534",
      value: 239
    },
    "324": {
      start_lat: "37.78637526861584",
      start_lon: "-122.40490436553954",
      end_lat: "37.788299978150825",
      end_lon: "-122.40853071212767",
      value: 170
    }
  },
  "4": {
    "4": {
      start_lat: "37.78588062694133",
      start_lon: "-122.4089150084319",
      end_lat: "37.78588062694133",
      end_lon: "-122.4089150084319",
      value: 157
    },
    "6": {
      start_lat: "37.78588062694133",
      start_lon: "-122.4089150084319",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 164
    }
  },
  "5": {
    "3": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 239
    },
    "5": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 421
    },
    "6": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 338
    },
    "10": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.79539293725452",
      end_lon: "-122.4047702550888",
      value: 166
    },
    "13": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.794231",
      end_lon: "-122.402923",
      value: 158
    },
    "15": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 277
    },
    "16": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 191
    },
    "17": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 172
    },
    "19": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.788975",
      end_lon: "-122.403452",
      value: 202
    },
    "21": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 284
    },
    "30": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 208
    },
    "41": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.78127",
      end_lon: "-122.41874",
      value: 228
    },
    "42": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.77865",
      end_lon: "-122.41823",
      value: 168
    },
    "43": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.7787677",
      end_lon: "-122.4159292",
      value: 183
    },
    "44": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 350
    },
    "47": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.78095459960753",
      end_lon: "-122.39974915981291",
      value: 201
    },
    "55": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.7770527",
      end_lon: "-122.4295585",
      value: 172
    },
    "58": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 987
    },
    "60": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.77452040113685",
      end_lon: "-122.4094493687153",
      value: 166
    },
    "62": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.77779057034257",
      end_lon: "-122.40643188357353",
      value: 257
    },
    "64": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.7767539",
      end_lon: "-122.3990176",
      value: 1341
    },
    "67": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 923
    },
    "74": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.776434819204745",
      end_lon: "-122.42624402046204",
      value: 307
    },
    "75": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.7737932060887",
      end_lon: "-122.42123901844025",
      value: 358
    },
    "76": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.77166246221617",
      end_lon: "-122.42242321372034",
      value: 242
    },
    "80": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.7753058",
      end_lon: "-122.39738",
      value: 440
    },
    "81": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 197
    },
    "86": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.7693053",
      end_lon: "-122.4268256",
      value: 234
    },
    "88": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.7700298",
      end_lon: "-122.4117258",
      value: 152
    },
    "90": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 379
    },
    "98": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.765052",
      end_lon: "-122.4218661",
      value: 194
    },
    "321": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.78014570345598",
      end_lon: "-122.40307085237873",
      value: 220
    },
    "350": {
      start_lat: "37.783899357084934",
      start_lon: "-122.40844488143921",
      end_lat: "37.771431362921085",
      end_lon: "-122.40578681230545",
      value: 187
    }
  },
  "6": {
    "3": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 556
    },
    "5": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 418
    },
    "6": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 1817
    },
    "8": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.799953",
      end_lon: "-122.398525",
      value: 802
    },
    "9": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.79857210846256",
      end_lon: "-122.40086898207666",
      value: 303
    },
    "10": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.79539293725452",
      end_lon: "-122.4047702550888",
      value: 248
    },
    "11": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.79728",
      end_lon: "-122.398436",
      value: 448
    },
    "13": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.794231",
      end_lon: "-122.402923",
      value: 195
    },
    "14": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.795001",
      end_lon: "-122.39997",
      value: 568
    },
    "15": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 2682
    },
    "16": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 3336
    },
    "17": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 964
    },
    "19": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.788975",
      end_lon: "-122.403452",
      value: 239
    },
    "20": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.7913",
      end_lon: "-122.399051",
      value: 550
    },
    "21": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 399
    },
    "22": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 976
    },
    "23": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.791464",
      end_lon: "-122.391034",
      value: 587
    },
    "24": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.7896767",
      end_lon: "-122.3904285",
      value: 296
    },
    "27": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.7880593",
      end_lon: "-122.3918648",
      value: 206
    },
    "28": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.78716801474664",
      end_lon: "-122.38809792330358",
      value: 453
    },
    "30": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 927
    },
    "50": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.780526",
      end_lon: "-122.390288",
      value: 389
    },
    "61": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.7765126",
      end_lon: "-122.4113061",
      value: 154
    },
    "66": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 519
    },
    "67": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 222
    },
    "81": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 420
    },
    "284": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.78487208436062",
      end_lon: "-122.40087568759917",
      value: 155
    },
    "323": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.79801364395978",
      end_lon: "-122.40595042705534",
      value: 454
    },
    "324": {
      start_lat: "37.80477",
      start_lon: "-122.403234",
      end_lat: "37.788299978150825",
      end_lon: "-122.40853071212767",
      value: 366
    }
  },
  "7": {
    "7": {
      start_lat: "37.8045623549303",
      start_lon: "-122.27173805236816",
      end_lat: "37.8045623549303",
      end_lon: "-122.27173805236816",
      value: 195
    },
    "163": {
      start_lat: "37.8045623549303",
      start_lon: "-122.27173805236816",
      end_lat: "37.7973195",
      end_lon: "-122.2653199",
      value: 240
    },
    "179": {
      start_lat: "37.8045623549303",
      start_lon: "-122.27173805236816",
      end_lat: "37.816073115011406",
      end_lon: "-122.26788640022278",
      value: 163
    },
    "180": {
      start_lat: "37.8045623549303",
      start_lon: "-122.27173805236816",
      end_lat: "37.8126783",
      end_lon: "-122.2687726",
      value: 210
    },
    "181": {
      start_lat: "37.8045623549303",
      start_lon: "-122.27173805236816",
      end_lat: "37.8113768",
      end_lon: "-122.2651925",
      value: 160
    },
    "182": {
      start_lat: "37.8045623549303",
      start_lon: "-122.27173805236816",
      end_lat: "37.8090126",
      end_lon: "-122.2682473",
      value: 209
    },
    "183": {
      start_lat: "37.8045623549303",
      start_lon: "-122.27173805236816",
      end_lat: "37.8087021",
      end_lon: "-122.2699271",
      value: 159
    },
    "186": {
      start_lat: "37.8045623549303",
      start_lon: "-122.27173805236816",
      end_lat: "37.8013189",
      end_lon: "-122.2626418",
      value: 502
    },
    "195": {
      start_lat: "37.8045623549303",
      start_lon: "-122.27173805236816",
      end_lat: "37.81231409135146",
      end_lon: "-122.26077854633331",
      value: 294
    },
    "196": {
      start_lat: "37.8045623549303",
      start_lon: "-122.27173805236816",
      end_lat: "37.80889393398715",
      end_lon: "-122.25646018981932",
      value: 232
    },
    "197": {
      start_lat: "37.8045623549303",
      start_lon: "-122.27173805236816",
      end_lat: "37.8088479",
      end_lon: "-122.2496799",
      value: 193
    },
    "200": {
      start_lat: "37.8045623549303",
      start_lon: "-122.27173805236816",
      end_lat: "37.800213566969795",
      end_lon: "-122.25381016731262",
      value: 475
    },
    "203": {
      start_lat: "37.8045623549303",
      start_lon: "-122.27173805236816",
      end_lat: "37.795194764385954",
      end_lon: "-122.27396965026855",
      value: 168
    },
    "233": {
      start_lat: "37.8045623549303",
      start_lon: "-122.27173805236816",
      end_lat: "37.7958125",
      end_lon: "-122.2555549",
      value: 198
    }
  },
  "8": {
    "6": {
      start_lat: "37.799953",
      start_lon: "-122.398525",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 1023
    },
    "8": {
      start_lat: "37.799953",
      start_lon: "-122.398525",
      end_lat: "37.799953",
      end_lon: "-122.398525",
      value: 496
    },
    "15": {
      start_lat: "37.799953",
      start_lon: "-122.398525",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 682
    },
    "16": {
      start_lat: "37.799953",
      start_lon: "-122.398525",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 899
    },
    "17": {
      start_lat: "37.799953",
      start_lon: "-122.398525",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 226
    },
    "22": {
      start_lat: "37.799953",
      start_lon: "-122.398525",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 239
    },
    "28": {
      start_lat: "37.799953",
      start_lon: "-122.398525",
      end_lat: "37.78716801474664",
      end_lon: "-122.38809792330358",
      value: 300
    },
    "30": {
      start_lat: "37.799953",
      start_lon: "-122.398525",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 547
    },
    "67": {
      start_lat: "37.799953",
      start_lon: "-122.398525",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 218
    },
    "81": {
      start_lat: "37.799953",
      start_lon: "-122.398525",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 386
    },
    "323": {
      start_lat: "37.799953",
      start_lon: "-122.398525",
      end_lat: "37.79801364395978",
      end_lon: "-122.40595042705534",
      value: 162
    }
  },
  "9": {
    "3": {
      start_lat: "37.79857210846256",
      start_lon: "-122.40086898207666",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 193
    },
    "6": {
      start_lat: "37.79857210846256",
      start_lon: "-122.40086898207666",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 229
    },
    "11": {
      start_lat: "37.79857210846256",
      start_lon: "-122.40086898207666",
      end_lat: "37.79728",
      end_lon: "-122.398436",
      value: 161
    },
    "14": {
      start_lat: "37.79857210846256",
      start_lon: "-122.40086898207666",
      end_lat: "37.795001",
      end_lon: "-122.39997",
      value: 298
    },
    "15": {
      start_lat: "37.79857210846256",
      start_lon: "-122.40086898207666",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 282
    },
    "16": {
      start_lat: "37.79857210846256",
      start_lon: "-122.40086898207666",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 293
    },
    "17": {
      start_lat: "37.79857210846256",
      start_lon: "-122.40086898207666",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 504
    },
    "20": {
      start_lat: "37.79857210846256",
      start_lon: "-122.40086898207666",
      end_lat: "37.7913",
      end_lon: "-122.399051",
      value: 358
    },
    "21": {
      start_lat: "37.79857210846256",
      start_lon: "-122.40086898207666",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 268
    },
    "22": {
      start_lat: "37.79857210846256",
      start_lon: "-122.40086898207666",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 321
    },
    "28": {
      start_lat: "37.79857210846256",
      start_lon: "-122.40086898207666",
      end_lat: "37.78716801474664",
      end_lon: "-122.38809792330358",
      value: 177
    },
    "30": {
      start_lat: "37.79857210846256",
      start_lon: "-122.40086898207666",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 714
    },
    "67": {
      start_lat: "37.79857210846256",
      start_lon: "-122.40086898207666",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 263
    },
    "81": {
      start_lat: "37.79857210846256",
      start_lon: "-122.40086898207666",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 229
    }
  },
  "10": {
    "3": {
      start_lat: "37.79539293725452",
      start_lon: "-122.4047702550888",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 172
    },
    "6": {
      start_lat: "37.79539293725452",
      start_lon: "-122.4047702550888",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 352
    },
    "10": {
      start_lat: "37.79539293725452",
      start_lon: "-122.4047702550888",
      end_lat: "37.79539293725452",
      end_lon: "-122.4047702550888",
      value: 248
    },
    "15": {
      start_lat: "37.79539293725452",
      start_lon: "-122.4047702550888",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 169
    },
    "21": {
      start_lat: "37.79539293725452",
      start_lon: "-122.4047702550888",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 259
    },
    "30": {
      start_lat: "37.79539293725452",
      start_lon: "-122.4047702550888",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 167
    }
  },
  "11": {
    "3": {
      start_lat: "37.79728",
      start_lon: "-122.398436",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 341
    },
    "6": {
      start_lat: "37.79728",
      start_lon: "-122.398436",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 609
    },
    "9": {
      start_lat: "37.79728",
      start_lon: "-122.398436",
      end_lat: "37.79857210846256",
      end_lon: "-122.40086898207666",
      value: 177
    },
    "11": {
      start_lat: "37.79728",
      start_lon: "-122.398436",
      end_lat: "37.79728",
      end_lon: "-122.398436",
      value: 277
    },
    "13": {
      start_lat: "37.79728",
      start_lon: "-122.398436",
      end_lat: "37.794231",
      end_lon: "-122.402923",
      value: 208
    },
    "17": {
      start_lat: "37.79728",
      start_lon: "-122.398436",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 266
    },
    "22": {
      start_lat: "37.79728",
      start_lon: "-122.398436",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 232
    },
    "30": {
      start_lat: "37.79728",
      start_lon: "-122.398436",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 804
    },
    "66": {
      start_lat: "37.79728",
      start_lon: "-122.398436",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 180
    },
    "67": {
      start_lat: "37.79728",
      start_lon: "-122.398436",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 241
    },
    "81": {
      start_lat: "37.79728",
      start_lon: "-122.398436",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 182
    }
  },
  "13": {
    "3": {
      start_lat: "37.794231",
      start_lon: "-122.402923",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 189
    },
    "5": {
      start_lat: "37.794231",
      start_lon: "-122.402923",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 184
    },
    "6": {
      start_lat: "37.794231",
      start_lon: "-122.402923",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 178
    },
    "11": {
      start_lat: "37.794231",
      start_lon: "-122.402923",
      end_lat: "37.79728",
      end_lon: "-122.398436",
      value: 193
    },
    "15": {
      start_lat: "37.794231",
      start_lon: "-122.402923",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 269
    },
    "20": {
      start_lat: "37.794231",
      start_lon: "-122.402923",
      end_lat: "37.7913",
      end_lon: "-122.399051",
      value: 187
    },
    "21": {
      start_lat: "37.794231",
      start_lon: "-122.402923",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 437
    },
    "22": {
      start_lat: "37.794231",
      start_lon: "-122.402923",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 175
    },
    "30": {
      start_lat: "37.794231",
      start_lon: "-122.402923",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 606
    },
    "67": {
      start_lat: "37.794231",
      start_lon: "-122.402923",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 269
    }
  },
  "14": {
    "3": {
      start_lat: "37.795001",
      start_lon: "-122.39997",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 209
    },
    "5": {
      start_lat: "37.795001",
      start_lon: "-122.39997",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 175
    },
    "6": {
      start_lat: "37.795001",
      start_lon: "-122.39997",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 609
    },
    "9": {
      start_lat: "37.795001",
      start_lon: "-122.39997",
      end_lat: "37.79857210846256",
      end_lon: "-122.40086898207666",
      value: 176
    },
    "14": {
      start_lat: "37.795001",
      start_lon: "-122.39997",
      end_lat: "37.795001",
      end_lon: "-122.39997",
      value: 154
    },
    "15": {
      start_lat: "37.795001",
      start_lon: "-122.39997",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 239
    },
    "22": {
      start_lat: "37.795001",
      start_lon: "-122.39997",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 278
    },
    "28": {
      start_lat: "37.795001",
      start_lon: "-122.39997",
      end_lat: "37.78716801474664",
      end_lon: "-122.38809792330358",
      value: 158
    },
    "30": {
      start_lat: "37.795001",
      start_lon: "-122.39997",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 1160
    },
    "44": {
      start_lat: "37.795001",
      start_lon: "-122.39997",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 152
    },
    "50": {
      start_lat: "37.795001",
      start_lon: "-122.39997",
      end_lat: "37.780526",
      end_lon: "-122.390288",
      value: 154
    },
    "66": {
      start_lat: "37.795001",
      start_lon: "-122.39997",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 160
    },
    "67": {
      start_lat: "37.795001",
      start_lon: "-122.39997",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 286
    },
    "81": {
      start_lat: "37.795001",
      start_lon: "-122.39997",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 314
    },
    "323": {
      start_lat: "37.795001",
      start_lon: "-122.39997",
      end_lat: "37.79801364395978",
      end_lon: "-122.40595042705534",
      value: 213
    }
  },
  "15": {
    "3": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 347
    },
    "5": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 275
    },
    "6": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 5684
    },
    "8": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.799953",
      end_lon: "-122.398525",
      value: 1037
    },
    "9": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.79857210846256",
      end_lon: "-122.40086898207666",
      value: 413
    },
    "10": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.79539293725452",
      end_lon: "-122.4047702550888",
      value: 201
    },
    "11": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.79728",
      end_lon: "-122.398436",
      value: 160
    },
    "13": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.794231",
      end_lon: "-122.402923",
      value: 234
    },
    "14": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.795001",
      end_lon: "-122.39997",
      value: 154
    },
    "15": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 1186
    },
    "16": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 216
    },
    "17": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 168
    },
    "19": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.788975",
      end_lon: "-122.403452",
      value: 195
    },
    "20": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.7913",
      end_lon: "-122.399051",
      value: 599
    },
    "21": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 601
    },
    "22": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 215
    },
    "23": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.791464",
      end_lon: "-122.391034",
      value: 263
    },
    "25": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.787521780456245",
      end_lon: "-122.39740490913391",
      value: 564
    },
    "27": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.7880593",
      end_lon: "-122.3918648",
      value: 250
    },
    "28": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.78716801474664",
      end_lon: "-122.38809792330358",
      value: 513
    },
    "30": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 872
    },
    "37": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.78499972833808",
      end_lon: "-122.39593561749642",
      value: 185
    },
    "43": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.7787677",
      end_lon: "-122.4159292",
      value: 174
    },
    "49": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.7807601",
      end_lon: "-122.3949894",
      value: 337
    },
    "50": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.780526",
      end_lon: "-122.390288",
      value: 1010
    },
    "58": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 190
    },
    "66": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 1069
    },
    "67": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 251
    },
    "80": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.7753058",
      end_lon: "-122.39738",
      value: 154
    },
    "81": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 2287
    },
    "90": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 467
    },
    "93": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.7704074",
      end_lon: "-122.3911984",
      value: 798
    },
    "104": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.76704457969368",
      end_lon: "-122.39083349704742",
      value: 176
    },
    "126": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.7616343",
      end_lon: "-122.3906477",
      value: 428
    },
    "284": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.78487208436062",
      end_lon: "-122.40087568759917",
      value: 213
    },
    "323": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.79801364395978",
      end_lon: "-122.40595042705534",
      value: 436
    },
    "324": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.788299978150825",
      end_lon: "-122.40853071212767",
      value: 251
    },
    "342": {
      start_lat: "37.795392",
      start_lon: "-122.394203",
      end_lat: "37.781382819628725",
      end_lon: "-122.3898410797119",
      value: 306
    }
  },
  "16": {
    "3": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 398
    },
    "6": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 2245
    },
    "8": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.799953",
      end_lon: "-122.398525",
      value: 542
    },
    "9": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.79857210846256",
      end_lon: "-122.40086898207666",
      value: 209
    },
    "10": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.79539293725452",
      end_lon: "-122.4047702550888",
      value: 202
    },
    "15": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 177
    },
    "16": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 277
    },
    "20": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.7913",
      end_lon: "-122.399051",
      value: 230
    },
    "21": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 203
    },
    "23": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.791464",
      end_lon: "-122.391034",
      value: 472
    },
    "24": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.7896767",
      end_lon: "-122.3904285",
      value: 341
    },
    "25": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.787521780456245",
      end_lon: "-122.39740490913391",
      value: 160
    },
    "28": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.78716801474664",
      end_lon: "-122.38809792330358",
      value: 810
    },
    "30": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 1264
    },
    "49": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.7807601",
      end_lon: "-122.3949894",
      value: 260
    },
    "50": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.780526",
      end_lon: "-122.390288",
      value: 952
    },
    "66": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 852
    },
    "67": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 383
    },
    "81": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 1861
    },
    "90": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 310
    },
    "91": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.771762110313176",
      end_lon: "-122.39843755960464",
      value: 161
    },
    "93": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.7704074",
      end_lon: "-122.3911984",
      value: 900
    },
    "104": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.76704457969368",
      end_lon: "-122.39083349704742",
      value: 381
    },
    "126": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.7616343",
      end_lon: "-122.3906477",
      value: 477
    },
    "130": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.75736899005735",
      end_lon: "-122.3920565843582",
      value: 199
    },
    "321": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.78014570345598",
      end_lon: "-122.40307085237873",
      value: 163
    },
    "323": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.79801364395978",
      end_lon: "-122.40595042705534",
      value: 183
    },
    "324": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.788299978150825",
      end_lon: "-122.40853071212767",
      value: 153
    },
    "342": {
      start_lat: "37.79413",
      start_lon: "-122.39443",
      end_lat: "37.781382819628725",
      end_lon: "-122.3898410797119",
      value: 190
    }
  },
  "17": {
    "3": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 225
    },
    "5": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 211
    },
    "6": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 1017
    },
    "8": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.799953",
      end_lon: "-122.398525",
      value: 245
    },
    "9": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.79857210846256",
      end_lon: "-122.40086898207666",
      value: 524
    },
    "13": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.794231",
      end_lon: "-122.402923",
      value: 168
    },
    "15": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 193
    },
    "17": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 154
    },
    "22": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 626
    },
    "24": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.7896767",
      end_lon: "-122.3904285",
      value: 219
    },
    "27": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.7880593",
      end_lon: "-122.3918648",
      value: 1681
    },
    "28": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.78716801474664",
      end_lon: "-122.38809792330358",
      value: 445
    },
    "30": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 1190
    },
    "49": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.7807601",
      end_lon: "-122.3949894",
      value: 292
    },
    "50": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.780526",
      end_lon: "-122.390288",
      value: 508
    },
    "66": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 472
    },
    "67": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 410
    },
    "81": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 818
    },
    "93": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.7704074",
      end_lon: "-122.3911984",
      value: 588
    },
    "126": {
      start_lat: "37.792251",
      start_lon: "-122.397086",
      end_lat: "37.7616343",
      end_lon: "-122.3906477",
      value: 179
    }
  },
  "18": {
    "241": {
      start_lat: "37.85022187449679",
      start_lon: "-122.26017236709595",
      end_lat: "37.8524766",
      end_lon: "-122.2702132",
      value: 407
    }
  },
  "19": {
    "5": {
      start_lat: "37.788975",
      start_lon: "-122.403452",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 260
    },
    "6": {
      start_lat: "37.788975",
      start_lon: "-122.403452",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 247
    },
    "10": {
      start_lat: "37.788975",
      start_lon: "-122.403452",
      end_lat: "37.79539293725452",
      end_lon: "-122.4047702550888",
      value: 339
    },
    "13": {
      start_lat: "37.788975",
      start_lon: "-122.403452",
      end_lat: "37.794231",
      end_lon: "-122.402923",
      value: 213
    },
    "15": {
      start_lat: "37.788975",
      start_lon: "-122.403452",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 248
    },
    "16": {
      start_lat: "37.788975",
      start_lon: "-122.403452",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 173
    },
    "24": {
      start_lat: "37.788975",
      start_lon: "-122.403452",
      end_lat: "37.7896767",
      end_lon: "-122.3904285",
      value: 160
    },
    "30": {
      start_lat: "37.788975",
      start_lon: "-122.403452",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 786
    },
    "58": {
      start_lat: "37.788975",
      start_lon: "-122.403452",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 397
    },
    "62": {
      start_lat: "37.788975",
      start_lon: "-122.403452",
      end_lat: "37.77779057034257",
      end_lon: "-122.40643188357353",
      value: 178
    },
    "67": {
      start_lat: "37.788975",
      start_lon: "-122.403452",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 368
    },
    "81": {
      start_lat: "37.788975",
      start_lon: "-122.403452",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 232
    },
    "90": {
      start_lat: "37.788975",
      start_lon: "-122.403452",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 187
    },
    "321": {
      start_lat: "37.788975",
      start_lon: "-122.403452",
      end_lat: "37.78014570345598",
      end_lon: "-122.40307085237873",
      value: 265
    },
    "323": {
      start_lat: "37.788975",
      start_lon: "-122.403452",
      end_lat: "37.79801364395978",
      end_lon: "-122.40595042705534",
      value: 308
    },
    "324": {
      start_lat: "37.788975",
      start_lon: "-122.403452",
      end_lat: "37.788299978150825",
      end_lon: "-122.40853071212767",
      value: 206
    }
  },
  "20": {
    "3": {
      start_lat: "37.7913",
      start_lon: "-122.399051",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 446
    },
    "5": {
      start_lat: "37.7913",
      start_lon: "-122.399051",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 338
    },
    "6": {
      start_lat: "37.7913",
      start_lon: "-122.399051",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 316
    },
    "13": {
      start_lat: "37.7913",
      start_lon: "-122.399051",
      end_lat: "37.794231",
      end_lon: "-122.402923",
      value: 173
    },
    "15": {
      start_lat: "37.7913",
      start_lon: "-122.399051",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 439
    },
    "16": {
      start_lat: "37.7913",
      start_lon: "-122.399051",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 167
    },
    "17": {
      start_lat: "37.7913",
      start_lon: "-122.399051",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 157
    },
    "20": {
      start_lat: "37.7913",
      start_lon: "-122.399051",
      end_lat: "37.7913",
      end_lon: "-122.399051",
      value: 159
    },
    "22": {
      start_lat: "37.7913",
      start_lon: "-122.399051",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 206
    },
    "28": {
      start_lat: "37.7913",
      start_lon: "-122.399051",
      end_lat: "37.78716801474664",
      end_lon: "-122.38809792330358",
      value: 170
    },
    "30": {
      start_lat: "37.7913",
      start_lon: "-122.399051",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 336
    },
    "58": {
      start_lat: "37.7913",
      start_lon: "-122.399051",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 272
    },
    "81": {
      start_lat: "37.7913",
      start_lon: "-122.399051",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 162
    },
    "324": {
      start_lat: "37.7913",
      start_lon: "-122.399051",
      end_lat: "37.788299978150825",
      end_lon: "-122.40853071212767",
      value: 278
    }
  },
  "21": {
    "3": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 294
    },
    "5": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 310
    },
    "6": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 646
    },
    "8": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.799953",
      end_lon: "-122.398525",
      value: 152
    },
    "9": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.79857210846256",
      end_lon: "-122.40086898207666",
      value: 167
    },
    "10": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.79539293725452",
      end_lon: "-122.4047702550888",
      value: 236
    },
    "13": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.794231",
      end_lon: "-122.402923",
      value: 332
    },
    "15": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 1051
    },
    "16": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 459
    },
    "17": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 275
    },
    "21": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 273
    },
    "22": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 215
    },
    "25": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.787521780456245",
      end_lon: "-122.39740490913391",
      value: 159
    },
    "27": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.7880593",
      end_lon: "-122.3918648",
      value: 201
    },
    "28": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.78716801474664",
      end_lon: "-122.38809792330358",
      value: 257
    },
    "30": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 1615
    },
    "34": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.7839879",
      end_lon: "-122.412408",
      value: 157
    },
    "36": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.78383",
      end_lon: "-122.39887",
      value: 170
    },
    "37": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.78499972833808",
      end_lon: "-122.39593561749642",
      value: 820
    },
    "41": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.78127",
      end_lon: "-122.41874",
      value: 171
    },
    "44": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 200
    },
    "47": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.78095459960753",
      end_lon: "-122.39974915981291",
      value: 307
    },
    "49": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.7807601",
      end_lon: "-122.3949894",
      value: 1620
    },
    "50": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.780526",
      end_lon: "-122.390288",
      value: 751
    },
    "58": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 637
    },
    "60": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.77452040113685",
      end_lon: "-122.4094493687153",
      value: 372
    },
    "62": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.77779057034257",
      end_lon: "-122.40643188357353",
      value: 275
    },
    "66": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 590
    },
    "67": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 690
    },
    "74": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.776434819204745",
      end_lon: "-122.42624402046204",
      value: 230
    },
    "81": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 545
    },
    "90": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 289
    },
    "93": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.7704074",
      end_lon: "-122.3911984",
      value: 242
    },
    "323": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.79801364395978",
      end_lon: "-122.40595042705534",
      value: 357
    },
    "324": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.788299978150825",
      end_lon: "-122.40853071212767",
      value: 157
    },
    "342": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.781382819628725",
      end_lon: "-122.3898410797119",
      value: 265
    },
    "343": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.783171989315306",
      end_lon: "-122.39357203245163",
      value: 1125
    },
    "349": {
      start_lat: "37.7896254",
      start_lon: "-122.400811",
      end_lat: "37.78100971717512",
      end_lon: "-122.40566611289978",
      value: 284
    }
  },
  "22": {
    "3": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 247
    },
    "6": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 970
    },
    "8": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.799953",
      end_lon: "-122.398525",
      value: 527
    },
    "9": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.79857210846256",
      end_lon: "-122.40086898207666",
      value: 325
    },
    "11": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.79728",
      end_lon: "-122.398436",
      value: 353
    },
    "13": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.794231",
      end_lon: "-122.402923",
      value: 210
    },
    "14": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.795001",
      end_lon: "-122.39997",
      value: 252
    },
    "15": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 181
    },
    "20": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.7913",
      end_lon: "-122.399051",
      value: 190
    },
    "21": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 189
    },
    "22": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 158
    },
    "25": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.787521780456245",
      end_lon: "-122.39740490913391",
      value: 305
    },
    "28": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.78716801474664",
      end_lon: "-122.38809792330358",
      value: 204
    },
    "30": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 1527
    },
    "41": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.78127",
      end_lon: "-122.41874",
      value: 213
    },
    "45": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.781752",
      end_lon: "-122.405127",
      value: 417
    },
    "47": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.78095459960753",
      end_lon: "-122.39974915981291",
      value: 278
    },
    "49": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.7807601",
      end_lon: "-122.3949894",
      value: 444
    },
    "50": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.780526",
      end_lon: "-122.390288",
      value: 349
    },
    "58": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 308
    },
    "59": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.774814",
      end_lon: "-122.418954",
      value: 192
    },
    "60": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.77452040113685",
      end_lon: "-122.4094493687153",
      value: 238
    },
    "61": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.7765126",
      end_lon: "-122.4113061",
      value: 253
    },
    "64": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.7767539",
      end_lon: "-122.3990176",
      value: 154
    },
    "66": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 433
    },
    "67": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 526
    },
    "77": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.7735069",
      end_lon: "-122.4160402",
      value: 283
    },
    "81": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 956
    },
    "88": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.7700298",
      end_lon: "-122.4117258",
      value: 208
    },
    "90": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 343
    },
    "93": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.7704074",
      end_lon: "-122.3911984",
      value: 548
    },
    "104": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.76704457969368",
      end_lon: "-122.39083349704742",
      value: 155
    },
    "126": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.7616343",
      end_lon: "-122.3906477",
      value: 157
    },
    "284": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.78487208436062",
      end_lon: "-122.40087568759917",
      value: 358
    },
    "321": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.78014570345598",
      end_lon: "-122.40307085237873",
      value: 189
    },
    "343": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.783171989315306",
      end_lon: "-122.39357203245163",
      value: 177
    },
    "349": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.78100971717512",
      end_lon: "-122.40566611289978",
      value: 309
    },
    "350": {
      start_lat: "37.789756",
      start_lon: "-122.394643",
      end_lat: "37.771431362921085",
      end_lon: "-122.40578681230545",
      value: 168
    }
  },
  "23": {
    "6": {
      start_lat: "37.791464",
      start_lon: "-122.391034",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 773
    },
    "15": {
      start_lat: "37.791464",
      start_lon: "-122.391034",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 246
    },
    "16": {
      start_lat: "37.791464",
      start_lon: "-122.391034",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 295
    },
    "23": {
      start_lat: "37.791464",
      start_lon: "-122.391034",
      end_lat: "37.791464",
      end_lon: "-122.391034",
      value: 189
    },
    "28": {
      start_lat: "37.791464",
      start_lon: "-122.391034",
      end_lat: "37.78716801474664",
      end_lon: "-122.38809792330358",
      value: 412
    },
    "30": {
      start_lat: "37.791464",
      start_lon: "-122.391034",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 1415
    },
    "50": {
      start_lat: "37.791464",
      start_lon: "-122.391034",
      end_lat: "37.780526",
      end_lon: "-122.390288",
      value: 441
    },
    "66": {
      start_lat: "37.791464",
      start_lon: "-122.391034",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 431
    },
    "67": {
      start_lat: "37.791464",
      start_lon: "-122.391034",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 479
    },
    "80": {
      start_lat: "37.791464",
      start_lon: "-122.391034",
      end_lat: "37.7753058",
      end_lon: "-122.39738",
      value: 189
    },
    "81": {
      start_lat: "37.791464",
      start_lon: "-122.391034",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 1086
    },
    "90": {
      start_lat: "37.791464",
      start_lon: "-122.391034",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 232
    },
    "93": {
      start_lat: "37.791464",
      start_lon: "-122.391034",
      end_lat: "37.7704074",
      end_lon: "-122.3911984",
      value: 406
    },
    "126": {
      start_lat: "37.791464",
      start_lon: "-122.391034",
      end_lat: "37.7616343",
      end_lon: "-122.3906477",
      value: 199
    }
  },
  "24": {
    "6": {
      start_lat: "37.7896767",
      start_lon: "-122.3904285",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 334
    },
    "15": {
      start_lat: "37.7896767",
      start_lon: "-122.3904285",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 236
    },
    "16": {
      start_lat: "37.7896767",
      start_lon: "-122.3904285",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 276
    },
    "17": {
      start_lat: "37.7896767",
      start_lon: "-122.3904285",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 158
    },
    "19": {
      start_lat: "37.7896767",
      start_lon: "-122.3904285",
      end_lat: "37.788975",
      end_lon: "-122.403452",
      value: 172
    },
    "22": {
      start_lat: "37.7896767",
      start_lon: "-122.3904285",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 154
    },
    "24": {
      start_lat: "37.7896767",
      start_lon: "-122.3904285",
      end_lat: "37.7896767",
      end_lon: "-122.3904285",
      value: 164
    },
    "30": {
      start_lat: "37.7896767",
      start_lon: "-122.3904285",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 849
    },
    "50": {
      start_lat: "37.7896767",
      start_lon: "-122.3904285",
      end_lat: "37.780526",
      end_lon: "-122.390288",
      value: 153
    },
    "66": {
      start_lat: "37.7896767",
      start_lon: "-122.3904285",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 267
    },
    "67": {
      start_lat: "37.7896767",
      start_lon: "-122.3904285",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 299
    },
    "81": {
      start_lat: "37.7896767",
      start_lon: "-122.3904285",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 520
    },
    "93": {
      start_lat: "37.7896767",
      start_lon: "-122.3904285",
      end_lat: "37.7704074",
      end_lon: "-122.3911984",
      value: 366
    },
    "126": {
      start_lat: "37.7896767",
      start_lon: "-122.3904285",
      end_lat: "37.7616343",
      end_lon: "-122.3906477",
      value: 190
    },
    "284": {
      start_lat: "37.7896767",
      start_lon: "-122.3904285",
      end_lat: "37.78487208436062",
      end_lon: "-122.40087568759917",
      value: 165
    }
  },
  "25": {
    "15": {
      start_lat: "37.787521780456245",
      start_lon: "-122.39740490913391",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 412
    },
    "21": {
      start_lat: "37.787521780456245",
      start_lon: "-122.39740490913391",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 168
    },
    "30": {
      start_lat: "37.787521780456245",
      start_lon: "-122.39740490913391",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 752
    },
    "45": {
      start_lat: "37.787521780456245",
      start_lon: "-122.39740490913391",
      end_lat: "37.781752",
      end_lon: "-122.405127",
      value: 208
    },
    "49": {
      start_lat: "37.787521780456245",
      start_lon: "-122.39740490913391",
      end_lat: "37.7807601",
      end_lon: "-122.3949894",
      value: 161
    },
    "61": {
      start_lat: "37.787521780456245",
      start_lon: "-122.39740490913391",
      end_lat: "37.7765126",
      end_lon: "-122.4113061",
      value: 268
    },
    "66": {
      start_lat: "37.787521780456245",
      start_lon: "-122.39740490913391",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 181
    },
    "67": {
      start_lat: "37.787521780456245",
      start_lon: "-122.39740490913391",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 293
    },
    "284": {
      start_lat: "37.787521780456245",
      start_lon: "-122.39740490913391",
      end_lat: "37.78487208436062",
      end_lon: "-122.40087568759917",
      value: 160
    },
    "349": {
      start_lat: "37.787521780456245",
      start_lon: "-122.39740490913391",
      end_lat: "37.78100971717512",
      end_lon: "-122.40566611289978",
      value: 191
    }
  },
  "26": {
    "30": {
      start_lat: "37.78729",
      start_lon: "-122.39438",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 549
    },
    "58": {
      start_lat: "37.78729",
      start_lon: "-122.39438",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 252
    }
  },
  "27": {
    "3": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 169
    },
    "6": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 334
    },
    "15": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 372
    },
    "17": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 996
    },
    "21": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 165
    },
    "22": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 179
    },
    "23": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.791464",
      end_lon: "-122.391034",
      value: 169
    },
    "25": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.787521780456245",
      end_lon: "-122.39740490913391",
      value: 280
    },
    "27": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.7880593",
      end_lon: "-122.3918648",
      value: 173
    },
    "30": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 1336
    },
    "49": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.7807601",
      end_lon: "-122.3949894",
      value: 188
    },
    "50": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.780526",
      end_lon: "-122.390288",
      value: 404
    },
    "66": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 781
    },
    "67": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 428
    },
    "80": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.7753058",
      end_lon: "-122.39738",
      value: 161
    },
    "81": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 806
    },
    "93": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.7704074",
      end_lon: "-122.3911984",
      value: 738
    },
    "284": {
      start_lat: "37.7880593",
      start_lon: "-122.3918648",
      end_lat: "37.78487208436062",
      end_lon: "-122.40087568759917",
      value: 206
    }
  },
  "28": {
    "6": {
      start_lat: "37.78716801474664",
      start_lon: "-122.38809792330358",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 633
    },
    "8": {
      start_lat: "37.78716801474664",
      start_lon: "-122.38809792330358",
      end_lat: "37.799953",
      end_lon: "-122.398525",
      value: 300
    },
    "9": {
      start_lat: "37.78716801474664",
      start_lon: "-122.38809792330358",
      end_lat: "37.79857210846256",
      end_lon: "-122.40086898207666",
      value: 187
    },
    "14": {
      start_lat: "37.78716801474664",
      start_lon: "-122.38809792330358",
      end_lat: "37.795001",
      end_lon: "-122.39997",
      value: 168
    },
    "15": {
      start_lat: "37.78716801474664",
      start_lon: "-122.38809792330358",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 915
    },
    "16": {
      start_lat: "37.78716801474664",
      start_lon: "-122.38809792330358",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 482
    },
    "17": {
      start_lat: "37.78716801474664",
      start_lon: "-122.38809792330358",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 419
    },
    "20": {
      start_lat: "37.78716801474664",
      start_lon: "-122.38809792330358",
      end_lat: "37.7913",
      end_lon: "-122.399051",
      value: 194
    },
    "22": {
      start_lat: "37.78716801474664",
      start_lon: "-122.38809792330358",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 220
    },
    "23": {
      start_lat: "37.78716801474664",
      start_lon: "-122.38809792330358",
      end_lat: "37.791464",
      end_lon: "-122.391034",
      value: 338
    },
    "28": {
      start_lat: "37.78716801474664",
      start_lon: "-122.38809792330358",
      end_lat: "37.78716801474664",
      end_lon: "-122.38809792330358",
      value: 250
    },
    "30": {
      start_lat: "37.78716801474664",
      start_lon: "-122.38809792330358",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 387
    },
    "50": {
      start_lat: "37.78716801474664",
      start_lon: "-122.38809792330358",
      end_lat: "37.780526",
      end_lon: "-122.390288",
      value: 212
    },
    "66": {
      start_lat: "37.78716801474664",
      start_lon: "-122.38809792330358",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 216
    },
    "81": {
      start_lat: "37.78716801474664",
      start_lon: "-122.38809792330358",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 510
    },
    "93": {
      start_lat: "37.78716801474664",
      start_lon: "-122.38809792330358",
      end_lat: "37.7704074",
      end_lon: "-122.3911984",
      value: 237
    }
  },
  "29": {
    "43": {
      start_lat: "37.782404601934104",
      start_lon: "-122.43944585323335",
      end_lat: "37.7787677",
      end_lon: "-122.4159292",
      value: 156
    }
  },
  "30": {
    "3": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 369
    },
    "5": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 460
    },
    "6": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 605
    },
    "8": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.799953",
      end_lon: "-122.398525",
      value: 377
    },
    "9": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.79857210846256",
      end_lon: "-122.40086898207666",
      value: 444
    },
    "11": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.79728",
      end_lon: "-122.398436",
      value: 658
    },
    "13": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.794231",
      end_lon: "-122.402923",
      value: 234
    },
    "14": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.795001",
      end_lon: "-122.39997",
      value: 747
    },
    "15": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 1074
    },
    "16": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 588
    },
    "17": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 627
    },
    "19": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.788975",
      end_lon: "-122.403452",
      value: 649
    },
    "20": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.7913",
      end_lon: "-122.399051",
      value: 190
    },
    "21": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 881
    },
    "22": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 889
    },
    "23": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.791464",
      end_lon: "-122.391034",
      value: 683
    },
    "24": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.7896767",
      end_lon: "-122.3904285",
      value: 482
    },
    "25": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.787521780456245",
      end_lon: "-122.39740490913391",
      value: 471
    },
    "26": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.78729",
      end_lon: "-122.39438",
      value: 223
    },
    "27": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.7880593",
      end_lon: "-122.3918648",
      value: 643
    },
    "28": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.78716801474664",
      end_lon: "-122.38809792330358",
      value: 199
    },
    "30": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 1266
    },
    "36": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.78383",
      end_lon: "-122.39887",
      value: 408
    },
    "37": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.78499972833808",
      end_lon: "-122.39593561749642",
      value: 328
    },
    "41": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.78127",
      end_lon: "-122.41874",
      value: 196
    },
    "44": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 237
    },
    "45": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.781752",
      end_lon: "-122.405127",
      value: 334
    },
    "50": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.780526",
      end_lon: "-122.390288",
      value: 317
    },
    "58": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 330
    },
    "59": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.774814",
      end_lon: "-122.418954",
      value: 159
    },
    "60": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.77452040113685",
      end_lon: "-122.4094493687153",
      value: 269
    },
    "61": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.7765126",
      end_lon: "-122.4113061",
      value: 327
    },
    "62": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.77779057034257",
      end_lon: "-122.40643188357353",
      value: 359
    },
    "66": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 185
    },
    "77": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.7735069",
      end_lon: "-122.4160402",
      value: 184
    },
    "78": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.7737172",
      end_lon: "-122.4116467",
      value: 268
    },
    "79": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.7734919",
      end_lon: "-122.4036725",
      value: 247
    },
    "88": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.7700298",
      end_lon: "-122.4117258",
      value: 222
    },
    "89": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.76921786152374",
      end_lon: "-122.40764558315276",
      value: 340
    },
    "90": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 752
    },
    "93": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.7704074",
      end_lon: "-122.3911984",
      value: 338
    },
    "97": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.7682646",
      end_lon: "-122.4201102",
      value: 189
    },
    "123": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.7605936",
      end_lon: "-122.4148171",
      value: 201
    },
    "284": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.78487208436062",
      end_lon: "-122.40087568759917",
      value: 374
    },
    "321": {
      start_lat: "37.776598",
      start_lon: "-122.395282",
      end_lat: "37.78014570345598",
      end_lon: "-122.40307085237873",
      value: 310
    }
  },
  "31": {
    "43": {
      start_lat: "37.78381270927812",
      start_lon: "-122.43455886840819",
      end_lat: "37.7787677",
      end_lon: "-122.4159292",
      value: 169
    },
    "53": {
      start_lat: "37.78381270927812",
      start_lon: "-122.43455886840819",
      end_lat: "37.775946",
      end_lon: "-122.4377775",
      value: 153
    },
    "58": {
      start_lat: "37.78381270927812",
      start_lon: "-122.43455886840819",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 289
    }
  },
  "33": {
    "3": {
      start_lat: "37.7816495",
      start_lon: "-122.4154077",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 152
    },
    "67": {
      start_lat: "37.7816495",
      start_lon: "-122.4154077",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 299
    }
  },
  "34": {
    "3": {
      start_lat: "37.7839879",
      start_lon: "-122.412408",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 182
    },
    "21": {
      start_lat: "37.7839879",
      start_lon: "-122.412408",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 171
    }
  },
  "35": {
    "35": {
      start_lat: "37.32911866814779",
      start_lon: "-121.90457582473755",
      end_lat: "37.32911866814779",
      end_lon: "-121.90457582473755",
      value: 170
    },
    "276": {
      start_lat: "37.32911866814779",
      start_lon: "-121.90457582473755",
      end_lat: "37.3322326",
      end_lon: "-121.9125165",
      value: 228
    }
  },
  "36": {
    "3": {
      start_lat: "37.78383",
      start_lon: "-122.39887",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 214
    },
    "5": {
      start_lat: "37.78383",
      start_lon: "-122.39887",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 189
    },
    "6": {
      start_lat: "37.78383",
      start_lon: "-122.39887",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 161
    },
    "15": {
      start_lat: "37.78383",
      start_lon: "-122.39887",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 287
    },
    "16": {
      start_lat: "37.78383",
      start_lon: "-122.39887",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 170
    },
    "21": {
      start_lat: "37.78383",
      start_lon: "-122.39887",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 290
    },
    "24": {
      start_lat: "37.78383",
      start_lon: "-122.39887",
      end_lat: "37.7896767",
      end_lon: "-122.3904285",
      value: 195
    },
    "27": {
      start_lat: "37.78383",
      start_lon: "-122.39887",
      end_lat: "37.7880593",
      end_lon: "-122.3918648",
      value: 210
    },
    "30": {
      start_lat: "37.78383",
      start_lon: "-122.39887",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 426
    },
    "58": {
      start_lat: "37.78383",
      start_lon: "-122.39887",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 247
    },
    "61": {
      start_lat: "37.78383",
      start_lon: "-122.39887",
      end_lat: "37.7765126",
      end_lon: "-122.4113061",
      value: 249
    }
  },
  "37": {
    "5": {
      start_lat: "37.78499972833808",
      start_lon: "-122.39593561749642",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 185
    },
    "6": {
      start_lat: "37.78499972833808",
      start_lon: "-122.39593561749642",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 238
    },
    "15": {
      start_lat: "37.78499972833808",
      start_lon: "-122.39593561749642",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 440
    },
    "17": {
      start_lat: "37.78499972833808",
      start_lon: "-122.39593561749642",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 175
    },
    "21": {
      start_lat: "37.78499972833808",
      start_lon: "-122.39593561749642",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 1308
    },
    "24": {
      start_lat: "37.78499972833808",
      start_lon: "-122.39593561749642",
      end_lat: "37.7896767",
      end_lon: "-122.3904285",
      value: 212
    },
    "27": {
      start_lat: "37.78499972833808",
      start_lon: "-122.39593561749642",
      end_lat: "37.7880593",
      end_lon: "-122.3918648",
      value: 220
    },
    "30": {
      start_lat: "37.78499972833808",
      start_lon: "-122.39593561749642",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 1041
    },
    "37": {
      start_lat: "37.78499972833808",
      start_lon: "-122.39593561749642",
      end_lat: "37.78499972833808",
      end_lon: "-122.39593561749642",
      value: 183
    },
    "41": {
      start_lat: "37.78499972833808",
      start_lon: "-122.39593561749642",
      end_lat: "37.78127",
      end_lon: "-122.41874",
      value: 169
    },
    "49": {
      start_lat: "37.78499972833808",
      start_lon: "-122.39593561749642",
      end_lat: "37.7807601",
      end_lon: "-122.3949894",
      value: 207
    },
    "50": {
      start_lat: "37.78499972833808",
      start_lon: "-122.39593561749642",
      end_lat: "37.780526",
      end_lon: "-122.390288",
      value: 249
    },
    "66": {
      start_lat: "37.78499972833808",
      start_lon: "-122.39593561749642",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 312
    },
    "67": {
      start_lat: "37.78499972833808",
      start_lon: "-122.39593561749642",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 410
    },
    "81": {
      start_lat: "37.78499972833808",
      start_lon: "-122.39593561749642",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 206
    },
    "90": {
      start_lat: "37.78499972833808",
      start_lon: "-122.39593561749642",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 160
    }
  },
  "39": {
    "31": {
      start_lat: "37.7789994",
      start_lon: "-122.4368608",
      end_lat: "37.78381270927812",
      end_lon: "-122.43455886840819",
      value: 230
    }
  },
  "40": {},
  "41": {
    "3": {
      start_lat: "37.78127",
      start_lon: "-122.41874",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 412
    },
    "5": {
      start_lat: "37.78127",
      start_lon: "-122.41874",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 263
    },
    "21": {
      start_lat: "37.78127",
      start_lon: "-122.41874",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 374
    },
    "31": {
      start_lat: "37.78127",
      start_lon: "-122.41874",
      end_lat: "37.78381270927812",
      end_lon: "-122.43455886840819",
      value: 152
    },
    "41": {
      start_lat: "37.78127",
      start_lon: "-122.41874",
      end_lat: "37.78127",
      end_lon: "-122.41874",
      value: 151
    },
    "43": {
      start_lat: "37.78127",
      start_lon: "-122.41874",
      end_lat: "37.7787677",
      end_lon: "-122.4159292",
      value: 218
    },
    "58": {
      start_lat: "37.78127",
      start_lon: "-122.41874",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 241
    },
    "67": {
      start_lat: "37.78127",
      start_lon: "-122.41874",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 475
    },
    "76": {
      start_lat: "37.78127",
      start_lon: "-122.41874",
      end_lat: "37.77166246221617",
      end_lon: "-122.42242321372034",
      value: 158
    },
    "78": {
      start_lat: "37.78127",
      start_lon: "-122.41874",
      end_lat: "37.7737172",
      end_lon: "-122.4116467",
      value: 204
    },
    "98": {
      start_lat: "37.78127",
      start_lon: "-122.41874",
      end_lat: "37.765052",
      end_lon: "-122.4218661",
      value: 175
    }
  },
  "42": {
    "3": {
      start_lat: "37.77865",
      start_lon: "-122.41823",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 254
    },
    "37": {
      start_lat: "37.77865",
      start_lon: "-122.41823",
      end_lat: "37.78499972833808",
      end_lon: "-122.39593561749642",
      value: 178
    },
    "67": {
      start_lat: "37.77865",
      start_lon: "-122.41823",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 197
    }
  },
  "43": {
    "3": {
      start_lat: "37.7787677",
      start_lon: "-122.4159292",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 218
    },
    "5": {
      start_lat: "37.7787677",
      start_lon: "-122.4159292",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 152
    },
    "41": {
      start_lat: "37.7787677",
      start_lon: "-122.4159292",
      end_lat: "37.78127",
      end_lon: "-122.41874",
      value: 232
    },
    "55": {
      start_lat: "37.7787677",
      start_lon: "-122.4159292",
      end_lat: "37.7770527",
      end_lon: "-122.4295585",
      value: 295
    },
    "60": {
      start_lat: "37.7787677",
      start_lon: "-122.4159292",
      end_lat: "37.77452040113685",
      end_lon: "-122.4094493687153",
      value: 234
    },
    "74": {
      start_lat: "37.7787677",
      start_lon: "-122.4159292",
      end_lat: "37.776434819204745",
      end_lon: "-122.42624402046204",
      value: 438
    },
    "75": {
      start_lat: "37.7787677",
      start_lon: "-122.4159292",
      end_lat: "37.7737932060887",
      end_lon: "-122.42123901844025",
      value: 249
    },
    "78": {
      start_lat: "37.7787677",
      start_lon: "-122.4159292",
      end_lat: "37.7737172",
      end_lon: "-122.4116467",
      value: 187
    },
    "79": {
      start_lat: "37.7787677",
      start_lon: "-122.4159292",
      end_lat: "37.7734919",
      end_lon: "-122.4036725",
      value: 290
    },
    "88": {
      start_lat: "37.7787677",
      start_lon: "-122.4159292",
      end_lat: "37.7700298",
      end_lon: "-122.4117258",
      value: 204
    },
    "90": {
      start_lat: "37.7787677",
      start_lon: "-122.4159292",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 1032
    },
    "101": {
      start_lat: "37.7787677",
      start_lon: "-122.4159292",
      end_lat: "37.76600774273675",
      end_lon: "-122.40567684173583",
      value: 284
    },
    "102": {
      start_lat: "37.7787677",
      start_lon: "-122.4159292",
      end_lat: "37.7668828",
      end_lon: "-122.3995794",
      value: 273
    },
    "350": {
      start_lat: "37.7787677",
      start_lon: "-122.4159292",
      end_lat: "37.771431362921085",
      end_lon: "-122.40578681230545",
      value: 229
    }
  },
  "44": {
    "3": {
      start_lat: "37.7810737",
      start_lon: "-122.4117382",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 907
    },
    "5": {
      start_lat: "37.7810737",
      start_lon: "-122.4117382",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 463
    },
    "15": {
      start_lat: "37.7810737",
      start_lon: "-122.4117382",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 186
    },
    "16": {
      start_lat: "37.7810737",
      start_lon: "-122.4117382",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 327
    },
    "17": {
      start_lat: "37.7810737",
      start_lon: "-122.4117382",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 226
    },
    "19": {
      start_lat: "37.7810737",
      start_lon: "-122.4117382",
      end_lat: "37.788975",
      end_lon: "-122.403452",
      value: 273
    },
    "21": {
      start_lat: "37.7810737",
      start_lon: "-122.4117382",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 589
    },
    "22": {
      start_lat: "37.7810737",
      start_lon: "-122.4117382",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 152
    },
    "44": {
      start_lat: "37.7810737",
      start_lon: "-122.4117382",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 427
    },
    "58": {
      start_lat: "37.7810737",
      start_lon: "-122.4117382",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 448
    },
    "62": {
      start_lat: "37.7810737",
      start_lon: "-122.4117382",
      end_lat: "37.77779057034257",
      end_lon: "-122.40643188357353",
      value: 183
    },
    "67": {
      start_lat: "37.7810737",
      start_lon: "-122.4117382",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 449
    },
    "75": {
      start_lat: "37.7810737",
      start_lon: "-122.4117382",
      end_lat: "37.7737932060887",
      end_lon: "-122.42123901844025",
      value: 190
    },
    "79": {
      start_lat: "37.7810737",
      start_lon: "-122.4117382",
      end_lat: "37.7734919",
      end_lon: "-122.4036725",
      value: 168
    },
    "90": {
      start_lat: "37.7810737",
      start_lon: "-122.4117382",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 206
    }
  },
  "45": {
    "22": {
      start_lat: "37.781752",
      start_lon: "-122.405127",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 191
    },
    "61": {
      start_lat: "37.781752",
      start_lon: "-122.405127",
      end_lat: "37.7765126",
      end_lon: "-122.4113061",
      value: 152
    },
    "67": {
      start_lat: "37.781752",
      start_lon: "-122.405127",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 756
    }
  },
  "46": {},
  "47": {
    "3": {
      start_lat: "37.78095459960753",
      start_lon: "-122.39974915981291",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 155
    },
    "5": {
      start_lat: "37.78095459960753",
      start_lon: "-122.39974915981291",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 294
    },
    "21": {
      start_lat: "37.78095459960753",
      start_lon: "-122.39974915981291",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 274
    },
    "24": {
      start_lat: "37.78095459960753",
      start_lon: "-122.39974915981291",
      end_lat: "37.7896767",
      end_lon: "-122.3904285",
      value: 199
    },
    "30": {
      start_lat: "37.78095459960753",
      start_lon: "-122.39974915981291",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 497
    },
    "67": {
      start_lat: "37.78095459960753",
      start_lon: "-122.39974915981291",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 233
    },
    "81": {
      start_lat: "37.78095459960753",
      start_lon: "-122.39974915981291",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 255
    },
    "93": {
      start_lat: "37.78095459960753",
      start_lon: "-122.39974915981291",
      end_lat: "37.7704074",
      end_lon: "-122.3911984",
      value: 210
    },
    "284": {
      start_lat: "37.78095459960753",
      start_lon: "-122.39974915981291",
      end_lat: "37.78487208436062",
      end_lon: "-122.40087568759917",
      value: 263
    },
    "321": {
      start_lat: "37.78095459960753",
      start_lon: "-122.39974915981291",
      end_lat: "37.78014570345598",
      end_lon: "-122.40307085237873",
      value: 172
    }
  },
  "48": {},
  "49": {
    "3": {
      start_lat: "37.7807601",
      start_lon: "-122.3949894",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 260
    },
    "6": {
      start_lat: "37.7807601",
      start_lon: "-122.3949894",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 153
    },
    "15": {
      start_lat: "37.7807601",
      start_lon: "-122.3949894",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 259
    },
    "16": {
      start_lat: "37.7807601",
      start_lon: "-122.3949894",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 229
    },
    "19": {
      start_lat: "37.7807601",
      start_lon: "-122.3949894",
      end_lat: "37.788975",
      end_lon: "-122.403452",
      value: 187
    },
    "21": {
      start_lat: "37.7807601",
      start_lon: "-122.3949894",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 1215
    },
    "22": {
      start_lat: "37.7807601",
      start_lon: "-122.3949894",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 291
    },
    "23": {
      start_lat: "37.7807601",
      start_lon: "-122.3949894",
      end_lat: "37.791464",
      end_lon: "-122.391034",
      value: 198
    },
    "27": {
      start_lat: "37.7807601",
      start_lon: "-122.3949894",
      end_lat: "37.7880593",
      end_lon: "-122.3918648",
      value: 330
    },
    "30": {
      start_lat: "37.7807601",
      start_lon: "-122.3949894",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 173
    },
    "37": {
      start_lat: "37.7807601",
      start_lon: "-122.3949894",
      end_lat: "37.78499972833808",
      end_lon: "-122.39593561749642",
      value: 151
    },
    "79": {
      start_lat: "37.7807601",
      start_lon: "-122.3949894",
      end_lat: "37.7734919",
      end_lon: "-122.4036725",
      value: 164
    },
    "89": {
      start_lat: "37.7807601",
      start_lon: "-122.3949894",
      end_lat: "37.76921786152374",
      end_lon: "-122.40764558315276",
      value: 179
    },
    "284": {
      start_lat: "37.7807601",
      start_lon: "-122.3949894",
      end_lat: "37.78487208436062",
      end_lon: "-122.40087568759917",
      value: 190
    }
  },
  "50": {
    "3": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 158
    },
    "5": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 160
    },
    "6": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 406
    },
    "11": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.79728",
      end_lon: "-122.398436",
      value: 151
    },
    "14": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.795001",
      end_lon: "-122.39997",
      value: 185
    },
    "15": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 1575
    },
    "16": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 656
    },
    "17": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 254
    },
    "21": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 940
    },
    "22": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 386
    },
    "23": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.791464",
      end_lon: "-122.391034",
      value: 214
    },
    "27": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.7880593",
      end_lon: "-122.3918648",
      value: 392
    },
    "30": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 481
    },
    "37": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.78499972833808",
      end_lon: "-122.39593561749642",
      value: 238
    },
    "50": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.780526",
      end_lon: "-122.390288",
      value: 223
    },
    "67": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 211
    },
    "81": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 246
    },
    "90": {
      start_lat: "37.780526",
      start_lon: "-122.390288",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 158
    }
  },
  "52": {
    "5": {
      start_lat: "37.7774157",
      start_lon: "-122.4418376",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 160
    },
    "21": {
      start_lat: "37.7774157",
      start_lon: "-122.4418376",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 216
    },
    "44": {
      start_lat: "37.7774157",
      start_lon: "-122.4418376",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 307
    },
    "66": {
      start_lat: "37.7774157",
      start_lon: "-122.4418376",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 158
    },
    "70": {
      start_lat: "37.7774157",
      start_lon: "-122.4418376",
      end_lat: "37.77331087889723",
      end_lon: "-122.44429260492325",
      value: 206
    }
  },
  "53": {
    "21": {
      start_lat: "37.775946",
      start_lon: "-122.4377775",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 241
    },
    "31": {
      start_lat: "37.775946",
      start_lon: "-122.4377775",
      end_lat: "37.78381270927812",
      end_lon: "-122.43455886840819",
      value: 187
    },
    "53": {
      start_lat: "37.775946",
      start_lon: "-122.4377775",
      end_lat: "37.775946",
      end_lon: "-122.4377775",
      value: 156
    },
    "58": {
      start_lat: "37.775946",
      start_lon: "-122.4377775",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 193
    },
    "70": {
      start_lat: "37.775946",
      start_lon: "-122.4377775",
      end_lat: "37.77331087889723",
      end_lon: "-122.44429260492325",
      value: 356
    }
  },
  "55": {
    "3": {
      start_lat: "37.7770527",
      start_lon: "-122.4295585",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 197
    },
    "43": {
      start_lat: "37.7770527",
      start_lon: "-122.4295585",
      end_lat: "37.7787677",
      end_lon: "-122.4159292",
      value: 404
    },
    "58": {
      start_lat: "37.7770527",
      start_lon: "-122.4295585",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 200
    },
    "285": {
      start_lat: "37.7770527",
      start_lon: "-122.4295585",
      end_lat: "37.78352083526095",
      end_lon: "-122.43115782737732",
      value: 209
    }
  },
  "56": {
    "3": {
      start_lat: "37.77341396997343",
      start_lon: "-122.42731690406801",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 244
    },
    "21": {
      start_lat: "37.77341396997343",
      start_lon: "-122.42731690406801",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 211
    },
    "58": {
      start_lat: "37.77341396997343",
      start_lon: "-122.42731690406801",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 200
    }
  },
  "58": {
    "3": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 1750
    },
    "5": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 853
    },
    "15": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 375
    },
    "16": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 464
    },
    "17": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 309
    },
    "19": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.788975",
      end_lon: "-122.403452",
      value: 413
    },
    "20": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.7913",
      end_lon: "-122.399051",
      value: 227
    },
    "21": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 1127
    },
    "22": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 264
    },
    "25": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.787521780456245",
      end_lon: "-122.39740490913391",
      value: 263
    },
    "30": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 307
    },
    "34": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.7839879",
      end_lon: "-122.412408",
      value: 159
    },
    "36": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.78383",
      end_lon: "-122.39887",
      value: 315
    },
    "41": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.78127",
      end_lon: "-122.41874",
      value: 266
    },
    "43": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.7787677",
      end_lon: "-122.4159292",
      value: 182
    },
    "44": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 517
    },
    "47": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.78095459960753",
      end_lon: "-122.39974915981291",
      value: 200
    },
    "55": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.7770527",
      end_lon: "-122.4295585",
      value: 192
    },
    "58": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 290
    },
    "60": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.77452040113685",
      end_lon: "-122.4094493687153",
      value: 408
    },
    "62": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.77779057034257",
      end_lon: "-122.40643188357353",
      value: 229
    },
    "66": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 163
    },
    "67": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 1863
    },
    "70": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.77331087889723",
      end_lon: "-122.44429260492325",
      value: 179
    },
    "74": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.776434819204745",
      end_lon: "-122.42624402046204",
      value: 260
    },
    "75": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.7737932060887",
      end_lon: "-122.42123901844025",
      value: 346
    },
    "76": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.77166246221617",
      end_lon: "-122.42242321372034",
      value: 207
    },
    "81": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 155
    },
    "86": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.7693053",
      end_lon: "-122.4268256",
      value: 364
    },
    "88": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.7700298",
      end_lon: "-122.4117258",
      value: 624
    },
    "89": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.76921786152374",
      end_lon: "-122.40764558315276",
      value: 295
    },
    "90": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 382
    },
    "97": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.7682646",
      end_lon: "-122.4201102",
      value: 170
    },
    "98": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.765052",
      end_lon: "-122.4218661",
      value: 237
    },
    "109": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.7633158",
      end_lon: "-122.4219039",
      value: 256
    },
    "121": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.7592103",
      end_lon: "-122.4213392",
      value: 210
    },
    "126": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.7616343",
      end_lon: "-122.3906477",
      value: 231
    },
    "284": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.78487208436062",
      end_lon: "-122.40087568759917",
      value: 173
    },
    "285": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.78352083526095",
      end_lon: "-122.43115782737732",
      value: 229
    },
    "324": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.788299978150825",
      end_lon: "-122.40853071212767",
      value: 199
    },
    "350": {
      start_lat: "37.776619",
      start_lon: "-122.417385",
      end_lat: "37.771431362921085",
      end_lon: "-122.40578681230545",
      value: 264
    }
  },
  "59": {
    "3": {
      start_lat: "37.774814",
      start_lon: "-122.418954",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 279
    },
    "5": {
      start_lat: "37.774814",
      start_lon: "-122.418954",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 237
    },
    "43": {
      start_lat: "37.774814",
      start_lon: "-122.418954",
      end_lat: "37.7787677",
      end_lon: "-122.4159292",
      value: 165
    },
    "44": {
      start_lat: "37.774814",
      start_lon: "-122.418954",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 191
    },
    "58": {
      start_lat: "37.774814",
      start_lon: "-122.418954",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 234
    },
    "67": {
      start_lat: "37.774814",
      start_lon: "-122.418954",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 630
    },
    "88": {
      start_lat: "37.774814",
      start_lon: "-122.418954",
      end_lat: "37.7700298",
      end_lon: "-122.4117258",
      value: 211
    },
    "90": {
      start_lat: "37.774814",
      start_lon: "-122.418954",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 270
    },
    "120": {
      start_lat: "37.774814",
      start_lon: "-122.418954",
      end_lat: "37.7614205",
      end_lon: "-122.4264353",
      value: 166
    }
  },
  "60": {
    "3": {
      start_lat: "37.77452040113685",
      start_lon: "-122.4094493687153",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 345
    },
    "21": {
      start_lat: "37.77452040113685",
      start_lon: "-122.4094493687153",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 159
    },
    "22": {
      start_lat: "37.77452040113685",
      start_lon: "-122.4094493687153",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 162
    },
    "30": {
      start_lat: "37.77452040113685",
      start_lon: "-122.4094493687153",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 215
    },
    "36": {
      start_lat: "37.77452040113685",
      start_lon: "-122.4094493687153",
      end_lat: "37.78383",
      end_lon: "-122.39887",
      value: 255
    },
    "58": {
      start_lat: "37.77452040113685",
      start_lon: "-122.4094493687153",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 238
    },
    "66": {
      start_lat: "37.77452040113685",
      start_lon: "-122.4094493687153",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 180
    },
    "67": {
      start_lat: "37.77452040113685",
      start_lon: "-122.4094493687153",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 1060
    },
    "90": {
      start_lat: "37.77452040113685",
      start_lon: "-122.4094493687153",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 190
    },
    "350": {
      start_lat: "37.77452040113685",
      start_lon: "-122.4094493687153",
      end_lat: "37.771431362921085",
      end_lon: "-122.40578681230545",
      value: 202
    }
  },
  "61": {
    "36": {
      start_lat: "37.7765126",
      start_lon: "-122.4113061",
      end_lat: "37.78383",
      end_lon: "-122.39887",
      value: 297
    },
    "58": {
      start_lat: "37.7765126",
      start_lon: "-122.4113061",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 165
    },
    "61": {
      start_lat: "37.7765126",
      start_lon: "-122.4113061",
      end_lat: "37.7765126",
      end_lon: "-122.4113061",
      value: 159
    },
    "67": {
      start_lat: "37.7765126",
      start_lon: "-122.4113061",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 612
    },
    "77": {
      start_lat: "37.7765126",
      start_lon: "-122.4113061",
      end_lat: "37.7735069",
      end_lon: "-122.4160402",
      value: 165
    },
    "88": {
      start_lat: "37.7765126",
      start_lon: "-122.4113061",
      end_lat: "37.7700298",
      end_lon: "-122.4117258",
      value: 188
    },
    "350": {
      start_lat: "37.7765126",
      start_lon: "-122.4113061",
      end_lat: "37.771431362921085",
      end_lon: "-122.40578681230545",
      value: 221
    }
  },
  "62": {
    "3": {
      start_lat: "37.77779057034257",
      start_lon: "-122.40643188357353",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 157
    },
    "5": {
      start_lat: "37.77779057034257",
      start_lon: "-122.40643188357353",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 210
    },
    "19": {
      start_lat: "37.77779057034257",
      start_lon: "-122.40643188357353",
      end_lat: "37.788975",
      end_lon: "-122.403452",
      value: 193
    },
    "21": {
      start_lat: "37.77779057034257",
      start_lon: "-122.40643188357353",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 340
    },
    "30": {
      start_lat: "37.77779057034257",
      start_lon: "-122.40643188357353",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 197
    },
    "36": {
      start_lat: "37.77779057034257",
      start_lon: "-122.40643188357353",
      end_lat: "37.78383",
      end_lon: "-122.39887",
      value: 161
    },
    "44": {
      start_lat: "37.77779057034257",
      start_lon: "-122.40643188357353",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 163
    },
    "47": {
      start_lat: "37.77779057034257",
      start_lon: "-122.40643188357353",
      end_lat: "37.78095459960753",
      end_lon: "-122.39974915981291",
      value: 171
    },
    "58": {
      start_lat: "37.77779057034257",
      start_lon: "-122.40643188357353",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 202
    },
    "64": {
      start_lat: "37.77779057034257",
      start_lon: "-122.40643188357353",
      end_lat: "37.7767539",
      end_lon: "-122.3990176",
      value: 288
    },
    "67": {
      start_lat: "37.77779057034257",
      start_lon: "-122.40643188357353",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 575
    },
    "284": {
      start_lat: "37.77779057034257",
      start_lon: "-122.40643188357353",
      end_lat: "37.78487208436062",
      end_lon: "-122.40087568759917",
      value: 159
    }
  },
  "63": {},
  "64": {
    "3": {
      start_lat: "37.7767539",
      start_lon: "-122.3990176",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 156
    },
    "5": {
      start_lat: "37.7767539",
      start_lon: "-122.3990176",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 1112
    },
    "45": {
      start_lat: "37.7767539",
      start_lon: "-122.3990176",
      end_lat: "37.781752",
      end_lon: "-122.405127",
      value: 179
    },
    "62": {
      start_lat: "37.7767539",
      start_lon: "-122.3990176",
      end_lat: "37.77779057034257",
      end_lon: "-122.40643188357353",
      value: 166
    },
    "67": {
      start_lat: "37.7767539",
      start_lon: "-122.3990176",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 228
    },
    "321": {
      start_lat: "37.7767539",
      start_lon: "-122.3990176",
      end_lat: "37.78014570345598",
      end_lon: "-122.40307085237873",
      value: 308
    }
  },
  "66": {
    "3": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 377
    },
    "5": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 158
    },
    "6": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 434
    },
    "8": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.799953",
      end_lon: "-122.398525",
      value: 171
    },
    "9": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.79857210846256",
      end_lon: "-122.40086898207666",
      value: 168
    },
    "11": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.79728",
      end_lon: "-122.398436",
      value: 201
    },
    "14": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.795001",
      end_lon: "-122.39997",
      value: 172
    },
    "15": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 1476
    },
    "16": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 466
    },
    "17": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 239
    },
    "19": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.788975",
      end_lon: "-122.403452",
      value: 217
    },
    "21": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 894
    },
    "22": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 674
    },
    "23": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.791464",
      end_lon: "-122.391034",
      value: 419
    },
    "24": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.7896767",
      end_lon: "-122.3904285",
      value: 196
    },
    "25": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.787521780456245",
      end_lon: "-122.39740490913391",
      value: 183
    },
    "26": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.78729",
      end_lon: "-122.39438",
      value: 203
    },
    "27": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.7880593",
      end_lon: "-122.3918648",
      value: 442
    },
    "30": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 286
    },
    "36": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.78383",
      end_lon: "-122.39887",
      value: 304
    },
    "37": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.78499972833808",
      end_lon: "-122.39593561749642",
      value: 252
    },
    "66": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 1802
    },
    "89": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.76921786152374",
      end_lon: "-122.40764558315276",
      value: 218
    },
    "90": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 244
    },
    "93": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.7704074",
      end_lon: "-122.3911984",
      value: 185
    },
    "126": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.7616343",
      end_lon: "-122.3906477",
      value: 294
    },
    "284": {
      start_lat: "37.77874161153677",
      start_lon: "-122.39274082710836",
      end_lat: "37.78487208436062",
      end_lon: "-122.40087568759917",
      value: 349
    }
  },
  "67": {
    "3": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 618
    },
    "5": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 427
    },
    "6": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 415
    },
    "8": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.799953",
      end_lon: "-122.398525",
      value: 249
    },
    "9": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.79857210846256",
      end_lon: "-122.40086898207666",
      value: 283
    },
    "11": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.79728",
      end_lon: "-122.398436",
      value: 482
    },
    "13": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.794231",
      end_lon: "-122.402923",
      value: 183
    },
    "14": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.795001",
      end_lon: "-122.39997",
      value: 408
    },
    "15": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 788
    },
    "16": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 530
    },
    "17": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 440
    },
    "19": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.788975",
      end_lon: "-122.403452",
      value: 413
    },
    "20": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.7913",
      end_lon: "-122.399051",
      value: 214
    },
    "21": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 953
    },
    "22": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 788
    },
    "23": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.791464",
      end_lon: "-122.391034",
      value: 769
    },
    "24": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.7896767",
      end_lon: "-122.3904285",
      value: 248
    },
    "25": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.787521780456245",
      end_lon: "-122.39740490913391",
      value: 362
    },
    "27": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.7880593",
      end_lon: "-122.3918648",
      value: 536
    },
    "28": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.78716801474664",
      end_lon: "-122.38809792330358",
      value: 190
    },
    "36": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.78383",
      end_lon: "-122.39887",
      value: 323
    },
    "37": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.78499972833808",
      end_lon: "-122.39593561749642",
      value: 423
    },
    "41": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.78127",
      end_lon: "-122.41874",
      value: 270
    },
    "44": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 336
    },
    "45": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.781752",
      end_lon: "-122.405127",
      value: 429
    },
    "50": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.780526",
      end_lon: "-122.390288",
      value: 237
    },
    "58": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 830
    },
    "59": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.774814",
      end_lon: "-122.418954",
      value: 275
    },
    "60": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.77452040113685",
      end_lon: "-122.4094493687153",
      value: 317
    },
    "61": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.7765126",
      end_lon: "-122.4113061",
      value: 441
    },
    "62": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.77779057034257",
      end_lon: "-122.40643188357353",
      value: 355
    },
    "64": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.7767539",
      end_lon: "-122.3990176",
      value: 175
    },
    "66": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 182
    },
    "67": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 346
    },
    "75": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.7737932060887",
      end_lon: "-122.42123901844025",
      value: 160
    },
    "77": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.7735069",
      end_lon: "-122.4160402",
      value: 409
    },
    "78": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.7737172",
      end_lon: "-122.4116467",
      value: 267
    },
    "79": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.7734919",
      end_lon: "-122.4036725",
      value: 426
    },
    "80": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.7753058",
      end_lon: "-122.39738",
      value: 176
    },
    "88": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.7700298",
      end_lon: "-122.4117258",
      value: 321
    },
    "89": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.76921786152374",
      end_lon: "-122.40764558315276",
      value: 505
    },
    "90": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 1255
    },
    "99": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.7670373",
      end_lon: "-122.4154425",
      value: 160
    },
    "102": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.7668828",
      end_lon: "-122.3995794",
      value: 151
    },
    "114": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.7644783",
      end_lon: "-122.4025701",
      value: 155
    },
    "284": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.78487208436062",
      end_lon: "-122.40087568759917",
      value: 348
    },
    "321": {
      start_lat: "37.7766392",
      start_lon: "-122.3955263",
      end_lat: "37.78014570345598",
      end_lon: "-122.40307085237873",
      value: 469
    }
  },
  "70": {
    "3": {
      start_lat: "37.77331087889723",
      start_lon: "-122.44429260492325",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 403
    },
    "5": {
      start_lat: "37.77331087889723",
      start_lon: "-122.44429260492325",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 159
    },
    "21": {
      start_lat: "37.77331087889723",
      start_lon: "-122.44429260492325",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 212
    },
    "43": {
      start_lat: "37.77331087889723",
      start_lon: "-122.44429260492325",
      end_lat: "37.7787677",
      end_lon: "-122.4159292",
      value: 168
    },
    "44": {
      start_lat: "37.77331087889723",
      start_lon: "-122.44429260492325",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 198
    },
    "53": {
      start_lat: "37.77331087889723",
      start_lon: "-122.44429260492325",
      end_lat: "37.775946",
      end_lon: "-122.4377775",
      value: 235
    },
    "58": {
      start_lat: "37.77331087889723",
      start_lon: "-122.44429260492325",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 265
    },
    "59": {
      start_lat: "37.77331087889723",
      start_lon: "-122.44429260492325",
      end_lat: "37.774814",
      end_lon: "-122.418954",
      value: 201
    },
    "70": {
      start_lat: "37.77331087889723",
      start_lon: "-122.44429260492325",
      end_lat: "37.77331087889723",
      end_lon: "-122.44429260492325",
      value: 1320
    },
    "71": {
      start_lat: "37.77331087889723",
      start_lon: "-122.44429260492325",
      end_lat: "37.7730627",
      end_lon: "-122.4390777",
      value: 360
    },
    "72": {
      start_lat: "37.77331087889723",
      start_lon: "-122.44429260492325",
      end_lat: "37.772406",
      end_lon: "-122.4356498",
      value: 209
    },
    "74": {
      start_lat: "37.77331087889723",
      start_lon: "-122.44429260492325",
      end_lat: "37.776434819204745",
      end_lon: "-122.42624402046204",
      value: 157
    },
    "88": {
      start_lat: "37.77331087889723",
      start_lon: "-122.44429260492325",
      end_lat: "37.7700298",
      end_lon: "-122.4117258",
      value: 152
    },
    "98": {
      start_lat: "37.77331087889723",
      start_lon: "-122.44429260492325",
      end_lat: "37.765052",
      end_lon: "-122.4218661",
      value: 202
    },
    "121": {
      start_lat: "37.77331087889723",
      start_lon: "-122.44429260492325",
      end_lat: "37.7592103",
      end_lon: "-122.4213392",
      value: 159
    }
  },
  "71": {
    "21": {
      start_lat: "37.7730627",
      start_lon: "-122.4390777",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 183
    },
    "70": {
      start_lat: "37.7730627",
      start_lon: "-122.4390777",
      end_lat: "37.77331087889723",
      end_lon: "-122.44429260492325",
      value: 359
    },
    "71": {
      start_lat: "37.7730627",
      start_lon: "-122.4390777",
      end_lat: "37.7730627",
      end_lon: "-122.4390777",
      value: 221
    }
  },
  "72": {
    "5": {
      start_lat: "37.772406",
      start_lon: "-122.4356498",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 257
    },
    "21": {
      start_lat: "37.772406",
      start_lon: "-122.4356498",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 173
    },
    "58": {
      start_lat: "37.772406",
      start_lon: "-122.4356498",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 268
    },
    "70": {
      start_lat: "37.772406",
      start_lon: "-122.4356498",
      end_lat: "37.77331087889723",
      end_lon: "-122.44429260492325",
      value: 183
    }
  },
  "73": {
    "70": {
      start_lat: "37.7717933",
      start_lon: "-122.4337079",
      end_lat: "37.77331087889723",
      end_lon: "-122.44429260492325",
      value: 153
    }
  },
  "74": {
    "3": {
      start_lat: "37.776434819204745",
      start_lon: "-122.42624402046204",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 370
    },
    "19": {
      start_lat: "37.776434819204745",
      start_lon: "-122.42624402046204",
      end_lat: "37.788975",
      end_lon: "-122.403452",
      value: 181
    },
    "21": {
      start_lat: "37.776434819204745",
      start_lon: "-122.42624402046204",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 298
    },
    "43": {
      start_lat: "37.776434819204745",
      start_lon: "-122.42624402046204",
      end_lat: "37.7787677",
      end_lon: "-122.4159292",
      value: 555
    },
    "58": {
      start_lat: "37.776434819204745",
      start_lon: "-122.42624402046204",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 285
    },
    "67": {
      start_lat: "37.776434819204745",
      start_lon: "-122.42624402046204",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 184
    },
    "70": {
      start_lat: "37.776434819204745",
      start_lon: "-122.42624402046204",
      end_lat: "37.77331087889723",
      end_lon: "-122.44429260492325",
      value: 155
    },
    "74": {
      start_lat: "37.776434819204745",
      start_lon: "-122.42624402046204",
      end_lat: "37.776434819204745",
      end_lon: "-122.42624402046204",
      value: 161
    },
    "86": {
      start_lat: "37.776434819204745",
      start_lon: "-122.42624402046204",
      end_lat: "37.7693053",
      end_lon: "-122.4268256",
      value: 194
    },
    "285": {
      start_lat: "37.776434819204745",
      start_lon: "-122.42624402046204",
      end_lat: "37.78352083526095",
      end_lon: "-122.43115782737732",
      value: 169
    }
  },
  "75": {
    "3": {
      start_lat: "37.7737932060887",
      start_lon: "-122.42123901844025",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 279
    },
    "5": {
      start_lat: "37.7737932060887",
      start_lon: "-122.42123901844025",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 165
    },
    "43": {
      start_lat: "37.7737932060887",
      start_lon: "-122.42123901844025",
      end_lat: "37.7787677",
      end_lon: "-122.4159292",
      value: 230
    },
    "58": {
      start_lat: "37.7737932060887",
      start_lon: "-122.42123901844025",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 260
    },
    "67": {
      start_lat: "37.7737932060887",
      start_lon: "-122.42123901844025",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 308
    },
    "86": {
      start_lat: "37.7737932060887",
      start_lon: "-122.42123901844025",
      end_lat: "37.7693053",
      end_lon: "-122.4268256",
      value: 274
    },
    "88": {
      start_lat: "37.7737932060887",
      start_lon: "-122.42123901844025",
      end_lat: "37.7700298",
      end_lon: "-122.4117258",
      value: 165
    },
    "95": {
      start_lat: "37.7737932060887",
      start_lon: "-122.42123901844025",
      end_lat: "37.7662185",
      end_lon: "-122.4310597",
      value: 166
    },
    "98": {
      start_lat: "37.7737932060887",
      start_lon: "-122.42123901844025",
      end_lat: "37.765052",
      end_lon: "-122.4218661",
      value: 199
    }
  },
  "76": {
    "3": {
      start_lat: "37.77166246221617",
      start_lon: "-122.42242321372034",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 234
    },
    "5": {
      start_lat: "37.77166246221617",
      start_lon: "-122.42242321372034",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 341
    },
    "44": {
      start_lat: "37.77166246221617",
      start_lon: "-122.42242321372034",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 194
    },
    "58": {
      start_lat: "37.77166246221617",
      start_lon: "-122.42242321372034",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 343
    },
    "90": {
      start_lat: "37.77166246221617",
      start_lon: "-122.42242321372034",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 199
    },
    "98": {
      start_lat: "37.77166246221617",
      start_lon: "-122.42242321372034",
      end_lat: "37.765052",
      end_lon: "-122.4218661",
      value: 322
    },
    "127": {
      start_lat: "37.77166246221617",
      start_lon: "-122.42242321372034",
      end_lat: "37.7567083",
      end_lon: "-122.421025",
      value: 160
    }
  },
  "77": {
    "58": {
      start_lat: "37.7735069",
      start_lon: "-122.4160402",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 237
    },
    "67": {
      start_lat: "37.7735069",
      start_lon: "-122.4160402",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 874
    }
  },
  "78": {
    "5": {
      start_lat: "37.7737172",
      start_lon: "-122.4116467",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 151
    },
    "21": {
      start_lat: "37.7737172",
      start_lon: "-122.4116467",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 244
    },
    "36": {
      start_lat: "37.7737172",
      start_lon: "-122.4116467",
      end_lat: "37.78383",
      end_lon: "-122.39887",
      value: 320
    },
    "43": {
      start_lat: "37.7737172",
      start_lon: "-122.4116467",
      end_lat: "37.7787677",
      end_lon: "-122.4159292",
      value: 186
    },
    "62": {
      start_lat: "37.7737172",
      start_lon: "-122.4116467",
      end_lat: "37.77779057034257",
      end_lon: "-122.40643188357353",
      value: 164
    },
    "67": {
      start_lat: "37.7737172",
      start_lon: "-122.4116467",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 507
    },
    "321": {
      start_lat: "37.7737172",
      start_lon: "-122.4116467",
      end_lat: "37.78014570345598",
      end_lon: "-122.40307085237873",
      value: 222
    }
  },
  "79": {
    "5": {
      start_lat: "37.7734919",
      start_lon: "-122.4036725",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 206
    },
    "21": {
      start_lat: "37.7734919",
      start_lon: "-122.4036725",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 182
    },
    "36": {
      start_lat: "37.7734919",
      start_lon: "-122.4036725",
      end_lat: "37.78383",
      end_lon: "-122.39887",
      value: 153
    },
    "44": {
      start_lat: "37.7734919",
      start_lon: "-122.4036725",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 821
    },
    "67": {
      start_lat: "37.7734919",
      start_lon: "-122.4036725",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 525
    }
  },
  "80": {
    "5": {
      start_lat: "37.7753058",
      start_lon: "-122.39738",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 245
    },
    "15": {
      start_lat: "37.7753058",
      start_lon: "-122.39738",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 296
    },
    "44": {
      start_lat: "37.7753058",
      start_lon: "-122.39738",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 282
    },
    "58": {
      start_lat: "37.7753058",
      start_lon: "-122.39738",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 196
    },
    "61": {
      start_lat: "37.7753058",
      start_lon: "-122.39738",
      end_lat: "37.7765126",
      end_lon: "-122.4113061",
      value: 163
    },
    "77": {
      start_lat: "37.7753058",
      start_lon: "-122.39738",
      end_lat: "37.7735069",
      end_lon: "-122.4160402",
      value: 246
    },
    "89": {
      start_lat: "37.7753058",
      start_lon: "-122.39738",
      end_lat: "37.76921786152374",
      end_lon: "-122.40764558315276",
      value: 353
    },
    "90": {
      start_lat: "37.7753058",
      start_lon: "-122.39738",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 522
    },
    "114": {
      start_lat: "37.7753058",
      start_lon: "-122.39738",
      end_lat: "37.7644783",
      end_lon: "-122.4025701",
      value: 199
    }
  },
  "81": {
    "3": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 264
    },
    "4": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.78588062694133",
      end_lon: "-122.4089150084319",
      value: 193
    },
    "5": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 455
    },
    "6": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 721
    },
    "8": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.799953",
      end_lon: "-122.398525",
      value: 454
    },
    "9": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.79857210846256",
      end_lon: "-122.40086898207666",
      value: 280
    },
    "11": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.79728",
      end_lon: "-122.398436",
      value: 548
    },
    "14": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.795001",
      end_lon: "-122.39997",
      value: 400
    },
    "15": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 3172
    },
    "16": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 1381
    },
    "17": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 429
    },
    "19": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.788975",
      end_lon: "-122.403452",
      value: 257
    },
    "20": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.7913",
      end_lon: "-122.399051",
      value: 213
    },
    "21": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 653
    },
    "22": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 1261
    },
    "23": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.791464",
      end_lon: "-122.391034",
      value: 1032
    },
    "24": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.7896767",
      end_lon: "-122.3904285",
      value: 503
    },
    "27": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.7880593",
      end_lon: "-122.3918648",
      value: 854
    },
    "28": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.78716801474664",
      end_lon: "-122.38809792330358",
      value: 339
    },
    "36": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.78383",
      end_lon: "-122.39887",
      value: 320
    },
    "37": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.78499972833808",
      end_lon: "-122.39593561749642",
      value: 228
    },
    "49": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.7807601",
      end_lon: "-122.3949894",
      value: 168
    },
    "50": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.780526",
      end_lon: "-122.390288",
      value: 187
    },
    "58": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 304
    },
    "80": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.7753058",
      end_lon: "-122.39738",
      value: 156
    },
    "81": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 368
    },
    "89": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.76921786152374",
      end_lon: "-122.40764558315276",
      value: 158
    },
    "90": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 235
    },
    "93": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.7704074",
      end_lon: "-122.3911984",
      value: 961
    },
    "104": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.76704457969368",
      end_lon: "-122.39083349704742",
      value: 223
    },
    "114": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.7644783",
      end_lon: "-122.4025701",
      value: 170
    },
    "116": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.7648022",
      end_lon: "-122.3947713",
      value: 244
    },
    "126": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.7616343",
      end_lon: "-122.3906477",
      value: 673
    },
    "130": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.75736899005735",
      end_lon: "-122.3920565843582",
      value: 308
    },
    "284": {
      start_lat: "37.77588",
      start_lon: "-122.39317",
      end_lat: "37.78487208436062",
      end_lon: "-122.40087568759917",
      value: 259
    }
  },
  "84": {},
  "85": {
    "58": {
      start_lat: "37.7700831",
      start_lon: "-122.4291557",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 196
    }
  },
  "86": {
    "3": {
      start_lat: "37.7693053",
      start_lon: "-122.4268256",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 287
    },
    "44": {
      start_lat: "37.7693053",
      start_lon: "-122.4268256",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 200
    },
    "58": {
      start_lat: "37.7693053",
      start_lon: "-122.4268256",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 552
    },
    "59": {
      start_lat: "37.7693053",
      start_lon: "-122.4268256",
      end_lat: "37.774814",
      end_lon: "-122.418954",
      value: 154
    },
    "74": {
      start_lat: "37.7693053",
      start_lon: "-122.4268256",
      end_lat: "37.776434819204745",
      end_lon: "-122.42624402046204",
      value: 182
    },
    "120": {
      start_lat: "37.7693053",
      start_lon: "-122.4268256",
      end_lat: "37.7614205",
      end_lon: "-122.4264353",
      value: 183
    },
    "223": {
      start_lat: "37.7693053",
      start_lon: "-122.4268256",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 251
    }
  },
  "87": {},
  "88": {
    "5": {
      start_lat: "37.7700298",
      start_lon: "-122.4117258",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 159
    },
    "27": {
      start_lat: "37.7700298",
      start_lon: "-122.4117258",
      end_lat: "37.7880593",
      end_lon: "-122.3918648",
      value: 163
    },
    "43": {
      start_lat: "37.7700298",
      start_lon: "-122.4117258",
      end_lat: "37.7787677",
      end_lon: "-122.4159292",
      value: 166
    },
    "58": {
      start_lat: "37.7700298",
      start_lon: "-122.4117258",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 466
    },
    "67": {
      start_lat: "37.7700298",
      start_lon: "-122.4117258",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 450
    },
    "75": {
      start_lat: "37.7700298",
      start_lon: "-122.4117258",
      end_lat: "37.7737932060887",
      end_lon: "-122.42123901844025",
      value: 178
    },
    "77": {
      start_lat: "37.7700298",
      start_lon: "-122.4117258",
      end_lat: "37.7735069",
      end_lon: "-122.4160402",
      value: 158
    }
  },
  "89": {
    "30": {
      start_lat: "37.76921786152374",
      start_lon: "-122.40764558315276",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 226
    },
    "58": {
      start_lat: "37.76921786152374",
      start_lon: "-122.40764558315276",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 184
    },
    "66": {
      start_lat: "37.76921786152374",
      start_lon: "-122.40764558315276",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 294
    },
    "67": {
      start_lat: "37.76921786152374",
      start_lon: "-122.40764558315276",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 1270
    },
    "80": {
      start_lat: "37.76921786152374",
      start_lon: "-122.40764558315276",
      end_lat: "37.7753058",
      end_lon: "-122.39738",
      value: 169
    },
    "81": {
      start_lat: "37.76921786152374",
      start_lon: "-122.40764558315276",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 159
    },
    "99": {
      start_lat: "37.76921786152374",
      start_lon: "-122.40764558315276",
      end_lat: "37.7670373",
      end_lon: "-122.4154425",
      value: 161
    },
    "115": {
      start_lat: "37.76921786152374",
      start_lon: "-122.40764558315276",
      end_lat: "37.7650259",
      end_lon: "-122.3987734",
      value: 173
    }
  },
  "90": {
    "3": {
      start_lat: "37.771058",
      start_lon: "-122.402717",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 268
    },
    "5": {
      start_lat: "37.771058",
      start_lon: "-122.402717",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 209
    },
    "15": {
      start_lat: "37.771058",
      start_lon: "-122.402717",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 665
    },
    "21": {
      start_lat: "37.771058",
      start_lon: "-122.402717",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 290
    },
    "22": {
      start_lat: "37.771058",
      start_lon: "-122.402717",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 184
    },
    "30": {
      start_lat: "37.771058",
      start_lon: "-122.402717",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 358
    },
    "43": {
      start_lat: "37.771058",
      start_lon: "-122.402717",
      end_lat: "37.7787677",
      end_lon: "-122.4159292",
      value: 260
    },
    "44": {
      start_lat: "37.771058",
      start_lon: "-122.402717",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 957
    },
    "58": {
      start_lat: "37.771058",
      start_lon: "-122.402717",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 450
    },
    "59": {
      start_lat: "37.771058",
      start_lon: "-122.402717",
      end_lat: "37.774814",
      end_lon: "-122.418954",
      value: 329
    },
    "66": {
      start_lat: "37.771058",
      start_lon: "-122.402717",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 246
    },
    "67": {
      start_lat: "37.771058",
      start_lon: "-122.402717",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 1842
    },
    "76": {
      start_lat: "37.771058",
      start_lon: "-122.402717",
      end_lat: "37.77166246221617",
      end_lon: "-122.42242321372034",
      value: 240
    },
    "80": {
      start_lat: "37.771058",
      start_lon: "-122.402717",
      end_lat: "37.7753058",
      end_lon: "-122.39738",
      value: 155
    },
    "81": {
      start_lat: "37.771058",
      start_lon: "-122.402717",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 163
    }
  },
  "91": {},
  "92": {
    "15": {
      start_lat: "37.772300631747626",
      start_lon: "-122.39302754402159",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 213
    },
    "22": {
      start_lat: "37.772300631747626",
      start_lon: "-122.39302754402159",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 156
    }
  },
  "93": {
    "15": {
      start_lat: "37.7704074",
      start_lon: "-122.3911984",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 1341
    },
    "16": {
      start_lat: "37.7704074",
      start_lon: "-122.3911984",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 732
    },
    "17": {
      start_lat: "37.7704074",
      start_lon: "-122.3911984",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 478
    },
    "21": {
      start_lat: "37.7704074",
      start_lon: "-122.3911984",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 243
    },
    "22": {
      start_lat: "37.7704074",
      start_lon: "-122.3911984",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 258
    },
    "23": {
      start_lat: "37.7704074",
      start_lon: "-122.3911984",
      end_lat: "37.791464",
      end_lon: "-122.391034",
      value: 265
    },
    "24": {
      start_lat: "37.7704074",
      start_lon: "-122.3911984",
      end_lat: "37.7896767",
      end_lon: "-122.3904285",
      value: 352
    },
    "27": {
      start_lat: "37.7704074",
      start_lon: "-122.3911984",
      end_lat: "37.7880593",
      end_lon: "-122.3918648",
      value: 664
    },
    "30": {
      start_lat: "37.7704074",
      start_lon: "-122.3911984",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 318
    },
    "81": {
      start_lat: "37.7704074",
      start_lon: "-122.3911984",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 1038
    },
    "93": {
      start_lat: "37.7704074",
      start_lon: "-122.3911984",
      end_lat: "37.7704074",
      end_lon: "-122.3911984",
      value: 225
    },
    "114": {
      start_lat: "37.7704074",
      start_lon: "-122.3911984",
      end_lat: "37.7644783",
      end_lon: "-122.4025701",
      value: 327
    },
    "126": {
      start_lat: "37.7704074",
      start_lon: "-122.3911984",
      end_lat: "37.7616343",
      end_lon: "-122.3906477",
      value: 599
    },
    "130": {
      start_lat: "37.7704074",
      start_lon: "-122.3911984",
      end_lat: "37.75736899005735",
      end_lon: "-122.3920565843582",
      value: 177
    }
  },
  "95": {
    "3": {
      start_lat: "37.7662185",
      start_lon: "-122.4310597",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 178
    },
    "58": {
      start_lat: "37.7662185",
      start_lon: "-122.4310597",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 192
    },
    "67": {
      start_lat: "37.7662185",
      start_lon: "-122.4310597",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 166
    }
  },
  "96": {
    "58": {
      start_lat: "37.7662102",
      start_lon: "-122.4266136",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 301
    },
    "67": {
      start_lat: "37.7662102",
      start_lon: "-122.4266136",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 161
    },
    "112": {
      start_lat: "37.7662102",
      start_lon: "-122.4266136",
      end_lat: "37.7638471",
      end_lon: "-122.4130036",
      value: 151
    },
    "120": {
      start_lat: "37.7662102",
      start_lon: "-122.4266136",
      end_lat: "37.7614205",
      end_lon: "-122.4264353",
      value: 158
    },
    "223": {
      start_lat: "37.7662102",
      start_lon: "-122.4266136",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 224
    }
  },
  "97": {
    "36": {
      start_lat: "37.7682646",
      start_lon: "-122.4201102",
      end_lat: "37.78383",
      end_lon: "-122.39887",
      value: 170
    },
    "58": {
      start_lat: "37.7682646",
      start_lon: "-122.4201102",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 185
    },
    "66": {
      start_lat: "37.7682646",
      start_lon: "-122.4201102",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 163
    },
    "67": {
      start_lat: "37.7682646",
      start_lon: "-122.4201102",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 314
    },
    "89": {
      start_lat: "37.7682646",
      start_lon: "-122.4201102",
      end_lat: "37.76921786152374",
      end_lon: "-122.40764558315276",
      value: 168
    }
  },
  "98": {
    "58": {
      start_lat: "37.765052",
      start_lon: "-122.4218661",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 363
    },
    "67": {
      start_lat: "37.765052",
      start_lon: "-122.4218661",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 154
    },
    "75": {
      start_lat: "37.765052",
      start_lon: "-122.4218661",
      end_lat: "37.7737932060887",
      end_lon: "-122.42123901844025",
      value: 160
    },
    "76": {
      start_lat: "37.765052",
      start_lon: "-122.4218661",
      end_lat: "37.77166246221617",
      end_lon: "-122.42242321372034",
      value: 435
    },
    "90": {
      start_lat: "37.765052",
      start_lon: "-122.4218661",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 214
    },
    "121": {
      start_lat: "37.765052",
      start_lon: "-122.4218661",
      end_lat: "37.7592103",
      end_lon: "-122.4213392",
      value: 169
    },
    "134": {
      start_lat: "37.765052",
      start_lon: "-122.4218661",
      end_lat: "37.7524278",
      end_lon: "-122.4206278",
      value: 195
    }
  },
  "99": {
    "67": {
      start_lat: "37.7670373",
      start_lon: "-122.4154425",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 238
    },
    "223": {
      start_lat: "37.7670373",
      start_lon: "-122.4154425",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 177
    }
  },
  "100": {
    "67": {
      start_lat: "37.7671004",
      start_lon: "-122.410662",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 293
    },
    "223": {
      start_lat: "37.7671004",
      start_lon: "-122.410662",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 226
    }
  },
  "101": {
    "67": {
      start_lat: "37.76600774273675",
      start_lon: "-122.40567684173583",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 258
    },
    "108": {
      start_lat: "37.76600774273675",
      start_lon: "-122.40567684173583",
      end_lat: "37.76471008581914",
      end_lon: "-122.41995692253113",
      value: 161
    },
    "223": {
      start_lat: "37.76600774273675",
      start_lon: "-122.40567684173583",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 214
    }
  },
  "102": {
    "44": {
      start_lat: "37.7668828",
      start_lon: "-122.3995794",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 216
    },
    "67": {
      start_lat: "37.7668828",
      start_lon: "-122.3995794",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 177
    }
  },
  "104": {
    "15": {
      start_lat: "37.76704457969368",
      start_lon: "-122.39083349704742",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 424
    },
    "16": {
      start_lat: "37.76704457969368",
      start_lon: "-122.39083349704742",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 283
    },
    "81": {
      start_lat: "37.76704457969368",
      start_lon: "-122.39083349704742",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 339
    }
  },
  "105": {
    "223": {
      start_lat: "37.764285",
      start_lon: "-122.4318042",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 260
    }
  },
  "106": {
    "223": {
      start_lat: "37.7632417",
      start_lon: "-122.4306746",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 236
    }
  },
  "107": {
    "223": {
      start_lat: "37.7630152",
      start_lon: "-122.4264968",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 218
    }
  },
  "108": {
    "112": {
      start_lat: "37.76471008581914",
      start_lon: "-122.41995692253113",
      end_lat: "37.7638471",
      end_lon: "-122.4130036",
      value: 345
    },
    "114": {
      start_lat: "37.76471008581914",
      start_lon: "-122.41995692253113",
      end_lat: "37.7644783",
      end_lon: "-122.4025701",
      value: 385
    },
    "122": {
      start_lat: "37.76471008581914",
      start_lon: "-122.41995692253113",
      end_lat: "37.760299",
      end_lon: "-122.418892",
      value: 187
    },
    "123": {
      start_lat: "37.76471008581914",
      start_lon: "-122.41995692253113",
      end_lat: "37.7605936",
      end_lon: "-122.4148171",
      value: 348
    },
    "124": {
      start_lat: "37.76471008581914",
      start_lon: "-122.41995692253113",
      end_lat: "37.7604469",
      end_lon: "-122.410807",
      value: 403
    },
    "129": {
      start_lat: "37.76471008581914",
      start_lon: "-122.41995692253113",
      end_lat: "37.758862",
      end_lon: "-122.412544",
      value: 156
    }
  },
  "109": {
    "3": {
      start_lat: "37.7633158",
      start_lon: "-122.4219039",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 158
    },
    "44": {
      start_lat: "37.7633158",
      start_lon: "-122.4219039",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 171
    },
    "58": {
      start_lat: "37.7633158",
      start_lon: "-122.4219039",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 426
    },
    "89": {
      start_lat: "37.7633158",
      start_lon: "-122.4219039",
      end_lat: "37.76921786152374",
      end_lon: "-122.40764558315276",
      value: 201
    },
    "134": {
      start_lat: "37.7633158",
      start_lon: "-122.4219039",
      end_lat: "37.7524278",
      end_lon: "-122.4206278",
      value: 183
    }
  },
  "110": {},
  "112": {
    "108": {
      start_lat: "37.7638471",
      start_lon: "-122.4130036",
      end_lat: "37.76471008581914",
      end_lon: "-122.41995692253113",
      value: 188
    },
    "116": {
      start_lat: "37.7638471",
      start_lon: "-122.4130036",
      end_lat: "37.7648022",
      end_lon: "-122.3947713",
      value: 153
    },
    "125": {
      start_lat: "37.7638471",
      start_lon: "-122.4130036",
      end_lat: "37.7592005",
      end_lon: "-122.409851",
      value: 161
    },
    "129": {
      start_lat: "37.7638471",
      start_lon: "-122.4130036",
      end_lat: "37.758862",
      end_lon: "-122.412544",
      value: 247
    },
    "139": {
      start_lat: "37.7638471",
      start_lon: "-122.4130036",
      end_lat: "37.7510171",
      end_lon: "-122.4119009",
      value: 175
    },
    "223": {
      start_lat: "37.7638471",
      start_lon: "-122.4130036",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 201
    }
  },
  "113": {},
  "114": {
    "5": {
      start_lat: "37.7644783",
      start_lon: "-122.4025701",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 170
    },
    "49": {
      start_lat: "37.7644783",
      start_lon: "-122.4025701",
      end_lat: "37.7807601",
      end_lon: "-122.3949894",
      value: 240
    },
    "67": {
      start_lat: "37.7644783",
      start_lon: "-122.4025701",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 415
    },
    "81": {
      start_lat: "37.7644783",
      start_lon: "-122.4025701",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 178
    },
    "93": {
      start_lat: "37.7644783",
      start_lon: "-122.4025701",
      end_lat: "37.7704074",
      end_lon: "-122.3911984",
      value: 429
    },
    "108": {
      start_lat: "37.7644783",
      start_lon: "-122.4025701",
      end_lat: "37.76471008581914",
      end_lon: "-122.41995692253113",
      value: 379
    },
    "116": {
      start_lat: "37.7644783",
      start_lon: "-122.4025701",
      end_lat: "37.7648022",
      end_lon: "-122.3947713",
      value: 280
    },
    "126": {
      start_lat: "37.7644783",
      start_lon: "-122.4025701",
      end_lat: "37.7616343",
      end_lon: "-122.3906477",
      value: 334
    },
    "130": {
      start_lat: "37.7644783",
      start_lon: "-122.4025701",
      end_lat: "37.75736899005735",
      end_lon: "-122.3920565843582",
      value: 208
    },
    "223": {
      start_lat: "37.7644783",
      start_lon: "-122.4025701",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 165
    }
  },
  "115": {
    "22": {
      start_lat: "37.7650259",
      start_lon: "-122.3987734",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 186
    },
    "89": {
      start_lat: "37.7650259",
      start_lon: "-122.3987734",
      end_lat: "37.76921786152374",
      end_lon: "-122.40764558315276",
      value: 193
    },
    "126": {
      start_lat: "37.7650259",
      start_lon: "-122.3987734",
      end_lat: "37.7616343",
      end_lon: "-122.3906477",
      value: 156
    },
    "130": {
      start_lat: "37.7650259",
      start_lon: "-122.3987734",
      end_lat: "37.75736899005735",
      end_lon: "-122.3920565843582",
      value: 238
    }
  },
  "116": {
    "81": {
      start_lat: "37.7648022",
      start_lon: "-122.3947713",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 272
    },
    "112": {
      start_lat: "37.7648022",
      start_lon: "-122.3947713",
      end_lat: "37.7638471",
      end_lon: "-122.4130036",
      value: 173
    },
    "114": {
      start_lat: "37.7648022",
      start_lon: "-122.3947713",
      end_lat: "37.7644783",
      end_lon: "-122.4025701",
      value: 237
    }
  },
  "118": {
    "223": {
      start_lat: "37.7591769",
      start_lon: "-122.4369431",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 155
    }
  },
  "119": {
    "89": {
      start_lat: "37.7610471",
      start_lon: "-122.4326417",
      end_lat: "37.76921786152374",
      end_lon: "-122.40764558315276",
      value: 160
    },
    "120": {
      start_lat: "37.7610471",
      start_lon: "-122.4326417",
      end_lat: "37.7614205",
      end_lon: "-122.4264353",
      value: 219
    },
    "223": {
      start_lat: "37.7610471",
      start_lon: "-122.4326417",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 252
    }
  },
  "120": {
    "119": {
      start_lat: "37.7614205",
      start_lon: "-122.4264353",
      end_lat: "37.7610471",
      end_lon: "-122.4326417",
      value: 170
    },
    "120": {
      start_lat: "37.7614205",
      start_lon: "-122.4264353",
      end_lat: "37.7614205",
      end_lon: "-122.4264353",
      value: 170
    },
    "223": {
      start_lat: "37.7614205",
      start_lon: "-122.4264353",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 261
    }
  },
  "121": {
    "3": {
      start_lat: "37.7592103",
      start_lon: "-122.4213392",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 163
    },
    "58": {
      start_lat: "37.7592103",
      start_lon: "-122.4213392",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 152
    },
    "98": {
      start_lat: "37.7592103",
      start_lon: "-122.4213392",
      end_lat: "37.765052",
      end_lon: "-122.4218661",
      value: 153
    },
    "134": {
      start_lat: "37.7592103",
      start_lon: "-122.4213392",
      end_lat: "37.7524278",
      end_lon: "-122.4206278",
      value: 345
    },
    "141": {
      start_lat: "37.7592103",
      start_lon: "-122.4213392",
      end_lat: "37.7479981",
      end_lon: "-122.4202187",
      value: 300
    },
    "223": {
      start_lat: "37.7592103",
      start_lon: "-122.4213392",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 255
    }
  },
  "122": {
    "67": {
      start_lat: "37.760299",
      start_lon: "-122.418892",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 162
    },
    "108": {
      start_lat: "37.760299",
      start_lon: "-122.418892",
      end_lat: "37.76471008581914",
      end_lon: "-122.41995692253113",
      value: 156
    }
  },
  "123": {
    "3": {
      start_lat: "37.7605936",
      start_lon: "-122.4148171",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 165
    },
    "21": {
      start_lat: "37.7605936",
      start_lon: "-122.4148171",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 157
    },
    "44": {
      start_lat: "37.7605936",
      start_lon: "-122.4148171",
      end_lat: "37.7810737",
      end_lon: "-122.4117382",
      value: 173
    },
    "67": {
      start_lat: "37.7605936",
      start_lon: "-122.4148171",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 291
    },
    "108": {
      start_lat: "37.7605936",
      start_lon: "-122.4148171",
      end_lat: "37.76471008581914",
      end_lon: "-122.41995692253113",
      value: 349
    },
    "223": {
      start_lat: "37.7605936",
      start_lon: "-122.4148171",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 202
    }
  },
  "124": {
    "108": {
      start_lat: "37.7604469",
      start_lon: "-122.410807",
      end_lat: "37.76471008581914",
      end_lon: "-122.41995692253113",
      value: 306
    },
    "223": {
      start_lat: "37.7604469",
      start_lon: "-122.410807",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 295
    }
  },
  "125": {
    "108": {
      start_lat: "37.7592005",
      start_lon: "-122.409851",
      end_lat: "37.76471008581914",
      end_lon: "-122.41995692253113",
      value: 206
    },
    "223": {
      start_lat: "37.7592005",
      start_lon: "-122.409851",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 169
    }
  },
  "126": {
    "15": {
      start_lat: "37.7616343",
      start_lon: "-122.3906477",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 582
    },
    "16": {
      start_lat: "37.7616343",
      start_lon: "-122.3906477",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 388
    },
    "20": {
      start_lat: "37.7616343",
      start_lon: "-122.3906477",
      end_lat: "37.7913",
      end_lon: "-122.399051",
      value: 173
    },
    "22": {
      start_lat: "37.7616343",
      start_lon: "-122.3906477",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 223
    },
    "23": {
      start_lat: "37.7616343",
      start_lon: "-122.3906477",
      end_lat: "37.791464",
      end_lon: "-122.391034",
      value: 185
    },
    "24": {
      start_lat: "37.7616343",
      start_lon: "-122.3906477",
      end_lat: "37.7896767",
      end_lon: "-122.3904285",
      value: 151
    },
    "58": {
      start_lat: "37.7616343",
      start_lon: "-122.3906477",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 209
    },
    "66": {
      start_lat: "37.7616343",
      start_lon: "-122.3906477",
      end_lat: "37.77874161153677",
      end_lon: "-122.39274082710836",
      value: 325
    },
    "81": {
      start_lat: "37.7616343",
      start_lon: "-122.3906477",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 743
    },
    "93": {
      start_lat: "37.7616343",
      start_lon: "-122.3906477",
      end_lat: "37.7704074",
      end_lon: "-122.3911984",
      value: 628
    },
    "114": {
      start_lat: "37.7616343",
      start_lon: "-122.3906477",
      end_lat: "37.7644783",
      end_lon: "-122.4025701",
      value: 357
    },
    "115": {
      start_lat: "37.7616343",
      start_lon: "-122.3906477",
      end_lat: "37.7650259",
      end_lon: "-122.3987734",
      value: 184
    },
    "116": {
      start_lat: "37.7616343",
      start_lon: "-122.3906477",
      end_lat: "37.7648022",
      end_lon: "-122.3947713",
      value: 173
    },
    "126": {
      start_lat: "37.7616343",
      start_lon: "-122.3906477",
      end_lat: "37.7616343",
      end_lon: "-122.3906477",
      value: 175
    },
    "130": {
      start_lat: "37.7616343",
      start_lon: "-122.3906477",
      end_lat: "37.75736899005735",
      end_lon: "-122.3920565843582",
      value: 237
    }
  },
  "127": {
    "58": {
      start_lat: "37.7567083",
      start_lon: "-122.421025",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 204
    },
    "98": {
      start_lat: "37.7567083",
      start_lon: "-122.421025",
      end_lat: "37.765052",
      end_lon: "-122.4218661",
      value: 204
    },
    "109": {
      start_lat: "37.7567083",
      start_lon: "-122.421025",
      end_lat: "37.7633158",
      end_lon: "-122.4219039",
      value: 202
    },
    "134": {
      start_lat: "37.7567083",
      start_lon: "-122.421025",
      end_lat: "37.7524278",
      end_lon: "-122.4206278",
      value: 236
    },
    "141": {
      start_lat: "37.7567083",
      start_lon: "-122.421025",
      end_lat: "37.7479981",
      end_lon: "-122.4202187",
      value: 366
    },
    "223": {
      start_lat: "37.7567083",
      start_lon: "-122.421025",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 209
    }
  },
  "129": {
    "108": {
      start_lat: "37.758862",
      start_lon: "-122.412544",
      end_lat: "37.76471008581914",
      end_lon: "-122.41995692253113",
      value: 243
    },
    "112": {
      start_lat: "37.758862",
      start_lon: "-122.412544",
      end_lat: "37.7638471",
      end_lon: "-122.4130036",
      value: 182
    },
    "133": {
      start_lat: "37.758862",
      start_lon: "-122.412544",
      end_lat: "37.7552126",
      end_lon: "-122.4209752",
      value: 252
    },
    "134": {
      start_lat: "37.758862",
      start_lon: "-122.412544",
      end_lat: "37.7524278",
      end_lon: "-122.4206278",
      value: 193
    },
    "139": {
      start_lat: "37.758862",
      start_lon: "-122.412544",
      end_lat: "37.7510171",
      end_lon: "-122.4119009",
      value: 256
    },
    "144": {
      start_lat: "37.758862",
      start_lon: "-122.412544",
      end_lat: "37.7472996",
      end_lon: "-122.4114029",
      value: 151
    },
    "223": {
      start_lat: "37.758862",
      start_lon: "-122.412544",
      end_lat: "37.7647652154977",
      end_lon: "-122.42009103298186",
      value: 171
    }
  },
  "130": {
    "15": {
      start_lat: "37.75736899005735",
      start_lon: "-122.3920565843582",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 339
    },
    "81": {
      start_lat: "37.75736899005735",
      start_lon: "-122.3920565843582",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 208
    },
    "114": {
      start_lat: "37.75736899005735",
      start_lon: "-122.3920565843582",
      end_lat: "37.7644783",
      end_lon: "-122.4025701",
      value: 168
    },
    "115": {
      start_lat: "37.75736899005735",
      start_lon: "-122.3920565843582",
      end_lat: "37.7650259",
      end_lon: "-122.3987734",
      value: 187
    },
    "126": {
      start_lat: "37.75736899005735",
      start_lon: "-122.3920565843582",
      end_lat: "37.7616343",
      end_lon: "-122.3906477",
      value: 207
    },
    "144": {
      start_lat: "37.75736899005735",
      start_lon: "-122.3920565843582",
      end_lat: "37.7472996",
      end_lon: "-122.4114029",
      value: 204
    }
  },
  "132": {
    "134": {
      start_lat: "37.7518194",
      start_lon: "-122.4266139",
      end_lat: "37.7524278",
      end_lon: "-122.4206278",
      value: 512
    },
    "137": {
      start_lat: "37.7518194",
      start_lon: "-122.4266139",
      end_lat: "37.750506",
      end_lon: "-122.4339496",
      value: 237
    }
  },
  "133": {
    "98": {
      start_lat: "37.7552126",
      start_lon: "-122.4209752",
      end_lat: "37.765052",
      end_lon: "-122.4218661",
      value: 190
    },
    "129": {
      start_lat: "37.7552126",
      start_lon: "-122.4209752",
      end_lat: "37.758862",
      end_lon: "-122.412544",
      value: 278
    },
    "134": {
      start_lat: "37.7552126",
      start_lon: "-122.4209752",
      end_lat: "37.7524278",
      end_lon: "-122.4206278",
      value: 228
    },
    "141": {
      start_lat: "37.7552126",
      start_lon: "-122.4209752",
      end_lat: "37.7479981",
      end_lon: "-122.4202187",
      value: 312
    },
    "147": {
      start_lat: "37.7552126",
      start_lon: "-122.4209752",
      end_lat: "37.7440667",
      end_lon: "-122.4214722",
      value: 161
    }
  },
  "134": {
    "3": {
      start_lat: "37.7524278",
      start_lon: "-122.4206278",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 168
    },
    "21": {
      start_lat: "37.7524278",
      start_lon: "-122.4206278",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 155
    },
    "42": {
      start_lat: "37.7524278",
      start_lon: "-122.4206278",
      end_lat: "37.77865",
      end_lon: "-122.41823",
      value: 262
    },
    "90": {
      start_lat: "37.7524278",
      start_lon: "-122.4206278",
      end_lat: "37.771058",
      end_lon: "-122.402717",
      value: 165
    },
    "98": {
      start_lat: "37.7524278",
      start_lon: "-122.4206278",
      end_lat: "37.765052",
      end_lon: "-122.4218661",
      value: 355
    },
    "109": {
      start_lat: "37.7524278",
      start_lon: "-122.4206278",
      end_lat: "37.7633158",
      end_lon: "-122.4219039",
      value: 238
    },
    "120": {
      start_lat: "37.7524278",
      start_lon: "-122.4206278",
      end_lat: "37.7614205",
      end_lon: "-122.4264353",
      value: 156
    },
    "121": {
      start_lat: "37.7524278",
      start_lon: "-122.4206278",
      end_lat: "37.7592103",
      end_lon: "-122.4213392",
      value: 362
    },
    "125": {
      start_lat: "37.7524278",
      start_lon: "-122.4206278",
      end_lat: "37.7592005",
      end_lon: "-122.409851",
      value: 203
    },
    "127": {
      start_lat: "37.7524278",
      start_lon: "-122.4206278",
      end_lat: "37.7567083",
      end_lon: "-122.421025",
      value: 531
    },
    "133": {
      start_lat: "37.7524278",
      start_lon: "-122.4206278",
      end_lat: "37.7552126",
      end_lon: "-122.4209752",
      value: 217
    },
    "137": {
      start_lat: "37.7524278",
      start_lon: "-122.4206278",
      end_lat: "37.750506",
      end_lon: "-122.4339496",
      value: 163
    },
    "141": {
      start_lat: "37.7524278",
      start_lon: "-122.4206278",
      end_lat: "37.7479981",
      end_lon: "-122.4202187",
      value: 230
    },
    "144": {
      start_lat: "37.7524278",
      start_lon: "-122.4206278",
      end_lat: "37.7472996",
      end_lon: "-122.4114029",
      value: 259
    },
    "145": {
      start_lat: "37.7524278",
      start_lon: "-122.4206278",
      end_lat: "37.7436839",
      end_lon: "-122.4268059",
      value: 547
    },
    "146": {
      start_lat: "37.7524278",
      start_lon: "-122.4206278",
      end_lat: "37.7423139",
      end_lon: "-122.4231805",
      value: 156
    },
    "147": {
      start_lat: "37.7524278",
      start_lon: "-122.4206278",
      end_lat: "37.7440667",
      end_lon: "-122.4214722",
      value: 567
    }
  },
  "137": {
    "134": {
      start_lat: "37.750506",
      start_lon: "-122.4339496",
      end_lat: "37.7524278",
      end_lon: "-122.4206278",
      value: 428
    },
    "138": {
      start_lat: "37.750506",
      start_lon: "-122.4339496",
      end_lat: "37.7509004",
      end_lon: "-122.4274114",
      value: 378
    }
  },
  "138": {
    "134": {
      start_lat: "37.7509004",
      start_lon: "-122.4274114",
      end_lat: "37.7524278",
      end_lon: "-122.4206278",
      value: 435
    },
    "145": {
      start_lat: "37.7509004",
      start_lon: "-122.4274114",
      end_lat: "37.7436839",
      end_lon: "-122.4268059",
      value: 161
    }
  },
  "139": {
    "93": {
      start_lat: "37.7510171",
      start_lon: "-122.4119009",
      end_lat: "37.7704074",
      end_lon: "-122.3911984",
      value: 154
    },
    "112": {
      start_lat: "37.7510171",
      start_lon: "-122.4119009",
      end_lat: "37.7638471",
      end_lon: "-122.4130036",
      value: 158
    },
    "129": {
      start_lat: "37.7510171",
      start_lon: "-122.4119009",
      end_lat: "37.758862",
      end_lon: "-122.412544",
      value: 252
    }
  },
  "140": {
    "134": {
      start_lat: "37.7478584",
      start_lon: "-122.4249863",
      end_lat: "37.7524278",
      end_lon: "-122.4206278",
      value: 160
    }
  },
  "141": {
    "109": {
      start_lat: "37.7479981",
      start_lon: "-122.4202187",
      end_lat: "37.7633158",
      end_lon: "-122.4219039",
      value: 154
    },
    "121": {
      start_lat: "37.7479981",
      start_lon: "-122.4202187",
      end_lat: "37.7592103",
      end_lon: "-122.4213392",
      value: 246
    },
    "127": {
      start_lat: "37.7479981",
      start_lon: "-122.4202187",
      end_lat: "37.7567083",
      end_lon: "-122.421025",
      value: 454
    },
    "133": {
      start_lat: "37.7479981",
      start_lon: "-122.4202187",
      end_lat: "37.7552126",
      end_lon: "-122.4209752",
      value: 169
    },
    "134": {
      start_lat: "37.7479981",
      start_lon: "-122.4202187",
      end_lat: "37.7524278",
      end_lon: "-122.4206278",
      value: 328
    }
  },
  "144": {
    "58": {
      start_lat: "37.7472996",
      start_lon: "-122.4114029",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 164
    },
    "129": {
      start_lat: "37.7472996",
      start_lon: "-122.4114029",
      end_lat: "37.758862",
      end_lon: "-122.412544",
      value: 159
    },
    "130": {
      start_lat: "37.7472996",
      start_lon: "-122.4114029",
      end_lat: "37.75736899005735",
      end_lon: "-122.3920565843582",
      value: 245
    },
    "134": {
      start_lat: "37.7472996",
      start_lon: "-122.4114029",
      end_lat: "37.7524278",
      end_lon: "-122.4206278",
      value: 249
    }
  },
  "145": {
    "134": {
      start_lat: "37.7436839",
      start_lon: "-122.4268059",
      end_lat: "37.7524278",
      end_lon: "-122.4206278",
      value: 547
    },
    "147": {
      start_lat: "37.7436839",
      start_lon: "-122.4268059",
      end_lat: "37.7440667",
      end_lon: "-122.4214722",
      value: 174
    }
  },
  "146": {
    "134": {
      start_lat: "37.7423139",
      start_lon: "-122.4231805",
      end_lat: "37.7524278",
      end_lon: "-122.4206278",
      value: 277
    }
  },
  "147": {
    "98": {
      start_lat: "37.7440667",
      start_lon: "-122.4214722",
      end_lat: "37.765052",
      end_lon: "-122.4218661",
      value: 178
    },
    "134": {
      start_lat: "37.7440667",
      start_lon: "-122.4214722",
      end_lat: "37.7524278",
      end_lon: "-122.4206278",
      value: 685
    }
  },
  "148": {
    "148": {
      start_lat: "37.8297046",
      start_lon: "-122.2876102",
      end_lat: "37.8297046",
      end_lon: "-122.2876102",
      value: 155
    }
  },
  "149": {
    "151": {
      start_lat: "37.8312752",
      start_lon: "-122.2856333",
      end_lat: "37.8361823",
      end_lon: "-122.2871801",
      value: 168
    }
  },
  "150": {
    "176": {
      start_lat: "37.8312769",
      start_lon: "-122.2782669",
      end_lat: "37.82840997305853",
      end_lon: "-122.26631462574005",
      value: 402
    }
  },
  "151": {},
  "152": {},
  "153": {
    "160": {
      start_lat: "37.8409452",
      start_lon: "-122.2913604",
      end_lat: "37.8053183",
      end_lon: "-122.2948365",
      value: 230
    }
  },
  "154": {},
  "155": {
    "155": {
      start_lat: "37.84052116694969",
      start_lon: "-122.29352831840515",
      end_lat: "37.84052116694969",
      end_lon: "-122.29352831840515",
      value: 189
    },
    "157": {
      start_lat: "37.84052116694969",
      start_lon: "-122.29352831840515",
      end_lat: "37.8467842",
      end_lon: "-122.2913761",
      value: 160
    }
  },
  "156": {},
  "157": {
    "155": {
      start_lat: "37.8467842",
      start_lon: "-122.2913761",
      end_lat: "37.84052116694969",
      end_lon: "-122.29352831840515",
      value: 155
    }
  },
  "158": {
    "173": {
      start_lat: "37.8332786",
      start_lon: "-122.2634901",
      end_lat: "37.8403643",
      end_lon: "-122.2644881",
      value: 217
    },
    "176": {
      start_lat: "37.8332786",
      start_lon: "-122.2634901",
      end_lat: "37.82840997305853",
      end_lon: "-122.26631462574005",
      value: 491
    },
    "204": {
      start_lat: "37.8332786",
      start_lon: "-122.2634901",
      end_lat: "37.8401858",
      end_lon: "-122.2618225",
      value: 254
    }
  },
  "159": {
    "160": {
      start_lat: "37.8160598",
      start_lon: "-122.2782444",
      end_lat: "37.8053183",
      end_lon: "-122.2948365",
      value: 317
    },
    "182": {
      start_lat: "37.8160598",
      start_lon: "-122.2782444",
      end_lat: "37.8090126",
      end_lon: "-122.2682473",
      value: 216
    }
  },
  "160": {
    "153": {
      start_lat: "37.8053183",
      start_lon: "-122.2948365",
      end_lat: "37.8409452",
      end_lon: "-122.2913604",
      value: 291
    },
    "156": {
      start_lat: "37.8053183",
      start_lon: "-122.2948365",
      end_lat: "37.8384435",
      end_lon: "-122.2886647",
      value: 152
    },
    "157": {
      start_lat: "37.8053183",
      start_lon: "-122.2948365",
      end_lat: "37.8467842",
      end_lon: "-122.2913761",
      value: 161
    },
    "159": {
      start_lat: "37.8053183",
      start_lon: "-122.2948365",
      end_lat: "37.8160598",
      end_lon: "-122.2782444",
      value: 275
    },
    "203": {
      start_lat: "37.8053183",
      start_lon: "-122.2948365",
      end_lat: "37.795194764385954",
      end_lon: "-122.27396965026855",
      value: 219
    },
    "213": {
      start_lat: "37.8053183",
      start_lon: "-122.2948365",
      end_lat: "37.8238474",
      end_lon: "-122.2811926",
      value: 626
    },
    "218": {
      start_lat: "37.8053183",
      start_lon: "-122.2948365",
      end_lat: "37.8123315",
      end_lon: "-122.2851712",
      value: 597
    },
    "230": {
      start_lat: "37.8053183",
      start_lon: "-122.2948365",
      end_lat: "37.8107432",
      end_lon: "-122.2914153",
      value: 1074
    },
    "231": {
      start_lat: "37.8053183",
      start_lon: "-122.2948365",
      end_lat: "37.80874983465997",
      end_lon: "-122.28328227996825",
      value: 255
    },
    "235": {
      start_lat: "37.8053183",
      start_lon: "-122.2948365",
      end_lat: "37.8072393",
      end_lon: "-122.2893702",
      value: 499
    }
  },
  "162": {
    "162": {
      start_lat: "37.8005161",
      start_lon: "-122.2720799",
      end_lat: "37.8005161",
      end_lon: "-122.2720799",
      value: 192
    },
    "163": {
      start_lat: "37.8005161",
      start_lon: "-122.2720799",
      end_lat: "37.7973195",
      end_lon: "-122.2653199",
      value: 215
    }
  },
  "163": {
    "7": {
      start_lat: "37.7973195",
      start_lon: "-122.2653199",
      end_lat: "37.8045623549303",
      end_lon: "-122.27173805236816",
      value: 296
    },
    "162": {
      start_lat: "37.7973195",
      start_lon: "-122.2653199",
      end_lat: "37.8005161",
      end_lon: "-122.2720799",
      value: 201
    },
    "163": {
      start_lat: "37.7973195",
      start_lon: "-122.2653199",
      end_lat: "37.7973195",
      end_lon: "-122.2653199",
      value: 154
    },
    "186": {
      start_lat: "37.7973195",
      start_lon: "-122.2653199",
      end_lat: "37.8013189",
      end_lon: "-122.2626418",
      value: 830
    },
    "193": {
      start_lat: "37.7973195",
      start_lon: "-122.2653199",
      end_lat: "37.8127441",
      end_lon: "-122.2472152",
      value: 167
    },
    "194": {
      start_lat: "37.7973195",
      start_lon: "-122.2653199",
      end_lat: "37.8110807",
      end_lon: "-122.2432677",
      value: 430
    },
    "195": {
      start_lat: "37.7973195",
      start_lon: "-122.2653199",
      end_lat: "37.81231409135146",
      end_lon: "-122.26077854633331",
      value: 256
    },
    "196": {
      start_lat: "37.7973195",
      start_lon: "-122.2653199",
      end_lat: "37.80889393398715",
      end_lon: "-122.25646018981932",
      value: 276
    },
    "197": {
      start_lat: "37.7973195",
      start_lon: "-122.2653199",
      end_lat: "37.8088479",
      end_lon: "-122.2496799",
      value: 575
    },
    "200": {
      start_lat: "37.7973195",
      start_lon: "-122.2653199",
      end_lat: "37.800213566969795",
      end_lon: "-122.25381016731262",
      value: 1477
    },
    "202": {
      start_lat: "37.7973195",
      start_lon: "-122.2653199",
      end_lat: "37.8007544",
      end_lon: "-122.2748943",
      value: 165
    },
    "203": {
      start_lat: "37.7973195",
      start_lon: "-122.2653199",
      end_lat: "37.795194764385954",
      end_lon: "-122.27396965026855",
      value: 537
    },
    "221": {
      start_lat: "37.7973195",
      start_lon: "-122.2653199",
      end_lat: "37.7943532",
      end_lon: "-122.2538745",
      value: 173
    },
    "233": {
      start_lat: "37.7973195",
      start_lon: "-122.2653199",
      end_lat: "37.7958125",
      end_lon: "-122.2555549",
      value: 433
    },
    "339": {
      start_lat: "37.7973195",
      start_lon: "-122.2653199",
      end_lat: "37.80000163118878",
      end_lon: "-122.26643800735472",
      value: 179
    }
  },
  "164": {
    "182": {
      start_lat: "37.814988230424156",
      start_lon: "-122.27484405040741",
      end_lat: "37.8090126",
      end_lon: "-122.2682473",
      value: 294
    }
  },
  "166": {
    "171": {
      start_lat: "37.8513755",
      start_lon: "-122.2525233",
      end_lat: "37.84427875399067",
      end_lon: "-122.251900434494",
      value: 796
    },
    "267": {
      start_lat: "37.8513755",
      start_lon: "-122.2525233",
      end_lat: "37.8618037",
      end_lon: "-122.2535687",
      value: 210
    }
  },
  "167": {
    "171": {
      start_lat: "37.848152",
      start_lon: "-122.2521599",
      end_lat: "37.84427875399067",
      end_lon: "-122.251900434494",
      value: 198
    }
  },
  "168": {},
  "169": {
    "241": {
      start_lat: "37.8465156",
      start_lon: "-122.2653043",
      end_lat: "37.8524766",
      end_lon: "-122.2702132",
      value: 216
    }
  },
  "170": {},
  "171": {
    "18": {
      start_lat: "37.84427875399067",
      start_lon: "-122.251900434494",
      end_lat: "37.85022187449679",
      end_lon: "-122.26017236709595",
      value: 227
    },
    "166": {
      start_lat: "37.84427875399067",
      start_lon: "-122.251900434494",
      end_lat: "37.8513755",
      end_lon: "-122.2525233",
      value: 593
    },
    "167": {
      start_lat: "37.84427875399067",
      start_lon: "-122.251900434494",
      end_lat: "37.848152",
      end_lon: "-122.2521599",
      value: 180
    },
    "170": {
      start_lat: "37.84427875399067",
      start_lon: "-122.251900434494",
      end_lat: "37.8444927",
      end_lon: "-122.261351",
      value: 282
    },
    "188": {
      start_lat: "37.84427875399067",
      start_lon: "-122.251900434494",
      end_lat: "37.8426295",
      end_lon: "-122.267738",
      value: 152
    },
    "205": {
      start_lat: "37.84427875399067",
      start_lon: "-122.251900434494",
      end_lat: "37.8379469",
      end_lon: "-122.2572427",
      value: 429
    },
    "206": {
      start_lat: "37.84427875399067",
      start_lon: "-122.251900434494",
      end_lat: "37.8381269",
      end_lon: "-122.2512714",
      value: 152
    },
    "210": {
      start_lat: "37.84427875399067",
      start_lon: "-122.251900434494",
      end_lat: "37.8332935222321",
      end_lon: "-122.25622415542603",
      value: 280
    },
    "248": {
      start_lat: "37.84427875399067",
      start_lon: "-122.251900434494",
      end_lat: "37.8559558",
      end_lon: "-122.2597949",
      value: 189
    },
    "249": {
      start_lat: "37.84427875399067",
      start_lon: "-122.251900434494",
      end_lat: "37.8584732",
      end_lon: "-122.2532529",
      value: 328
    },
    "267": {
      start_lat: "37.84427875399067",
      start_lon: "-122.251900434494",
      end_lat: "37.8618037",
      end_lon: "-122.2535687",
      value: 353
    }
  },
  "172": {},
  "173": {
    "176": {
      start_lat: "37.8403643",
      start_lon: "-122.2644881",
      end_lat: "37.82840997305853",
      end_lon: "-122.26631462574005",
      value: 597
    }
  },
  "174": {},
  "175": {
    "176": {
      start_lat: "37.8359455",
      start_lon: "-122.2623663",
      end_lat: "37.82840997305853",
      end_lon: "-122.26631462574005",
      value: 808
    }
  },
  "176": {
    "150": {
      start_lat: "37.82840997305853",
      start_lon: "-122.26631462574005",
      end_lat: "37.8312769",
      end_lon: "-122.2782669",
      value: 436
    },
    "152": {
      start_lat: "37.82840997305853",
      start_lon: "-122.26631462574005",
      end_lat: "37.83563220458518",
      end_lon: "-122.28105068206787",
      value: 275
    },
    "158": {
      start_lat: "37.82840997305853",
      start_lon: "-122.26631462574005",
      end_lat: "37.8332786",
      end_lon: "-122.2634901",
      value: 203
    },
    "173": {
      start_lat: "37.82840997305853",
      start_lon: "-122.26631462574005",
      end_lat: "37.8403643",
      end_lon: "-122.2644881",
      value: 403
    },
    "175": {
      start_lat: "37.82840997305853",
      start_lon: "-122.26631462574005",
      end_lat: "37.8359455",
      end_lon: "-122.2623663",
      value: 577
    },
    "178": {
      start_lat: "37.82840997305853",
      start_lon: "-122.26631462574005",
      end_lat: "37.8193814",
      end_lon: "-122.2619284",
      value: 205
    },
    "188": {
      start_lat: "37.82840997305853",
      start_lon: "-122.26631462574005",
      end_lat: "37.8426295",
      end_lon: "-122.267738",
      value: 275
    },
    "189": {
      start_lat: "37.82840997305853",
      start_lon: "-122.26631462574005",
      end_lat: "37.8396488",
      end_lon: "-122.2717561",
      value: 664
    },
    "191": {
      start_lat: "37.82840997305853",
      start_lon: "-122.26631462574005",
      end_lat: "37.8305452",
      end_lon: "-122.2739367",
      value: 218
    },
    "192": {
      start_lat: "37.82840997305853",
      start_lon: "-122.26631462574005",
      end_lat: "37.8266962",
      end_lon: "-122.2717955",
      value: 267
    },
    "210": {
      start_lat: "37.82840997305853",
      start_lon: "-122.26631462574005",
      end_lat: "37.8332935222321",
      end_lon: "-122.25622415542603",
      value: 735
    },
    "211": {
      start_lat: "37.82840997305853",
      start_lon: "-122.26631462574005",
      end_lat: "37.8277573",
      end_lon: "-122.2567156",
      value: 1119
    },
    "212": {
      start_lat: "37.82840997305853",
      start_lon: "-122.26631462574005",
      end_lat: "37.8249311",
      end_lon: "-122.2604787",
      value: 952
    },
    "214": {
      start_lat: "37.82840997305853",
      start_lon: "-122.26631462574005",
      end_lat: "37.8233214",
      end_lon: "-122.2757325",
      value: 493
    },
    "215": {
      start_lat: "37.82840997305853",
      start_lon: "-122.26631462574005",
      end_lat: "37.8225475",
      end_lon: "-122.2663179",
      value: 416
    },
    "315": {
      start_lat: "37.82840997305853",
      start_lon: "-122.26631462574005",
      end_lat: "37.834174",
      end_lon: "-122.272968",
      value: 209
    }
  },
  "177": {
    "176": {
      start_lat: "37.8262863",
      start_lon: "-122.2651002",
      end_lat: "37.82840997305853",
      end_lon: "-122.26631462574005",
      value: 163
    }
  },
  "178": {
    "7": {
      start_lat: "37.8193814",
      start_lon: "-122.2619284",
      end_lat: "37.8045623549303",
      end_lon: "-122.27173805236816",
      value: 179
    },
    "182": {
      start_lat: "37.8193814",
      start_lon: "-122.2619284",
      end_lat: "37.8090126",
      end_lon: "-122.2682473",
      value: 860
    }
  },
  "179": {
    "7": {
      start_lat: "37.816073115011406",
      start_lon: "-122.26788640022278",
      end_lat: "37.8045623549303",
      end_lon: "-122.27173805236816",
      value: 165
    },
    "182": {
      start_lat: "37.816073115011406",
      start_lon: "-122.26788640022278",
      end_lat: "37.8090126",
      end_lon: "-122.2682473",
      value: 1124
    },
    "183": {
      start_lat: "37.816073115011406",
      start_lon: "-122.26788640022278",
      end_lat: "37.8087021",
      end_lon: "-122.2699271",
      value: 404
    }
  },
  "180": {
    "7": {
      start_lat: "37.8126783",
      start_lon: "-122.2687726",
      end_lat: "37.8045623549303",
      end_lon: "-122.27173805236816",
      value: 211
    },
    "182": {
      start_lat: "37.8126783",
      start_lon: "-122.2687726",
      end_lat: "37.8090126",
      end_lon: "-122.2682473",
      value: 731
    },
    "183": {
      start_lat: "37.8126783",
      start_lon: "-122.2687726",
      end_lat: "37.8087021",
      end_lon: "-122.2699271",
      value: 259
    }
  },
  "181": {
    "7": {
      start_lat: "37.8113768",
      start_lon: "-122.2651925",
      end_lat: "37.8045623549303",
      end_lon: "-122.27173805236816",
      value: 158
    },
    "181": {
      start_lat: "37.8113768",
      start_lon: "-122.2651925",
      end_lat: "37.8113768",
      end_lon: "-122.2651925",
      value: 156
    },
    "182": {
      start_lat: "37.8113768",
      start_lon: "-122.2651925",
      end_lat: "37.8090126",
      end_lon: "-122.2682473",
      value: 573
    },
    "193": {
      start_lat: "37.8113768",
      start_lon: "-122.2651925",
      end_lat: "37.8127441",
      end_lon: "-122.2472152",
      value: 339
    },
    "194": {
      start_lat: "37.8113768",
      start_lon: "-122.2651925",
      end_lat: "37.8110807",
      end_lon: "-122.2432677",
      value: 282
    },
    "195": {
      start_lat: "37.8113768",
      start_lon: "-122.2651925",
      end_lat: "37.81231409135146",
      end_lon: "-122.26077854633331",
      value: 258
    },
    "196": {
      start_lat: "37.8113768",
      start_lon: "-122.2651925",
      end_lat: "37.80889393398715",
      end_lon: "-122.25646018981932",
      value: 754
    },
    "197": {
      start_lat: "37.8113768",
      start_lon: "-122.2651925",
      end_lat: "37.8088479",
      end_lon: "-122.2496799",
      value: 610
    },
    "200": {
      start_lat: "37.8113768",
      start_lon: "-122.2651925",
      end_lat: "37.800213566969795",
      end_lon: "-122.25381016731262",
      value: 166
    }
  },
  "182": {
    "7": {
      start_lat: "37.8090126",
      start_lon: "-122.2682473",
      end_lat: "37.8045623549303",
      end_lon: "-122.27173805236816",
      value: 163
    },
    "159": {
      start_lat: "37.8090126",
      start_lon: "-122.2682473",
      end_lat: "37.8160598",
      end_lon: "-122.2782444",
      value: 183
    },
    "164": {
      start_lat: "37.8090126",
      start_lon: "-122.2682473",
      end_lat: "37.814988230424156",
      end_lon: "-122.27484405040741",
      value: 183
    },
    "178": {
      start_lat: "37.8090126",
      start_lon: "-122.2682473",
      end_lat: "37.8193814",
      end_lon: "-122.2619284",
      value: 603
    },
    "179": {
      start_lat: "37.8090126",
      start_lon: "-122.2682473",
      end_lat: "37.816073115011406",
      end_lon: "-122.26788640022278",
      value: 768
    },
    "180": {
      start_lat: "37.8090126",
      start_lon: "-122.2682473",
      end_lat: "37.8126783",
      end_lon: "-122.2687726",
      value: 638
    },
    "181": {
      start_lat: "37.8090126",
      start_lon: "-122.2682473",
      end_lat: "37.8113768",
      end_lon: "-122.2651925",
      value: 423
    },
    "193": {
      start_lat: "37.8090126",
      start_lon: "-122.2682473",
      end_lat: "37.8127441",
      end_lon: "-122.2472152",
      value: 1200
    },
    "194": {
      start_lat: "37.8090126",
      start_lon: "-122.2682473",
      end_lat: "37.8110807",
      end_lon: "-122.2432677",
      value: 535
    },
    "195": {
      start_lat: "37.8090126",
      start_lon: "-122.2682473",
      end_lat: "37.81231409135146",
      end_lon: "-122.26077854633331",
      value: 1504
    },
    "196": {
      start_lat: "37.8090126",
      start_lon: "-122.2682473",
      end_lat: "37.80889393398715",
      end_lon: "-122.25646018981932",
      value: 2717
    },
    "197": {
      start_lat: "37.8090126",
      start_lon: "-122.2682473",
      end_lat: "37.8088479",
      end_lon: "-122.2496799",
      value: 1019
    }
  },
  "183": {
    "179": {
      start_lat: "37.8087021",
      start_lon: "-122.2699271",
      end_lat: "37.816073115011406",
      end_lon: "-122.26788640022278",
      value: 324
    },
    "180": {
      start_lat: "37.8087021",
      start_lon: "-122.2699271",
      end_lat: "37.8126783",
      end_lon: "-122.2687726",
      value: 296
    },
    "181": {
      start_lat: "37.8087021",
      start_lon: "-122.2699271",
      end_lat: "37.8113768",
      end_lon: "-122.2651925",
      value: 164
    },
    "182": {
      start_lat: "37.8087021",
      start_lon: "-122.2699271",
      end_lat: "37.8090126",
      end_lon: "-122.2682473",
      value: 442
    },
    "195": {
      start_lat: "37.8087021",
      start_lon: "-122.2699271",
      end_lat: "37.81231409135146",
      end_lon: "-122.26077854633331",
      value: 373
    },
    "196": {
      start_lat: "37.8087021",
      start_lon: "-122.2699271",
      end_lat: "37.80889393398715",
      end_lon: "-122.25646018981932",
      value: 174
    }
  },
  "186": {
    "7": {
      start_lat: "37.8013189",
      start_lon: "-122.2626418",
      end_lat: "37.8045623549303",
      end_lon: "-122.27173805236816",
      value: 286
    },
    "163": {
      start_lat: "37.8013189",
      start_lon: "-122.2626418",
      end_lat: "37.7973195",
      end_lon: "-122.2653199",
      value: 671
    },
    "186": {
      start_lat: "37.8013189",
      start_lon: "-122.2626418",
      end_lat: "37.8013189",
      end_lon: "-122.2626418",
      value: 400
    },
    "196": {
      start_lat: "37.8013189",
      start_lon: "-122.2626418",
      end_lat: "37.80889393398715",
      end_lon: "-122.25646018981932",
      value: 171
    },
    "197": {
      start_lat: "37.8013189",
      start_lon: "-122.2626418",
      end_lat: "37.8088479",
      end_lon: "-122.2496799",
      value: 391
    },
    "200": {
      start_lat: "37.8013189",
      start_lon: "-122.2626418",
      end_lat: "37.800213566969795",
      end_lon: "-122.25381016731262",
      value: 420
    }
  },
  "187": {},
  "188": {
    "176": {
      start_lat: "37.8426295",
      start_lon: "-122.267738",
      end_lat: "37.82840997305853",
      end_lon: "-122.26631462574005",
      value: 285
    },
    "241": {
      start_lat: "37.8426295",
      start_lon: "-122.267738",
      end_lat: "37.8524766",
      end_lon: "-122.2702132",
      value: 238
    }
  },
  "189": {
    "176": {
      start_lat: "37.8396488",
      start_lon: "-122.2717561",
      end_lat: "37.82840997305853",
      end_lon: "-122.26631462574005",
      value: 948
    },
    "190": {
      start_lat: "37.8396488",
      start_lon: "-122.2717561",
      end_lat: "37.8302232",
      end_lon: "-122.2709501",
      value: 291
    }
  },
  "190": {
    "189": {
      start_lat: "37.8302232",
      start_lon: "-122.2709501",
      end_lat: "37.8396488",
      end_lon: "-122.2717561",
      value: 416
    }
  },
  "191": {
    "176": {
      start_lat: "37.8305452",
      start_lon: "-122.2739367",
      end_lat: "37.82840997305853",
      end_lon: "-122.26631462574005",
      value: 294
    }
  },
  "192": {
    "176": {
      start_lat: "37.8266962",
      start_lon: "-122.2717955",
      end_lat: "37.82840997305853",
      end_lon: "-122.26631462574005",
      value: 286
    }
  },
  "193": {
    "181": {
      start_lat: "37.8127441",
      start_lon: "-122.2472152",
      end_lat: "37.8113768",
      end_lon: "-122.2651925",
      value: 328
    },
    "182": {
      start_lat: "37.8127441",
      start_lon: "-122.2472152",
      end_lat: "37.8090126",
      end_lon: "-122.2682473",
      value: 796
    }
  },
  "194": {
    "163": {
      start_lat: "37.8110807",
      start_lon: "-122.2432677",
      end_lat: "37.7973195",
      end_lon: "-122.2653199",
      value: 167
    },
    "181": {
      start_lat: "37.8110807",
      start_lon: "-122.2432677",
      end_lat: "37.8113768",
      end_lon: "-122.2651925",
      value: 197
    },
    "182": {
      start_lat: "37.8110807",
      start_lon: "-122.2432677",
      end_lat: "37.8090126",
      end_lon: "-122.2682473",
      value: 433
    }
  },
  "195": {
    "7": {
      start_lat: "37.81231409135146",
      start_lon: "-122.26077854633331",
      end_lat: "37.8045623549303",
      end_lon: "-122.27173805236816",
      value: 329
    },
    "182": {
      start_lat: "37.81231409135146",
      start_lon: "-122.26077854633331",
      end_lat: "37.8090126",
      end_lon: "-122.2682473",
      value: 2179
    },
    "183": {
      start_lat: "37.81231409135146",
      start_lon: "-122.26077854633331",
      end_lat: "37.8087021",
      end_lon: "-122.2699271",
      value: 385
    },
    "196": {
      start_lat: "37.81231409135146",
      start_lon: "-122.26077854633331",
      end_lat: "37.80889393398715",
      end_lon: "-122.25646018981932",
      value: 246
    },
    "197": {
      start_lat: "37.81231409135146",
      start_lon: "-122.26077854633331",
      end_lat: "37.8088479",
      end_lon: "-122.2496799",
      value: 352
    },
    "200": {
      start_lat: "37.81231409135146",
      start_lon: "-122.26077854633331",
      end_lat: "37.800213566969795",
      end_lon: "-122.25381016731262",
      value: 167
    },
    "337": {
      start_lat: "37.81231409135146",
      start_lon: "-122.26077854633331",
      end_lat: "37.80696976095594",
      end_lon: "-122.26658821105957",
      value: 152
    },
    "338": {
      start_lat: "37.81231409135146",
      start_lon: "-122.26077854633331",
      end_lat: "37.80318908113163",
      end_lon: "-122.27057933807373",
      value: 161
    }
  },
  "196": {
    "7": {
      start_lat: "37.80889393398715",
      start_lon: "-122.25646018981932",
      end_lat: "37.8045623549303",
      end_lon: "-122.27173805236816",
      value: 322
    },
    "181": {
      start_lat: "37.80889393398715",
      start_lon: "-122.25646018981932",
      end_lat: "37.8113768",
      end_lon: "-122.2651925",
      value: 499
    },
    "182": {
      start_lat: "37.80889393398715",
      start_lon: "-122.25646018981932",
      end_lat: "37.8090126",
      end_lon: "-122.2682473",
      value: 2549
    },
    "193": {
      start_lat: "37.80889393398715",
      start_lon: "-122.25646018981932",
      end_lat: "37.8127441",
      end_lon: "-122.2472152",
      value: 235
    },
    "195": {
      start_lat: "37.80889393398715",
      start_lon: "-122.25646018981932",
      end_lat: "37.81231409135146",
      end_lon: "-122.26077854633331",
      value: 178
    },
    "196": {
      start_lat: "37.80889393398715",
      start_lon: "-122.25646018981932",
      end_lat: "37.80889393398715",
      end_lon: "-122.25646018981932",
      value: 325
    },
    "197": {
      start_lat: "37.80889393398715",
      start_lon: "-122.25646018981932",
      end_lat: "37.8088479",
      end_lon: "-122.2496799",
      value: 330
    },
    "198": {
      start_lat: "37.80889393398715",
      start_lon: "-122.25646018981932",
      end_lat: "37.80781318217903",
      end_lon: "-122.26449608802795",
      value: 172
    },
    "337": {
      start_lat: "37.80889393398715",
      start_lon: "-122.25646018981932",
      end_lat: "37.80696976095594",
      end_lon: "-122.26658821105957",
      value: 324
    }
  },
  "197": {
    "163": {
      start_lat: "37.8088479",
      start_lon: "-122.2496799",
      end_lat: "37.7973195",
      end_lon: "-122.2653199",
      value: 388
    },
    "181": {
      start_lat: "37.8088479",
      start_lon: "-122.2496799",
      end_lat: "37.8113768",
      end_lon: "-122.2651925",
      value: 487
    },
    "182": {
      start_lat: "37.8088479",
      start_lon: "-122.2496799",
      end_lat: "37.8090126",
      end_lon: "-122.2682473",
      value: 480
    },
    "183": {
      start_lat: "37.8088479",
      start_lon: "-122.2496799",
      end_lat: "37.8087021",
      end_lon: "-122.2699271",
      value: 162
    },
    "186": {
      start_lat: "37.8088479",
      start_lon: "-122.2496799",
      end_lat: "37.8013189",
      end_lon: "-122.2626418",
      value: 437
    },
    "195": {
      start_lat: "37.8088479",
      start_lon: "-122.2496799",
      end_lat: "37.81231409135146",
      end_lon: "-122.26077854633331",
      value: 379
    },
    "196": {
      start_lat: "37.8088479",
      start_lon: "-122.2496799",
      end_lat: "37.80889393398715",
      end_lon: "-122.25646018981932",
      value: 314
    },
    "197": {
      start_lat: "37.8088479",
      start_lon: "-122.2496799",
      end_lat: "37.8088479",
      end_lon: "-122.2496799",
      value: 795
    },
    "200": {
      start_lat: "37.8088479",
      start_lon: "-122.2496799",
      end_lat: "37.800213566969795",
      end_lon: "-122.25381016731262",
      value: 893
    },
    "201": {
      start_lat: "37.8088479",
      start_lon: "-122.2496799",
      end_lat: "37.7976728",
      end_lon: "-122.2629973",
      value: 274
    }
  },
  "198": {
    "195": {
      start_lat: "37.80781318217903",
      start_lon: "-122.26449608802795",
      end_lat: "37.81231409135146",
      end_lon: "-122.26077854633331",
      value: 194
    },
    "196": {
      start_lat: "37.80781318217903",
      start_lon: "-122.26449608802795",
      end_lat: "37.80889393398715",
      end_lon: "-122.25646018981932",
      value: 277
    },
    "197": {
      start_lat: "37.80781318217903",
      start_lon: "-122.26449608802795",
      end_lat: "37.8088479",
      end_lon: "-122.2496799",
      value: 165
    },
    "200": {
      start_lat: "37.80781318217903",
      start_lon: "-122.26449608802795",
      end_lat: "37.800213566969795",
      end_lon: "-122.25381016731262",
      value: 162
    }
  },
  "200": {
    "7": {
      start_lat: "37.800213566969795",
      start_lon: "-122.25381016731262",
      end_lat: "37.8045623549303",
      end_lon: "-122.27173805236816",
      value: 357
    },
    "163": {
      start_lat: "37.800213566969795",
      start_lon: "-122.25381016731262",
      end_lat: "37.7973195",
      end_lon: "-122.2653199",
      value: 1135
    },
    "186": {
      start_lat: "37.800213566969795",
      start_lon: "-122.25381016731262",
      end_lat: "37.8013189",
      end_lon: "-122.2626418",
      value: 301
    },
    "197": {
      start_lat: "37.800213566969795",
      start_lon: "-122.25381016731262",
      end_lat: "37.8088479",
      end_lon: "-122.2496799",
      value: 744
    },
    "198": {
      start_lat: "37.800213566969795",
      start_lon: "-122.25381016731262",
      end_lat: "37.80781318217903",
      end_lon: "-122.26449608802795",
      value: 155
    },
    "200": {
      start_lat: "37.800213566969795",
      start_lon: "-122.25381016731262",
      end_lat: "37.800213566969795",
      end_lon: "-122.25381016731262",
      value: 244
    },
    "201": {
      start_lat: "37.800213566969795",
      start_lon: "-122.25381016731262",
      end_lat: "37.7976728",
      end_lon: "-122.2629973",
      value: 895
    }
  },
  "201": {
    "197": {
      start_lat: "37.7976728",
      start_lon: "-122.2629973",
      end_lat: "37.8088479",
      end_lon: "-122.2496799",
      value: 197
    },
    "200": {
      start_lat: "37.7976728",
      start_lon: "-122.2629973",
      end_lat: "37.800213566969795",
      end_lon: "-122.25381016731262",
      value: 536
    },
    "233": {
      start_lat: "37.7976728",
      start_lon: "-122.2629973",
      end_lat: "37.7958125",
      end_lon: "-122.2555549",
      value: 392
    }
  },
  "202": {
    "202": {
      start_lat: "37.8007544",
      start_lon: "-122.2748943",
      end_lat: "37.8007544",
      end_lon: "-122.2748943",
      value: 175
    },
    "203": {
      start_lat: "37.8007544",
      start_lon: "-122.2748943",
      end_lat: "37.795194764385954",
      end_lon: "-122.27396965026855",
      value: 245
    }
  },
  "203": {
    "163": {
      start_lat: "37.795194764385954",
      start_lon: "-122.27396965026855",
      end_lat: "37.7973195",
      end_lon: "-122.2653199",
      value: 353
    },
    "202": {
      start_lat: "37.795194764385954",
      start_lon: "-122.27396965026855",
      end_lat: "37.8007544",
      end_lon: "-122.2748943",
      value: 238
    },
    "203": {
      start_lat: "37.795194764385954",
      start_lon: "-122.27396965026855",
      end_lat: "37.795194764385954",
      end_lon: "-122.27396965026855",
      value: 159
    }
  },
  "204": {
    "158": {
      start_lat: "37.8401858",
      start_lon: "-122.2618225",
      end_lat: "37.8332786",
      end_lon: "-122.2634901",
      value: 300
    }
  },
  "205": {
    "171": {
      start_lat: "37.8379469",
      start_lon: "-122.2572427",
      end_lat: "37.84427875399067",
      end_lon: "-122.251900434494",
      value: 270
    },
    "176": {
      start_lat: "37.8379469",
      start_lon: "-122.2572427",
      end_lat: "37.82840997305853",
      end_lon: "-122.26631462574005",
      value: 159
    }
  },
  "206": {
    "171": {
      start_lat: "37.8381269",
      start_lon: "-122.2512714",
      end_lat: "37.84427875399067",
      end_lon: "-122.251900434494",
      value: 166
    }
  },
  "207": {
    "171": {
      start_lat: "37.8357883",
      start_lon: "-122.2516207",
      end_lat: "37.84427875399067",
      end_lon: "-122.251900434494",
      value: 166
    }
  },
  "208": {},
  "209": {},
  "210": {
    "175": {
      start_lat: "37.8332935222321",
      start_lon: "-122.25622415542603",
      end_lat: "37.8359455",
      end_lon: "-122.2623663",
      value: 166
    },
    "176": {
      start_lat: "37.8332935222321",
      start_lon: "-122.25622415542603",
      end_lat: "37.82840997305853",
      end_lon: "-122.26631462574005",
      value: 1005
    }
  },
  "211": {
    "7": {
      start_lat: "37.8277573",
      start_lon: "-122.2567156",
      end_lat: "37.8045623549303",
      end_lon: "-122.27173805236816",
      value: 163
    },
    "176": {
      start_lat: "37.8277573",
      start_lon: "-122.2567156",
      end_lat: "37.82840997305853",
      end_lon: "-122.26631462574005",
      value: 1242
    },
    "181": {
      start_lat: "37.8277573",
      start_lon: "-122.2567156",
      end_lat: "37.8113768",
      end_lon: "-122.2651925",
      value: 163
    }
  },
  "212": {
    "176": {
      start_lat: "37.8249311",
      start_lon: "-122.2604787",
      end_lat: "37.82840997305853",
      end_lon: "-122.26631462574005",
      value: 860
    }
  },
  "213": {
    "160": {
      start_lat: "37.8238474",
      start_lon: "-122.2811926",
      end_lat: "37.8053183",
      end_lon: "-122.2948365",
      value: 648
    }
  },
  "214": {
    "176": {
      start_lat: "37.8233214",
      start_lon: "-122.2757325",
      end_lat: "37.82840997305853",
      end_lon: "-122.26631462574005",
      value: 531
    }
  },
  "215": {
    "176": {
      start_lat: "37.8225475",
      start_lon: "-122.2663179",
      end_lat: "37.82840997305853",
      end_lon: "-122.26631462574005",
      value: 261
    },
    "181": {
      start_lat: "37.8225475",
      start_lon: "-122.2663179",
      end_lat: "37.8113768",
      end_lon: "-122.2651925",
      value: 155
    }
  },
  "216": {},
  "217": {},
  "218": {
    "160": {
      start_lat: "37.8123315",
      start_lon: "-122.2851712",
      end_lat: "37.8053183",
      end_lon: "-122.2948365",
      value: 726
    }
  },
  "219": {},
  "220": {},
  "221": {},
  "222": {},
  "223": {
    "76": {
      start_lat: "37.7647652154977",
      start_lon: "-122.42009103298186",
      end_lat: "37.77166246221617",
      end_lon: "-122.42242321372034",
      value: 232
    },
    "99": {
      start_lat: "37.7647652154977",
      start_lon: "-122.42009103298186",
      end_lat: "37.7670373",
      end_lon: "-122.4154425",
      value: 159
    },
    "106": {
      start_lat: "37.7647652154977",
      start_lon: "-122.42009103298186",
      end_lat: "37.7632417",
      end_lon: "-122.4306746",
      value: 163
    },
    "112": {
      start_lat: "37.7647652154977",
      start_lon: "-122.42009103298186",
      end_lat: "37.7638471",
      end_lon: "-122.4130036",
      value: 261
    },
    "114": {
      start_lat: "37.7647652154977",
      start_lon: "-122.42009103298186",
      end_lat: "37.7644783",
      end_lon: "-122.4025701",
      value: 435
    },
    "119": {
      start_lat: "37.7647652154977",
      start_lon: "-122.42009103298186",
      end_lat: "37.7610471",
      end_lon: "-122.4326417",
      value: 193
    },
    "120": {
      start_lat: "37.7647652154977",
      start_lon: "-122.42009103298186",
      end_lat: "37.7614205",
      end_lon: "-122.4264353",
      value: 199
    },
    "121": {
      start_lat: "37.7647652154977",
      start_lon: "-122.42009103298186",
      end_lat: "37.7592103",
      end_lon: "-122.4213392",
      value: 188
    },
    "123": {
      start_lat: "37.7647652154977",
      start_lon: "-122.42009103298186",
      end_lat: "37.7605936",
      end_lon: "-122.4148171",
      value: 310
    },
    "124": {
      start_lat: "37.7647652154977",
      start_lon: "-122.42009103298186",
      end_lat: "37.7604469",
      end_lon: "-122.410807",
      value: 261
    },
    "129": {
      start_lat: "37.7647652154977",
      start_lon: "-122.42009103298186",
      end_lat: "37.758862",
      end_lon: "-122.412544",
      value: 319
    }
  },
  "224": {},
  "225": {},
  "226": {},
  "227": {
    "237": {
      start_lat: "37.7837569",
      start_lon: "-122.2226033",
      end_lat: "37.7752321",
      end_lon: "-122.2244982",
      value: 190
    }
  },
  "228": {},
  "229": {},
  "230": {
    "160": {
      start_lat: "37.8107432",
      start_lon: "-122.2914153",
      end_lat: "37.8053183",
      end_lon: "-122.2948365",
      value: 997
    }
  },
  "231": {
    "160": {
      start_lat: "37.80874983465997",
      start_lon: "-122.28328227996825",
      end_lat: "37.8053183",
      end_lon: "-122.2948365",
      value: 303
    }
  },
  "232": {},
  "233": {
    "163": {
      start_lat: "37.7958125",
      start_lon: "-122.2555549",
      end_lat: "37.7973195",
      end_lon: "-122.2653199",
      value: 412
    },
    "201": {
      start_lat: "37.7958125",
      start_lon: "-122.2555549",
      end_lat: "37.7976728",
      end_lon: "-122.2629973",
      value: 603
    }
  },
  "234": {},
  "235": {
    "160": {
      start_lat: "37.8072393",
      start_lon: "-122.2893702",
      end_lat: "37.8053183",
      end_lon: "-122.2948365",
      value: 601
    }
  },
  "236": {},
  "237": {
    "227": {
      start_lat: "37.7752321",
      start_lon: "-122.2244982",
      end_lat: "37.7837569",
      end_lon: "-122.2226033",
      value: 229
    }
  },
  "238": {
    "246": {
      start_lat: "37.8717192",
      start_lon: "-122.2730677",
      end_lat: "37.8690599",
      end_lon: "-122.270556",
      value: 161
    },
    "251": {
      start_lat: "37.8717192",
      start_lon: "-122.2730677",
      end_lat: "37.87055532905745",
      end_lon: "-122.27972030639648",
      value: 197
    }
  },
  "239": {
    "238": {
      start_lat: "37.8688126",
      start_lon: "-122.258764",
      end_lat: "37.8717192",
      end_lon: "-122.2730677",
      value: 308
    },
    "239": {
      start_lat: "37.8688126",
      start_lon: "-122.258764",
      end_lat: "37.8688126",
      end_lon: "-122.258764",
      value: 315
    },
    "240": {
      start_lat: "37.8688126",
      start_lon: "-122.258764",
      end_lat: "37.8660431",
      end_lon: "-122.2588044",
      value: 270
    },
    "243": {
      start_lat: "37.8688126",
      start_lon: "-122.258764",
      end_lat: "37.8693603",
      end_lon: "-122.2543374",
      value: 193
    },
    "245": {
      start_lat: "37.8688126",
      start_lon: "-122.258764",
      end_lat: "37.8703477",
      end_lon: "-122.2677637",
      value: 1497
    },
    "247": {
      start_lat: "37.8688126",
      start_lon: "-122.258764",
      end_lat: "37.8677892",
      end_lon: "-122.2658964",
      value: 353
    },
    "252": {
      start_lat: "37.8688126",
      start_lon: "-122.258764",
      end_lat: "37.8658466",
      end_lon: "-122.2674431",
      value: 300
    },
    "256": {
      start_lat: "37.8688126",
      start_lon: "-122.258764",
      end_lat: "37.875111692864444",
      end_lon: "-122.26055324077606",
      value: 271
    },
    "258": {
      start_lat: "37.8688126",
      start_lon: "-122.258764",
      end_lat: "37.8723555",
      end_lon: "-122.2664467",
      value: 325
    },
    "266": {
      start_lat: "37.8688126",
      start_lon: "-122.258764",
      end_lat: "37.8624644",
      end_lon: "-122.2647911",
      value: 661
    },
    "267": {
      start_lat: "37.8688126",
      start_lon: "-122.258764",
      end_lat: "37.8618037",
      end_lon: "-122.2535687",
      value: 164
    }
  },
  "240": {
    "239": {
      start_lat: "37.8660431",
      start_lon: "-122.2588044",
      end_lat: "37.8688126",
      end_lon: "-122.258764",
      value: 276
    },
    "240": {
      start_lat: "37.8660431",
      start_lon: "-122.2588044",
      end_lat: "37.8660431",
      end_lon: "-122.2588044",
      value: 156
    },
    "243": {
      start_lat: "37.8660431",
      start_lon: "-122.2588044",
      end_lat: "37.8693603",
      end_lon: "-122.2543374",
      value: 162
    },
    "245": {
      start_lat: "37.8660431",
      start_lon: "-122.2588044",
      end_lat: "37.8703477",
      end_lon: "-122.2677637",
      value: 519
    },
    "247": {
      start_lat: "37.8660431",
      start_lon: "-122.2588044",
      end_lat: "37.8677892",
      end_lon: "-122.2658964",
      value: 169
    },
    "248": {
      start_lat: "37.8660431",
      start_lon: "-122.2588044",
      end_lat: "37.8559558",
      end_lon: "-122.2597949",
      value: 202
    },
    "252": {
      start_lat: "37.8660431",
      start_lon: "-122.2588044",
      end_lat: "37.8658466",
      end_lon: "-122.2674431",
      value: 276
    },
    "266": {
      start_lat: "37.8660431",
      start_lon: "-122.2588044",
      end_lat: "37.8624644",
      end_lon: "-122.2647911",
      value: 427
    }
  },
  "241": {
    "18": {
      start_lat: "37.8524766",
      start_lon: "-122.2702132",
      end_lat: "37.85022187449679",
      end_lon: "-122.26017236709595",
      value: 205
    },
    "157": {
      start_lat: "37.8524766",
      start_lon: "-122.2702132",
      end_lat: "37.8467842",
      end_lon: "-122.2913761",
      value: 423
    },
    "169": {
      start_lat: "37.8524766",
      start_lon: "-122.2702132",
      end_lat: "37.8465156",
      end_lon: "-122.2653043",
      value: 215
    },
    "188": {
      start_lat: "37.8524766",
      start_lon: "-122.2702132",
      end_lat: "37.8426295",
      end_lon: "-122.267738",
      value: 284
    },
    "242": {
      start_lat: "37.8524766",
      start_lon: "-122.2702132",
      end_lat: "37.86012459911685",
      end_lon: "-122.2693844139576",
      value: 240
    },
    "248": {
      start_lat: "37.8524766",
      start_lon: "-122.2702132",
      end_lat: "37.8559558",
      end_lon: "-122.2597949",
      value: 269
    },
    "265": {
      start_lat: "37.8524766",
      start_lon: "-122.2702132",
      end_lat: "37.8588682",
      end_lon: "-122.2912095",
      value: 245
    },
    "268": {
      start_lat: "37.8524766",
      start_lon: "-122.2702132",
      end_lat: "37.85749021457153",
      end_lon: "-122.26157784461977",
      value: 293
    },
    "270": {
      start_lat: "37.8524766",
      start_lon: "-122.2702132",
      end_lat: "37.8534894",
      end_lon: "-122.2894154",
      value: 296
    },
    "272": {
      start_lat: "37.8524766",
      start_lon: "-122.2702132",
      end_lat: "37.850577684047856",
      end_lon: "-122.27817535400389",
      value: 555
    },
    "274": {
      start_lat: "37.8524766",
      start_lon: "-122.2702132",
      end_lat: "37.8575672",
      end_lon: "-122.2675583",
      value: 220
    }
  },
  "242": {
    "241": {
      start_lat: "37.86012459911685",
      start_lon: "-122.2693844139576",
      end_lat: "37.8524766",
      end_lon: "-122.2702132",
      value: 231
    },
    "246": {
      start_lat: "37.86012459911685",
      start_lon: "-122.2693844139576",
      end_lat: "37.8690599",
      end_lon: "-122.270556",
      value: 288
    }
  },
  "243": {
    "166": {
      start_lat: "37.8693603",
      start_lon: "-122.2543374",
      end_lat: "37.8513755",
      end_lon: "-122.2525233",
      value: 226
    },
    "171": {
      start_lat: "37.8693603",
      start_lon: "-122.2543374",
      end_lat: "37.84427875399067",
      end_lon: "-122.251900434494",
      value: 231
    },
    "238": {
      start_lat: "37.8693603",
      start_lon: "-122.2543374",
      end_lat: "37.8717192",
      end_lon: "-122.2730677",
      value: 153
    },
    "239": {
      start_lat: "37.8693603",
      start_lon: "-122.2543374",
      end_lat: "37.8688126",
      end_lon: "-122.258764",
      value: 1233
    },
    "240": {
      start_lat: "37.8693603",
      start_lon: "-122.2543374",
      end_lat: "37.8660431",
      end_lon: "-122.2588044",
      value: 314
    },
    "245": {
      start_lat: "37.8693603",
      start_lon: "-122.2543374",
      end_lat: "37.8703477",
      end_lon: "-122.2677637",
      value: 1908
    },
    "246": {
      start_lat: "37.8693603",
      start_lon: "-122.2543374",
      end_lat: "37.8690599",
      end_lon: "-122.270556",
      value: 196
    },
    "247": {
      start_lat: "37.8693603",
      start_lon: "-122.2543374",
      end_lat: "37.8677892",
      end_lon: "-122.2658964",
      value: 531
    },
    "248": {
      start_lat: "37.8693603",
      start_lon: "-122.2543374",
      end_lat: "37.8559558",
      end_lon: "-122.2597949",
      value: 161
    },
    "249": {
      start_lat: "37.8693603",
      start_lon: "-122.2543374",
      end_lat: "37.8584732",
      end_lon: "-122.2532529",
      value: 359
    },
    "258": {
      start_lat: "37.8693603",
      start_lon: "-122.2543374",
      end_lat: "37.8723555",
      end_lon: "-122.2664467",
      value: 330
    },
    "266": {
      start_lat: "37.8693603",
      start_lon: "-122.2543374",
      end_lat: "37.8624644",
      end_lon: "-122.2647911",
      value: 237
    },
    "267": {
      start_lat: "37.8693603",
      start_lon: "-122.2543374",
      end_lat: "37.8618037",
      end_lon: "-122.2535687",
      value: 290
    }
  },
  "244": {
    "254": {
      start_lat: "37.8737917",
      start_lon: "-122.2686176",
      end_lat: "37.88022244590679",
      end_lon: "-122.26959228515624",
      value: 266
    }
  },
  "245": {
    "238": {
      start_lat: "37.8703477",
      start_lon: "-122.2677637",
      end_lat: "37.8717192",
      end_lon: "-122.2730677",
      value: 258
    },
    "239": {
      start_lat: "37.8703477",
      start_lon: "-122.2677637",
      end_lat: "37.8688126",
      end_lon: "-122.258764",
      value: 831
    },
    "240": {
      start_lat: "37.8703477",
      start_lon: "-122.2677637",
      end_lat: "37.8660431",
      end_lon: "-122.2588044",
      value: 316
    },
    "243": {
      start_lat: "37.8703477",
      start_lon: "-122.2677637",
      end_lat: "37.8693603",
      end_lon: "-122.2543374",
      value: 430
    },
    "245": {
      start_lat: "37.8703477",
      start_lon: "-122.2677637",
      end_lat: "37.8703477",
      end_lon: "-122.2677637",
      value: 162
    },
    "254": {
      start_lat: "37.8703477",
      start_lon: "-122.2677637",
      end_lat: "37.88022244590679",
      end_lon: "-122.26959228515624",
      value: 471
    },
    "256": {
      start_lat: "37.8703477",
      start_lon: "-122.2677637",
      end_lat: "37.875111692864444",
      end_lon: "-122.26055324077606",
      value: 210
    },
    "266": {
      start_lat: "37.8703477",
      start_lon: "-122.2677637",
      end_lat: "37.8624644",
      end_lon: "-122.2647911",
      value: 542
    }
  },
  "246": {
    "238": {
      start_lat: "37.8690599",
      start_lon: "-122.270556",
      end_lat: "37.8717192",
      end_lon: "-122.2730677",
      value: 219
    },
    "242": {
      start_lat: "37.8690599",
      start_lon: "-122.270556",
      end_lat: "37.86012459911685",
      end_lon: "-122.2693844139576",
      value: 319
    },
    "263": {
      start_lat: "37.8690599",
      start_lon: "-122.270556",
      end_lat: "37.8628271",
      end_lon: "-122.2902305",
      value: 165
    },
    "266": {
      start_lat: "37.8690599",
      start_lon: "-122.270556",
      end_lat: "37.8624644",
      end_lon: "-122.2647911",
      value: 174
    },
    "274": {
      start_lat: "37.8690599",
      start_lon: "-122.270556",
      end_lat: "37.8575672",
      end_lon: "-122.2675583",
      value: 173
    }
  },
  "247": {
    "239": {
      start_lat: "37.8677892",
      start_lon: "-122.2658964",
      end_lat: "37.8688126",
      end_lon: "-122.258764",
      value: 151
    },
    "245": {
      start_lat: "37.8677892",
      start_lon: "-122.2658964",
      end_lat: "37.8703477",
      end_lon: "-122.2677637",
      value: 177
    },
    "266": {
      start_lat: "37.8677892",
      start_lon: "-122.2658964",
      end_lat: "37.8624644",
      end_lon: "-122.2647911",
      value: 248
    }
  },
  "248": {
    "171": {
      start_lat: "37.8559558",
      start_lon: "-122.2597949",
      end_lat: "37.84427875399067",
      end_lon: "-122.251900434494",
      value: 173
    },
    "241": {
      start_lat: "37.8559558",
      start_lon: "-122.2597949",
      end_lat: "37.8524766",
      end_lon: "-122.2702132",
      value: 466
    },
    "258": {
      start_lat: "37.8559558",
      start_lon: "-122.2597949",
      end_lat: "37.8723555",
      end_lon: "-122.2664467",
      value: 216
    }
  },
  "249": {
    "171": {
      start_lat: "37.8584732",
      start_lon: "-122.2532529",
      end_lat: "37.84427875399067",
      end_lon: "-122.251900434494",
      value: 468
    },
    "243": {
      start_lat: "37.8584732",
      start_lon: "-122.2532529",
      end_lat: "37.8693603",
      end_lon: "-122.2543374",
      value: 236
    }
  },
  "250": {
    "251": {
      start_lat: "37.8740141",
      start_lon: "-122.283019",
      end_lat: "37.87055532905745",
      end_lon: "-122.27972030639648",
      value: 264
    },
    "259": {
      start_lat: "37.8740141",
      start_lon: "-122.283019",
      end_lat: "37.866249",
      end_lon: "-122.2993708",
      value: 659
    },
    "263": {
      start_lat: "37.8740141",
      start_lon: "-122.283019",
      end_lat: "37.8628271",
      end_lon: "-122.2902305",
      value: 223
    }
  },
  "251": {
    "238": {
      start_lat: "37.87055532905745",
      start_lon: "-122.27972030639648",
      end_lat: "37.8717192",
      end_lon: "-122.2730677",
      value: 179
    },
    "250": {
      start_lat: "37.87055532905745",
      start_lon: "-122.27972030639648",
      end_lat: "37.8740141",
      end_lon: "-122.283019",
      value: 367
    }
  },
  "252": {},
  "253": {
    "171": {
      start_lat: "37.86641794050319",
      start_lon: "-122.25379943847655",
      end_lat: "37.84427875399067",
      end_lon: "-122.251900434494",
      value: 259
    },
    "239": {
      start_lat: "37.86641794050319",
      start_lon: "-122.25379943847655",
      end_lat: "37.8688126",
      end_lon: "-122.258764",
      value: 218
    },
    "243": {
      start_lat: "37.86641794050319",
      start_lon: "-122.25379943847655",
      end_lat: "37.8693603",
      end_lon: "-122.2543374",
      value: 165
    },
    "245": {
      start_lat: "37.86641794050319",
      start_lon: "-122.25379943847655",
      end_lat: "37.8703477",
      end_lon: "-122.2677637",
      value: 248
    }
  },
  "254": {
    "244": {
      start_lat: "37.88022244590679",
      start_lon: "-122.26959228515624",
      end_lat: "37.8737917",
      end_lon: "-122.2686176",
      value: 186
    },
    "245": {
      start_lat: "37.88022244590679",
      start_lon: "-122.26959228515624",
      end_lat: "37.8703477",
      end_lon: "-122.2677637",
      value: 388
    },
    "246": {
      start_lat: "37.88022244590679",
      start_lon: "-122.26959228515624",
      end_lat: "37.8690599",
      end_lon: "-122.270556",
      value: 291
    }
  },
  "255": {},
  "256": {
    "238": {
      start_lat: "37.875111692864444",
      start_lon: "-122.26055324077606",
      end_lat: "37.8717192",
      end_lon: "-122.2730677",
      value: 172
    },
    "239": {
      start_lat: "37.875111692864444",
      start_lon: "-122.26055324077606",
      end_lat: "37.8688126",
      end_lon: "-122.258764",
      value: 563
    },
    "244": {
      start_lat: "37.875111692864444",
      start_lon: "-122.26055324077606",
      end_lat: "37.8737917",
      end_lon: "-122.2686176",
      value: 290
    },
    "245": {
      start_lat: "37.875111692864444",
      start_lon: "-122.26055324077606",
      end_lat: "37.8703477",
      end_lon: "-122.2677637",
      value: 712
    }
  },
  "257": {},
  "258": {
    "239": {
      start_lat: "37.8723555",
      start_lon: "-122.2664467",
      end_lat: "37.8688126",
      end_lon: "-122.258764",
      value: 176
    },
    "266": {
      start_lat: "37.8723555",
      start_lon: "-122.2664467",
      end_lat: "37.8624644",
      end_lon: "-122.2647911",
      value: 202
    }
  },
  "259": {
    "250": {
      start_lat: "37.866249",
      start_lon: "-122.2993708",
      end_lat: "37.8740141",
      end_lon: "-122.283019",
      value: 331
    },
    "259": {
      start_lat: "37.866249",
      start_lon: "-122.2993708",
      end_lat: "37.866249",
      end_lon: "-122.2993708",
      value: 458
    }
  },
  "262": {},
  "263": {},
  "265": {
    "241": {
      start_lat: "37.8588682",
      start_lon: "-122.2912095",
      end_lat: "37.8524766",
      end_lon: "-122.2702132",
      value: 167
    }
  },
  "266": {
    "239": {
      start_lat: "37.8624644",
      start_lon: "-122.2647911",
      end_lat: "37.8688126",
      end_lon: "-122.258764",
      value: 261
    },
    "240": {
      start_lat: "37.8624644",
      start_lon: "-122.2647911",
      end_lat: "37.8660431",
      end_lon: "-122.2588044",
      value: 197
    },
    "241": {
      start_lat: "37.8624644",
      start_lon: "-122.2647911",
      end_lat: "37.8524766",
      end_lon: "-122.2702132",
      value: 487
    },
    "245": {
      start_lat: "37.8624644",
      start_lon: "-122.2647911",
      end_lat: "37.8703477",
      end_lon: "-122.2677637",
      value: 539
    },
    "246": {
      start_lat: "37.8624644",
      start_lon: "-122.2647911",
      end_lat: "37.8690599",
      end_lon: "-122.270556",
      value: 338
    },
    "247": {
      start_lat: "37.8624644",
      start_lon: "-122.2647911",
      end_lat: "37.8677892",
      end_lon: "-122.2658964",
      value: 275
    },
    "258": {
      start_lat: "37.8624644",
      start_lon: "-122.2647911",
      end_lat: "37.8723555",
      end_lon: "-122.2664467",
      value: 199
    },
    "274": {
      start_lat: "37.8624644",
      start_lon: "-122.2647911",
      end_lat: "37.8575672",
      end_lon: "-122.2675583",
      value: 188
    }
  },
  "267": {
    "166": {
      start_lat: "37.8618037",
      start_lon: "-122.2535687",
      end_lat: "37.8513755",
      end_lon: "-122.2525233",
      value: 195
    },
    "171": {
      start_lat: "37.8618037",
      start_lon: "-122.2535687",
      end_lat: "37.84427875399067",
      end_lon: "-122.251900434494",
      value: 780
    },
    "239": {
      start_lat: "37.8618037",
      start_lon: "-122.2535687",
      end_lat: "37.8688126",
      end_lon: "-122.258764",
      value: 179
    },
    "246": {
      start_lat: "37.8618037",
      start_lon: "-122.2535687",
      end_lat: "37.8690599",
      end_lon: "-122.270556",
      value: 172
    },
    "248": {
      start_lat: "37.8618037",
      start_lon: "-122.2535687",
      end_lat: "37.8559558",
      end_lon: "-122.2597949",
      value: 151
    }
  },
  "268": {
    "241": {
      start_lat: "37.85749021457153",
      start_lon: "-122.26157784461977",
      end_lat: "37.8524766",
      end_lon: "-122.2702132",
      value: 395
    }
  },
  "269": {},
  "270": {
    "241": {
      start_lat: "37.8534894",
      start_lon: "-122.2894154",
      end_lat: "37.8524766",
      end_lon: "-122.2702132",
      value: 174
    }
  },
  "271": {},
  "272": {
    "241": {
      start_lat: "37.850577684047856",
      start_lon: "-122.27817535400389",
      end_lat: "37.8524766",
      end_lon: "-122.2702132",
      value: 529
    }
  },
  "273": {
    "241": {
      start_lat: "37.855573661828785",
      start_lon: "-122.26356536149979",
      end_lat: "37.8524766",
      end_lon: "-122.2702132",
      value: 212
    }
  },
  "274": {
    "246": {
      start_lat: "37.8575672",
      start_lon: "-122.2675583",
      end_lat: "37.8690599",
      end_lon: "-122.270556",
      value: 176
    },
    "266": {
      start_lat: "37.8575672",
      start_lon: "-122.2675583",
      end_lat: "37.8624644",
      end_lon: "-122.2647911",
      value: 198
    }
  },
  "275": {},
  "276": {
    "35": {
      start_lat: "37.3322326",
      start_lon: "-121.9125165",
      end_lat: "37.32911866814779",
      end_lon: "-121.90457582473755",
      value: 296
    },
    "276": {
      start_lat: "37.3322326",
      start_lon: "-121.9125165",
      end_lat: "37.3322326",
      end_lon: "-121.9125165",
      value: 231
    },
    "278": {
      start_lat: "37.3322326",
      start_lon: "-121.9125165",
      end_lat: "37.3319323",
      end_lon: "-121.9048882",
      value: 344
    }
  },
  "277": {
    "313": {
      start_lat: "37.3336577",
      start_lon: "-121.9085859",
      end_lat: "37.331415",
      end_lon: "-121.8932",
      value: 151
    }
  },
  "278": {
    "276": {
      start_lat: "37.3319323",
      start_lon: "-121.9048882",
      end_lat: "37.3322326",
      end_lon: "-121.9125165",
      value: 395
    },
    "310": {
      start_lat: "37.3319323",
      start_lon: "-121.9048882",
      end_lat: "37.335885",
      end_lon: "-121.88566",
      value: 153
    }
  },
  "279": {
    "317": {
      start_lat: "37.3391456",
      start_lon: "-121.8841054",
      end_lat: "37.333955",
      end_lon: "-121.877349",
      value: 161
    }
  },
  "280": {
    "296": {
      start_lat: "37.337246",
      start_lon: "-121.8830739",
      end_lat: "37.3259984",
      end_lon: "-121.87712",
      value: 778
    },
    "305": {
      start_lat: "37.337246",
      start_lon: "-121.8830739",
      end_lat: "37.342725",
      end_lon: "-121.895617",
      value: 351
    },
    "310": {
      start_lat: "37.337246",
      start_lon: "-121.8830739",
      end_lat: "37.335885",
      end_lon: "-121.88566",
      value: 180
    }
  },
  "281": {
    "310": {
      start_lat: "37.3383952",
      start_lon: "-121.8807965",
      end_lat: "37.335885",
      end_lon: "-121.88566",
      value: 198
    }
  },
  "282": {
    "312": {
      start_lat: "37.332426301252056",
      start_lon: "-121.89034938812256",
      end_lat: "37.329732",
      end_lon: "-121.901782",
      value: 152
    }
  },
  "283": {},
  "284": {
    "6": {
      start_lat: "37.78487208436062",
      start_lon: "-122.40087568759917",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 155
    },
    "15": {
      start_lat: "37.78487208436062",
      start_lon: "-122.40087568759917",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 206
    },
    "30": {
      start_lat: "37.78487208436062",
      start_lon: "-122.40087568759917",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 616
    },
    "47": {
      start_lat: "37.78487208436062",
      start_lon: "-122.40087568759917",
      end_lat: "37.78095459960753",
      end_lon: "-122.39974915981291",
      value: 251
    },
    "58": {
      start_lat: "37.78487208436062",
      start_lon: "-122.40087568759917",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 164
    },
    "60": {
      start_lat: "37.78487208436062",
      start_lon: "-122.40087568759917",
      end_lat: "37.77452040113685",
      end_lon: "-122.4094493687153",
      value: 175
    },
    "61": {
      start_lat: "37.78487208436062",
      start_lon: "-122.40087568759917",
      end_lat: "37.7765126",
      end_lon: "-122.4113061",
      value: 345
    },
    "62": {
      start_lat: "37.78487208436062",
      start_lon: "-122.40087568759917",
      end_lat: "37.77779057034257",
      end_lon: "-122.40643188357353",
      value: 168
    },
    "64": {
      start_lat: "37.78487208436062",
      start_lon: "-122.40087568759917",
      end_lat: "37.7767539",
      end_lon: "-122.3990176",
      value: 174
    },
    "67": {
      start_lat: "37.78487208436062",
      start_lon: "-122.40087568759917",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 368
    }
  },
  "285": {
    "41": {
      start_lat: "37.78352083526095",
      start_lon: "-122.43115782737732",
      end_lat: "37.78127",
      end_lon: "-122.41874",
      value: 155
    },
    "55": {
      start_lat: "37.78352083526095",
      start_lon: "-122.43115782737732",
      end_lat: "37.7770527",
      end_lon: "-122.4295585",
      value: 221
    },
    "58": {
      start_lat: "37.78352083526095",
      start_lon: "-122.43115782737732",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 272
    }
  },
  "286": {
    "310": {
      start_lat: "37.3364659",
      start_lon: "-121.8766132",
      end_lat: "37.335885",
      end_lon: "-121.88566",
      value: 167
    }
  },
  "287": {},
  "288": {
    "305": {
      start_lat: "37.3509643",
      start_lon: "-121.9020161",
      end_lat: "37.342725",
      end_lon: "-121.895617",
      value: 211
    }
  },
  "289": {},
  "290": {},
  "291": {
    "291": {
      start_lat: "37.3413348",
      start_lon: "-121.9031829",
      end_lat: "37.3413348",
      end_lon: "-121.9031829",
      value: 298
    }
  },
  "292": {},
  "293": {},
  "294": {
    "312": {
      start_lat: "37.327581",
      start_lon: "-121.884559",
      end_lat: "37.329732",
      end_lon: "-121.901782",
      value: 266
    }
  },
  "295": {
    "312": {
      start_lat: "37.3327938",
      start_lon: "-121.8759263",
      end_lat: "37.329732",
      end_lon: "-121.901782",
      value: 220
    }
  },
  "296": {
    "280": {
      start_lat: "37.3259984",
      start_lon: "-121.87712",
      end_lat: "37.337246",
      end_lon: "-121.8830739",
      value: 1134
    },
    "310": {
      start_lat: "37.3259984",
      start_lon: "-121.87712",
      end_lat: "37.335885",
      end_lon: "-121.88566",
      value: 389
    },
    "311": {
      start_lat: "37.3259984",
      start_lon: "-121.87712",
      end_lat: "37.333798",
      end_lon: "-121.886943",
      value: 271
    },
    "317": {
      start_lat: "37.3259984",
      start_lon: "-121.87712",
      end_lat: "37.333955",
      end_lon: "-121.877349",
      value: 518
    },
    "327": {
      start_lat: "37.3259984",
      start_lon: "-121.87712",
      end_lat: "37.33203868095132",
      end_lon: "-121.8817663192749",
      value: 236
    }
  },
  "297": {},
  "298": {},
  "299": {},
  "300": {},
  "301": {},
  "302": {},
  "303": {},
  "304": {},
  "305": {
    "280": {
      start_lat: "37.342725",
      start_lon: "-121.895617",
      end_lat: "37.337246",
      end_lon: "-121.8830739",
      value: 466
    },
    "288": {
      start_lat: "37.342725",
      start_lon: "-121.895617",
      end_lat: "37.3509643",
      end_lon: "-121.9020161",
      value: 195
    },
    "310": {
      start_lat: "37.342725",
      start_lon: "-121.895617",
      end_lat: "37.335885",
      end_lon: "-121.88566",
      value: 476
    },
    "312": {
      start_lat: "37.342725",
      start_lon: "-121.895617",
      end_lat: "37.329732",
      end_lon: "-121.901782",
      value: 178
    },
    "317": {
      start_lat: "37.342725",
      start_lon: "-121.895617",
      end_lat: "37.333955",
      end_lon: "-121.877349",
      value: 240
    }
  },
  "306": {},
  "307": {},
  "308": {
    "312": {
      start_lat: "37.336802",
      start_lon: "-121.8940901",
      end_lat: "37.329732",
      end_lon: "-121.901782",
      value: 329
    }
  },
  "309": {
    "312": {
      start_lat: "37.337391",
      start_lon: "-121.886995",
      end_lat: "37.329732",
      end_lon: "-121.901782",
      value: 297
    }
  },
  "310": {
    "278": {
      start_lat: "37.335885",
      start_lon: "-121.88566",
      end_lat: "37.3319323",
      end_lon: "-121.9048882",
      value: 182
    },
    "280": {
      start_lat: "37.335885",
      start_lon: "-121.88566",
      end_lat: "37.337246",
      end_lon: "-121.8830739",
      value: 173
    },
    "281": {
      start_lat: "37.335885",
      start_lon: "-121.88566",
      end_lat: "37.3383952",
      end_lon: "-121.8807965",
      value: 217
    },
    "286": {
      start_lat: "37.335885",
      start_lon: "-121.88566",
      end_lat: "37.3364659",
      end_lon: "-121.8766132",
      value: 174
    },
    "296": {
      start_lat: "37.335885",
      start_lon: "-121.88566",
      end_lat: "37.3259984",
      end_lon: "-121.87712",
      value: 357
    },
    "305": {
      start_lat: "37.335885",
      start_lon: "-121.88566",
      end_lat: "37.342725",
      end_lon: "-121.895617",
      value: 515
    },
    "310": {
      start_lat: "37.335885",
      start_lon: "-121.88566",
      end_lat: "37.335885",
      end_lon: "-121.88566",
      value: 265
    },
    "311": {
      start_lat: "37.335885",
      start_lon: "-121.88566",
      end_lat: "37.333798",
      end_lon: "-121.886943",
      value: 152
    },
    "312": {
      start_lat: "37.335885",
      start_lon: "-121.88566",
      end_lat: "37.329732",
      end_lon: "-121.901782",
      value: 205
    },
    "317": {
      start_lat: "37.335885",
      start_lon: "-121.88566",
      end_lat: "37.333955",
      end_lon: "-121.877349",
      value: 342
    }
  },
  "311": {
    "296": {
      start_lat: "37.333798",
      start_lon: "-121.886943",
      end_lat: "37.3259984",
      end_lon: "-121.87712",
      value: 263
    },
    "312": {
      start_lat: "37.333798",
      start_lon: "-121.886943",
      end_lat: "37.329732",
      end_lon: "-121.901782",
      value: 226
    },
    "317": {
      start_lat: "37.333798",
      start_lon: "-121.886943",
      end_lat: "37.333955",
      end_lon: "-121.877349",
      value: 227
    }
  },
  "312": {
    "282": {
      start_lat: "37.329732",
      start_lon: "-121.901782",
      end_lat: "37.332426301252056",
      end_lon: "-121.89034938812256",
      value: 155
    },
    "286": {
      start_lat: "37.329732",
      start_lon: "-121.901782",
      end_lat: "37.3364659",
      end_lon: "-121.8766132",
      value: 182
    },
    "294": {
      start_lat: "37.329732",
      start_lon: "-121.901782",
      end_lat: "37.327581",
      end_lon: "-121.884559",
      value: 263
    },
    "295": {
      start_lat: "37.329732",
      start_lon: "-121.901782",
      end_lat: "37.3327938",
      end_lon: "-121.8759263",
      value: 192
    },
    "305": {
      start_lat: "37.329732",
      start_lon: "-121.901782",
      end_lat: "37.342725",
      end_lon: "-121.895617",
      value: 170
    },
    "308": {
      start_lat: "37.329732",
      start_lon: "-121.901782",
      end_lat: "37.336802",
      end_lon: "-121.8940901",
      value: 265
    },
    "310": {
      start_lat: "37.329732",
      start_lon: "-121.901782",
      end_lat: "37.335885",
      end_lon: "-121.88566",
      value: 405
    },
    "311": {
      start_lat: "37.329732",
      start_lon: "-121.901782",
      end_lat: "37.333798",
      end_lon: "-121.886943",
      value: 231
    },
    "313": {
      start_lat: "37.329732",
      start_lon: "-121.901782",
      end_lat: "37.331415",
      end_lon: "-121.8932",
      value: 285
    },
    "314": {
      start_lat: "37.329732",
      start_lon: "-121.901782",
      end_lat: "37.333988",
      end_lon: "-121.894902",
      value: 320
    }
  },
  "313": {
    "312": {
      start_lat: "37.331415",
      start_lon: "-121.8932",
      end_lat: "37.329732",
      end_lon: "-121.901782",
      value: 270
    }
  },
  "314": {
    "312": {
      start_lat: "37.333988",
      start_lon: "-121.894902",
      end_lat: "37.329732",
      end_lon: "-121.901782",
      value: 293
    }
  },
  "315": {
    "176": {
      start_lat: "37.834174",
      start_lon: "-122.272968",
      end_lat: "37.82840997305853",
      end_lon: "-122.26631462574005",
      value: 280
    }
  },
  "316": {},
  "317": {
    "279": {
      start_lat: "37.333955",
      start_lon: "-121.877349",
      end_lat: "37.3391456",
      end_lon: "-121.8841054",
      value: 163
    },
    "296": {
      start_lat: "37.333955",
      start_lon: "-121.877349",
      end_lat: "37.3259984",
      end_lon: "-121.87712",
      value: 382
    },
    "305": {
      start_lat: "37.333955",
      start_lon: "-121.877349",
      end_lat: "37.342725",
      end_lon: "-121.895617",
      value: 204
    },
    "310": {
      start_lat: "37.333955",
      start_lon: "-121.877349",
      end_lat: "37.335885",
      end_lon: "-121.88566",
      value: 287
    },
    "311": {
      start_lat: "37.333955",
      start_lon: "-121.877349",
      end_lat: "37.333798",
      end_lon: "-121.886943",
      value: 287
    }
  },
  "318": {},
  "321": {
    "3": {
      start_lat: "37.78014570345598",
      start_lon: "-122.40307085237873",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 259
    },
    "5": {
      start_lat: "37.78014570345598",
      start_lon: "-122.40307085237873",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 246
    },
    "16": {
      start_lat: "37.78014570345598",
      start_lon: "-122.40307085237873",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 228
    },
    "19": {
      start_lat: "37.78014570345598",
      start_lon: "-122.40307085237873",
      end_lat: "37.788975",
      end_lon: "-122.403452",
      value: 342
    },
    "21": {
      start_lat: "37.78014570345598",
      start_lon: "-122.40307085237873",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 287
    },
    "22": {
      start_lat: "37.78014570345598",
      start_lon: "-122.40307085237873",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 184
    },
    "30": {
      start_lat: "37.78014570345598",
      start_lon: "-122.40307085237873",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 203
    },
    "36": {
      start_lat: "37.78014570345598",
      start_lon: "-122.40307085237873",
      end_lat: "37.78383",
      end_lon: "-122.39887",
      value: 185
    },
    "47": {
      start_lat: "37.78014570345598",
      start_lon: "-122.40307085237873",
      end_lat: "37.78095459960753",
      end_lon: "-122.39974915981291",
      value: 232
    },
    "64": {
      start_lat: "37.78014570345598",
      start_lon: "-122.40307085237873",
      end_lat: "37.7767539",
      end_lon: "-122.3990176",
      value: 327
    },
    "67": {
      start_lat: "37.78014570345598",
      start_lon: "-122.40307085237873",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 544
    }
  },
  "323": {
    "3": {
      start_lat: "37.79801364395978",
      start_lon: "-122.40595042705534",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 229
    },
    "6": {
      start_lat: "37.79801364395978",
      start_lon: "-122.40595042705534",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 318
    },
    "9": {
      start_lat: "37.79801364395978",
      start_lon: "-122.40595042705534",
      end_lat: "37.79857210846256",
      end_lon: "-122.40086898207666",
      value: 176
    },
    "13": {
      start_lat: "37.79801364395978",
      start_lon: "-122.40595042705534",
      end_lat: "37.794231",
      end_lon: "-122.402923",
      value: 205
    },
    "14": {
      start_lat: "37.79801364395978",
      start_lon: "-122.40595042705534",
      end_lat: "37.795001",
      end_lon: "-122.39997",
      value: 263
    },
    "15": {
      start_lat: "37.79801364395978",
      start_lon: "-122.40595042705534",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 294
    },
    "16": {
      start_lat: "37.79801364395978",
      start_lon: "-122.40595042705534",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 170
    },
    "17": {
      start_lat: "37.79801364395978",
      start_lon: "-122.40595042705534",
      end_lat: "37.792251",
      end_lon: "-122.397086",
      value: 224
    },
    "19": {
      start_lat: "37.79801364395978",
      start_lon: "-122.40595042705534",
      end_lat: "37.788975",
      end_lon: "-122.403452",
      value: 168
    },
    "20": {
      start_lat: "37.79801364395978",
      start_lon: "-122.40595042705534",
      end_lat: "37.7913",
      end_lon: "-122.399051",
      value: 152
    },
    "21": {
      start_lat: "37.79801364395978",
      start_lon: "-122.40595042705534",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 595
    },
    "23": {
      start_lat: "37.79801364395978",
      start_lon: "-122.40595042705534",
      end_lat: "37.791464",
      end_lon: "-122.391034",
      value: 221
    },
    "30": {
      start_lat: "37.79801364395978",
      start_lon: "-122.40595042705534",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 286
    },
    "284": {
      start_lat: "37.79801364395978",
      start_lon: "-122.40595042705534",
      end_lat: "37.78487208436062",
      end_lon: "-122.40087568759917",
      value: 161
    },
    "323": {
      start_lat: "37.79801364395978",
      start_lon: "-122.40595042705534",
      end_lat: "37.79801364395978",
      end_lon: "-122.40595042705534",
      value: 271
    },
    "324": {
      start_lat: "37.79801364395978",
      start_lon: "-122.40595042705534",
      end_lat: "37.788299978150825",
      end_lon: "-122.40853071212767",
      value: 202
    }
  },
  "324": {
    "3": {
      start_lat: "37.788299978150825",
      start_lon: "-122.40853071212767",
      end_lat: "37.78637526861584",
      end_lon: "-122.40490436553954",
      value: 156
    },
    "5": {
      start_lat: "37.788299978150825",
      start_lon: "-122.40853071212767",
      end_lat: "37.783899357084934",
      end_lon: "-122.40844488143921",
      value: 176
    },
    "6": {
      start_lat: "37.788299978150825",
      start_lon: "-122.40853071212767",
      end_lat: "37.80477",
      end_lon: "-122.403234",
      value: 429
    },
    "14": {
      start_lat: "37.788299978150825",
      start_lon: "-122.40853071212767",
      end_lat: "37.795001",
      end_lon: "-122.39997",
      value: 192
    },
    "15": {
      start_lat: "37.788299978150825",
      start_lon: "-122.40853071212767",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 179
    },
    "16": {
      start_lat: "37.788299978150825",
      start_lon: "-122.40853071212767",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 207
    },
    "19": {
      start_lat: "37.788299978150825",
      start_lon: "-122.40853071212767",
      end_lat: "37.788975",
      end_lon: "-122.403452",
      value: 326
    },
    "21": {
      start_lat: "37.788299978150825",
      start_lon: "-122.40853071212767",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 151
    },
    "22": {
      start_lat: "37.788299978150825",
      start_lon: "-122.40853071212767",
      end_lat: "37.789756",
      end_lon: "-122.394643",
      value: 162
    },
    "30": {
      start_lat: "37.788299978150825",
      start_lon: "-122.40853071212767",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 189
    },
    "47": {
      start_lat: "37.788299978150825",
      start_lon: "-122.40853071212767",
      end_lat: "37.78095459960753",
      end_lon: "-122.39974915981291",
      value: 193
    },
    "58": {
      start_lat: "37.788299978150825",
      start_lon: "-122.40853071212767",
      end_lat: "37.776619",
      end_lon: "-122.417385",
      value: 292
    },
    "67": {
      start_lat: "37.788299978150825",
      start_lon: "-122.40853071212767",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 173
    },
    "81": {
      start_lat: "37.788299978150825",
      start_lon: "-122.40853071212767",
      end_lat: "37.77588",
      end_lon: "-122.39317",
      value: 265
    },
    "324": {
      start_lat: "37.788299978150825",
      start_lon: "-122.40853071212767",
      end_lat: "37.788299978150825",
      end_lon: "-122.40853071212767",
      value: 272
    }
  },
  "327": {
    "296": {
      start_lat: "37.33203868095132",
      start_lon: "-121.8817663192749",
      end_lat: "37.3259984",
      end_lon: "-121.87712",
      value: 166
    }
  },
  "336": {},
  "337": {
    "182": {
      start_lat: "37.80696976095594",
      start_lon: "-122.26658821105957",
      end_lat: "37.8090126",
      end_lon: "-122.2682473",
      value: 224
    },
    "196": {
      start_lat: "37.80696976095594",
      start_lon: "-122.26658821105957",
      end_lat: "37.80889393398715",
      end_lon: "-122.25646018981932",
      value: 193
    },
    "203": {
      start_lat: "37.80696976095594",
      start_lon: "-122.26658821105957",
      end_lat: "37.795194764385954",
      end_lon: "-122.27396965026855",
      value: 158
    }
  },
  "338": {
    "195": {
      start_lat: "37.80318908113163",
      start_lon: "-122.27057933807373",
      end_lat: "37.81231409135146",
      end_lon: "-122.26077854633331",
      value: 197
    },
    "200": {
      start_lat: "37.80318908113163",
      start_lon: "-122.27057933807373",
      end_lat: "37.800213566969795",
      end_lon: "-122.25381016731262",
      value: 216
    }
  },
  "339": {},
  "340": {},
  "341": {
    "276": {
      start_lat: "37.33618830029063",
      start_lon: "-121.88927650451659",
      end_lat: "37.3322326",
      end_lon: "-121.9125165",
      value: 169
    },
    "305": {
      start_lat: "37.33618830029063",
      start_lon: "-121.88927650451659",
      end_lat: "37.342725",
      end_lon: "-121.895617",
      value: 156
    }
  },
  "342": {
    "15": {
      start_lat: "37.781382819628725",
      start_lon: "-122.3898410797119",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 564
    },
    "16": {
      start_lat: "37.781382819628725",
      start_lon: "-122.3898410797119",
      end_lat: "37.79413",
      end_lon: "-122.39443",
      value: 177
    },
    "21": {
      start_lat: "37.781382819628725",
      start_lon: "-122.3898410797119",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 223
    },
    "30": {
      start_lat: "37.781382819628725",
      start_lon: "-122.3898410797119",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 175
    }
  },
  "343": {
    "15": {
      start_lat: "37.783171989315306",
      start_lon: "-122.39357203245163",
      end_lat: "37.795392",
      end_lon: "-122.394203",
      value: 415
    },
    "21": {
      start_lat: "37.783171989315306",
      start_lon: "-122.39357203245163",
      end_lat: "37.7896254",
      end_lon: "-122.400811",
      value: 1384
    },
    "27": {
      start_lat: "37.783171989315306",
      start_lon: "-122.39357203245163",
      end_lat: "37.7880593",
      end_lon: "-122.3918648",
      value: 236
    },
    "30": {
      start_lat: "37.783171989315306",
      start_lon: "-122.39357203245163",
      end_lat: "37.776598",
      end_lon: "-122.395282",
      value: 191
    }
  },
  "344": {},
  "345": {
    "80": {
      start_lat: "37.76647421515012",
      start_lon: "-122.39829540252686",
      end_lat: "37.7753058",
      end_lon: "-122.39738",
      value: 152
    }
  },
  "347": {},
  "349": {
    "61": {
      start_lat: "37.78100971717512",
      start_lon: "-122.40566611289978",
      end_lat: "37.7765126",
      end_lon: "-122.4113061",
      value: 255
    },
    "67": {
      start_lat: "37.78100971717512",
      start_lon: "-122.40566611289978",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 206
    }
  },
  "350": {
    "67": {
      start_lat: "37.771431362921085",
      start_lon: "-122.40578681230545",
      end_lat: "37.7766392",
      end_lon: "-122.3955263",
      value: 307
    }
  },
  "351": {},
  "355": {},
  "356": {},
  "357": {},
  "363": {},
  "364": {},
  "365": {},
  "367": {}
};
