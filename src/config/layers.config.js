import Graphic from 'esri/Graphic';
const polyline = {
  type: "polyline", // autocasts as new Polyline()
  paths: [[-111.3, 52.68], [-98, 49.5], [-93.94, 29.89]]
};
const lineSymbol = {
  type: "simple-line", // autocasts as new SimpleLineSymbol()
  color: [226, 119, 40], // RGB color values as an array
  width: 4
};
const lineAtt = {
  Name: "Keystone Pipeline", // The name of the pipeline
  Owner: "TransCanada", // The owner of the pipeline
  Length: "3,456 km" // The length of the pipeline
};


const point = {
  type: "point", // autocasts as new Point()
  longitude: -49.97,
  latitude: 41.73
};
// Create a symbol for drawing the point
const markerSymbol = {
  type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
  color: [226, 119, 40],
  outline: {
    // autocasts as new SimpleLineSymbol()
    color: [255, 255, 255],
    width: 2
  }
};

const pointGraphic = new Graphic({
  geometry: point,
  symbol: markerSymbol
});
const lineGraphic = new Graphic({
  geometry: polyline,
  symbol: lineSymbol,
  attributes: lineAtt
});


export const layers = [
  {
    type: 'FeatureLayer',
    options: {
      url:
        'https://gis.arlingtonva.us/arlgis/rest/services/public/Bike_Routes/MapServer/4',
      id: 'bike_routes',
      label: 'Bike Routes',
      visible: false
    }
  },
  {
    type: 'GraphicsLayer',
    options: {
      id: 'metro_trains',
      label: 'Metro Trains',
      visible: true,
      graphics: [pointGraphic, lineGraphic]
    }
  },
];
