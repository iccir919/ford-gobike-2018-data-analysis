var map, Popup;
var markers = [];
var stationStatuses = [];
var listView = "bikes-available";

var initGoogleMaps = function() {
  var myLatlng = new google.maps.LatLng(37.7749, -122.4194);
  var mapOptions = {
    zoom: 13,
    center: myLatlng,
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
};

$(document).ready(function() {
  initGoogleMaps();
  definePopupClass();

  $.getJSON(
    "https://gbfs.fordgobike.com/gbfs/en/station_information.json",
    function(stationData) {
      stationData = stationData.data.stations;
      $.each(stationData, function(key, station) {
        var latLng = new google.maps.LatLng(station.lat, station.lon);
        // Creating a marker and putting it on the map
        var marker = new google.maps.Marker({
          position: latLng,
          title: station.name,
          id: station.station_id,
          label: ""
        });
        markers.push(marker);
      });
      getStationStatuses();
    }
  );

  $("#listView button").on("click", function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
  setInterval(getStationStatuses, 700);
});

function getStationStatuses() {
  $.getJSON("https://gbfs.fordgobike.com/gbfs/en/station_status.json", function(
    response
  ) {
    updateMarkers(response);
  });
}

function updateMarkers(data) {
  if (markers.length === 0) return;
  stationStatuses = data.data.stations;
  markers.forEach(function(marker) {
    var target = stationStatuses.find(function(station) {
      return marker.id === station.station_id;
    });

    if (listView === "bikes-available") {
      if (marker.num_bikes_available) {
        var difference =
          target.num_bikes_available - marker.num_bikes_available;
        if (difference !== 0) {
          marker.setMap(null);
          marker.label = target.num_bikes_available;
          marker.setMap(map);

          addLivePopups(difference, marker);
        }
      } else {
        if (target.num_bikes_available > 0) {
          marker.label = target.num_bikes_available;
          marker.setMap(map);
        }
      }
    } else if (listView === "ebikes-available") {
      if (marker.num_ebikes_available !== target.num_ebikes_available) {
        if (target.num_ebikes_available > 0) {
          marker.setMap(null);
          marker.label = target.num_ebikes_available;
          marker.setMap(map);
        }
      }
    } else if (listView === "bikes-disabled") {
      if (marker.num_bikes_disabled !== target.num_bikes_disabled) {
        if (target.num_bikes_disabled > 0) {
          marker.setMap(null);
          marker.label = target.num_bikes_disabled;
          marker.setMap(map);
        }
      } else if (listView === "docks-available") {
        if (marker.num_docks_available !== target.num_docks_available) {
          if (target.num_docks_available > 0) {
            marker.setMap(null);
            marker.label = target.num_docks_available;
            marker.setMap(map);
          }
        }
      }
    }

    marker.num_bikes_available = target.num_bikes_available;
    marker.num_ebikes_available = target.num_ebikes_available;
    marker.num_bikes_disabled = target.num_bikes_disabled;
    marker.num_docks_available = target.num_docks_available;
  });
}

function updateView() {
  if (listView === "ebikes-available") {
    markers.forEach(function(marker) {
      marker.setMap(null);
      if (marker.num_ebikes_available > 0) {
        marker.label = marker.num_ebikes_available;
        marker.setMap(map);
      }
    });
  } else if (listView === "bikes-available") {
    markers.forEach(function(marker) {
      marker.setMap(null);
      if (marker.num_bikes_available > 0) {
        marker.label = marker.num_bikes_available;
        marker.setMap(map);
      }
    });
  } else if (listView === "bikes-disabled") {
    markers.forEach(function(marker) {
      marker.setMap(null);
      if (marker.num_bikes_disabled > 0) {
        marker.label = marker.num_bikes_disabled;
        marker.setMap(map);
      }
    });
  } else if (listView === "docks-available") {
    markers.forEach(function(marker) {
      marker.setMap(null);
      if (marker.num_docks_available > 0) {
        marker.label = marker.num_docks_available;
        marker.setMap(map);
      }
    });
  }
}

$("#viewList button").on("click", function(e) {
  e.preventDefault();
  $(this).tab("show");

  listView = $(this).attr("aria-controls");
  updateView();
});

function addLivePopups(difference, marker) {
  var popupId = "popup" + marker.id;
  var content;

  if (difference > 1) {
    content = difference + " bikes have arrived at ";
  } else if (difference === 1) {
    content = "A bike has arrived at ";
  } else if (difference < -1) {
    content = difference * -1 + " bikes have departed from ";
  } else if (difference === -1) {
    content = "A bike has departed from ";
  }
  content += marker.title;
  $(".map-container").append("<div id=" + popupId + ">" + content + "</div>");

  var popup = new Popup(marker.position, document.getElementById(popupId));
  popup.setMap(map);

  marker.setAnimation(google.maps.Animation.BOUNCE);

  setTimeout(function() {
    marker.setAnimation(null);
    popup.setMap(null);
  }, 2500);
}

/** Defines the Popup class. */
function definePopupClass() {
  /**
   * A customized popup on the map.
   * @param {!google.maps.LatLng} position
   * @param {!Element} content
   * @constructor
   * @extends {google.maps.OverlayView}
   */
  Popup = function(position, content) {
    this.position = position;

    content.classList.add("popup-bubble-content");

    var pixelOffset = document.createElement("div");
    pixelOffset.classList.add("popup-bubble-anchor");
    pixelOffset.appendChild(content);

    this.anchor = document.createElement("div");
    this.anchor.classList.add("popup-tip-anchor");
    this.anchor.appendChild(pixelOffset);

    // Optionally stop clicks, etc., from bubbling up to the map.
    this.stopEventPropagation();
  };
  // NOTE: google.maps.OverlayView is only defined once the Maps API has
  // loaded. That is why Popup is defined inside initMap().
  Popup.prototype = Object.create(google.maps.OverlayView.prototype);

  /** Called when the popup is added to the map. */
  Popup.prototype.onAdd = function() {
    this.getPanes().floatPane.appendChild(this.anchor);
  };

  /** Called when the popup is removed from the map. */
  Popup.prototype.onRemove = function() {
    if (this.anchor.parentElement) {
      this.anchor.parentElement.removeChild(this.anchor);
    }
  };

  /** Called when the popup needs to draw itself. */
  Popup.prototype.draw = function() {
    var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
    // Hide the popup when it is far out of view.
    var display =
      Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
        ? "block"
        : "none";

    if (display === "block") {
      this.anchor.style.left = divPosition.x + "px";
      this.anchor.style.top = divPosition.y + "px";
    }
    if (this.anchor.style.display !== display) {
      this.anchor.style.display = display;
    }
  };

  /** Stops clicks/drags from bubbling up to the map. */
  Popup.prototype.stopEventPropagation = function() {
    var anchor = this.anchor;
    anchor.style.cursor = "auto";

    [
      "click",
      "dblclick",
      "contextmenu",
      "wheel",
      "mousedown",
      "touchstart",
      "pointerdown"
    ].forEach(function(event) {
      anchor.addEventListener(event, function(e) {
        e.stopPropagation();
      });
    });
  };
}
