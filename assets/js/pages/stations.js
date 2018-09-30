var map;
function initGoogleMaps() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(37.629143, -122.096108),
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
            lightness: 19
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

  map.data.addGeoJson(stations);

  map.data.setStyle(function(feature) {
    var interactions = feature.getProperty("interactions");
    return {
      icon: getCircle(interactions)
    };
  });
}

function getCircle(interactions) {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: "blue",
    fillOpacity: 0.2,
    scale: interactions / 1000,
    strokeColor: "white",
    strokeWeight: 0.5
  };
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
