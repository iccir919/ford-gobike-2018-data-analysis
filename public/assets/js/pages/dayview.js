const key = "AIzaSyDimBoe0dnpYpM_YN6uCkXPDANyOKLBU78";
const allCoordinates = [
  [37.7730627, -122.4390777],
  [37.775946, -122.4377775],
  [37.78014570345598, -122.40307085237873],
  [37.76704457969368, -122.39083349704742],
  [37.7650259, -122.3987734],
  [37.794231, -122.402923],
  [37.79539293725452, -122.4047702550888],
  [37.78499972833808, -122.39593561749642],
  [37.788975, -122.403452],
  [37.78487208436062, -122.40087568759917],
  [37.788975, -122.403452],
  [37.792251, -122.397086],
  [37.795392, -122.394203],
  [37.780526, -122.390288],
  [37.789756, -122.394643],
  [37.776598, -122.395282],
  [37.776598, -122.395282],
  [37.776598, -122.395282],
  [37.760299, -122.418892],
  [37.7524278, -122.4206278],
  [37.7913, -122.399051],
  [37.776598, -122.395282],
  [37.79857210846256, -122.40086898207666],
  [37.78716801474664, -122.38809792330358],
  [37.80477, -122.403234],
  [37.776598, -122.395282],
  [37.791464, -122.391034],
  [37.787521780456245, -122.39740490913391],
  [37.7770527, -122.4295585]
];

const sketch = p => {
  let canvas;
  let myMap;

  // Options for map
  const options = {
    lat: 37.7749,
    lng: -122.4194,
    zoom: 13
  };

  // Create an instance of Google
  const mappa = new Mappa("Google", key);

  p.setup = () => {
    canvas = p.createCanvas(1000, 700);
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);

    myMap.onChange(drawPoints);
  };

  function drawPoints() {
    p.clear();
    p.noStroke();
    p.fill(0);
    for (let i = 0; i < allCoordinates.length; i++) {
      let pos = myMap.latLngToPixel(allCoordinates[i][0], allCoordinates[i][1]);
      p.ellipse(pos.x, pos.y, 10, 10);
    }
  }
};

let dayviewMap = new p5(sketch, "dayviewMap");
